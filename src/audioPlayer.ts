/**
 * Venetian Classical Waltz Web Audio Synthesizer
 * Plays an elegant, romantic waltz progression reminiscent of a Venetian masquerade ball.
 */

let audioCtx: AudioContext | null = null;
let isPlaying = false;
let intervalId: any = null;

// Classical Venetian Waltz Chord Progression (D minor, G minor, A7, D minor)
const CHORD_NOTES: number[][] = [
  // D minor (Bass D, Harmony F, A, D)
  [146.83, 349.23, 440.0, 587.33],
  // G minor (Bass G, Harmony Bb, D, G)
  [196.0, 466.16, 587.33, 783.99],
  // A major 7 (Bass A, Harmony C#, E, G)
  [220.0, 554.37, 659.25, 783.99],
  // D minor (Bass D, Harmony F, A, D)
  [146.83, 349.23, 440.0, 587.33],
];

let step = 0;

function playWaltzBeat(ctx: AudioContext, notes: number[], beat: number) {
  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.connect(ctx.destination);
  masterGain.gain.setValueAtTime(0.18, now);

  if (beat === 0) {
    // Beat 1: Warm low cello/bass note
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(notes[0], now);

    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(now);
    osc.stop(now + 1.2);
  } else {
    // Beats 2 and 3: Light harp / string arpeggiated chord
    notes.slice(1).forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.04);

      gain.gain.setValueAtTime(0.08, now + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(now + idx * 0.04);
      osc.stop(now + 0.65);
    });
  }
}

export function toggleVenetianMusic(onStateChange?: (playing: boolean) => void): boolean {
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (isPlaying) {
      clearInterval(intervalId);
      isPlaying = false;
      if (onStateChange) onStateChange(false);
      return false;
    } else {
      isPlaying = true;
      let beatInMeasure = 0;
      let chordIndex = 0;

      // Play 3/4 waltz tempo: beat every 450ms (~133 BPM in 3/4 waltz)
      const playStep = () => {
        if (!isPlaying || !audioCtx) return;
        const currentChord = CHORD_NOTES[chordIndex % CHORD_NOTES.length];
        playWaltzBeat(audioCtx, currentChord, beatInMeasure);

        beatInMeasure++;
        if (beatInMeasure >= 3) {
          beatInMeasure = 0;
          chordIndex++;
        }
      };

      playStep();
      intervalId = setInterval(playStep, 450);

      if (onStateChange) onStateChange(true);
      return true;
    }
  } catch (err) {
    console.warn("Audio Context init prevented:", err);
    return false;
  }
}

export function isVenetianMusicPlaying(): boolean {
  return isPlaying;
}
