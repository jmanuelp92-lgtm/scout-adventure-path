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
  // ===== JUEGOS DE MANADA (Libro de la Selva) =====
  {
    id: "kaa-y-bandar-log",
    nombre: "Kaa y los Bandar-log",
    tipo: "ambos",
    ramas: ["manada"],
    participantes: { min: 8, max: 25 },
    materiales: ["Pañoleta para vendar ojos"],
    duracion: 15,
    descripcion: "Los traviesos monos Bandar-log deben pasar junto a Kaa, la serpiente hipnotizadora, sin hacer ruido.",
    instrucciones: [
      "Un lobato hace de Kaa, sentado en el centro con los ojos vendados.",
      "Alrededor se colocan objetos (las 'piedras') que los monos deben robar.",
      "Los Bandar-log se acercan en silencio para tomar un objeto.",
      "Si Kaa escucha, señala con el brazo: el mono señalado queda hipnotizado y se sienta.",
      "Gana el mono que más objetos logre robar sin ser detectado."
    ],
    icono: "🐍"
  },
  {
    id: "cacería-de-mowgli",
    nombre: "La Cacería de Mowgli",
    tipo: "exterior",
    ramas: ["manada"],
    participantes: { min: 10, max: 30 },
    materiales: ["Pistas de papel", "Premios pequeños"],
    duracion: 40,
    descripcion: "Mowgli se ha perdido en la selva. Las seisenas siguen pistas para encontrarlo.",
    instrucciones: [
      "Esconde pistas escritas por el terreno (huellas, hojas marcadas, dibujos).",
      "Cada pista lleva a la siguiente con un acertijo o señal scout.",
      "Las seisenas trabajan juntas siguiendo el rastro.",
      "La última pista lleva a un 'tesoro' o a Mowgli (un dirigente disfrazado).",
      "Termina con un Gran Aullido celebrando el rescate."
    ],
    variantes: ["Usar señales de pista reales (flechas, círculos)", "Incluir pruebas en cada estación"],
    icono: "🐾"
  },
  {
    id: "akela-dice",
    nombre: "Akela Dice",
    tipo: "ambos",
    ramas: ["manada"],
    participantes: { min: 6, max: 30 },
    materiales: ["Ninguno"],
    duracion: 10,
    descripcion: "Versión scout de 'Simón dice'. Solo se obedece cuando Akela lo ordena.",
    instrucciones: [
      "Un dirigente hace de Akela y da órdenes: 'Akela dice salten', 'corran', 'aúllen'.",
      "Los lobatos solo deben obedecer si la frase empieza con 'Akela dice'.",
      "Quien obedece sin la fórmula queda fuera (o pierde una vida).",
      "Se acelera el ritmo para hacerlo más divertido.",
      "Gana el último lobato en pie."
    ],
    icono: "🐺"
  },
  {
    id: "carrera-de-las-estaciones",
    nombre: "Carrera de las Cuatro Patas",
    tipo: "exterior",
    ramas: ["manada"],
    participantes: { min: 8, max: 24 },
    materiales: ["Conos o marcas"],
    duracion: 15,
    descripcion: "Relevos imitando animales de la selva: pantera, oso, lobo y mono.",
    instrucciones: [
      "Marca una pista de ida y vuelta de 15 metros.",
      "Cada lobato del equipo hace el recorrido imitando un animal: Bagheera (gateando ágil), Baloo (caminando pesado), Akela (corriendo a 4 patas), Bandar-log (saltando).",
      "Al regresar, choca la mano y sale el siguiente.",
      "Gana la seisena que termine primero con buena imitación."
    ],
    icono: "🐾"
  },
  {
    id: "gran-aullido-juego",
    nombre: "El Gran Aullido",
    tipo: "ambos",
    ramas: ["manada"],
    participantes: { min: 6, max: 40 },
    materiales: ["Ninguno"],
    duracion: 5,
    descripcion: "Ceremonia-juego de apertura/cierre donde la manada aúlla en círculo alrededor de Akela.",
    instrucciones: [
      "Akela grita: '¡Manada, manada, manada!'",
      "Los lobatos corren y forman círculo alrededor de Akela en posición de firmes.",
      "A la señal, se ponen en cuclillas con los dedos como orejas y aúllan: '¡Haremos lo mejor!'",
      "Se ponen de pie y hacen el saludo del lobato.",
      "Sirve para abrir y cerrar todas las reuniones."
    ],
    icono: "🌕"
  },
  {
    id: "la-roca-del-consejo",
    nombre: "La Roca del Consejo",
    tipo: "ambos",
    ramas: ["manada"],
    participantes: { min: 6, max: 30 },
    materiales: ["Una piedra grande o cojín como 'roca'"],
    duracion: 15,
    descripcion: "Asamblea simbólica donde la manada habla, reflexiona o decide algo importante.",
    instrucciones: [
      "Se forma un círculo alrededor de la Roca del Consejo.",
      "Akela explica el tema (un problema, una decisión, una reflexión).",
      "Quien tiene la palabra sostiene una rama o pluma; los demás escuchan.",
      "Cada lobato puede aportar su idea.",
      "Akela cierra con una conclusión y se hace el Gran Aullido."
    ],
    icono: "🪨"
  },
  {
    id: "shere-khan",
    nombre: "Cuidado con Shere Khan",
    tipo: "exterior",
    ramas: ["manada"],
    participantes: { min: 10, max: 30 },
    materiales: ["Pañoleta naranja"],
    duracion: 20,
    descripcion: "Persecución temática: Shere Khan, el tigre, intenta cazar a los lobatos en la selva.",
    instrucciones: [
      "Un dirigente o lobato mayor hace de Shere Khan con pañoleta naranja.",
      "Los lobatos son la manada y deben moverse de un refugio a otro al silbatazo.",
      "Shere Khan persigue durante el desplazamiento.",
      "Tocado = queda dormido. Otro lobato puede despertarlo con un toque y diciendo 'buena caza'.",
      "Cambian roles cada 5 minutos."
    ],
    icono: "🐯"
  },
  {
    id: "mimica-jungla",
    nombre: "Mímica de la Selva",
    tipo: "interior",
    ramas: ["manada"],
    participantes: { min: 6, max: 20 },
    materiales: ["Tarjetas con nombres de animales"],
    duracion: 15,
    descripcion: "Los lobatos imitan animales de la selva y los demás adivinan.",
    instrucciones: [
      "Prepara tarjetas con animales (elefante, mono, serpiente, oso, pantera, búho, etc.).",
      "Por turnos, un lobato saca una tarjeta y la imita SIN hablar.",
      "Los demás adivinan; quien acierta primero pasa al frente.",
      "Variante por seisenas: equipo que adivina gana punto."
    ],
    icono: "🎭"
  },
  {
    id: "kim-sonidos",
    nombre: "Kim de Sonidos",
    tipo: "interior",
    ramas: ["manada", "tropa"],
    participantes: { min: 4, max: 20 },
    materiales: ["10 objetos que produzcan sonidos", "Pañoleta para vendar ojos"],
    duracion: 15,
    descripcion: "Versión auditiva del juego de Kim: identificar sonidos con los ojos cerrados.",
    instrucciones: [
      "Los lobatos se sientan en círculo con los ojos vendados.",
      "El dirigente produce 8-10 sonidos distintos (papel arrugado, llaves, agua, silbido, etc.).",
      "Al final, cada lobato escribe o dice qué sonidos reconoció.",
      "Gana quien más acierte."
    ],
    icono: "👂"
  },
  {
    id: "telarana-de-amistad",
    nombre: "Telaraña de la Manada",
    tipo: "ambos",
    ramas: ["manada"],
    participantes: { min: 6, max: 20 },
    materiales: ["Una bola de lana"],
    duracion: 15,
    descripcion: "Juego de presentación y unión donde la manada teje una telaraña simbólica.",
    instrucciones: [
      "Forma un círculo sentados en el piso.",
      "El primer lobato toma la punta de la lana, dice su nombre y algo que le guste de la manada.",
      "Lanza la bola a otro lobato sin soltar la punta.",
      "Se repite hasta que todos hablaron y se forma una telaraña.",
      "Reflexión: 'Si uno suelta, la red se rompe. Así es la manada.'"
    ],
    icono: "🕸️"
  },
  {
    id: "carrera-de-seisenas",
    nombre: "Carrera de Seisenas",
    tipo: "exterior",
    ramas: ["manada"],
    participantes: { min: 12, max: 30 },
    materiales: ["Pañoletas de colores por seisena", "Pruebas preparadas"],
    duracion: 40,
    descripcion: "Postas lúdicas donde cada seisena demuestra trabajo en equipo y aprende técnicas básicas.",
    instrucciones: [
      "Prepara 5 postas: nudo rizo, señales de pista, primeros auxilios básicos, cantar canción con gestos, lanzar al blanco.",
      "Cada seisena recorre las postas con su seisenero como guía.",
      "Un dirigente puntúa esfuerzo y trabajo en equipo (no solo velocidad).",
      "Cierre con Gran Aullido y entrega de puntos a todas las seisenas."
    ],
    icono: "🏁"
  },
  {
    id: "veneno",
    nombre: "El Veneno",
    tipo: "ambos",
    ramas: ["manada", "tropa"],
    participantes: { min: 8, max: 25 },
    materiales: ["Una pelota pequeña"],
    duracion: 10,
    descripcion: "Juego de círculo rápido para soltar tensión: la pelota es 'veneno' que no puede tocarte.",
    instrucciones: [
      "Todos en círculo con las piernas abiertas, pies tocando los del vecino.",
      "Con las manos golpean la pelota intentando que pase entre las piernas de otro.",
      "Si la pelota pasa entre tus piernas, pierdes una vida (o un brazo).",
      "Con 3 vidas perdidas, sales del círculo.",
      "Gana el último."
    ],
    icono: "☠️"
  },
  {
    id: "el-cartero",
    nombre: "El Cartero",
    tipo: "interior",
    ramas: ["manada", "tropa"],
    participantes: { min: 8, max: 25 },
    materiales: ["Sillas (una menos que participantes)"],
    duracion: 15,
    descripcion: "Juego de sillas con consignas creativas. Ideal para conocerse y reírse.",
    instrucciones: [
      "Todos sentados en círculo, una persona de pie en el centro (el cartero).",
      "El cartero dice: 'Traigo carta para todos los que... (tienen tenis blancos / les gusta el chocolate / nacieron en marzo)'.",
      "Los aludidos se levantan y cambian de silla; el cartero busca silla también.",
      "Quien queda sin silla es el nuevo cartero."
    ],
    icono: "✉️"
  },
  {
    id: "rey-manda",
    nombre: "El Rey Manda",
    tipo: "ambos",
    ramas: ["manada", "tropa"],
    participantes: { min: 8, max: 30 },
    materiales: ["Objetos diversos en el lugar"],
    duracion: 20,
    descripcion: "Las seisenas/patrullas compiten trayendo objetos solicitados por 'el rey' lo más rápido posible.",
    instrucciones: [
      "Equipos sentados frente al rey (dirigente).",
      "El rey pide un objeto: 'El rey manda... una hoja seca / un cordón / algo amarillo'.",
      "El primer equipo en entregarlo gana 1 punto.",
      "Variar dificultad: objetos imposibles ganan más puntos (creatividad).",
      "Termina cuando se llega a un puntaje o tiempo límite."
    ],
    icono: "👑"
  },
  {
    id: "rastreo-pista",
    nombre: "Sigue la Pista",
    tipo: "exterior",
    ramas: ["manada", "tropa"],
    participantes: { min: 6, max: 25 },
    materiales: ["Tiza, piedras, palos para señales de pista"],
    duracion: 30,
    descripcion: "Recorrido donde los scouts siguen señales de pista (flechas, círculos, X) hasta llegar a un destino.",
    instrucciones: [
      "Un dirigente sale 15 minutos antes y deja señales de pista por el camino.",
      "Las señales usan piedras, palos o tiza (flecha=por aquí; círculo con punto=fin; X=no por aquí).",
      "El grupo sigue las señales en orden, sin saltarse ninguna.",
      "Al final hay un mensaje, premio o desafío.",
      "Repasar las señales antes y después del juego."
    ],
    icono: "➡️"
  },
  {
    id: "tierra-aire-mar",
    nombre: "Tierra, Aire, Mar",
    tipo: "ambos",
    ramas: ["manada", "tropa"],
    participantes: { min: 6, max: 25 },
    materiales: ["Una pelota suave"],
    duracion: 10,
    descripcion: "Juego rápido para repasar animales y reflejos. Hay que decir un animal del medio mencionado.",
    instrucciones: [
      "Todos en círculo. Una persona en el centro con la pelota.",
      "Lanza la pelota a alguien diciendo 'tierra', 'aire' o 'mar' y cuenta hasta 5.",
      "Quien recibe debe decir un animal de ese medio antes del 5.",
      "Si falla o repite, pasa al centro.",
      "Si dice 'mundo', todos cambian de lugar."
    ],
    icono: "🌍"
  },
  {
    id: "noche-y-dia",
    nombre: "Noche y Día",
    tipo: "exterior",
    ramas: ["manada", "tropa"],
    participantes: { min: 10, max: 30 },
    materiales: ["Línea central marcada"],
    duracion: 15,
    descripcion: "Dos equipos enfrentados: cuando se dice su palabra, persiguen al otro hasta la línea de fondo.",
    instrucciones: [
      "Divide en dos equipos: 'Noche' y 'Día', uno frente al otro a 2 metros.",
      "Detrás de cada equipo, a 15 metros, hay una línea de refugio.",
      "El dirigente grita 'NOCHE' o 'DÍA' (alargando la N o la D).",
      "El equipo nombrado persigue al otro hasta su línea.",
      "Cada tocado pasa al equipo contrario. Sigue el juego hasta agotar tiempo."
    ],
    icono: "🌗"
  },
];
