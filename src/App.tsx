import React, { useState, useRef, useEffect } from 'react';
import { VenetianImage, VenetianMaskIcon } from './components/VenetianImage';
import { VenetianDressCode } from './components/VenetianDressCode';
import {
  FleurDeLis,
  VenetianFlourishPip,
  BaroqueCrestTop,
  BaroqueCrestBottom,
} from './components/VenetianOrnaments';
import { toggleVenetianMusic } from './utils/audioPlayer';
import { VALENTINA_PHOTOS } from './data/photos';
import { usePhotoSource, bulkUploadPhotos } from './utils/photoStore';
import {
  Calendar,
  Clock,
  MapPin,
  ChevronDown,
  Flame,
  Upload,
  CheckCircle2,
  Sparkles,
  Music,
} from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

// 10 de octubre de 2026 a las 6:00 PM (18:00:00) en zona horaria America/Bogota (UTC-5)
const TARGET_EVENT_DATE_MS = new Date('2026-10-10T18:00:00-05:00').getTime();

function getEventTimeLeft(): TimeLeft {
  const diff = TARGET_EVENT_DATE_MS - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds, isComplete: false };
}

export default function App() {
  const [syncNotice, setSyncNotice] = useState<string | null>(null);
  const albumInputRef = useRef<HTMLInputElement>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getEventTimeLeft);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getEventTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 160);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMusic = () => {
    const nowPlaying = toggleVenetianMusic((playing) => setIsMusicPlaying(playing));
    setIsMusicPlaying(nowPlaying);
  };

  // Hero photo source (Photo 1: Ivy Arch with warm lights)
  const heroPhoto = usePhotoSource(1);

  const handleEnterBall = () => {
    const targetElement = document.getElementById('scene-invitation');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBulkSync = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const count = await bulkUploadPhotos(files);
      setSyncNotice(`${count} fotografía(s) sincronizada(s) con éxito en la invitación.`);
      setTimeout(() => setSyncNotice(null), 4000);
    }
  };

  const whatsappUrl =
    'https://wa.me/573212492841?text=' +
    encodeURIComponent('Hola Valentina, quiero confirmar mi asistencia a tus XV años el 10 de octubre de 2026. ✨');

  return (
    <div
      id="main-app"
      className="relative min-h-screen bg-[#0B0909] text-[#F2E9D8] selection:bg-[#4A1018] selection:text-[#C6A15B] font-body overflow-x-hidden"
    >
      {/* Background Ambient Candlelight Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[38rem] h-[38rem] bg-[radial-gradient(circle,rgba(198,161,91,0.12)_0%,rgba(74,16,24,0.2)_50%,transparent_75%)] rounded-full blur-3xl opacity-75 animate-slow-pulse" />
        <div className="absolute top-[35%] -left-36 w-96 h-96 bg-[radial-gradient(circle,rgba(74,16,24,0.25)_0%,transparent_70%)] rounded-full blur-3xl" />
        <div className="absolute top-[65%] -right-36 w-[30rem] h-[30rem] bg-[radial-gradient(circle,rgba(143,23,36,0.18)_0%,rgba(198,161,91,0.08)_50%,transparent_70%)] rounded-full blur-3xl" />
      </div>

      {/* Floating Sync Notification Toast */}
      {syncNotice && (
        <div className="fixed top-20 inset-x-4 max-w-sm mx-auto z-50 p-3.5 bg-[#17060A]/95 border border-[#DFC794] text-[#F2E9D8] text-xs font-body shadow-2xl backdrop-blur-md flex items-center gap-2.5 rounded animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-[#DFC794] shrink-0" />
          <span className="flex-1">{syncNotice}</span>
        </div>
      )}

      {/* Top Ambient Header Bar (Appears smoothly when scrolling down) */}
      <header
        id="site-header"
        className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#0B0909]/85 border-b border-[#C6A15B]/20 transition-all duration-500 ${
          scrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-xl mx-auto px-5 py-2.5 flex items-center justify-between">
          <span className="font-script text-2xl tracking-wider text-[#DFC794]">
            La Notte di Valentina
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleMusic}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#C6A15B]/40 bg-[#1A0508] text-[10px] text-[#DFC794] font-body uppercase tracking-wider hover:border-[#DFC794] transition-colors cursor-pointer"
            >
              <Music className={`w-3 h-3 ${isMusicPlaying ? 'animate-bounce text-[#DFC794]' : 'text-[#C6A15B]'}`} />
              <span>{isMusicPlaying ? 'Música activa' : 'Música'}</span>
            </button>
            <span className="text-[10px] uppercase font-body tracking-[0.25em] text-[#C6A15B] font-medium hidden sm:inline">
              10 · 10 · 2026
            </span>
          </div>
        </div>
      </header>

      {/* =========================================================================
          SCENE 1 — THE CINEMATIC HERO OPENING (PORTADA VENECIANA DE GALA)
          ========================================================================= */}
      <section
        id="scene-hero"
        className="relative w-full min-h-[100svh] flex justify-center items-center overflow-hidden bg-[#0B0909]"
      >
        {/* Central Vertical Cinema Stage (Edge-to-Edge on Mobile, Master Poster on Desktop) */}
        <div className="relative w-full max-w-xl min-h-[100svh] mx-auto flex flex-col justify-between items-center text-center overflow-hidden">
          
          {/* =====================================================================
              LAYER 1: FOTOGRAFÍA ORIGINAL DE VALENTINA (Z-INDEX 10)
              ===================================================================== */}
          <img
            id="layer-1-photo"
            src="/images/valentina-1.jpg"
            alt="Valentina"
            className="absolute inset-0 z-10 w-full h-full object-cover object-center pointer-events-none"
          />

          {/* =====================================================================
              LAYER 2: MARCO DECORATIVO VENETIAN COVER FRAME OVERLAY (Z-INDEX 20)
              ===================================================================== */}
          <img
            id="layer-2-frame"
            src="/images/assets/decorative/venetian.cover.frame.png"
            alt="Marco decorativo veneciano"
            aria-hidden="true"
            className="absolute inset-0 z-20 w-full h-full object-fill object-center pointer-events-none"
          />

          {/* =====================================================================
              LAYER 3: TIPOGRAFÍA Y TEXTOS HTML/CSS (Z-INDEX 30)
              ===================================================================== */}
          <div
            id="layer-3-typography"
            className="relative z-30 pointer-events-none w-full flex flex-col justify-between items-center min-h-[100svh] pt-0 sm:pt-5 pb-4 sm:pb-6"
          >
            {/* Top Typographic Block (Framed cleanly inside the Upper Arch, compact 25-30% mobile footprint) */}
            <div className="pt-[clamp(3.5rem,7.5svh,4.75rem)] sm:pt-6 px-6 sm:px-12 text-center max-w-lg mx-auto flex flex-col items-center">
              {/* Spaced Header: LA NOTTE DI (~25% of VALENTINA) with deep black text-shadow */}
              <p className="font-luxury text-[11px] sm:text-xs tracking-[0.38em] text-[#F3D48B] uppercase font-bold [text-shadow:0_0_3px_#000,0_2px_4px_#000,0_0_12px_#000,0_0_24px_rgba(0,0,0,0.95),0_0_40px_rgba(0,0,0,0.85)] mb-0.5">
                LA NOTTE DI
              </p>

              {/* Delicate Fleur-de-lis Divider below LA NOTTE DI */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 my-0.5 opacity-90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                <div className="w-8 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#E8C36A]" />
                <FleurDeLis className="w-2 h-2 text-[#E8C36A]" />
                <div className="w-8 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#E8C36A]" />
              </div>

              {/* Grand Roman Title: VALENTINA (Dominant Gala Gold serif, warm luminous gold #E8C36A with deep, thick multi-layered black contrast halo) */}
              <h1 className="font-luxury text-[3.15rem] sm:text-5xl md:text-6xl font-bold tracking-[0.06em] sm:tracking-[0.08em] uppercase text-[#E8C36A] [text-shadow:0_0_4px_#000,0_2px_4px_#000,0_-1px_3px_#000,2px_0_4px_#000,-2px_0_4px_#000,0_0_14px_#000,0_3px_14px_#000,0_0_24px_#000,0_0_38px_rgba(0,0,0,0.95),0_0_55px_rgba(0,0,0,0.90),0_0_75px_rgba(0,0,0,0.80),0_0_6px_rgba(232,195,106,0.35)] leading-[0.98] sm:leading-[1.05] my-0">
                VALENTINA
              </h1>

              {/* MIS XV AÑOS with flanking diamond pips and rules (~25-30% of VALENTINA) */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 my-0.5">
                <div className="w-8 sm:w-14 h-[1px] bg-gradient-to-r from-transparent via-[#E8C36A] to-[#C6A15B] drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]" />
                <span className="text-[6px] sm:text-[7px] text-[#E8C36A] drop-shadow-[0_2px_4px_#000]">◆</span>
                <span className="font-luxury text-[11.5px] sm:text-xs tracking-[0.38em] text-[#E8C36A] uppercase font-bold [text-shadow:0_0_3px_#000,0_2px_4px_#000,0_0_12px_#000,0_0_22px_rgba(0,0,0,0.95),0_0_36px_rgba(0,0,0,0.85)]">
                  MIS XV AÑOS
                </span>
                <span className="text-[6px] sm:text-[7px] text-[#E8C36A] drop-shadow-[0_2px_4px_#000]">◆</span>
                <div className="w-8 sm:w-14 h-[1px] bg-gradient-to-l from-transparent via-[#E8C36A] to-[#C6A15B] drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]" />
              </div>

              {/* Small Fleur-de-lis flourish below MIS XV AÑOS */}
              <div className="flex items-center justify-center gap-1 opacity-85 my-0.5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                <div className="w-5 sm:w-8 h-[1px] bg-gradient-to-r from-transparent to-[#E8C36A]" />
                <FleurDeLis className="w-1.5 h-1.5 text-[#E8C36A]" />
                <div className="w-5 sm:w-8 h-[1px] bg-gradient-to-l from-transparent to-[#E8C36A]" />
              </div>

              {/* Date: 10 · 10 · 2026 (~30% of VALENTINA) */}
              <p className="font-luxury text-[14.5px] sm:text-lg md:text-xl tracking-[0.32em] text-[#F4DC9E] font-semibold [text-shadow:0_0_3px_#000,0_2px_4px_#000,0_0_12px_#000,0_0_22px_rgba(0,0,0,0.95),0_0_36px_rgba(0,0,0,0.85)] my-0.5">
                10 · 10 · 2026
              </p>

              {/* Cursive Subtitle: Una noche detrás de la máscara (~35-40% of VALENTINA) with deep enveloping black shadow */}
              <p className="font-script text-[1.35rem] sm:text-2xl md:text-3xl text-[#F0CB74] tracking-wide mt-0.5 sm:mt-1 [text-shadow:0_0_3px_#000,0_2px_4px_#000,0_0_12px_#000,0_3px_12px_#000,0_0_24px_rgba(0,0,0,0.95),0_0_40px_rgba(0,0,0,0.90),0_0_60px_rgba(0,0,0,0.80)]">
                Una noche detrás de la máscara
              </p>
            </div>

            {/* Middle-Right Floating Strophe (Poem, matching reference with exact VALENTINA gala gold #E8C36A & multi-layer black halo) */}
            <div className="absolute right-3 sm:right-5 md:right-7 top-[48%] -translate-y-1/2 pointer-events-none text-center">
              <div className="flex flex-col items-center space-y-0.5 sm:space-y-1 font-luxury text-[9px] sm:text-[10px] md:text-[11.5px] uppercase tracking-[0.24em] sm:tracking-[0.28em] text-[#E8C36A] font-bold [text-shadow:0_0_3px_#000,0_1.5px_3px_#000,0_-1px_2px_#000,1.5px_0_3px_#000,-1.5px_0_3px_#000,0_0_10px_#000,0_2px_10px_#000,0_0_18px_#000,0_0_28px_rgba(0,0,0,0.95),0_0_42px_rgba(0,0,0,0.90),0_0_60px_rgba(0,0,0,0.80),0_0_5px_rgba(232,195,106,0.35)] leading-[1.25] sm:leading-[1.3]">
                <div className="flex items-center justify-center gap-1 pb-0.5 text-[#E8C36A] drop-shadow-[0_2px_4px_#000]">
                  <span className="w-3.5 sm:w-5 h-[1px] bg-gradient-to-r from-transparent via-[#E8C36A] to-[#E8C36A]/80" />
                  <FleurDeLis className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-[#E8C36A]" />
                  <span className="w-3.5 sm:w-5 h-[1px] bg-gradient-to-l from-transparent via-[#E8C36A] to-[#E8C36A]/80" />
                </div>
                <p>SUEÑOS</p>
                <p>QUE HOY</p>
                <p>SE CONVIERTEN</p>
                <p>EN REALIDAD</p>
                <div className="flex items-center justify-center gap-1 pt-0.5 text-[#E8C36A] drop-shadow-[0_2px_4px_#000]">
                  <span className="w-3.5 sm:w-5 h-[1px] bg-gradient-to-r from-transparent via-[#E8C36A] to-[#E8C36A]/80" />
                  <FleurDeLis className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-[#E8C36A]" />
                  <span className="w-3.5 sm:w-5 h-[1px] bg-gradient-to-l from-transparent via-[#E8C36A] to-[#E8C36A]/80" />
                </div>
              </div>
            </div>

            {/* Bottom Footer Tagline (Layer 3) */}
            <div className="w-full max-w-md sm:max-w-lg mx-auto px-3 sm:px-4 pb-2 pt-1 flex flex-col items-center">
              {/* Spacer so text naturally floats beneath the CTA button */}
              <div className="h-[76px] sm:h-[82px]" aria-hidden="true" />

              <div className="mt-2 sm:mt-2.5 space-y-1 text-center">
                <p className="font-luxury text-[9.5px] sm:text-[11px] md:text-[12px] tracking-[0.14em] sm:tracking-[0.20em] text-[#E8C36A] uppercase font-bold [text-shadow:0_0_3px_#000,0_1.5px_3px_#000,0_-1px_2px_#000,1.5px_0_3px_#000,-1.5px_0_3px_#000,0_0_10px_#000,0_2px_10px_#000,0_0_18px_#000,0_0_28px_rgba(0,0,0,0.95),0_0_42px_rgba(0,0,0,0.90),0_0_60px_rgba(0,0,0,0.80),0_0_5px_rgba(232,195,106,0.35)] whitespace-nowrap">
                  ELEGANCIA · MISTERIO · UNA NOCHE INOLVIDABLE
                </p>
                <div className="flex items-center justify-center gap-2 pt-0.5">
                  <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#E8C36A] to-transparent drop-shadow-[0_2px_4px_#000]" />
                  <FleurDeLis className="w-2 h-2 text-[#E8C36A] drop-shadow-[0_2px_4px_#000]" />
                  <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent via-[#E8C36A] to-transparent drop-shadow-[0_2px_4px_#000]" />
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================================
              LAYER 4: CONTROLES INTERACTIVOS (Z-INDEX 40)
              ===================================================================== */}
          {/* Top-Right: Circular "MÚSICA" Button */}
          <div className="absolute top-3 sm:top-5 right-3 sm:right-5 z-40">
            <button
              id="btn-music-toggle"
              onClick={handleToggleMusic}
              className="group flex flex-col items-center gap-1 focus:outline-none transition-transform active:scale-95 cursor-pointer"
              title={isMusicPlaying ? "Pausar música" : "Reproducir música de gala"}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#C6A15B] bg-[#22050A]/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(198,161,91,0.5)] group-hover:border-[#DFC794] group-hover:shadow-[0_0_30px_rgba(223,199,148,0.7)] group-hover:scale-105 transition-all">
                <Music className={`w-4 h-4 sm:w-5 sm:h-5 text-[#DFC794] transition-transform ${isMusicPlaying ? 'animate-bounce' : ''}`} />
              </div>
              <span className="text-[8.5px] sm:text-[9.5px] font-luxury tracking-[0.28em] text-[#DFC794] uppercase font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                MÚSICA
              </span>
            </button>
          </div>

          {/* Bottom Call to Action: "ENTRAR AL BAILE >" */}
          <div className="absolute bottom-11 sm:bottom-12 inset-x-0 z-40 flex flex-col items-center pointer-events-auto">
            <div className="w-full max-w-sm mx-auto px-4 flex flex-col items-center">
              {/* Baroque Crest Top */}
              <BaroqueCrestTop className="w-36 sm:w-44 h-auto text-[#DFC794] mb-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]" />

              {/* Button: ENTRAR AL BAILE > */}
              <button
                id="btn-entrar-al-baile"
                onClick={handleEnterBall}
                className="w-full max-w-[260px] sm:max-w-[280px] group relative min-h-[46px] sm:min-h-[50px] py-3 px-7 rounded-full bg-gradient-to-r from-[#28050B] via-[#520C17] to-[#28050B] border-2 border-[#C6A15B] ring-1 ring-[#DFC794]/60 text-[#FFFDF5] font-luxury text-xs sm:text-sm uppercase tracking-[0.32em] font-semibold transition-all duration-500 hover:border-[#DFC794] hover:shadow-[0_0_40px_rgba(223,199,148,0.7)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.95),0_0_24px_rgba(198,161,91,0.5)] cursor-pointer"
              >
                <span>ENTRAR AL BAILE</span>
                <span className="text-[#DFC794] font-serif text-base transition-transform duration-300 group-hover:translate-x-1.5">&gt;</span>
              </button>

              {/* Baroque Crest Bottom */}
              <BaroqueCrestBottom className="w-36 sm:w-44 h-auto text-[#DFC794] mt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative Container (Mobile-First max-w-xl) */}
      <main className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 pt-16 pb-24 space-y-28 md:space-y-36">

        {/* =========================================================================
            SCENE 2 — THE INVITATION INTRODUCTION
            ========================================================================= */}
        <section id="scene-invitation" className="relative scroll-mt-24 space-y-8 text-center">
          {/* Decorative Divider with Venetian Mask */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C6A15B]/50" />
            <VenetianMaskIcon className="w-8 h-8 text-[#C6A15B]" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C6A15B]/50" />
          </div>

          {/* Velvet Editorial Card */}
          <div className="relative p-7 sm:p-10 bg-gradient-to-b from-[#18060A]/90 via-[#0B0909] to-[#120507]/90 border border-[#C6A15B]/35 shadow-2xl shadow-[#4A1018]/30">
            {/* Corner Filigrees */}
            <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#DFC794]/80" />
            <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#DFC794]/80" />
            <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#DFC794]/80" />
            <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#DFC794]/80" />

            <span className="block text-[10px] uppercase tracking-[0.35em] text-[#C6A15B] font-medium mb-6">
              LA INVITACIÓN
            </span>

            <div className="space-y-6 max-w-md mx-auto">
              <p className="font-display text-xl sm:text-2xl text-[#F2E9D8] italic leading-relaxed font-light">
                "Hay noches que se esperan durante años. Y hay momentos que merecen ser recordados para siempre."
              </p>

              <div className="w-12 h-[1px] bg-[#C6A15B]/35 mx-auto" />

              <p className="font-body text-xs sm:text-sm text-[#D1C5B0] font-light leading-relaxed tracking-wide">
                Hoy quiero invitarte a compartir conmigo una noche muy especial, una velada llena de sueños, música, misterio veneciano, elegancia y recuerdos que perdurarán en el tiempo.
              </p>

              <div className="pt-4 space-y-1">
                <span className="block font-script text-2xl sm:text-3xl text-[#DFC794]">
                  Con la bendición de mis padres,
                </span>
                <span className="block font-display text-lg tracking-[0.2em] text-[#F2E9D8] uppercase">
                  Katerin Arévalo & Fabián Segura
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SCENE 3 — EVENT INFORMATION (DATE, TIME, VENUE)
            ========================================================================= */}
        <section id="scene-event-info" className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C6A15B] font-medium">
              DETALLES DE LA CELEBRACIÓN
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F2E9D8] tracking-[0.14em] uppercase">
              UNA NOCHE DE GALA
            </h2>
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Date & Time Card */}
            <div className="relative p-6 sm:p-8 bg-gradient-to-br from-[#1A0609] via-[#0B0909] to-[#120507] border border-[#C6A15B]/30 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#4A1018]/60 border border-[#C6A15B]/40 text-[#DFC794] rounded shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-left">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
                    FECHA & HORA
                  </span>
                  <h3 className="font-display text-2xl text-[#F2E9D8] tracking-wide">
                    Sábado, 10 de Octubre de 2026
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[#DFC794] font-medium pt-1">
                    <Clock className="w-4 h-4" />
                    <span>Recepción de Invitados: 6:00 P.M.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Venue Card */}
            <div className="relative p-6 sm:p-8 bg-gradient-to-br from-[#1A0609] via-[#0B0909] to-[#120507] border border-[#C6A15B]/30 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#4A1018]/60 border border-[#C6A15B]/40 text-[#DFC794] rounded shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-left flex-1 min-w-0">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
                    EL LUGAR DE LA NOCHE
                  </span>
                  <h3 className="font-display text-2xl text-[#F2E9D8] tracking-wide">
                    LA ALAMEDA EVENTOS
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D1C5B0] font-light leading-relaxed">
                    Cl. 25 #8 - 01<br />
                    Funza, Cundinamarca, Colombia
                  </p>
                </div>
              </div>

              {/* Botones de Navegación: Google Maps & Waze */}
              <div className="mt-5 pt-4 border-t border-[#C6A15B]/20 text-left">
                <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C6A15B] font-medium font-body mb-2.5">
                  CÓMO LLEGAR
                </span>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
                  {/* Botón Google Maps */}
                  <a
                    id="btn-nav-google-maps"
                    href="https://www.google.com/maps/search/?api=1&query=La+Alameda+Eventos%2C+Cl.+25+%238+-+01%2C+Funza%2C+Cundinamarca%2C+Colombia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2.5 sm:py-3 min-h-[44px] bg-gradient-to-b from-[#2B090F] to-[#180407] hover:from-[#3D0E16] hover:to-[#24060B] border border-[#C6A15B]/45 hover:border-[#DFC794] text-[#F2E9D8] hover:text-[#DFC794] rounded-sm transition-all duration-300 shadow-md group active:scale-[0.98]"
                    title="Abrir en Google Maps"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DFC794] group-hover:text-[#FFFDF5] shrink-0 transition-colors"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                    </svg>
                    <span className="text-[11px] sm:text-xs font-semibold tracking-[0.12em] sm:tracking-[0.16em] uppercase whitespace-nowrap">
                      GOOGLE MAPS
                    </span>
                  </a>

                  {/* Botón Waze */}
                  <a
                    id="btn-nav-waze"
                    href="https://waze.com/ul?q=La+Alameda+Eventos%2C+Cl.+25+%238+-+01%2C+Funza%2C+Cundinamarca%2C+Colombia&navigate=yes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2.5 sm:py-3 min-h-[44px] bg-gradient-to-b from-[#2B090F] to-[#180407] hover:from-[#3D0E16] hover:to-[#24060B] border border-[#C6A15B]/45 hover:border-[#DFC794] text-[#F2E9D8] hover:text-[#DFC794] rounded-sm transition-all duration-300 shadow-md group active:scale-[0.98]"
                    title="Abrir en Waze"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DFC794] group-hover:text-[#FFFDF5] shrink-0 transition-colors"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M19.42 12.08c-.1-.4-.2-.8-.34-1.18A6.8 6.8 0 0 0 13.5 6.5a6.83 6.83 0 0 0-6.14 3.78 6.7 6.7 0 0 0-.58 4.2c.57 2.5 2.54 4.5 5.04 5.12.83.2 1.7.25 2.56.13 1.25-.17 2.4-.73 3.32-1.58l1.37.45c.48.16.99.08 1.4-.21.41-.29.65-.77.65-1.28v-.88c0-.82-.2-1.64-.7-2.45zm-10.42-.58a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm5.5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
                      <circle cx="8" cy="19" r="1.5" />
                      <circle cx="15" cy="19" r="1.5" />
                    </svg>
                    <span className="text-[11px] sm:text-xs font-semibold tracking-[0.12em] sm:tracking-[0.16em] uppercase whitespace-nowrap">
                      WAZE
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Atmospheric Quote Interlude */}
          <div className="relative py-7 px-6 text-center border-y border-[#C6A15B]/20 bg-gradient-to-r from-transparent via-[#4A1018]/25 to-transparent">
            <span className="font-script text-2xl sm:text-3xl text-[#DFC794] block mb-1">
              "La magia florece en los detalles"
            </span>
            <span className="text-[10px] tracking-[0.3em] text-[#D1C5B0]/70 uppercase font-body font-light">
              Misterio · Terciopelo Escarlata · Velas · Oro Antiguo
            </span>
          </div>
        </section>

        {/* =========================================================================
            SCENE 3.5 — COUNTDOWN EN TIEMPO REAL
            ========================================================================= */}
        <section id="scene-countdown" className="space-y-6 text-center">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C6A15B] font-medium block">
              LA CUENTA REGRESIVA
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F2E9D8] tracking-[0.14em] uppercase">
              FALTAN...
            </h2>
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto mt-2" />
          </div>

          {/* Velvet & Gold Antique Container */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-b from-[#180609] via-[#0B0909] to-[#140507] border border-[#C6A15B]/30 shadow-2xl">
            {/* Fine Antique Gold Corner Accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#DFC794]/70 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#DFC794]/70 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#DFC794]/70 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#DFC794]/70 pointer-events-none" />

            {timeLeft.isComplete ? (
              <div className="py-6 text-center">
                <span className="font-display text-2xl sm:text-3xl text-[#DFC794] tracking-[0.2em] uppercase font-light">
                  LA NOCHE HA COMENZADO
                </span>
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-2 sm:gap-4">
                {/* DÍAS */}
                <div className="py-3 px-2 sm:py-4 sm:px-3 bg-[#0B0909]/80 border border-[#C6A15B]/25 flex flex-col items-center justify-center">
                  <span className="font-display text-2xl sm:text-4xl md:text-5xl text-[#C6A15B] font-light tracking-tight transition-opacity duration-300">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="mt-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.3em] text-[#D1C5B0]/80 font-body font-medium">
                    DÍAS
                  </span>
                </div>

                {/* HORAS */}
                <div className="py-3 px-2 sm:py-4 sm:px-3 bg-[#0B0909]/80 border border-[#C6A15B]/25 flex flex-col items-center justify-center">
                  <span className="font-display text-2xl sm:text-4xl md:text-5xl text-[#C6A15B] font-light tracking-tight transition-opacity duration-300">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="mt-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.3em] text-[#D1C5B0]/80 font-body font-medium">
                    HORAS
                  </span>
                </div>

                {/* MINUTOS */}
                <div className="py-3 px-2 sm:py-4 sm:px-3 bg-[#0B0909]/80 border border-[#C6A15B]/25 flex flex-col items-center justify-center">
                  <span className="font-display text-2xl sm:text-4xl md:text-5xl text-[#C6A15B] font-light tracking-tight transition-opacity duration-300">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="mt-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.3em] text-[#D1C5B0]/80 font-body font-medium">
                    MINUTOS
                  </span>
                </div>

                {/* SEGUNDOS */}
                <div className="py-3 px-2 sm:py-4 sm:px-3 bg-[#0B0909]/80 border border-[#C6A15B]/25 flex flex-col items-center justify-center">
                  <span className="font-display text-2xl sm:text-4xl md:text-5xl text-[#DFC794] font-light tracking-tight transition-opacity duration-300">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="mt-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.3em] text-[#D1C5B0]/80 font-body font-medium">
                    SEGUNDOS
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =========================================================================
            SCENE 4 — DRESS CODE (VENETIAN NOIR EDITORIAL)
            ========================================================================= */}
        <VenetianDressCode />

        {/* =========================================================================
            SCENE 5 — VALENTINA FEATURE SECTION
            ========================================================================= */}
        <section id="scene-valentina-feature" className="space-y-8 text-center">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C6A15B] font-medium">
              LA PROTAGONISTA
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#F2E9D8] tracking-[0.16em] uppercase">
              VALENTINA
            </h2>
            <p className="font-display text-xl text-[#DFC794] tracking-[0.25em]">
              XV AÑOS
            </p>
            <p className="font-script text-2xl sm:text-3xl text-[#DFC794]">
              "Una nueva etapa está por comenzar."
            </p>
          </div>

          {/* Feature Photograph (Photo 7: Nueva Fotografía Valentina - La Protagonista) */}
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-2.5 border border-[#C6A15B]/30 pointer-events-none" />
            <VenetianImage
              photoId={7}
              className="w-full shadow-2xl shadow-[#4A1018]/50"
              showCaption={false}
            />
          </div>
        </section>

        {/* =========================================================================
            SCENE 6 — EDITORIAL PHOTO GALLERY (6 SPECIFIED PHOTOGRAPHS)
            ========================================================================= */}
        <section id="scene-gallery" className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C6A15B] font-medium">
              MEMORIAS DE GALA
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F2E9D8] tracking-[0.14em] uppercase">
              GALERÍA EDITORIAL
            </h2>
            <p className="text-xs text-[#D1C5B0]/75 font-light tracking-wide max-w-sm mx-auto">
              Una narrativa cinematográfica en seis actos a través de la belleza y serenidad de Valentina.
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto mt-3" />
          </div>

          {/* Vertical Editorial Sequence (Photos 1 to 6 in order) */}
          <div className="space-y-16 sm:space-y-20">
            {VALENTINA_PHOTOS.filter((photo) => photo.id <= 6).map((photo) => (
              <div key={photo.id} className="space-y-3">
                {/* 1. NÚMERO Y TÍTULO DEL ACTO & 2. SUBTÍTULO EDITORIAL */}
                <div className="space-y-0.5 px-1 text-left">
                  <h3 className="font-luxury text-sm sm:text-base md:text-lg tracking-[0.22em] sm:tracking-[0.26em] text-[#E8C36A] font-bold uppercase [text-shadow:0_2px_3px_rgba(0,0,0,0.98),0_4px_8px_rgba(0,0,0,0.95),0_8px_16px_rgba(0,0,0,0.85),0_0_24px_rgba(0,0,0,0.80)]">
                    {photo.romanNumeral} · {photo.title.toUpperCase()}
                  </h3>
                  <p className="text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.25em] text-[#DFC794]/85 font-body font-medium">
                    {photo.subtitle}
                  </p>
                </div>

                {/* 3. FOTOGRAFÍA (Área limpia y dominante, 100% visible sin texto superpuesto) */}
                <VenetianImage
                  photoId={photo.id}
                  className="w-full shadow-2xl shadow-[#4A1018]/35"
                  showCaption={false}
                />

                {/* 4. FRASE POÉTICA & 5. DESCRIPCIÓN BREVE (Pie editorial fuera y debajo de la fotografía) */}
                <div className="pt-2 px-1 text-left space-y-1.5 border-l-2 border-[#C6A15B]/40 pl-3.5 ml-1">
                  {photo.quote && (
                    <p className="font-script text-lg sm:text-xl md:text-2xl text-[#F0CB74] leading-relaxed [text-shadow:0_2px_4px_rgba(0,0,0,0.95)]">
                      "{photo.quote}"
                    </p>
                  )}
                  <p className="text-xs sm:text-[13px] text-[#E8DFC9]/90 font-body font-light leading-relaxed tracking-wide [text-shadow:0_1px_3px_rgba(0,0,0,0.85)]">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SCENE 7 — RSVP SECTION & ADULTS ONLY
            ========================================================================= */}
        <section id="scene-rsvp" className="space-y-10 text-center">
          {/* Respectful Adults Only Notice */}
          <div className="relative p-7 sm:p-9 bg-gradient-to-b from-[#1A060A] via-[#0B0909] to-[#120507] border border-[#C6A15B]/35 shadow-xl">
            <div className="text-2xl mb-2">🥂</div>
            <h3 className="font-display text-lg sm:text-xl text-[#DFC794] tracking-wider uppercase mb-3 font-medium">
              UNA NOCHE PARA DISFRUTAR
            </h3>
            <p className="text-xs sm:text-sm text-[#D1C5B0] font-light leading-relaxed max-w-md mx-auto mb-3">
              Queremos que esta velada sea una experiencia inolvidable para todos nuestros invitados.
            </p>
            <p className="text-xs sm:text-sm text-[#D1C5B0] font-light leading-relaxed max-w-md mx-auto mb-4">
              Por ello, hemos preparado esta celebración exclusivamente para adultos, pensada para disfrutar plenamente de la música, el banquete, la gala y el baile.
            </p>
            <p className="text-xs text-[#C6A15B]/90 font-light italic max-w-md mx-auto">
              Agradecemos de corazón tu compañía y comprensión para celebrar juntos los XV años de Valentina.
            </p>
          </div>

          {/* RSVP Card */}
          <div className="relative p-8 sm:p-10 bg-gradient-to-b from-[#180609] via-[#0B0909] to-[#180609] border border-[#C6A15B]/50 shadow-2xl shadow-[#4A1018]/30">
            {/* Corner Filigrees */}
            <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t border-l border-[#C6A15B]" />
            <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t border-r border-[#C6A15B]" />
            <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b border-l border-[#C6A15B]" />
            <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b border-r border-[#C6A15B]" />

            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C6A15B] font-medium block mb-2">
              CONFIRMACIÓN DE ASISTENCIA
            </span>

            <h2 className="font-display text-3xl sm:text-4xl text-[#F2E9D8] tracking-[0.14em] uppercase mb-2">
              ¿NOS ACOMPAÑAS?
            </h2>

            <p className="font-display text-base text-[#DFC794] italic mb-6">
              "Será un honor compartir contigo esta noche tan especial."
            </p>

            <div className="p-4 bg-[#0B0909]/85 border border-[#C6A15B]/25 max-w-xs mx-auto mb-6">
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] mb-1">
                CONFIRMAR ANTES DEL
              </span>
              <span className="font-display text-lg text-[#F2E9D8] tracking-wider font-semibold">
                20 DE SEPTIEMBRE DE 2026
              </span>
            </div>

            {/* WhatsApp CTA Button */}
            <a
              id="btn-confirmar-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full max-w-xs min-h-[50px] py-4 px-6 bg-gradient-to-r from-[#4A1018] via-[#8F1724] to-[#4A1018] border border-[#C6A15B] text-[#F2E9D8] text-xs uppercase tracking-[0.25em] font-semibold shadow-lg hover:border-[#DFC794] hover:shadow-[0_0_30px_rgba(198,161,91,0.4)] transition-all active:scale-[0.98]"
            >
              <span>CONFIRMAR POR WHATSAPP</span>
            </a>
          </div>
        </section>

        {/* =========================================================================
            SCENE 8 — FINAL CINEMATIC CLOSING
            ========================================================================= */}
        <section id="scene-closing" className="relative pt-12 pb-16 text-center space-y-8">
          <div className="space-y-6 max-w-md mx-auto">
            {/* Candlelight flame */}
            <div className="mx-auto w-9 h-9 rounded-full bg-[#C6A15B]/10 flex items-center justify-center animate-candle">
              <Flame className="w-5 h-5 text-[#DFC794] fill-[#DFC794]/60" />
            </div>

            <p className="font-display text-lg sm:text-xl text-[#F2E9D8] tracking-[0.2em] uppercase font-light">
              "DETRÁS DE CADA MÁSCARA HAY UNA HISTORIA..."
            </p>

            <p className="font-script text-3xl sm:text-4xl text-[#DFC794]">
              "Y esta es la mía."
            </p>

            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B]/50 to-transparent mx-auto" />

            <div className="space-y-1">
              <h3 className="font-display text-3xl sm:text-4xl tracking-[0.2em] text-[#F2E9D8] uppercase">
                VALENTINA
              </h3>
              <p className="font-display text-xl text-[#DFC794] tracking-[0.25em]">
                XV
              </p>
            </div>

            <p className="font-body text-xs text-[#D1C5B0]/80 tracking-widest uppercase font-light pt-2">
              Gracias por ser parte de esta noche.
            </p>

            <div className="text-[11px] text-[#C6A15B] tracking-[0.3em] font-light">
              10 · 10 · 2026
            </div>
          </div>

          <div className="pt-6">
            <VenetianMaskIcon className="w-10 h-10 text-[#C6A15B]/35 mx-auto" />
            <p className="text-[9px] text-[#D1C5B0]/30 tracking-[0.3em] uppercase mt-4">
              VENETIAN NOIR · LA NOTTE DI VALENTINA
            </p>
          </div>
        </section>

      </main>

      {/* Floating Album Sync Button (Discreet tool for effortless photo loading) */}
      <div className="fixed bottom-4 right-4 z-40">
        <input
          type="file"
          ref={albumInputRef}
          multiple
          accept="image/*"
          className="hidden"
          onChange={handleBulkSync}
        />
        <button
          type="button"
          onClick={() => albumInputRef.current?.click()}
          title="Sincronizar las 6 fotografías de Valentina en 1 clic"
          className="group flex items-center gap-2 py-2 px-3.5 rounded-full bg-[#120507]/90 border border-[#C6A15B]/40 text-[#DFC794] text-[11px] font-body tracking-wider uppercase backdrop-blur-md shadow-xl hover:border-[#DFC794] hover:bg-[#4A1018]/60 transition-all active:scale-95"
        >
          <Upload className="w-3.5 h-3.5 text-[#DFC794]" />
          <span className="hidden sm:inline">Sincronizar Álbum</span>
        </button>
      </div>
    </div>
  );
}
