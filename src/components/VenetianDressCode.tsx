import React from 'react';

/**
 * Miniature Venetian Masquerade Mask Icon
 * Deep ruby velvet with antique gold gilded filigree and crest
 */
export const VenetianDressMask: React.FC<{ className?: string }> = ({
  className = "w-11 h-7"
}) => (
  <svg
    viewBox="0 0 120 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} drop-shadow-[0_2px_8px_rgba(74,16,24,0.6)]`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="vMaskGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFDF5" />
        <stop offset="30%" stopColor="#E5C378" />
        <stop offset="70%" stopColor="#C6A15B" />
        <stop offset="100%" stopColor="#8E7036" />
      </linearGradient>
      <linearGradient id="vMaskVelvet" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#6E121E" />
        <stop offset="45%" stopColor="#4A0A12" />
        <stop offset="100%" stopColor="#1B0306" />
      </linearGradient>
    </defs>

    {/* Upper Decorative Filigree Crest (Crown) */}
    <path
      d="M60 4C58 8 54 11 48 12M60 4C62 8 66 11 72 12M60 2V8M54 6C50 3 45 4 44 8M66 6C70 3 75 4 76 8"
      stroke="url(#vMaskGold)"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="60" cy="3" r="1.5" fill="#FFFDF5" />
    <circle cx="44" cy="8" r="1.2" fill="#E5C378" />
    <circle cx="76" cy="8" r="1.2" fill="#E5C378" />

    {/* Main Mask Body Contour */}
    <path
      d="M12 28C14 16 30 11 60 20C90 11 106 16 108 28C110 40 102 54 88 55C75 56 68 40 60 40C52 40 45 56 32 55C18 54 10 40 12 28Z"
      fill="url(#vMaskVelvet)"
      stroke="url(#vMaskGold)"
      strokeWidth="1.8"
    />

    {/* Left Eye Cutout */}
    <path
      d="M28 28C33 23 44 25 47 31C44 37 33 37 28 32C26 30 26 29 28 28Z"
      fill="#0B0909"
      stroke="url(#vMaskGold)"
      strokeWidth="1.4"
    />

    {/* Right Eye Cutout */}
    <path
      d="M92 28C87 23 76 25 73 31C76 37 87 37 92 32C94 30 94 29 92 28Z"
      fill="#0B0909"
      stroke="url(#vMaskGold)"
      strokeWidth="1.4"
    />

    {/* Gilded Eyelash / Outer Flourishes */}
    <path
      d="M18 22C21 14 28 12 34 14M102 22C99 14 92 12 86 14"
      stroke="url(#vMaskGold)"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <path
      d="M60 21V28"
      stroke="url(#vMaskGold)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Delicate Golden Quatrefoil / Fleur Divider Line
 */
export const VenetianQuatrefoilDivider: React.FC<{ className?: string }> = ({
  className = ""
}) => (
  <div className={`flex items-center justify-center gap-3 w-full max-w-xs mx-auto ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C6A15B]/70 to-[#C6A15B]" />
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-[#DFC794]" fill="currentColor" aria-hidden="true">
      <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
      <circle cx="8" cy="8" r="1.5" fill="#FFFDF5" />
    </svg>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C6A15B]/70 to-[#C6A15B]" />
  </div>
);

/**
 * Venetian Noir Dress Code Section Component
 * Faithful to the luxury European fashion editorial reference design
 */
export const VenetianDressCode: React.FC = () => {
  return (
    <section id="scene-dress-code" className="space-y-8 text-center scroll-mt-20">
      {/* 3. ENCABEZADO */}
      <div className="space-y-2.5">
        {/* Minimalist Venetian Mask Ornament */}
        <div className="flex justify-center pb-1">
          <VenetianDressMask className="w-12 h-8" />
        </div>

        {/* Category Eyebrow */}
        <span className="block text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#C6A15B] font-medium font-body">
          CÓDIGO DE VESTIMENTA
        </span>

        {/* DRESS CODE Main Title */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F2E9D8] tracking-[0.16em] sm:tracking-[0.18em] uppercase font-light [text-shadow:0_2px_4px_rgba(0,0,0,0.9)]">
          DRESS CODE
        </h2>

        {/* Gala Veneciana · Black Tie */}
        <p className="font-script text-2xl sm:text-3xl md:text-4xl text-[#DFC794] font-normal tracking-wide [text-shadow:0_2px_4px_rgba(0,0,0,0.85)]">
          Gala Veneciana · Black Tie
        </p>

        {/* Delicate Golden Quatrefoil Divider */}
        <div className="pt-1">
          <VenetianQuatrefoilDivider />
        </div>
      </div>

      {/* 4. DOS BLOQUES VISUALES: DAMAS & CABALLEROS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 text-left">
        {/* BLOQUE IZQUIERDA: DAMAS */}
        <div
          id="card-dress-damas"
          className="relative bg-gradient-to-b from-[#140508]/90 via-[#0B0909]/95 to-[#0B0909] border border-[#C6A15B]/45 shadow-[0_12px_32px_rgba(0,0,0,0.85)] overflow-hidden transition-all duration-500 hover:border-[#DFC794]/75 group"
        >
          {/* Corner gold brackets */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#C6A15B]/60 pointer-events-none" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#C6A15B]/60 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#C6A15B]/60 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#C6A15B]/60 pointer-events-none" />

          <div className="flex flex-row items-center gap-3 sm:gap-5 p-3.5 sm:p-5 md:p-6 min-h-[240px] sm:min-h-[280px]">
            {/* Silueta Femenina (47-48% del bloque, protagonista visual completa de pies a cabeza) */}
            <div className="w-[47%] sm:w-[48%] shrink-0 relative overflow-hidden bg-[#070505] border border-[#C6A15B]/35 shadow-lg flex items-center justify-center p-1">
              <img
                src="/images/assets/decorative/dress-code-damas.jpg"
                alt="Silueta de gala para damas"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[896/1200] object-contain object-center transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Columna Editorial Damas (52-53% del bloque) */}
            <div className="w-[53%] sm:w-[52%] flex flex-col justify-center items-center text-center space-y-2 sm:space-y-2.5 px-1 sm:px-2">
              <div className="text-[#DFC794] text-xs sm:text-sm">✦</div>

              <span className="text-xs sm:text-[13px] uppercase tracking-[0.28em] sm:tracking-[0.32em] text-[#C6A15B] font-body font-semibold">
                DAMAS
              </span>

              {/* Divisor fino con rombo */}
              <div className="flex items-center justify-center gap-1.5 w-14 sm:w-16 my-0.5">
                <div className="h-[1px] flex-1 bg-[#C6A15B]/40" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#DFC794] bg-[#DFC794]/40" />
                <div className="h-[1px] flex-1 bg-[#C6A15B]/40" />
              </div>

              <h3 className="font-display text-sm sm:text-base md:text-lg text-[#F2E9D8] tracking-[0.08em] sm:tracking-[0.12em] font-normal uppercase leading-snug">
                ELEGANTE VESTIDO<br className="hidden sm:inline" /> LARGO NEGRO
              </h3>

              <p className="text-xs sm:text-[13px] text-[#E8DFC9] font-body font-light leading-relaxed max-w-[210px]">
                Silueta de noche, distinción sobria y sofisticada para una velada en claroscuro.
              </p>
            </div>
          </div>
        </div>

        {/* BLOQUE DERECHA: CABALLEROS */}
        <div
          id="card-dress-caballeros"
          className="relative bg-gradient-to-b from-[#140508]/90 via-[#0B0909]/95 to-[#0B0909] border border-[#C6A15B]/45 shadow-[0_12px_32px_rgba(0,0,0,0.85)] overflow-hidden transition-all duration-500 hover:border-[#DFC794]/75 group"
        >
          {/* Corner gold brackets */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#C6A15B]/60 pointer-events-none" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#C6A15B]/60 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#C6A15B]/60 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#C6A15B]/60 pointer-events-none" />

          <div className="flex flex-row items-center gap-3 sm:gap-5 p-3.5 sm:p-5 md:p-6 min-h-[240px] sm:min-h-[280px]">
            {/* Silueta Masculina (47-48% del bloque, protagonista visual completa de pies a cabeza) */}
            <div className="w-[47%] sm:w-[48%] shrink-0 relative overflow-hidden bg-[#070505] border border-[#C6A15B]/35 shadow-lg flex items-center justify-center p-1">
              <img
                src="/images/assets/decorative/dress-code-caballeros.jpg"
                alt="Silueta de gala para caballeros"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[896/1200] object-contain object-center transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Columna Editorial Caballeros (52-53% del bloque) */}
            <div className="w-[53%] sm:w-[52%] flex flex-col justify-center items-center text-center space-y-2 sm:space-y-2.5 px-1 sm:px-2">
              <div className="text-[#DFC794] text-xs sm:text-sm">✦</div>

              <span className="text-xs sm:text-[13px] uppercase tracking-[0.28em] sm:tracking-[0.32em] text-[#C6A15B] font-body font-semibold">
                CABALLEROS
              </span>

              {/* Divisor fino con rombo */}
              <div className="flex items-center justify-center gap-1.5 w-14 sm:w-16 my-0.5">
                <div className="h-[1px] flex-1 bg-[#C6A15B]/40" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#DFC794] bg-[#DFC794]/40" />
                <div className="h-[1px] flex-1 bg-[#C6A15B]/40" />
              </div>

              <h3 className="font-display text-sm sm:text-base md:text-lg text-[#F2E9D8] tracking-[0.08em] sm:tracking-[0.12em] font-normal uppercase leading-snug">
                TRAJE U OUTFIT<br className="hidden sm:inline" /> NEGRO
              </h3>

              <p className="text-xs sm:text-[13px] text-[#E8DFC9] font-body font-light leading-relaxed max-w-[210px]">
                Camisa blanca impecable, corbata o corbatín negro, corte de etiqueta de gala.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. FRASE FINAL: RECUADRO ELEGANTE CON BORDE DORADO */}
      <div className="my-6 sm:my-8 px-4 sm:px-6 py-4 sm:py-5 bg-[#120507]/80 border border-[#C6A15B]/45 max-w-xl mx-auto shadow-xl">
        <p className="font-script text-xl sm:text-2xl md:text-[25px] text-[#DFC794] font-normal leading-relaxed text-center [text-shadow:0_2px_4px_rgba(0,0,0,0.85)]">
          Las máscaras venecianas de gala otorgarán el toque final de misterio a la celebración.
        </p>
      </div>

      {/* ICONO DE MÁSCARA VENECIANA EN DORADO CON LÍNEAS LATERALES */}
      <div className="flex items-center justify-center gap-3 w-full max-w-xs mx-auto pt-1">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C6A15B]/40 to-[#C6A15B]/70" />
        <VenetianDressMask className="w-10 h-7 shrink-0" />
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C6A15B]/40 to-[#C6A15B]/70" />
      </div>
    </section>
  );
};
