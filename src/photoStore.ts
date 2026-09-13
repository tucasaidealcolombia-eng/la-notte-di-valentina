import { useEffect, useState, useCallback } from 'react';
import { VALENTINA_PHOTOS, PhotoItem } from '../data/photos';

const STORAGE_KEY = 'valentina_custom_photos_v2';
const UPDATE_EVENT = 'valentina_photos_changed';

export function usePhotoSource(photoId: number) {
  const photoInfo = VALENTINA_PHOTOS.find((p) => p.id === photoId);
  const defaultPaths = photoInfo?.defaultPaths || [];

  const getInitialSrc = useCallback(() => {
    try {
      const stored = localStorage.getItem(`${STORAGE_KEY}_${photoId}`);
      if (stored) return stored;
    } catch {
      // ignore storage errors
    }
    return defaultPaths[0] || null;
  }, [photoId, defaultPaths]);

  const [photoSrc, setPhotoSrc] = useState<string | null>(getInitialSrc);
  const [hasError, setHasError] = useState(false);
  const [triedIndex, setTriedIndex] = useState(0);

  useEffect(() => {
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ photoId?: number; src?: string }>;
      if (!customEvent.detail || customEvent.detail.photoId === photoId) {
        try {
          const stored = localStorage.getItem(`${STORAGE_KEY}_${photoId}`);
          if (stored) {
            setPhotoSrc(stored);
            setHasError(false);
          }
        } catch {
          // ignore
        }
      }
    };

    window.addEventListener(UPDATE_EVENT, handleUpdate);
    return () => window.removeEventListener(UPDATE_EVENT, handleUpdate);
  }, [photoId]);

  const handleImageError = () => {
    if (triedIndex + 1 < defaultPaths.length) {
      const nextIdx = triedIndex + 1;
      setTriedIndex(nextIdx);
      setPhotoSrc(defaultPaths[nextIdx]);
    } else {
      setHasError(true);
    }
  };

  const handleSetCustomImage = (dataUrl: string) => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_${photoId}`, dataUrl);
    } catch {
      // ignore
    }
    setPhotoSrc(dataUrl);
    setHasError(false);
    window.dispatchEvent(new CustomEvent(UPDATE_EVENT, { detail: { photoId, src: dataUrl } }));
  };

  return {
    src: photoSrc,
    hasError,
    handleImageError,
    setCustomImage: handleSetCustomImage,
    photoInfo,
  };
}

export function saveGlobalPhoto(photoId: number, file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        try {
          localStorage.setItem(`${STORAGE_KEY}_${photoId}`, result);
        } catch (err) {
          console.warn('Storage quota exceeded or error:', err);
        }
        window.dispatchEvent(new CustomEvent(UPDATE_EVENT, { detail: { photoId, src: result } }));
        resolve(result);
      } else {
        reject(new Error('Failed to read file'));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Bulk upload multiple photos (e.g. from dragging multiple files or folder)
 * Maps files by name or by index (1 to 6)
 */
export async function bulkUploadPhotos(files: FileList | File[]): Promise<number> {
  const fileArray = Array.from(files);
  let updatedCount = 0;

  for (let i = 0; i < fileArray.length; i++) {
    const file = fileArray[i];
    const lowerName = file.name.toLowerCase();

    let targetId: number | null = null;

    if (lowerName.includes('arch') || lowerName.includes('arco') || lowerName.includes('hero') || lowerName.includes('1')) {
      targetId = 1;
    } else if (lowerName.includes('corridor') || lowerName.includes('corredor') || lowerName.includes('ladrillo') || lowerName.includes('2')) {
      targetId = 2;
    } else if (lowerName.includes('door') || lowerName.includes('puerta') || lowerName.includes('portal') || lowerName.includes('3')) {
      targetId = 3;
    } else if (lowerName.includes('horse') || lowerName.includes('caballo') || lowerName.includes('corcel') || lowerName.includes('4')) {
      targetId = 4;
    } else if (lowerName.includes('flower') || lowerName.includes('flor') || lowerName.includes('rosas') || lowerName.includes('portrait') || lowerName.includes('5')) {
      targetId = 5;
    } else if (lowerName.includes('seated') || lowerName.includes('sentada') || lowerName.includes('6')) {
      targetId = 6;
    } else if (i < 6) {
      targetId = i + 1;
    }

    if (targetId && targetId >= 1 && targetId <= 6) {
      try {
        await saveGlobalPhoto(targetId, file);
        updatedCount++;
      } catch (e) {
        console.error('Failed to import file', file.name, e);
      }
    }
  }

  return updatedCount;
}
