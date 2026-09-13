import React from 'react';

/**
 * Classical Fleur-de-lis vector ornament in authentic Venetian gold
 */
export const FleurDeLis: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Central Petal */}
    <path d="M12 1.5C11.2 4.2 9.5 6.5 7.8 7.6C6.5 6.2 5.2 4.6 5.6 2.6C3.8 4 3 6.4 3.4 8.8C3.8 11.2 5.8 12.8 8.1 12.8C8.7 12.8 9.3 12.6 9.8 12.2C9.5 13.5 9 14.8 8.4 16.2H10.5V19.5C9.8 20.2 8.2 20.8 6.5 20.8H17.5C15.8 20.8 14.2 20.2 13.5 19.5V16.2H15.6C15 14.8 14.5 13.5 14.2 12.2C14.7 12.6 15.3 12.8 15.9 12.8C18.2 12.8 20.2 11.2 20.6 8.8C21 6.4 20.2 4 18.4 2.6C18.8 4.6 17.5 6.2 16.2 7.6C14.5 6.5 12.8 4.2 12 1.5Z" />
    {/* Horizontal Tie Ring */}
    <path d="M7 14.8H17V16.2H7V14.8Z" />
  </svg>
);

/**
 * Classical Diamond / Floret flourish pip
 */
export const VenetianFlourishPip: React.FC<{ className?: string }> = ({ className = "w-3 h-3" }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M10 2L12 8L18 10L12 12L10 18L8 12L2 10L8 8L10 2Z"
      fill="url(#goldPipGrad)"
    />
    <circle cx="10" cy="10" r="1.5" fill="#FFF8EB" />
    <defs>
      <linearGradient id="goldPipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF2D6" />
        <stop offset="50%" stopColor="#DFC794" />
        <stop offset="100%" stopColor="#8E7036" />
      </linearGradient>
    </defs>
  </svg>
);

/**
 * Baroque Filigree Crest sitting directly above "ENTRAR AL BAILE"
 * Exactly matching the scrolled baroque crest in the reference image
 */
export const BaroqueCrestTop: React.FC<{ className?: string }> = ({ className = "w-44 h-9" }) => (
  <svg
    viewBox="0 0 220 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="crestGoldGradFull" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#C6A15B" stopOpacity="0" />
        <stop offset="20%" stopColor="#C6A15B" />
        <stop offset="45%" stopColor="#DFC794" />
        <stop offset="50%" stopColor="#FFF9E6" />
        <stop offset="55%" stopColor="#DFC794" />
        <stop offset="80%" stopColor="#C6A15B" />
        <stop offset="100%" stopColor="#C6A15B" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="crestSolidGold" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFDF5" />
        <stop offset="50%" stopColor="#E5C378" />
        <stop offset="100%" stopColor="#9C782E" />
      </linearGradient>
    </defs>

    {/* Central Fleur-de-lis */}
    <g transform="translate(101, 2) scale(0.75)">
      <path
        d="M12 1.5C11.2 4.2 9.5 6.5 7.8 7.6C6.5 6.2 5.2 4.6 5.6 2.6C3.8 4 3 6.4 3.4 8.8C3.8 11.2 5.8 12.8 8.1 12.8C8.7 12.8 9.3 12.6 9.8 12.2C9.5 13.5 9 14.8 8.4 16.2H10.5V19.5C9.8 20.2 8.2 20.8 6.5 20.8H17.5C15.8 20.8 14.2 20.2 13.5 19.5V16.2H15.6C15 14.8 14.5 13.5 14.2 12.2C14.7 12.6 15.3 12.8 15.9 12.8C18.2 12.8 20.2 11.2 20.6 8.8C21 6.4 20.2 4 18.4 2.6C18.8 4.6 17.5 6.2 16.2 7.6C14.5 6.5 12.8 4.2 12 1.5Z"
        fill="url(#crestSolidGold)"
      />
      <rect x="7" y="14.8" width="10" height="1.4" fill="url(#crestSolidGold)" />
    </g>

    {/* Left Flourish Wing */}
    <path
      d="M98 22C84 22 74 16 62 16C51 16 42 20 33 20C24 20 16 17 7 12C3 10 1 6 0 3M62 16C66 9 73 7 81 8C88 9 94 14 100 19M33 20C35 15 41 12 47 13M88 23C78 28 66 31 55 31"
      stroke="url(#crestGoldGradFull)"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="33" cy="20" r="1.6" fill="#FFF2D6" />
    <circle cx="62" cy="16" r="2.0" fill="#FFF2D6" />
    <circle cx="7" cy="12" r="1.4" fill="#FFF2D6" />

    {/* Right Flourish Wing */}
    <path
      d="M122 22C136 22 146 16 158 16C169 16 178 20 187 20C196 20 204 17 213 12C217 10 219 6 220 3M158 16C154 9 147 7 139 8C132 9 126 14 120 19M187 20C185 15 179 12 173 13M132 23C142 28 154 31 165 31"
      stroke="url(#crestGoldGradFull)"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="187" cy="20" r="1.6" fill="#FFF2D6" />
    <circle cx="158" cy="16" r="2.0" fill="#FFF2D6" />
    <circle cx="213" cy="12" r="1.4" fill="#FFF2D6" />

    {/* Center Horizontal Support Line */}
    <line x1="25" y1="36" x2="195" y2="36" stroke="url(#crestGoldGradFull)" strokeWidth="0.8" />
    <circle cx="110" cy="36" r="1.5" fill="#DFC794" />
  </svg>
);

/**
 * Inverted Baroque Filigree Crest below "ENTRAR AL BAILE"
 */
export const BaroqueCrestBottom: React.FC<{ className?: string }> = ({ className = "w-44 h-9" }) => (
  <div className="rotate-180 flex justify-center">
    <BaroqueCrestTop className={className} />
  </div>
);

/**
 * Top-Left Grand Venetian Masquerade Mask with Theatrical Velvet Drapery & Crimson Feathers
 * Recreating the exact dramatic, luxurious composition from the reference image.
 */
export const LargeVenetianMask: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`pointer-events-none select-none ${className}`}>
    <svg
      viewBox="0 0 380 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-36 sm:w-52 md:w-68 lg:w-80 h-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]"
    >
      <defs>
        {/* Deep Crimson Velvet Gradient for Drapery */}
        <linearGradient id="velvetDrapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A060E" />
          <stop offset="25%" stopColor="#7E111E" />
          <stop offset="50%" stopColor="#3B050B" />
          <stop offset="80%" stopColor="#1E0205" />
          <stop offset="100%" stopColor="#0B0102" />
        </linearGradient>

        {/* Ostrich Plumes Crimson Gradients */}
        <linearGradient id="plumeDeep" x1="10%" y1="100%" x2="90%" y2="0%">
          <stop offset="0%" stopColor="#250205" />
          <stop offset="35%" stopColor="#87101E" />
          <stop offset="70%" stopColor="#C92035" />
          <stop offset="90%" stopColor="#E6394D" />
          <stop offset="100%" stopColor="#87101E" />
        </linearGradient>

        <linearGradient id="plumeHighlight" x1="0%" y1="90%" x2="100%" y2="10%">
          <stop offset="0%" stopColor="#38040A" />
          <stop offset="40%" stopColor="#A81527" />
          <stop offset="75%" stopColor="#E6394D" />
          <stop offset="95%" stopColor="#FFA6B2" />
          <stop offset="100%" stopColor="#87101E" />
        </linearGradient>

        {/* Authentic Venetian Gold Gradients */}
        <linearGradient id="goldMaskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF5" />
          <stop offset="25%" stopColor="#E5C378" />
          <stop offset="55%" stopColor="#B38A33" />
          <stop offset="85%" stopColor="#785614" />
          <stop offset="100%" stopColor="#DFC794" />
        </linearGradient>

        <linearGradient id="goldShimmer" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C6A15B" />
          <stop offset="50%" stopColor="#FFF9E6" />
          <stop offset="100%" stopColor="#8E7036" />
        </linearGradient>

        <radialGradient id="goldAmbientMask" cx="45%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#FFE8A8" stopOpacity="0.8" />
          <stop offset="45%" stopColor="#DFC794" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#C6A15B" stopOpacity="0" />
        </radialGradient>

        {/* Pearl / Crystal Drops */}
        <radialGradient id="pearlShine" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#FFF4DE" />
          <stop offset="85%" stopColor="#A6874E" />
          <stop offset="100%" stopColor="#4A3B1C" />
        </radialGradient>
      </defs>

      {/* 1. Dramatic Corner Theater Curtain Swag (Left side) */}
      <path
        d="M0 0H260C205 45 150 95 115 160C85 220 65 300 0 380V0Z"
        fill="url(#velvetDrapeGrad)"
      />
      {/* Velvet Folds & Gold Cord Trim */}
      <path
        d="M0 80C60 95 130 135 155 195C175 255 180 320 160 400"
        stroke="#9E1222"
        strokeWidth="4"
        strokeOpacity="0.45"
        strokeLinecap="round"
      />
      <path
        d="M35 0C70 50 115 115 135 190C155 270 140 350 110 400"
        stroke="#1E0205"
        strokeWidth="5"
        strokeOpacity="0.8"
        strokeLinecap="round"
      />
      {/* Gold Trim Tassel edge along velvet curtain */}
      <path
        d="M260 0C205 45 150 95 115 160C85 220 65 300 0 380"
        stroke="url(#goldShimmer)"
        strokeWidth="2.5"
        strokeDasharray="5 3"
        strokeOpacity="0.85"
      />

      {/* 2. Magnificent Fan of Ostrich Plumes (Crimson / Scarlet) */}
      {/* Plume 1: High arch curving upward */}
      <path
        d="M140 220C125 140 100 60 130 10C152 35 168 110 160 210Z"
        fill="url(#plumeDeep)"
        filter="drop-shadow(0 4px 12px rgba(0,0,0,0.7))"
      />
      {/* Plume 2: Sweeping grand plume to the top right */}
      <path
        d="M150 215C165 130 205 50 260 15C230 55 200 135 168 220Z"
        fill="url(#plumeHighlight)"
      />
      {/* Plume 3: Leftward billow */}
      <path
        d="M130 230C95 170 45 120 20 80C50 100 105 155 138 225Z"
        fill="url(#plumeDeep)"
        opacity="0.9"
      />
      {/* Plume 4: Center full plume */}
      <path
        d="M145 220C140 130 160 60 195 25C190 70 178 145 155 218Z"
        fill="url(#plumeDeep)"
      />
      {/* Plume quills / golden highlights */}
      <path d="M140 220C130 145 115 70 130 10" stroke="#FFE7A3" strokeWidth="1.5" strokeOpacity="0.75" />
      <path d="M150 215C165 135 195 70 260 15" stroke="#FFE7A3" strokeWidth="1.2" strokeOpacity="0.65" />

      {/* 3. The Grand Ornate Venetian Mask (Angled diagonally ~20°) */}
      <g transform="translate(85, 140) rotate(-18)">
        {/* Warm Golden Glow behind the Mask */}
        <ellipse cx="105" cy="58" rx="80" ry="42" fill="url(#goldAmbientMask)" pointerEvents="none" />

        {/* Mask Main Shell */}
        <path
          d="M10 50C18 25 54 12 105 25C156 12 192 25 200 50C208 76 188 104 160 108C136 112 122 82 105 82C88 82 74 112 50 108C22 104 2 76 10 50Z"
          fill="#1C0509"
          stroke="url(#goldMaskGrad)"
          strokeWidth="4.2"
        />

        {/* Metallic Bevel Inset */}
        <path
          d="M18 52C25 32 58 19 105 31C152 19 185 32 192 52C198 73 181 97 156 101C134 105 120 78 105 78C90 78 76 105 54 101C29 97 12 73 18 52Z"
          fill="none"
          stroke="url(#goldShimmer)"
          strokeWidth="1.8"
          strokeOpacity="0.85"
        />

        {/* Left Eye Cutout & Filigree Border */}
        <path
          d="M42 50C52 40 76 43 80 56C76 66 52 66 42 60C37 54 37 53 42 50Z"
          fill="#0B0909"
          stroke="url(#goldMaskGrad)"
          strokeWidth="3"
        />
        <path d="M46 44C52 36 64 35 74 41M44 65C54 71 68 70 77 63" stroke="url(#goldShimmer)" strokeWidth="1.4" />

        {/* Right Eye Cutout & Filigree Border */}
        <path
          d="M168 50C158 40 134 43 130 56C134 66 158 66 168 60C173 54 173 53 168 50Z"
          fill="#0B0909"
          stroke="url(#goldMaskGrad)"
          strokeWidth="3"
        />
        <path d="M164 44C158 36 146 35 136 41M166 65C156 71 142 70 133 63" stroke="url(#goldShimmer)" strokeWidth="1.4" />

        {/* Crown of Filigree / Tiara atop Mask Forehead */}
        <path
          d="M105 22C100 8 110 8 105 2M88 28C80 14 88 13 83 7M122 28C130 14 122 13 127 7M70 34C60 21 70 20 65 14M140 34C150 21 140 20 145 14"
          stroke="url(#goldMaskGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Crown Pearls */}
        <circle cx="105" cy="2" r="3.8" fill="url(#pearlShine)" stroke="#6E5016" strokeWidth="0.8" />
        <circle cx="83" cy="7" r="2.8" fill="url(#pearlShine)" stroke="#6E5016" strokeWidth="0.6" />
        <circle cx="127" cy="7" r="2.8" fill="url(#pearlShine)" stroke="#6E5016" strokeWidth="0.6" />
        <circle cx="65" cy="14" r="2.4" fill="url(#pearlShine)" stroke="#6E5016" strokeWidth="0.5" />
        <circle cx="145" cy="14" r="2.4" fill="url(#pearlShine)" stroke="#6E5016" strokeWidth="0.5" />

        {/* Ornate Baroque Scrollwork along Cheeks */}
        <path
          d="M26 40C20 24 34 14 45 19C56 24 56 34 48 40M184 40C190 24 176 14 165 19C154 24 154 34 162 40"
          stroke="url(#goldMaskGrad)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M56 80C68 92 84 87 95 76M154 80C142 92 126 87 115 76"
          stroke="url(#goldMaskGrad)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Central Forehead Medallion with Ruby Gemstone */}
        <circle cx="105" cy="36" r="6" fill="#8F1724" stroke="url(#goldMaskGrad)" strokeWidth="2" />
        <circle cx="103" cy="34" r="1.8" fill="#FFF2D6" />

        {/* Hanging Jeweled Strings and Crystal Teardrops */}
        {/* Left string */}
        <path d="M26 75C21 90 24 108 28 122" stroke="url(#goldShimmer)" strokeWidth="1.6" strokeDasharray="3 2" />
        <circle cx="26" cy="90" r="2.2" fill="url(#pearlShine)" />
        <circle cx="24" cy="106" r="2.4" fill="url(#pearlShine)" />
        <path d="M28 122C26 128 31 134 28 138C25 134 30 128 28 122Z" fill="url(#pearlShine)" />

        {/* Right string */}
        <path d="M184 75C189 90 186 108 182 122" stroke="url(#goldShimmer)" strokeWidth="1.6" strokeDasharray="3 2" />
        <circle cx="184" cy="90" r="2.2" fill="url(#pearlShine)" />
        <circle cx="186" cy="106" r="2.4" fill="url(#pearlShine)" />
        <path d="M182 122C184 128 179 134 182 138C185 134 180 128 182 122Z" fill="url(#pearlShine)" />
      </g>
    </svg>
  </div>
);

/**
 * Top-Right Velvet Theater Curtain Swag with Gold Fringe
 */
export const VelvetDrapeCornerRight: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`pointer-events-none select-none ${className}`}>
    <svg
      viewBox="0 0 280 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-28 sm:w-40 md:w-52 lg:w-64 h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.85)]"
    >
      <defs>
        <linearGradient id="velvetRightSwag" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5A0812" />
          <stop offset="35%" stopColor="#851220" />
          <stop offset="70%" stopColor="#38040A" />
          <stop offset="100%" stopColor="#150103" />
        </linearGradient>
        <linearGradient id="goldCordFringe" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2D6" />
          <stop offset="50%" stopColor="#DFC794" />
          <stop offset="100%" stopColor="#8E7036" />
        </linearGradient>
      </defs>

      {/* Main Swag Shape */}
      <path
        d="M280 0H70C125 35 175 75 205 130C230 170 240 215 280 245V0Z"
        fill="url(#velvetRightSwag)"
      />
      {/* Deep velvet folds */}
      <path
        d="M280 55C240 60 185 95 170 135C150 175 150 215 170 245"
        stroke="#A81829"
        strokeWidth="3.5"
        strokeOpacity="0.4"
      />
      <path
        d="M245 0C210 40 175 100 185 165C195 225 225 245 280 260"
        stroke="#220306"
        strokeWidth="4"
        strokeOpacity="0.8"
      />
      {/* Gold Fringe Edge */}
      <path
        d="M70 0C125 35 175 75 205 130C230 170 240 215 280 245"
        stroke="url(#goldCordFringe)"
        strokeWidth="2.2"
        strokeDasharray="5 2.5"
        strokeOpacity="0.85"
      />
    </svg>
  </div>
);

/**
 * Antique Venetian Brass Lanterns with Glowing Pillar Candles & Rich Red Roses (Lower-Left Foreground)
 * Exactly matching the warm, glowing, theatrical lanterns in the reference image.
 */
export const AntiqueLanternLeft: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`pointer-events-none select-none ${className}`}>
    <svg
      viewBox="0 0 220 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 sm:w-36 md:w-48 lg:w-56 h-auto drop-shadow-[0_12px_35px_rgba(0,0,0,0.95)]"
    >
      <defs>
        {/* Metallic Antique Brass Gradients */}
        <linearGradient id="brassMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4D6" />
          <stop offset="30%" stopColor="#DFC794" />
          <stop offset="70%" stopColor="#C6A15B" />
          <stop offset="100%" stopColor="#5E4314" />
        </linearGradient>

        <linearGradient id="brassDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8E7036" />
          <stop offset="50%" stopColor="#5E4314" />
          <stop offset="100%" stopColor="#2E1F07" />
        </linearGradient>

        {/* Warm Candlelight Bloom Halo */}
        <radialGradient id="candleHaloTall" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#FFF8E0" stopOpacity="0.95" />
          <stop offset="25%" stopColor="#FFD369" stopOpacity="0.8" />
          <stop offset="55%" stopColor="#FF9F1C" stopOpacity="0.4" />
          <stop offset="85%" stopColor="#C6A15B" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#C6A15B" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="candleHaloShort" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#FFF8E0" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#FFC857" stopOpacity="0.75" />
          <stop offset="60%" stopColor="#FF9F1C" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#C6A15B" stopOpacity="0" />
        </radialGradient>

        {/* Velvet Crimson Rose Petals */}
        <radialGradient id="roseCrimson" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#D6223E" />
          <stop offset="40%" stopColor="#961324" />
          <stop offset="80%" stopColor="#520711" />
          <stop offset="100%" stopColor="#240206" />
        </radialGradient>
      </defs>

      {/* ========================================================
          1. TALL MASTER LANTERN (BACK LEFT)
          ======================================================== */}
      {/* Candle Light Radiance Halo */}
      <circle cx="95" cy="140" r="75" fill="url(#candleHaloTall)" />

      {/* Hanging Brass Ring */}
      <circle cx="95" cy="28" r="14" stroke="url(#brassMetallic)" strokeWidth="3.5" fill="none" />
      <rect x="90" y="38" width="10" height="8" fill="url(#brassMetallic)" rx="1.5" />

      {/* Pagoda / Gothic Roof Canopy */}
      <path d="M50 75L95 46L140 75H50Z" fill="url(#brassMetallic)" stroke="#3E2B0C" strokeWidth="1" />
      <rect x="46" y="75" width="98" height="6" rx="1.5" fill="url(#brassMetallic)" />

      {/* Glass Chamber & Brass Frame Columns */}
      <rect x="54" y="81" width="82" height="110" rx="2" fill="#FFFDF2" fillOpacity="0.25" stroke="url(#brassMetallic)" strokeWidth="3" />
      <line x1="60" y1="81" x2="60" y2="191" stroke="url(#brassMetallic)" strokeWidth="3.5" />
      <line x1="130" y1="81" x2="130" y2="191" stroke="url(#brassMetallic)" strokeWidth="3.5" />
      <line x1="95" y1="81" x2="95" y2="191" stroke="url(#brassMetallic)" strokeWidth="2" strokeOpacity="0.65" />

      {/* Gothic Arched Wire Details in Glass */}
      <path d="M60 115C75 95 85 95 95 115C105 95 115 95 130 115" stroke="url(#brassMetallic)" strokeWidth="1.5" fill="none" />

      {/* Burning Tall Pillar Candle Inside */}
      <rect x="83" y="130" width="24" height="58" rx="2.5" fill="#FFFCE6" />
      {/* Wax Drips */}
      <path d="M83 135C85 140 88 144 87 150M107 138C105 142 105 146 104 152" stroke="#FFF7D1" strokeWidth="1.8" strokeLinecap="round" />
      {/* Flame */}
      <path
        d="M95 110C91 117 89 123 95 129C101 123 99 117 95 110Z"
        fill="#FFFFFF"
        className="animate-pulse"
      />
      <circle cx="95" cy="124" r="3.5" fill="#FFA726" />

      {/* Tall Lantern Base */}
      <rect x="48" y="191" width="94" height="8" rx="2" fill="url(#brassMetallic)" />
      <path d="M52 199L44 212H146L138 199H52Z" fill="url(#brassDark)" />

      {/* ========================================================
          2. SECONDARY SMALLER BRASS LANTERN (FOREGROUND RIGHT)
          ======================================================== */}
      {/* Halo for smaller candle */}
      <circle cx="160" cy="235" r="45" fill="url(#candleHaloShort)" />

      {/* Smaller lantern hanging ring & roof */}
      <circle cx="160" cy="172" r="9" stroke="url(#brassMetallic)" strokeWidth="2.5" fill="none" />
      <path d="M132 198L160 181L188 198H132Z" fill="url(#brassMetallic)" />
      <rect x="130" y="198" width="60" height="4.5" rx="1" fill="url(#brassMetallic)" />

      {/* Glass chamber */}
      <rect x="135" y="202.5" width="50" height="65" rx="1.5" fill="#FFFDF2" fillOpacity="0.22" stroke="url(#brassMetallic)" strokeWidth="2.5" />
      <line x1="140" y1="202.5" x2="140" y2="267.5" stroke="url(#brassMetallic)" strokeWidth="2.5" />
      <line x1="180" y1="202.5" x2="180" y2="267.5" stroke="url(#brassMetallic)" strokeWidth="2.5" />

      {/* Small glowing candle */}
      <rect x="152" y="235" width="16" height="30" rx="2" fill="#FFFCE6" />
      {/* Flame */}
      <path
        d="M160 220C157 225 155 229 160 234C165 229 163 225 160 220Z"
        fill="#FFFFFF"
        className="animate-pulse"
      />
      <circle cx="160" cy="230" r="2.5" fill="#FFA726" />

      {/* Small Lantern Base */}
      <rect x="131" y="267.5" width="58" height="6" rx="1" fill="url(#brassMetallic)" />
      <path d="M134 273.5L128 282H192L186 273.5H134Z" fill="url(#brassDark)" />

      {/* ========================================================
          3. CLUSTERS OF VELVET RED ROSES & PETALS AT THE BASE
          ======================================================== */}
      {/* Main Big Rose Left */}
      <g transform="translate(42, 215)">
        <circle cx="18" cy="18" r="18" fill="url(#roseCrimson)" />
        <path d="M12 10C17 7 24 9 26 14C24 19 17 19 13 17C9 15 9 13 12 10Z" stroke="#E6394D" strokeWidth="1.4" fill="none" />
        <path d="M8 20C12 26 21 26 26 22C31 18 29 13 24 11" stroke="#FF5C70" strokeWidth="1.2" strokeOpacity="0.75" fill="none" />
      </g>

      {/* Center Rose */}
      <g transform="translate(85, 222)">
        <circle cx="16" cy="16" r="16" fill="url(#roseCrimson)" />
        <path d="M11 9C15 7 21 9 23 13C21 17 15 17 11 15C8 13 8 11 11 9Z" stroke="#E6394D" strokeWidth="1.3" fill="none" />
      </g>

      {/* Foreground Front Rose (Largest) */}
      <g transform="translate(18, 245)">
        <circle cx="22" cy="22" r="22" fill="url(#roseCrimson)" />
        <path d="M14 12C20 8 29 11 32 17C29 23 20 23 15 21C10 18 10 15 14 12Z" stroke="#E6394D" strokeWidth="1.6" fill="none" />
        <path d="M9 24C14 31 25 31 31 26C37 21 34 15 28 13" stroke="#FF5C70" strokeWidth="1.3" strokeOpacity="0.8" fill="none" />
      </g>

      {/* Right Rose clustered near small lantern */}
      <g transform="translate(118, 260)">
        <circle cx="15" cy="15" r="15" fill="url(#roseCrimson)" />
        <path d="M10 8C14 6 20 8 22 12C20 16 14 16 10 14" stroke="#E6394D" strokeWidth="1.2" fill="none" />
      </g>

      {/* Front Right Rose */}
      <g transform="translate(165, 270)">
        <circle cx="17" cy="17" r="17" fill="url(#roseCrimson)" />
        <path d="M11 9C16 7 22 9 24 13C22 17 16 17 11 15" stroke="#E6394D" strokeWidth="1.3" fill="none" />
      </g>

      {/* Scattered Crimson Rose Petals on Cobblestones */}
      <path d="M10 295C15 290 22 292 20 298C18 304 9 301 10 295Z" fill="#961324" />
      <path d="M55 288C61 283 68 285 66 291C64 296 54 294 55 288Z" fill="#7E111E" />
      <path d="M95 302C101 297 108 299 106 305C104 310 94 308 95 302Z" fill="#C92035" />
      <path d="M145 295C150 290 157 292 155 298C153 303 144 301 145 295Z" fill="#961324" />
      <path d="M205 298C210 293 218 295 216 301C214 306 204 304 205 298Z" fill="#87101E" />
    </svg>
  </div>
);

/**
 * Matching Antique Venetian Brass Lanterns with Glowing Pillar Candles & Red Roses (Lower-Right Foreground)
 */
export const AntiqueLanternRight: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`pointer-events-none select-none scale-x-[-1] ${className}`}>
    <AntiqueLanternLeft />
  </div>
);

/**
 * Glowing Fairy Lights and Golden Honeyed Ambient Sparks along the Arch
 */
export const FairyLightsArch: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
    {/* Left Column Fairy Lights */}
    <div className="absolute top-[14%] left-[7%] sm:left-[12%] w-2 h-2 rounded-full bg-[#FFF4DC] shadow-[0_0_14px_#DFC794,0_0_24px_#FFC857] animate-pulse" style={{ animationDuration: '2.5s' }} />
    <div className="absolute top-[22%] left-[5%] sm:left-[9%] w-2.5 h-2.5 rounded-full bg-[#FFE8AC] shadow-[0_0_16px_#DFC794,0_0_26px_#FFA726] animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '3s' }} />
    <div className="absolute top-[32%] left-[6%] sm:left-[11%] w-2 h-2 rounded-full bg-[#FFF9EB] shadow-[0_0_14px_#DFC794,0_0_22px_#FFB300] animate-pulse" style={{ animationDelay: '0.6s', animationDuration: '2.2s' }} />
    <div className="absolute top-[44%] left-[4%] sm:left-[8%] w-2.5 h-2.5 rounded-full bg-[#FFE4A0] shadow-[0_0_16px_#DFC794,0_0_28px_#FF9800] animate-pulse" style={{ animationDelay: '1.8s', animationDuration: '2.8s' }} />
    <div className="absolute top-[56%] left-[5%] sm:left-[10%] w-2 h-2 rounded-full bg-[#FFF4DC] shadow-[0_0_12px_#DFC794] animate-pulse" style={{ animationDelay: '0.9s', animationDuration: '2.4s' }} />

    {/* Upper Curve Fairy Lights (Framing top of arch) */}
    <div className="absolute top-[8%] left-[19%] sm:left-[22%] w-2.5 h-2.5 rounded-full bg-[#FFF8E7] shadow-[0_0_16px_#DFC794,0_0_28px_#FFC107] animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3.2s' }} />
    <div className="absolute top-[5%] left-[34%] w-2 h-2 rounded-full bg-[#FFE29A] shadow-[0_0_14px_#DFC794,0_0_22px_#FFA000] animate-pulse" style={{ animationDelay: '0.4s', animationDuration: '2.1s' }} />
    <div className="absolute top-[4%] left-[50%] -translate-x-1/2 w-3 h-3 rounded-full bg-[#FFFFFF] shadow-[0_0_20px_#FFF0D0,0_0_36px_#FFD54F] animate-pulse" style={{ animationDelay: '1.1s', animationDuration: '2.6s' }} />
    <div className="absolute top-[5%] right-[34%] w-2 h-2 rounded-full bg-[#FFE29A] shadow-[0_0_14px_#DFC794,0_0_22px_#FFA000] animate-pulse" style={{ animationDelay: '2.2s', animationDuration: '2.9s' }} />
    <div className="absolute top-[8%] right-[19%] sm:right-[22%] w-2.5 h-2.5 rounded-full bg-[#FFF8E7] shadow-[0_0_16px_#DFC794,0_0_28px_#FFC107] animate-pulse" style={{ animationDelay: '0.7s', animationDuration: '3.1s' }} />

    {/* Right Column Fairy Lights */}
    <div className="absolute top-[14%] right-[7%] sm:right-[12%] w-2 h-2 rounded-full bg-[#FFF4DC] shadow-[0_0_14px_#DFC794,0_0_24px_#FFC857] animate-pulse" style={{ animationDelay: '1.7s', animationDuration: '2.5s' }} />
    <div className="absolute top-[22%] right-[5%] sm:right-[9%] w-2.5 h-2.5 rounded-full bg-[#FFE8AC] shadow-[0_0_16px_#DFC794,0_0_26px_#FFA726] animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '2.7s' }} />
    <div className="absolute top-[32%] right-[6%] sm:right-[11%] w-2 h-2 rounded-full bg-[#FFF9EB] shadow-[0_0_14px_#DFC794,0_0_22px_#FFB300] animate-pulse" style={{ animationDelay: '2.0s', animationDuration: '2.3s' }} />
    <div className="absolute top-[44%] right-[4%] sm:right-[8%] w-2.5 h-2.5 rounded-full bg-[#FFE4A0] shadow-[0_0_16px_#DFC794,0_0_28px_#FF9800] animate-pulse" style={{ animationDelay: '1.3s', animationDuration: '3.3s' }} />
    <div className="absolute top-[56%] right-[5%] sm:right-[10%] w-2 h-2 rounded-full bg-[#FFF4DC] shadow-[0_0_12px_#DFC794] animate-pulse" style={{ animationDelay: '0.8s', animationDuration: '2.2s' }} />
  </div>
);
