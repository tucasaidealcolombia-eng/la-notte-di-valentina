export interface PhotoItem {
  id: number;
  romanNumeral: string;
  title: string;
  subtitle: string;
  caption: string;
  quote?: string;
  promptDescription: string;
  sceneTag: string;
  src: string;
  defaultPaths: string[];
  aspectRatio: string;
  objectPosition?: string;
}

export const VALENTINA_PHOTOS: PhotoItem[] = [
  {
    id: 1,
    romanNumeral: "I",
    title: "Bajo el Arco de Luces",
    subtitle: "EL INICIO DE LA NOCHE",
    caption: "Valentina bajo el majestuoso arco de hiedra y luces cálidas, envuelta en su deslumbrante vestido rojo escarlata.",
    quote: "La noche apenas comienza y la magia despierta bajo el velo del misterio.",
    promptDescription: "Valentina beneath the ivy arch with warm lights wearing her red dress",
    sceneTag: "ACTO I · LA APERTURA",
    src: "/images/valentina-1.jpg",
    defaultPaths: [
      "/images/valentina-1.jpg",
      "/assets/valentina-1.jpg"
    ],
    aspectRatio: "aspect-[2/3]",
    objectPosition: "object-center"
  },
  {
    id: 2,
    romanNumeral: "II",
    title: "El Corredor Colonial",
    subtitle: "MISTERIO & ARQUITECTURA",
    caption: "Elegancia y porte atemporal entre arcos de ladrillo visto y sombras dramáticas de época.",
    quote: "Cada paso resuena en los corredores de un palacio que cobra vida.",
    promptDescription: "Valentina in the brick corridor",
    sceneTag: "ACTO II · EL CORREDOR",
    src: "/images/valentina-2.jpg",
    defaultPaths: [
      "/images/valentina-2.jpg",
      "/assets/valentina-2.jpg"
    ],
    aspectRatio: "aspect-[2/3]",
    objectPosition: "object-center"
  },
  {
    id: 3,
    romanNumeral: "III",
    title: "Hacia el Portal",
    subtitle: "PERSPECTIVA EDITORIAL",
    caption: "Una perspectiva posterior de alta costura frente al imponente portón de madera noble.",
    quote: "Frente al umbral donde los sueños se encuentran con el destino.",
    promptDescription: "Valentina photographed from behind at the wooden door",
    sceneTag: "ACTO III · EL PORTAL",
    src: "/images/valentina-3.jpg",
    defaultPaths: [
      "/images/valentina-3.jpg",
      "/assets/valentina-3.jpg"
    ],
    aspectRatio: "aspect-[2/3]",
    objectPosition: "object-center"
  },
  {
    id: 4,
    romanNumeral: "IV",
    title: "Fuerza & Nobleza",
    subtitle: "CON EL CORCEL NEGRO",
    caption: "Valentina en porte de gala real junto al imponente corcel azabache, símbolo de poder y distinción.",
    quote: "Gracia y nobleza en perfecta armonía con la noche.",
    promptDescription: "Valentina with the black horse",
    sceneTag: "ACTO IV · LA NOBLEZA",
    src: "/images/valentina-4.jpg",
    defaultPaths: [
      "/images/valentina-4.jpg",
      "/assets/valentina-4.jpg"
    ],
    aspectRatio: "aspect-[2/3]",
    objectPosition: "object-center"
  },
  {
    id: 5,
    romanNumeral: "V",
    title: "Mirada Escarlata",
    subtitle: "RETRATO ÍNTIMO",
    caption: "Primer plano de belleza serena, tiara de reina y rosas rojas profundas junto a su fiel acompañante.",
    quote: "La mirada que guarda el secreto de quince primaveras convertidas en reina.",
    promptDescription: "Valentina in the close portrait with the horse and red flowers",
    sceneTag: "ACTO V · EL RETRATO",
    src: "/images/valentina-5.jpg",
    defaultPaths: [
      "/images/valentina-5.jpg",
      "/assets/valentina-5.jpg"
    ],
    aspectRatio: "aspect-[2/3]",
    objectPosition: "object-center"
  },
  {
    id: 6,
    romanNumeral: "VI",
    title: "Serenidad Real",
    subtitle: "COMPOSICIÓN DE GALA",
    caption: "Sentada con soberana tranquilidad en su voluminoso vestido escarlata junto al caballo negro.",
    quote: "El final de la antesala, el comienzo de una noche inolvidable.",
    promptDescription: "Valentina seated with the black horse",
    sceneTag: "ACTO VI · LA SERENIDAD",
    src: "/images/valentina-6.jpg",
    defaultPaths: [
      "/images/valentina-6.jpg",
      "/assets/valentina-6.jpg"
    ],
    aspectRatio: "aspect-[2/3]",
    objectPosition: "object-center"
  },
  {
    id: 7,
    romanNumeral: "VII",
    title: "La Protagonista",
    subtitle: "VALENTINA · XV AÑOS",
    caption: "Una nueva etapa está por comenzar.",
    quote: "La esencia de una noche irrepetible.",
    promptDescription: "Valentina portrait in gala dress",
    sceneTag: "LA PROTAGONISTA",
    src: "/images/valentina-7.jpg",
    defaultPaths: [
      "/images/valentina-7.jpg",
      "/images/Valentina-7.jpg"
    ],
    aspectRatio: "aspect-[2/3]",
    objectPosition: "object-center"
  }
];
