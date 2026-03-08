export interface Game {
  id: string;
  nombre: string;
  tipo: "interior" | "exterior" | "ambos";
  ramas: string[]; // manada, tropa, comunidad, clan
  participantes: { min: number; max: number };
  materiales: string[];
  duracion: number; // minutos
  descripcion: string;
  instrucciones: string[];
  variantes?: string[];
  icono: string;
}

export const gameCategories = [
  { id: "todos", label: "Todos", icono: "🎲" },
  { id: "interior", label: "Interior", icono: "🏠" },
  { id: "exterior", label: "Exterior", icono: "🌳" },
  { id: "ambos", label: "Ambos", icono: "🔄" },
];

export const games: Game[] = [
  {
    id: "captura-la-bandera",
    nombre: "Captura la Bandera",
    tipo: "exterior",
    ramas: ["tropa", "comunidad", "clan"],
    participantes: { min: 10, max: 40 },
    materiales: ["2 banderas o pañoletas de colores distintos", "Cinta para delimitar territorios"],
    duracion: 45,
    descripcion: "Clásico juego de estrategia por equipos. Cada equipo debe capturar la bandera rival y llevarla a su territorio sin ser atrapado.",
    instrucciones: [
      "Divide al grupo en 2 equipos iguales.",
      "Delimita dos territorios claramente con cinta o marcas naturales.",
      "Cada equipo esconde su bandera en su territorio (debe ser visible parcialmente).",
      "Al silbatazo, los equipos intentan capturar la bandera rival.",
      "Si un jugador es tocado en territorio enemigo, queda 'congelado' hasta que un compañero lo toque.",
      "Gana el equipo que lleve la bandera rival a su territorio."
    ],
    variantes: ["Con 3 o 4 equipos", "Con vidas (pañoletas en la cintura)", "Nocturna con linternas"],
    icono: "🏴"
  },
  {
    id: "kim",
    nombre: "Juego de Kim",
    tipo: "interior",
    ramas: ["manada", "tropa"],
    participantes: { min: 4, max: 30 },
    materiales: ["20-30 objetos variados", "Tela o manta para cubrirlos", "Papel y lápiz para cada participante"],
    duracion: 15,
    descripcion: "Juego de observación y memoria inspirado en el libro 'Kim' de Rudyard Kipling. Los scouts deben memorizar objetos en un tiempo limitado.",
    instrucciones: [
      "Coloca 20-30 objetos sobre una mesa y cúbrelos con la tela.",
      "Destapa los objetos y da 1 minuto para observarlos (sin tocar).",
      "Vuelve a cubrir los objetos.",
      "Cada participante escribe todos los objetos que recuerde.",
      "Gana quien más objetos recuerde correctamente."
    ],
    variantes: ["Kim de sonidos (identificar sonidos con ojos vendados)", "Kim de tacto (reconocer objetos sin ver)", "Kim de olor (identificar sustancias por olor)"],
    icono: "👁️"
  },
  {
    id: "posta-scout",
    nombre: "Carrera de Postas Scout",
    tipo: "exterior",
    ramas: ["tropa", "comunidad"],
    participantes: { min: 12, max: 40 },
    materiales: ["Cuerdas para nudos", "Brújula", "Vendas para primeros auxilios", "Señales impresas", "Cronómetro"],
    duracion: 60,
    descripcion: "Circuito de pruebas técnicas por patrullas. Cada posta evalúa una habilidad scout diferente.",
    instrucciones: [
      "Prepara 5-8 postas con desafíos diferentes (nudos, orientación, primeros auxilios, señales, etc.).",
      "Asigna un evaluador a cada posta.",
      "Las patrullas rotan por las postas con un tiempo máximo por estación (5-7 minutos).",
      "En cada posta se otorgan puntos por correcta ejecución y velocidad.",
      "Al finalizar todas las postas, se suman los puntos.",
      "Gana la patrulla con mayor puntaje total."
    ],
    icono: "🏁"
  },
  {
    id: "sardinas",
    nombre: "Sardinas",
    tipo: "ambos",
    ramas: ["manada", "tropa"],
    participantes: { min: 8, max: 25 },
    materiales: ["Ninguno"],
    duracion: 20,
    descripcion: "El escondite al revés: una persona se esconde y todos los demás la buscan. Cuando alguien la encuentra, se esconde con ella.",
    instrucciones: [
      "Un voluntario se esconde mientras todos cuentan hasta 50.",
      "Todos salen a buscar al escondido, pero cada uno va SOLO.",
      "Cuando alguien encuentra al escondido, se esconde con él en silencio.",
      "El juego continúa hasta que todos están apretados como sardinas en el escondite.",
      "El último en encontrar el grupo pierde y será quien se esconda en la siguiente ronda."
    ],
    icono: "🐟"
  },
  {
    id: "lobos-y-cazadores",
    nombre: "Lobos y Cazadores",
    tipo: "exterior",
    ramas: ["manada"],
    participantes: { min: 10, max: 30 },
    materiales: ["Pañoletas o cintas (una por lobo)"],
    duracion: 25,
    descripcion: "Juego de persecución temático para la Manada. Los cazadores intentan atrapar a los lobos quitándoles su cola (pañoleta).",
    instrucciones: [
      "Divide el grupo: 1/3 son cazadores, 2/3 son lobos.",
      "Cada lobo se coloca una pañoleta colgando de la cintura (la cola).",
      "Los cazadores deben quitar las colas de los lobos.",
      "Los lobos deben huir y proteger su cola.",
      "Un lobo sin cola queda fuera hasta la siguiente ronda.",
      "Ganan los lobos si al menos 3 conservan su cola al final del tiempo (5 minutos).",
      "Se repite intercambiando roles."
    ],
    icono: "🐺"
  },
  {
    id: "mensaje-cifrado",
    nombre: "Mensaje Cifrado",
    tipo: "interior",
    ramas: ["tropa", "comunidad"],
    participantes: { min: 6, max: 30 },
    materiales: ["Papel", "Lápices", "Tabla de cifrado (morse, semáforo, etc.)"],
    duracion: 30,
    descripcion: "Desafío de comunicación donde las patrullas deben descifrar mensajes usando códigos scout.",
    instrucciones: [
      "Prepara mensajes cifrados en código Morse, semáforo o alfabeto scout.",
      "Entrega un mensaje cifrado a cada patrulla junto con la tabla de referencia.",
      "Las patrullas tienen un tiempo límite para descifrar el mensaje.",
      "El mensaje descifrado contiene una instrucción o acertijo adicional.",
      "Gana la patrulla que complete todo el desafío primero."
    ],
    variantes: ["Combinar varios códigos en un mismo mensaje", "Hacer que las patrullas se envíen mensajes entre sí"],
    icono: "🔐"
  },
  {
    id: "carrera-de-relevos",
    nombre: "Relevos Creativos",
    tipo: "exterior",
    ramas: ["manada", "tropa", "comunidad"],
    participantes: { min: 8, max: 40 },
    materiales: ["Varía según las pruebas elegidas", "Conos o marcas para la pista"],
    duracion: 30,
    descripcion: "Carrera de relevos con pruebas divertidas y variadas en cada tramo.",
    instrucciones: [
      "Divide al grupo en equipos de 4-6 personas.",
      "Marca una pista con conos (ida y vuelta, unos 20 metros).",
      "Cada tramo tiene una prueba diferente: correr con un huevo en cuchara, saltar en costal, caminar con un libro en la cabeza, etc.",
      "Cada integrante hace un tramo diferente.",
      "Gana el equipo que complete todos los tramos primero."
    ],
    variantes: ["Relevos de nudos (hacer un nudo al llegar)", "Relevos de disfraces", "Relevos con obstáculos"],
    icono: "🏃"
  },
  {
    id: "acecho",
    nombre: "Acecho",
    tipo: "exterior",
    ramas: ["tropa", "comunidad", "clan"],
    participantes: { min: 8, max: 30 },
    materiales: ["Silbato", "Zona con vegetación o escondites naturales"],
    duracion: 30,
    descripcion: "Juego de sigilo y observación. Un centinela debe detectar a los scouts que se acercan sigilosamente.",
    instrucciones: [
      "Un centinela se coloca en un punto fijo con buena visibilidad.",
      "Los demás scouts se ubican a 50-100 metros de distancia.",
      "Al silbatazo, los scouts avanzan sigilosamente intentando llegar al centinela.",
      "El centinela señala y nombra a quien detecte moviéndose. Ese scout retrocede 10 pasos.",
      "Gana el primer scout que toque al centinela sin ser detectado.",
      "Se puede jugar en parejas o patrullas."
    ],
    icono: "🥷"
  },
  {
    id: "construccion-pionera",
    nombre: "Construcción Pionera",
    tipo: "exterior",
    ramas: ["tropa", "comunidad", "clan"],
    participantes: { min: 6, max: 24 },
    materiales: ["Varas de madera o bambú (6-8 por equipo)", "Cuerdas para amarres", "Cronómetro"],
    duracion: 60,
    descripcion: "Desafío de construcción con amarres. Las patrullas deben construir una estructura funcional usando técnicas pioneras.",
    instrucciones: [
      "Define la estructura a construir: mesa, torre, puente, balsa, etc.",
      "Entrega los materiales a cada patrulla.",
      "Las patrullas tienen un tiempo límite (45-60 minutos) para construir.",
      "Al final se evalúa: firmeza, funcionalidad, estética y trabajo en equipo.",
      "Se puede hacer una prueba de resistencia (poner peso sobre la mesa, cruzar el puente, etc.).",
      "Gana la patrulla con mejor puntaje total."
    ],
    icono: "🔨"
  },
  {
    id: "naturaleza-bingo",
    nombre: "Bingo de Naturaleza",
    tipo: "exterior",
    ramas: ["manada", "tropa"],
    participantes: { min: 4, max: 30 },
    materiales: ["Cartones de bingo con elementos naturales", "Lápices", "Bolsas para recolectar"],
    duracion: 30,
    descripcion: "Juego de exploración donde los scouts deben encontrar elementos de la naturaleza listados en su cartón de bingo.",
    instrucciones: [
      "Prepara cartones con una grilla 4x4 con elementos naturales (hoja de roble, piedra lisa, pluma, flor amarilla, etc.).",
      "Entrega un cartón y lápiz a cada participante o patrulla.",
      "Al silbatazo, salen a explorar el área buscando los elementos.",
      "Marcan en el cartón cada elemento que encuentren (deben mostrarlo al dirigente).",
      "Gana el primero que complete una línea o todo el cartón.",
      "Al final, devuelven los elementos naturales a su lugar."
    ],
    icono: "🍃"
  },
  {
    id: "nudo-humano",
    nombre: "Nudo Humano",
    tipo: "ambos",
    ramas: ["manada", "tropa", "comunidad"],
    participantes: { min: 6, max: 15 },
    materiales: ["Ninguno"],
    duracion: 15,
    descripcion: "Juego de cooperación y comunicación. El grupo debe desenredarse sin soltar las manos.",
    instrucciones: [
      "Todos se paran en círculo.",
      "Cada persona extiende su mano derecha y toma la mano de alguien que NO esté a su lado.",
      "Repite con la mano izquierda (otra persona diferente).",
      "Sin soltar las manos, el grupo debe desenredarse hasta formar un círculo.",
      "Se permiten pasar por encima o por debajo de los brazos de otros.",
      "El reto está completo cuando forman un círculo (puede quedar con algunas personas mirando hacia afuera)."
    ],
    icono: "🤝"
  },
  {
    id: "rally-fotografico",
    nombre: "Rally Fotográfico",
    tipo: "exterior",
    ramas: ["comunidad", "clan"],
    participantes: { min: 6, max: 30 },
    materiales: ["1 celular con cámara por equipo", "Lista de retos fotográficos"],
    duracion: 60,
    descripcion: "Las patrullas deben completar retos fotográficos creativos en un tiempo límite.",
    instrucciones: [
      "Prepara una lista de 15-20 retos fotográficos (ej: 'Todo el equipo en un árbol', 'Una sombra creativa', 'Algo que empiece con la letra S').",
      "Entrega la lista a cada equipo y asigna un área de acción.",
      "Los equipos tienen 45-60 minutos para completar la mayor cantidad de retos.",
      "Cada foto debe incluir al menos a un miembro del equipo.",
      "Al regresar, se revisan las fotos y se otorgan puntos por creatividad y cumplimiento.",
      "Gana el equipo con más puntos."
    ],
    icono: "📸"
  },
  {
    id: "lobo-oveja-pastor",
    nombre: "El Lobo, la Oveja y el Pastor",
    tipo: "exterior",
    ramas: ["manada"],
    participantes: { min: 10, max: 30 },
    materiales: ["Pañoletas para identificar roles"],
    duracion: 20,
    descripcion: "Juego de persecución con roles temáticos para la Manada.",
    instrucciones: [
      "Elige 2-3 lobos, 1-2 pastores y el resto son ovejas.",
      "Delimita un corral (zona segura) y un campo amplio.",
      "Las ovejas deben cruzar el campo de un lado a otro.",
      "Los lobos intentan atrapar ovejas tocándolas.",
      "Los pastores pueden 'congelar' a un lobo tocándolo por 30 segundos.",
      "Una oveja atrapada se sienta y espera a que un pastor la libere.",
      "Ganan las ovejas si al menos la mitad cruzan el campo."
    ],
    icono: "🐑"
  },
  {
    id: "telefono-descompuesto-scout",
    nombre: "Teléfono Scout",
    tipo: "interior",
    ramas: ["manada", "tropa"],
    participantes: { min: 8, max: 30 },
    materiales: ["Mensajes preparados con vocabulario scout"],
    duracion: 15,
    descripcion: "Versión scout del teléfono descompuesto. Se transmiten mensajes con terminología scout o instrucciones técnicas.",
    instrucciones: [
      "Forma equipos en fila de 6-8 personas.",
      "Susurra un mensaje scout al primero de cada fila (ej: 'El ballestrinque se usa para iniciar un amarre cuadrado en el poste norte').",
      "Cada persona susurra el mensaje al siguiente (solo una vez).",
      "El último escribe lo que entendió.",
      "Se compara con el mensaje original.",
      "Gana el equipo cuyo mensaje final sea más parecido al original."
    ],
    icono: "📞"
  },
  {
    id: "circuito-de-supervivencia",
    nombre: "Circuito de Supervivencia",
    tipo: "exterior",
    ramas: ["tropa", "comunidad", "clan"],
    participantes: { min: 8, max: 24 },
    materiales: ["Kit de primeros auxilios", "Cuerdas", "Brújula", "Fósforos de seguridad", "Materiales para refugio"],
    duracion: 90,
    descripcion: "Circuito completo de supervivencia con estaciones que simulan situaciones reales de emergencia en el campo.",
    instrucciones: [
      "Prepara 5-6 estaciones de supervivencia: construir refugio, encender fuego, primeros auxilios, orientación, señales de emergencia, potabilizar agua.",
      "Cada patrulla rota por las estaciones con tiempo limitado.",
      "En cada estación deben completar la tarea satisfactoriamente para obtener puntos.",
      "Un evaluador califica técnica, trabajo en equipo y seguridad.",
      "Al final se hace una puesta en común de aprendizajes.",
      "Gana la patrulla con mejor desempeño integral."
    ],
    icono: "🏕️"
  },
];
