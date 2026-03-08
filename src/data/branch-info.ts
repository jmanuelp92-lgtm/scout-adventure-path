export interface BranchInfo {
  id: string;
  lema: string;
  grito: string;
  gritoDescripcion: string;
  promesa: string;
  ley: string[];
  leyTitulo: string;
  maximas?: string[];
  oracion: string;
  oracionTitulo: string;
  patrono: string;
  saludo: string;
  saludoDescripcion: string;
  formacion: string;
  formacionDescripcion: string;
  uniforme: string[];
  marcoSimbolico: string;
  edades: string;
  colorPanuelo: string;
  estructura: string;
  oracionComida: string;
  himno?: { titulo: string; letra: string };
  datosExtra?: { titulo: string; contenido: string }[];
}

// Ley Scout oficial de la Asociación Scouts de Colombia (10 artículos)
const LEY_SCOUT_COLOMBIA: string[] = [
  "El Scout cifra su honor en ser digno de confianza.",
  "El Scout es leal.",
  "El Scout es útil, solidario y ayuda a los demás sin pensar en recompensa.",
  "El Scout es amigo de todos y hermano de cualquier otro Scout sin distinción de credo, etnia, nacionalidad o clase social.",
  "El Scout es cortés y respeta las convicciones y opiniones de los demás.",
  "El Scout ve en la naturaleza la obra de Dios y procura su conservación y su progreso.",
  "El Scout es obediente sin réplica y es responsable y respetuoso.",
  "El Scout sonríe y canta en sus dificultades.",
  "El Scout es ahorrador, trabajador y cuidadoso del bien ajeno.",
  "El Scout es limpio y sano, puro en pensamiento, palabras y acciones.",
];

const ORACION_COMIDA =
  "Señor, unos tienen y no pueden, otros pueden y no tienen, nosotros que tenemos y podemos te damos gracias, Señor. Tú que le das el agua a las plantas, la tierra a los campos, el fruto al hombre, bendice estos alimentos para que ellos nos fortalezcan y te podamos servir mejor.";

export const branchInfoMap: Record<string, BranchInfo> = {
  manada: {
    id: "manada",
    lema: "¡Siempre Mejor!",
    grito: "Gran Clamor",
    gritoDescripcion:
      "Los lobatos forman un círculo (Círculo de Roca). Akela pregunta: «Lobatos, ¿cuál es el lema del lobato?». Los lobatos se agachan tocando el piso con las manos y responden lentamente: «¡Haremos... lo... mejor!» mientras se van levantando. Al final saltan con los dedos índice y medio levantados (orejas de lobo) y gritan: «¡SIEMPRE MEJOR!».",
    promesa:
      "Prometo hacer siempre lo mejor por cumplir mis deberes para con Dios y la Patria, obedecer la Ley de la Manada y hacer una Buena Acción a alguien cada día.",
    ley: [
      "El lobato escucha y obedece al Viejo Lobo.",
      "El lobato se vence a sí mismo.",
    ],
    leyTitulo: "Ley de la Manada (2 artículos)",
    maximas: [
      "El lobato escucha y respeta a los otros.",
      "El lobato es alegre y amigable.",
      "El lobato siempre dice la verdad.",
      "El lobato comparte con su familia.",
      "El lobato ayuda a los demás.",
      "El lobato cuida la naturaleza.",
      "El lobato desea aprender y vencerse a sí mismo.",
    ],
    oracion:
      "Oh, dulce y buen Señor mío, enséñame a ser humilde y bondadoso, a imitar tu ejemplo, a amarte con todo mi corazón y a seguir el camino que me ha de llevar al cielo junto a Ti. Por San Francisco de Asís… ¡Rogad por los Lobatos!",
    oracionTitulo: "Oración del Lobato",
    patrono: "San Francisco de Asís",
    saludo: "Seña del Lobato",
    saludoDescripcion:
      "Se levantan los dedos índice y medio de la mano derecha (orejas del lobo) junto a la sien. Los dos dedos representan los dos artículos de la Ley de la Manada.",
    formacion: "Círculo de Roca",
    formacionDescripcion:
      "Los lobatos forman un círculo alrededor de Akela. Es la formación principal de la Manada, inspirada en el Consejo de la Roca del Libro de las Tierras Vírgenes de Rudyard Kipling. También se usa la formación en fila por seisenas.",
    uniforme: [
      "Camisa scout del grupo",
      "Pañoleta del grupo",
      "Gorra lobato (opcional)",
      "Pantalón oscuro",
      "Insignias de progresión en la manga izquierda",
    ],
    marcoSimbolico:
      "El Libro de las Tierras Vírgenes (El Libro de la Selva) de Rudyard Kipling. Los dirigentes adoptan nombres de personajes: Akela (lobo líder), Baloo (oso), Bagheera (pantera), Raksha (mamá loba). La selva de Seeonee es el mundo de aventuras del lobato.",
    edades: "7 a 11 años",
    colorPanuelo: "Pañoleta del grupo",
    estructura:
      "La Manada se organiza en Seisenas (grupos de 6 lobatos), cada una con un Seisenero (líder) y un Sub-Seisenero. Las seisenas se identifican por colores: negra, gris, blanca, parda, roja y leonada.",
    oracionComida: ORACION_COMIDA,
    datosExtra: [
      {
        titulo: "Progresión",
        contenido:
          "Las etapas de progresión en Manada son: Pata Tierna → Saltador → Rastreador → Cazador → Lobato Superior. Cada etapa tiene requisitos específicos de habilidades, actitudes y servicio.",
      },
      {
        titulo: "Buena Acción",
        contenido:
          "El lobato se compromete a hacer una Buena Acción cada día. Es una invitación a convertir el compromiso en hechos concretos, dando pasos hacia la construcción de un mundo mejor.",
      },
      {
        titulo: "Especialidades",
        contenido:
          "Los lobatos pueden obtener especialidades en áreas como naturaleza, expresión artística, ciencia, deportes, hogar y servicio comunitario. Se representan con insignias en la manga derecha.",
      },
    ],
  },

  tropa: {
    id: "tropa",
    lema: "¡Siempre Listo!",
    grito: "Grito de Tropa",
    gritoDescripcion:
      "Los scouts forman en herradura. El Jefe de Tropa o el Guía de Tropa pregunta: «Scouts, ¿están listos?». La tropa responde al unísono: «¡SIEMPRE LISTOS! ¡SIEMPRE LISTOS! ¡SIEMPRE LISTOS PARA SERVIR!» haciendo el saludo scout con tres dedos levantados.",
    promesa:
      "Yo, por mi honor y con la gracia de Dios, prometo hacer todo cuanto de mí dependa para cumplir mis deberes para con Dios y la Patria, ayudar al prójimo en toda circunstancia, trabajar por la paz y cumplir fielmente la Ley Scout.",
    ley: [...LEY_SCOUT_COLOMBIA],
    leyTitulo: "Ley Scout de Colombia (10 artículos)",
    oracion:
      "Señor, enséñame a ser generoso, a servirte como lo mereces, a dar sin medida, a combatir sin temor a las heridas, a trabajar sin descanso y a sacrificarme sin esperar mayor recompensa que la del saber que cumplo con tu santa voluntad. San Jorge… ¡Ayúdanos a cumplir nuestra Ley y Promesa!",
    oracionTitulo: "Oración del Scout",
    patrono: "San Jorge",
    saludo: "Saludo Scout (tres dedos)",
    saludoDescripcion:
      "Se levantan los dedos índice, medio y anular de la mano derecha a la altura de la sien. Los tres dedos representan los tres puntos de la Promesa Scout: Dios y Patria, ayudar al prójimo, y cumplir la Ley Scout. El pulgar cubre al meñique, simbolizando que el fuerte protege al débil.",
    formacion: "Herradura",
    formacionDescripcion:
      "Los scouts forman en herradura (semicírculo abierto hacia el frente). Las patrullas se ubican en fila, una al lado de la otra, con el Guía de Patrulla al frente de cada una. También se usa la formación en línea y en columna de patrullas.",
    uniforme: [
      "Camisa scout del grupo",
      "Pañoleta del grupo con nudo de amistad",
      "Pantalón scout",
      "Insignias de patrulla y progresión",
      "Bordón (bastón scout)",
    ],
    marcoSimbolico:
      "La vida al aire libre, el campismo y la exploración. El Sistema de Patrullas es el corazón de la Tropa: pequeños grupos autónomos liderados por jóvenes. Cada patrulla tiene un animal totémico, un grito, un color y un rincón de patrulla.",
    edades: "11 a 15 años",
    colorPanuelo: "Pañoleta del grupo",
    estructura:
      "La Tropa se organiza en Patrullas (grupos de 6 a 8 scouts). Cada patrulla tiene un Guía de Patrulla y un Sub-Guía. El Consejo de Tropa y el Consejo de Guías son los órganos de gobierno.",
    oracionComida: ORACION_COMIDA,
    datosExtra: [
      {
        titulo: "Progresión",
        contenido:
          "Las etapas de progresión en Tropa son: Pista → Senda → Rumbo → Travesía → Scout de Primera. Cada etapa requiere desarrollo en técnicas scout, liderazgo, servicio y vida espiritual.",
      },
      {
        titulo: "Promesa del Guía de Patrulla",
        contenido:
          "«Yo prometo obedecerte como Guía de la Patrulla, quererte como hermano mayor, ser leal a mi Patrulla y no desanimarme jamás.»",
      },
      {
        titulo: "Oración del Guía y Dirigente",
        contenido:
          "Señor y Jefe mío, que a pesar de mis debilidades me habéis escogido como guía y guardián de mis hermanos scouts. Haz que mis palabras iluminen sus pasos por el sendero de tu ley; que sepa mostrarle tu huella divina en la naturaleza que habéis creado, que sepa conducirlos de etapa en etapa hasta Ti, Dios mío, enseñarles lo que debo y conducirlos hasta el campo del reposo y la dicha donde habéis establecido tu tienda y la nuestra por la eternidad. Amén.",
      },
    ],
  },

  comunidad: {
    id: "comunidad",
    lema: "¡Servir!",
    grito: "Grito de Comunidad",
    gritoDescripcion:
      "Los caminantes forman en semicírculo. El Coordinador de Comunidad pregunta: «Caminantes, ¿cuál es nuestro compromiso?». La Comunidad responde: «¡SERVIR! ¡Siempre en camino, siempre en servicio!».",
    promesa:
      "Yo, por mi honor y con la gracia de Dios, renuevo mi Promesa Scout y me comprometo a servir a mi comunidad, a buscar la verdad, a trabajar por la justicia y la paz, y a cumplir fielmente la Ley Scout.",
    ley: [...LEY_SCOUT_COLOMBIA],
    leyTitulo: "Ley Scout de Colombia (10 artículos)",
    oracion:
      "Señor, hazme un instrumento de Tu paz. Donde haya odio, ponga yo amor; donde haya ofensa, perdón; donde haya duda, fe; donde haya desesperanza, esperanza; donde haya sombra, luz; donde haya tristeza, alegría. Oh Divino Maestro, que no busque ser consolado sino consolar, ser comprendido sino comprender, ser amado sino amar. Porque dando es como recibimos, perdonando es como somos perdonados, y muriendo es como nacemos a la vida eterna. Amén.",
    oracionTitulo: "Oración del Caminante (Oración de la Paz — San Francisco de Asís)",
    patrono: "Nuestra Señora del Camino",
    saludo: "Saludo Scout (tres dedos)",
    saludoDescripcion:
      "Igual al saludo scout de tres dedos. Los Caminantes lo utilizan con un fuerte sentido de servicio y compromiso comunitario.",
    formacion: "Semicírculo",
    formacionDescripcion:
      "Los caminantes forman en semicírculo abierto. La Comunidad se organiza de manera más horizontal, con un Coordinador de Comunidad elegido entre los mismos jóvenes.",
    uniforme: [
      "Camisa scout del grupo",
      "Pañoleta del grupo",
      "Pantalón scout o de servicio",
      "Insignias de comunidad y proyectos",
    ],
    marcoSimbolico:
      "El Camino como símbolo de la vida y el crecimiento personal. Los Caminantes recorren un camino de autoconocimiento, servicio y compromiso social. El Proyecto es la herramienta principal: los jóvenes diseñan y ejecutan proyectos de servicio comunitario.",
    edades: "15 a 18 años",
    colorPanuelo: "Pañoleta del grupo",
    estructura:
      "La Comunidad se organiza en Equipos de trabajo por proyecto. Tiene un Coordinador y un Consejo de Comunidad donde todos participan en la toma de decisiones de forma democrática.",
    oracionComida: ORACION_COMIDA,
    datosExtra: [
      {
        titulo: "Progresión",
        contenido:
          "La progresión en Comunidad se basa en Empresas y Proyectos de servicio. Los caminantes avanzan desarrollando competencias en las áreas de Corporalidad, Creatividad, Carácter, Afectividad, Sociabilidad y Espiritualidad.",
      },
      {
        titulo: "Carta de Comunidad",
        contenido:
          "Al inicio de cada ciclo, la Comunidad redacta su Carta de Comunidad: un documento con sus objetivos, normas de convivencia, proyectos propuestos y compromisos para el período.",
      },
    ],
  },

  clan: {
    id: "clan",
    lema: "¡Servir!",
    grito: "Grito Rover",
    gritoDescripcion:
      "Los rovers forman en círculo tomados del hombro. El Presidente del Clan dice: «Rovers, ¿cuál es nuestro camino?». El Clan responde: «¡SERVIR! ¡Siempre en ruta, siempre en servicio!».",
    promesa:
      "Yo, por mi honor y con la gracia de Dios, me comprometo a servir lo mejor posible a Dios y a mi país, ayudar a los hombres mis hermanos en toda circunstancia y a vivir cabalmente la Ley Scout.",
    ley: [...LEY_SCOUT_COLOMBIA],
    leyTitulo: "Ley Scout de Colombia (10 artículos)",
    oracion:
      "Dame, Señor: Un corazón vigilante, que ningún pensamiento me aparte de Ti; un corazón noble, que ningún afecto indigno me rebaje; un corazón recto, que ninguna maldad me desvíe; un corazón fuerte, que ninguna pasión esclavice; y un corazón puro para SERVIR. San Pablo… ¡Rogad por los Rovers!",
    oracionTitulo: "Oración Rover",
    patrono: "San Pablo",
    saludo: "Saludo Scout (tres dedos)",
    saludoDescripcion:
      "El saludo Rover utiliza los tres dedos scouts con un fuerte compromiso de servicio al mundo. Es un símbolo de hermandad universal.",
    formacion: "Círculo Rover",
    formacionDescripcion:
      "Los rovers forman en círculo, simbolizando igualdad y hermandad. No hay jerarquías rígidas; todos son iguales en el compromiso de servicio.",
    uniforme: [
      "Camisa scout del grupo",
      "Pañoleta del grupo",
      "Pantalón scout",
      "Insignias de clan y proyectos",
      "Horquilla rover (opcional)",
    ],
    marcoSimbolico:
      "La Ruta como camino de servicio a la humanidad. El Rover es un caminante del mundo que se prepara para la vida adulta con compromiso social, liderazgo y espiritualidad profunda. El lema original de Baden-Powell para los Rovers fue: «Rema tu propia canoa».",
    edades: "18 a 21 años",
    colorPanuelo: "Pañoleta del grupo",
    estructura:
      "El Clan se organiza en Equipos de servicio. Tiene un Presidente de Clan y un Consejo de Clan. Los Rovers asumen roles rotativos de liderazgo y gestión.",
    oracionComida: ORACION_COMIDA,
    himno: {
      titulo: "Himno Rover",
      letra: `Toma tu morral, deja de pensar,
ven conmigo junto al mar;
Toma tu morral, deja de pensar,
ven conmigo a caminar.

Saltan limpias en mi canto
voces de juventud.
Cruzan huellas y fronteras
Rovers de norte y sur.

Y en su verso amanecen
coros de libertad.
En el canto, camarada,
nace la amistad.

Surco rutas peregrinas
tratando de alcanzar,
una estrella compañera
que me habrá de guiar.

Envejecen en mi senda
tiempos que son de ayer.
Ten paciencia, camarada,
surge un amanecer.`,
    },
    datosExtra: [
      {
        titulo: "Progresión",
        contenido:
          "La progresión en Clan se basa en la Partida Rover (compromiso personal de servicio) y el desarrollo de Proyectos de impacto social. Los rovers trabajan en áreas como derechos humanos, medio ambiente, educación y desarrollo comunitario.",
      },
      {
        titulo: "Partida Rover",
        contenido:
          "La Partida Rover es la ceremonia más importante del Clan. El Rover presenta su compromiso personal de servicio ante el Clan y recibe su investidura como Rover activo.",
      },
    ],
  },
};

export function getBranchInfo(branchId: string): BranchInfo | undefined {
  return branchInfoMap[branchId];
}
