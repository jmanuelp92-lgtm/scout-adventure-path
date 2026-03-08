export interface Branch {
  id: string;
  nombre: string;
  edades: string;
  descripcion: string;
  icono: string;
  color: string; // CSS class suffix
}

export const branches: Branch[] = [
  {
    id: "manada",
    nombre: "Manada",
    edades: "7 – 11 años",
    descripcion: "Los Lobatos aprenden a través de El Libro de las Tierras Vírgenes. Juegos, técnicas básicas y mucha aventura en la selva.",
    icono: "🐺",
    color: "manada",
  },
  {
    id: "tropa",
    nombre: "Tropa",
    edades: "11 – 15 años",
    descripcion: "Los Scouts desarrollan habilidades de campismo, supervivencia, orientación y liderazgo en patrulla.",
    icono: "⚜️",
    color: "tropa",
  },
  {
    id: "comunidad",
    nombre: "Comunidad",
    edades: "15 – 18 años",
    descripcion: "Los Caminantes profundizan en servicio comunitario, proyectos sociales, vida al aire libre y autogestión.",
    icono: "🧭",
    color: "comunidad",
  },
  {
    id: "clan",
    nombre: "Clan",
    edades: "18 – 21 años",
    descripcion: "Los Rovers se preparan para la vida adulta con proyectos de impacto, liderazgo y compromiso social.",
    icono: "🔥",
    color: "clan",
  },
];

export function getBranchById(id: string): Branch | undefined {
  return branches.find(b => b.id === id);
}
