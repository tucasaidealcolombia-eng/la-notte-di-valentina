import React, { useRef } from 'react';
import { usePhotoSource, saveGlobalPhoto } from '../utils/photoStore';
import { PhotoItem } from '../data/photos';
import { Upload, Sparkles } from 'lucide-react';

interface VenetianImageProps {
  photoId: number;
  className?: string;
  priority?: boolean;
  showCaption?: boolean;
  customOverlay?: React.ReactNode;
  objectPosition?: string;
}

export const VenetianMaskIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg
    viewBox="0 0 100 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Stylized Venetian Masquerade Mask */}
    <path
      d="M10 24C12 14 26 8 50 16C74 8 88 14 90 24C92 34 85 45 74 46C63 47 56 34 50 34C44 34 37 47 26 46C15 45 8 34 10 24Z"
      fill="url(#maskVelvet)"
      stroke="url(#maskGold)"
      strokeWidth="1.5"
    />
    {/* Left Eye Cutout */}
    <path
      d="M24 24C28 20 38 22 40 27C38 32 28 32 24 28C22 26 22 25 24 24Z"
      fill="#0B0909"
      stroke="url(#maskGold)"
      strokeWidth="1.2"
    />
    {/* Right Eye Cutout */}
    <path
      d="M76 24C72 20 62 22 60 27C62 32 72 32 76 28C78 26 78 25 76 24Z"
      fill="#0B0909"
      stroke="url(#maskGold)"
      strokeWidth="1.2"
    />
    {/* Venetian Crown / Top Flourish */}
    <path
      d="M50 8C48 3 52 3 50 1M42 12C38 6 42 5 40 3M58 12C62 6 58 5 60 3"
      stroke="url(#maskGold)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    {/* Feather / Lace Filigree */}
    <path
      d="M16 18C14 10 20 6 25 8M84 18C86 10 80 6 75 8"
      stroke="url(#maskGold)"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.8"
    />
    <defs>
      <linearGradient id="maskGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DFC794" />
        <stop offset="50%" stopColor="#C6A15B" />
        <stop offset="100%" stopColor="#8E7036" />
      </linearGradient>
      <linearGradient id="maskVelvet" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#4A1018" />
        <stop offset="100%" stopColor="#1B0609" />
      </linearGradient>
    </defs>
  </svg>
);

export const VenetianImage: React.FC<VenetianImageProps> = ({
  photoId,
  className = "",
  showCaption = true,
  customOverlay,
  objectPosition,
}) => {
  const { src, handleImageError, setCustomImage, photoInfo } = usePhotoSource(photoId);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = React.useState(false);

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const dataUrl = await saveGlobalPhoto(photoId, file);
      setCustomImage(dataUrl);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const dataUrl = await saveGlobalPhoto(photoId, file);
      setCustomImage(dataUrl);
    }
  };

  const activePosition = objectPosition || photoInfo?.objectPosition || 'object-center';

  return (
    <div
      id={`photo-frame-${photoId}`}
      onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={handleDrop}
      className={`group relative overflow-hidden bg-[#0B0909] border border-[#C6A15B]/35 shadow-2xl transition-all duration-700 ${photoInfo?.aspectRatio || 'aspect-[2/3]'} ${isDragOver ? 'ring-2 ring-[#DFC794] scale-[1.01]' : ''} ${className}`}
    >
      {/* Delicate Antique Gold Corner Filigree Brackets */}
      <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t border-l border-[#DFC794]/80 z-30 pointer-events-none" />
      <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t border-r border-[#DFC794]/80 z-30 pointer-events-none" />
      <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b border-l border-[#DFC794]/80 z-30 pointer-events-none" />
      <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b border-r border-[#DFC794]/80 z-30 pointer-events-none" />

      {/* Hidden file input to allow instant photo placement on double-click/drop */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Real Photograph of Valentina with tailored focal point */}
      {src && (
        <img
          src={src}
          alt={photoInfo?.title || `Valentina XV Años - Foto ${photoId}`}
          onError={handleImageError}
          className={`relative z-10 w-full h-full object-cover ${activePosition} transition-transform duration-1000 ease-out group-hover:scale-105`}
        />
      )}

      {/* Subtle Edge Vignette — Preserves natural photo colors, skin tones, and rich red gown */}
      <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,transparent_70%,rgba(11,9,9,0.35)_100%)] pointer-events-none" />

      {/* Custom Overlay Content if provided */}
      {customOverlay && (
        <div className="absolute inset-0 z-25">{customOverlay}</div>
      )}

      {/* Editorial Gallery Caption: Compact, integrated smoothly at bottom without covering Valentina */}
      {showCaption && photoInfo && (
        <div className="absolute bottom-0 inset-x-0 px-4 sm:px-5 py-3 sm:py-3.5 z-30 text-left bg-gradient-to-t from-[#0B0909]/92 via-[#0B0909]/55 to-transparent">
          {photoInfo.quote && (
            <p className="font-script text-base sm:text-lg md:text-xl text-[#F0CB74] [text-shadow:0_2px_3px_rgba(0,0,0,0.98),0_4px_8px_rgba(0,0,0,0.95),0_8px_16px_rgba(0,0,0,0.85),0_0_24px_rgba(0,0,0,0.80)] leading-snug">
              "{photoInfo.quote}"
            </p>
          )}

          <p className="text-[10.5px] sm:text-xs text-[#E8DFC9] font-body font-light leading-relaxed mt-0.5 [text-shadow:0_1px_3px_#000,0_2px_6px_rgba(0,0,0,0.95)] line-clamp-2">
            {photoInfo.caption}
          </p>
        </div>
      )}
    </div>
  );
};
