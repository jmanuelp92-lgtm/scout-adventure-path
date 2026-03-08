export interface Activity {
  tipo: "ceremonia" | "juego" | "técnica" | "descanso" | "actividad" | "reflexión";
  titulo: string;
  duracion: number; // minutos
  descripcion: string;
  materiales?: string[];
  instrucciones: string[];
}

export interface Encounter {
  id: number;
  titulo: string;
  etapa: number;
  objetivo: string;
  lema: string;
  actividades: Activity[];
}

export interface Stage {
  numero: number;
  nombre: string;
  descripcion: string;
  icono: string;
  encuentros: number[];
}

export const stages: Stage[] = [
  {
    numero: 1,
    nombre: "Pata Tierna",
    descripcion: "Introducción al mundo scout. Aprenderás las bases: la Ley, la Promesa, nudos básicos, formaciones y juegos de integración.",
    icono: "🐾",
    encuentros: Array.from({ length: 10 }, (_, i) => i + 1),
  },
  {
    numero: 2,
    nombre: "Saltador",
    descripcion: "Profundización en técnicas de campo: orientación, primeros auxilios básicos, señales, naturaleza y trabajo en equipo.",
    icono: "🦊",
    encuentros: Array.from({ length: 10 }, (_, i) => i + 11),
  },
  {
    numero: 3,
    nombre: "Rastreador",
    descripcion: "Habilidades de campismo: fogatas, cocina al aire libre, construcciones pioneriles, acecho y rastreo.",
    icono: "🏕️",
    encuentros: Array.from({ length: 10 }, (_, i) => i + 21),
  },
  {
    numero: 4,
    nombre: "Cazador",
    descripcion: "Liderazgo y servicio: primeros auxilios avanzados, proyectos comunitarios, cartografía y supervivencia.",
    icono: "🦅",
    encuentros: Array.from({ length: 10 }, (_, i) => i + 31),
  },
  {
    numero: 5,
    nombre: "Lobato Superior",
    descripcion: "Maestría y graduación: especialidades, campamento final, ceremonia de paso, liderazgo y legado.",
    icono: "🐺",
    encuentros: Array.from({ length: 10 }, (_, i) => i + 41),
  },
];

export const encounters: Encounter[] = [
  // === ETAPA 1: PATA TIERNA (1-10) ===
  {
    id: 1,
    titulo: "¡Bienvenidos a la Manada!",
    etapa: 1,
    objetivo: "Conocer al grupo, presentar el escultismo y crear vínculos de amistad.",
    lema: "Siempre Mejor",
    actividades: [
      {
        tipo: "ceremonia",
        titulo: "Ceremonia de Apertura",
        duracion: 15,
        descripcion: "Primera formación en herradura. El Akela (jefe de manada) da la bienvenida y explica qué es ser un lobato.",
        instrucciones: [
          "Formar a los lobatos en herradura (semicírculo).",
          "El Akela se coloca en el centro de la apertura.",
          "Saludo scout: dos dedos levantados (índice y medio).",
          "Presentación: '¡Buenas cacerías! Soy Akela, el líder de la Manada.'",
          "Explicar que 'Manada' es como una familia de lobos que se cuidan entre sí.",
          "Enseñar el grito de la Manada: '¡Lobatos, haremos lo mejor!'"
        ],
      },
      {
        tipo: "juego",
        titulo: "El Nombre del Animal",
        duracion: 20,
        descripcion: "Juego de presentación donde cada lobato elige un animal y se presenta con un gesto.",
        materiales: ["Ninguno"],
        instrucciones: [
          "Todos en círculo.",
          "Cada lobato dice su nombre y un animal que empiece con la misma letra.",
          "Debe hacer el gesto o sonido del animal.",
          "El siguiente repite todos los anteriores antes de decir el suyo.",
          "Al terminar, todos juntos repiten los nombres con los gestos.",
          "Variante: si alguien se equivoca, todos gritan '¡Buenas cacerías!' y empieza de nuevo."
        ],
      },
      {
        tipo: "técnica",
        titulo: "¿Qué es ser Scout?",
        duracion: 45,
        descripcion: "Introducción a la historia del escultismo, Baden-Powell y el Libro de la Selva.",
        materiales: ["Láminas ilustradas", "Libro de la Selva (fragmento)", "Pizarra o papelógrafo"],
        instrucciones: [
          "Contar brevemente la historia de Baden-Powell (el fundador).",
          "Explicar que los lobatos se inspiran en El Libro de la Selva de Rudyard Kipling.",
          "Presentar los personajes: Mowgli (el cachorro humano), Akela (lobo líder), Baloo (oso maestro), Bagheera (pantera protectora).",
          "Explicar la estructura de la Manada: seisenas (grupos de 6).",
          "Cada seisena elige un color y un nombre de animal de la selva.",
          "Dibujar juntos el mapa de la selva en un papelógrafo grande."
        ],
      },
      {
        tipo: "juego",
        titulo: "La Cacería de Mowgli",
        duracion: 30,
        descripcion: "Juego de persecución temático donde Mowgli debe escapar de Shere Khan.",
        materiales: ["Pañuelos de colores", "Conos para delimitar zona"],
        instrucciones: [
          "Delimitar un área de juego rectangular.",
          "Un lobato es Shere Khan (el tigre cazador).",
          "Los demás son Mowgli y deben cruzar de un lado a otro sin ser atrapados.",
          "Si Shere Khan toca a alguien, ese lobato se convierte en uno de sus 'aliados' (Bandar-log).",
          "Los Bandar-log solo pueden moverse lateralmente para atrapar a los demás.",
          "Gana el último Mowgli en pie. Ese será el primero en elegir su seisena."
        ],
      },
      {
        tipo: "descanso",
        titulo: "Merienda en la Roca del Consejo",
        duracion: 15,
        descripcion: "Momento de descanso, hidratación y merienda compartida.",
        instrucciones: [
          "Sentarse en círculo simulando la Roca del Consejo.",
          "Compartir la merienda.",
          "Conversar sobre lo aprendido hasta ahora.",
          "Recordar que en la manada siempre se comparte."
        ],
      },
      {
        tipo: "actividad",
        titulo: "Mi Carnet de Lobato",
        duracion: 30,
        descripcion: "Cada lobato crea su carnet personal donde irá registrando sus avances.",
        materiales: ["Cartulinas de colores", "Marcadores", "Pegamento", "Tijeras", "Stickers"],
        instrucciones: [
          "Entregar a cada lobato una cartulina doblada en forma de libreta.",
          "En la portada: escribir su nombre, nombre de seisena y dibujar su animal.",
          "Primera página: pegar o dibujar la flor de lis scout.",
          "Segunda página: escribir 'Mis Logros' como título.",
          "Decorar libremente con colores y stickers.",
          "Explicar que cada encuentro ganarán sellos o stickers por sus logros."
        ],
      },
      {
        tipo: "juego",
        titulo: "Lobos y Conejos",
        duracion: 15,
        descripcion: "Juego de cierre con mucha energía para terminar la tarde con alegría.",
        instrucciones: [
          "Dividir en dos equipos: lobos y conejos.",
          "Todos en fila, espalda con espalda en el centro del campo.",
          "El Akela grita '¡Lobos!' o '¡Conejos!'",
          "El equipo nombrado persigue al otro hasta una línea de seguridad.",
          "Los atrapados cambian de equipo.",
          "Jugar 5 rondas. El equipo más grande al final gana."
        ],
      },
      {
        tipo: "reflexión",
        titulo: "Cierre y Gran Aullido",
        duracion: 10,
        descripcion: "Reflexión final y enseñanza del Gran Aullido de la Manada.",
        instrucciones: [
          "Formar la herradura nuevamente.",
          "Preguntar: '¿Qué fue lo que más les gustó hoy?'",
          "Enseñar el Gran Aullido: todos en cuclillas en círculo, manos al suelo.",
          "Al contar tres, todos se levantan alzando las manos y aullando: '¡AH-KE-LA! ¡Haremos lo mejor!'",
          "Despedida con apretón de mano izquierda (tradición scout)."
        ],
      },
    ],
  },
  {
    id: 2,
    titulo: "La Ley de la Manada",
    etapa: 1,
    objetivo: "Aprender la Ley y la Promesa del Lobato y comenzar a vivirlas.",
    lema: "El lobato piensa primero en los demás",
    actividades: [
      {
        tipo: "ceremonia",
        titulo: "Gran Aullido de Apertura",
        duracion: 15,
        descripcion: "Practicar el Gran Aullido aprendido y repasar lo del encuentro anterior.",
        instrucciones: [
          "Formación en herradura.",
          "Realizar el Gran Aullido completo.",
          "Breve repaso: ¿Quién es Akela? ¿Qué es la Manada?",
          "Presentar el tema del día: La Ley de la Manada."
        ],
      },
      {
        tipo: "juego",
        titulo: "El Teléfono Descompuesto Scout",
        duracion: 20,
        descripcion: "Juego clásico pero usando frases de la Ley del Lobato.",
        instrucciones: [
          "Formar dos filas.",
          "Susurrar al primero de cada fila una frase de la Ley.",
          "Cada uno la pasa al siguiente al oído.",
          "El último dice en voz alta lo que entendió.",
          "Comparar con la frase original.",
          "Reflexionar: 'La Ley debe transmitirse correctamente, por eso la aprenderemos bien.'"
        ],
      },
      {
        tipo: "técnica",
        titulo: "La Ley y la Promesa del Lobato",
        duracion: 45,
        descripcion: "Aprendizaje profundo de la Ley del Lobato y la Promesa Scout.",
        materiales: ["Cartelera con la Ley", "Hojas para cada lobato", "Colores"],
        instrucciones: [
          "Presentar la Ley del Lobato: 'El lobato escucha a Akela. El lobato piensa primero en los demás.'",
          "Explicar cada parte con ejemplos cotidianos.",
          "'Escuchar a Akela' = respetar a tus mayores, maestros, padres.",
          "'Pensar primero en los demás' = ser generoso, compartir, ayudar.",
          "Presentar la Promesa: 'Prometo hacer lo mejor para cumplir mis deberes, con Dios y mi Patria, y la Ley de la Manada.'",
          "Cada lobato escribe la Ley y la Promesa en su carnet y la decora.",
          "Practicar diciendo la Ley y Promesa juntos varias veces."
        ],
      },
      {
        tipo: "juego",
        titulo: "Relevos de la Ley",
        duracion: 30,
        descripcion: "Carrera de relevos donde deben armar la Ley con palabras sueltas.",
        materiales: ["Tarjetas con palabras de la Ley (una palabra por tarjeta)", "Conos"],
        instrucciones: [
          "Dividir en seisenas.",
          "A 20 metros, colocar las palabras de la Ley mezcladas.",
          "De uno en uno, corren a buscar una palabra y vuelven.",
          "Al tener todas, deben ordenarlas correctamente.",
          "La primera seisena en armar la Ley completa gana.",
          "Todos juntos la leen en voz alta al terminar."
        ],
      },
      {
        tipo: "descanso",
        titulo: "Merienda",
        duracion: 15,
        descripcion: "Descanso e hidratación.",
        instrucciones: ["Sentarse en la Roca del Consejo.", "Compartir merienda.", "Practicar 'pensar en los demás' compartiendo."],
      },
      {
        tipo: "actividad",
        titulo: "Teatro de la Ley",
        duracion: 30,
        descripcion: "Cada seisena prepara una pequeña obra que muestre un ejemplo de la Ley.",
        materiales: ["Disfraces improvisados (telas, sombreros)"],
        instrucciones: [
          "Cada seisena recibe un escenario: 'En el colegio', 'En casa', 'En el parque'.",
          "Deben inventar una escena donde se aplique la Ley del Lobato.",
          "Tienen 10 minutos para prepararse.",
          "Cada seisena presenta su obra (5 min cada una).",
          "Al final, todos aplauden y comentan qué parte de la Ley se mostró.",
          "Dar sticker de logro en el carnet."
        ],
      },
      {
        tipo: "reflexión",
        titulo: "Cierre: Mi Compromiso",
        duracion: 25,
        descripcion: "Cada lobato dice un compromiso personal basado en la Ley.",
        instrucciones: [
          "En círculo, cada lobato dice: 'Esta semana voy a...' seguido de una acción basada en la Ley.",
          "Ejemplo: 'Esta semana voy a ayudar a mi hermano con su tarea.'",
          "Gran Aullido de cierre.",
          "Despedida con apretón de mano izquierda."
        ],
      },
    ],
  },
  {
    id: 3,
    titulo: "Nudos que Unen",
    etapa: 1,
    objetivo: "Aprender los tres nudos básicos: rizo, llano y as de guía.",
    lema: "Un buen nudo puede salvar una vida",
    actividades: [
      {
        tipo: "ceremonia", titulo: "Apertura y Gran Aullido", duracion: 15,
        descripcion: "Ceremonia de apertura con repaso de la Ley.",
        instrucciones: ["Formación en herradura.", "Gran Aullido.", "Recitar la Ley juntos.", "Preguntar quién cumplió su compromiso de la semana."],
      },
      {
        tipo: "juego", titulo: "Nudo Humano", duracion: 20,
        descripcion: "Juego grupal donde forman un nudo humano y deben deshacerlo sin soltarse.",
        instrucciones: ["Todos en círculo se toman de las manos cruzando los brazos.", "Sin soltarse, deben desenredarse hasta formar un círculo perfecto.", "Si se sueltan, empiezan de nuevo.", "Reflexión: 'Así como este nudo, los nudos scouts necesitan paciencia y trabajo en equipo.'"],
      },
      {
        tipo: "técnica", titulo: "Taller de Nudos Básicos", duracion: 45,
        descripcion: "Enseñanza paso a paso de tres nudos fundamentales.",
        materiales: ["Cuerdas de 1 metro por lobato", "Carteles con diagramas de nudos", "Estacas o palos"],
        instrucciones: [
          "NUDO RIZO (Reef Knot): Explicar que sirve para unir dos cuerdas del mismo grosor.",
          "Paso 1: Cruzar derecha sobre izquierda y pasar por debajo.",
          "Paso 2: Cruzar izquierda sobre derecha y pasar por debajo.",
          "Practicar 5 veces cada lobato.",
          "NUDO LLANO: Igual al rizo pero verificar que quede plano (no torcido).",
          "AS DE GUÍA (Bowline): El nudo que forma un lazo que no se aprieta.",
          "Historia: 'El conejo sale de la madriguera, rodea el árbol y vuelve a entrar.'",
          "Paso 1: Hacer un pequeño lazo en la cuerda (la madriguera).",
          "Paso 2: La punta pasa por el lazo (el conejo sale).",
          "Paso 3: Rodea la cuerda principal (rodea el árbol).",
          "Paso 4: Vuelve a entrar por el lazo (vuelve a la madriguera).",
          "Practicar cada nudo hasta que todos puedan hacerlo con los ojos cerrados."
        ],
      },
      {
        tipo: "juego", titulo: "Carrera de Nudos", duracion: 30,
        descripcion: "Competencia por seisenas haciendo nudos contra reloj.",
        materiales: ["Cuerdas", "Cronómetro", "Silbato"],
        instrucciones: ["Cada seisena en fila.", "Al silbato, el primero corre al frente, hace el nudo indicado y vuelve.", "El Akela verifica que esté bien hecho. Si no, debe rehacerlo.", "Gana la seisena que termine primero con todos los nudos correctos.", "Ronda 1: Nudo rizo. Ronda 2: As de guía. Ronda 3: Ambos."],
      },
      {
        tipo: "descanso", titulo: "Merienda", duracion: 15,
        descripcion: "Descanso.", instrucciones: ["Merienda y descanso.", "Practicar nudos mientras meriendan."],
      },
      {
        tipo: "actividad", titulo: "Pulsera de Nudos", duracion: 30,
        descripcion: "Crear una pulsera usando nudos aprendidos.",
        materiales: ["Cordones de colores (2 por lobato)", "Cuentas decorativas"],
        instrucciones: ["Cada lobato recibe dos cordones de colores.", "Usar nudos rizo para unir secciones.", "Agregar cuentas decorativas entre nudos.", "Cerrar con as de guía para el broche.", "La pulsera es su primer logro de técnica scout."],
      },
      {
        tipo: "reflexión", titulo: "Cierre", duracion: 10,
        descripcion: "Reflexión y Gran Aullido.",
        instrucciones: ["Mostrar sus pulseras.", "Repasar nombres de los tres nudos.", "Gran Aullido.", "Sticker de nudo en el carnet."],
      },
    ],
  },
  {
    id: 4, titulo: "Las Señales del Camino", etapa: 1,
    objetivo: "Aprender las señales de pista scout para seguir rastros.",
    lema: "Un scout observa lo que otros no ven",
    actividades: [
      { tipo: "ceremonia", titulo: "Apertura", duracion: 15, descripcion: "Ceremonia estándar.", instrucciones: ["Herradura.", "Gran Aullido.", "Recitar Ley.", "Revisión de nudos rápida."] },
      { tipo: "juego", titulo: "Kim Visual", duracion: 20, descripcion: "Juego de observación con objetos.", materiales: ["20 objetos variados", "Tela para cubrir"], instrucciones: ["Colocar 20 objetos sobre una mesa.", "Los lobatos observan durante 1 minuto.", "Cubrir los objetos.", "Cada seisena escribe todos los que recuerde.", "La seisena con más aciertos gana.", "Reflexión: un scout debe ser observador."] },
      { tipo: "técnica", titulo: "Señales de Pista", duracion: 45, descripcion: "Enseñanza de las 10 señales básicas de pista scout.", materiales: ["Palos", "Piedras", "Carteles con señales", "Tiza"], instrucciones: ["Enseñar las señales una por una con materiales naturales:", "→ Flecha: 'Ir en esta dirección' (palo y piedra formando flecha).", "✕ Cruz: 'No ir por aquí' (dos palos cruzados).", "○ Círculo de piedras: 'He ido a casa / fin del rastro'.", "△ Tres piedras: 'Peligro, cuidado'.", "— Palo horizontal: 'Camino bloqueado'.", "3 palos en fila: 'Mensaje a 3 pasos a la derecha'.", "Hierba anudada: 'Seguir este camino'.", "Piedra sobre piedra con otra al lado: 'Ir a la izquierda/derecha'.", "Practicar construyendo cada señal con materiales naturales.", "Evaluar: cada lobato debe identificar todas las señales."] },
      { tipo: "juego", titulo: "Seguir el Rastro", duracion: 30, descripcion: "Búsqueda del tesoro siguiendo señales de pista.", materiales: ["Materiales naturales para señales", "Tesoro (dulces o stickers)"], instrucciones: ["El Akela prepara un rastro con señales alrededor del lugar.", "Las seisenas salen de a una con 3 min de diferencia.", "Deben seguir las señales correctas y evitar las falsas.", "Al final del rastro hay un pequeño tesoro.", "La primera seisena en llegar elige primero del tesoro."] },
      { tipo: "descanso", titulo: "Merienda", duracion: 15, descripcion: "Descanso.", instrucciones: ["Merienda compartida."] },
      { tipo: "actividad", titulo: "Mi Guía de Señales", duracion: 30, descripcion: "Dibujar todas las señales en el carnet.", materiales: ["Carnets", "Colores"], instrucciones: ["Cada lobato dibuja las 10 señales en su carnet.", "Junto a cada señal, escribe su significado.", "Decorar la página.", "Sticker de rastreo en el carnet."] },
      { tipo: "reflexión", titulo: "Cierre", duracion: 10, descripcion: "Gran Aullido y despedida.", instrucciones: ["¿Cuál señal les pareció más difícil?", "Gran Aullido.", "Despedida."] },
    ],
  },
  {
    id: 5, titulo: "Formaciones y Disciplina", etapa: 1,
    objetivo: "Aprender las formaciones básicas: herradura, fila india, círculo y línea.",
    lema: "Orden y disciplina hacen al buen scout",
    actividades: [
      { tipo: "ceremonia", titulo: "Apertura", duracion: 15, descripcion: "Ceremonia con evaluación de formación.", instrucciones: ["Practicar entrar en herradura rápidamente.", "Cronometrar cuánto tardan.", "Gran Aullido.", "Objetivo: mejorar el tiempo al final."] },
      { tipo: "juego", titulo: "Simón Scout Dice", duracion: 20, descripcion: "Versión scout de Simón Dice con formaciones.", instrucciones: ["El Akela dice: 'Simón Scout dice: ¡Fila india!'", "Los lobatos deben formar rápidamente.", "Si no dice 'Simón Scout dice', no deben moverse.", "Quien se equivoca hace 5 sentadillas.", "Formaciones: herradura, círculo, fila india, línea, seisenas."] },
      { tipo: "técnica", titulo: "Formaciones Scouts", duracion: 45, descripcion: "Práctica detallada de cada formación y cuándo se usa.", materiales: ["Silbato", "Banderines de seisena"], instrucciones: ["HERRADURA: para ceremonias y charlas del Akela. Seiseneros al frente.", "FILA INDIA: para desplazamientos. Uno detrás de otro. Seisenero guía.", "CÍRCULO: para juegos y debates. Todos se ven las caras.", "LÍNEA: para inspección. Seisenas lado a lado.", "SEISENAS: cada grupo en su rincón. Para trabajo en equipo.", "Practicar transiciones rápidas entre formaciones al silbato.", "Enseñar señales con silbato: 1 pitazo = atención, 2 = reunión, 3 = emergencia."] },
      { tipo: "juego", titulo: "Carrera de Formaciones", duracion: 30, descripcion: "Competencia de velocidad formando figuras.", instrucciones: ["El Akela grita una formación.", "Las seisenas compiten por formarse primero y correctamente.", "Puntos: 3 por primera, 2 por segunda, 1 por tercera.", "10 rondas.", "La seisena con más puntos gana.", "Premiar con aplausos scouts."] },
      { tipo: "descanso", titulo: "Merienda", duracion: 15, descripcion: "Descanso.", instrucciones: ["Merienda."] },
      { tipo: "actividad", titulo: "El Silbato del Akela", duracion: 30, descripcion: "Cada seisenero practica dando órdenes con silbato.", materiales: ["Silbatos (1 por seisena)"], instrucciones: ["Los seiseneros practican usando el silbato.", "Cada uno dirige a su seisena en una secuencia de formaciones.", "Los demás evalúan qué seisenero lo hizo mejor.", "Reflexión sobre liderazgo y responsabilidad."] },
      { tipo: "reflexión", titulo: "Cierre", duracion: 10, descripcion: "Medir mejora.", instrucciones: ["Repetir la formación en herradura y medir el tiempo.", "Comparar con el inicio. ¡Celebrar la mejora!", "Gran Aullido.", "Sticker de formaciones en carnet."] },
    ],
  },
  // Encounters 6-10: completing Stage 1
  {
    id: 6, titulo: "La Bandera y los Símbolos", etapa: 1,
    objetivo: "Conocer la bandera scout, la flor de lis y los símbolos de la Manada.",
    lema: "Cada símbolo cuenta una historia",
    actividades: [
      { tipo: "ceremonia", titulo: "Apertura con Izamiento", duracion: 15, descripcion: "Primera ceremonia de izamiento de bandera.", instrucciones: ["Formación en línea.", "Enseñar protocolo de izamiento.", "Cantar himno scout mientras sube la bandera.", "Gran Aullido."] },
      { tipo: "juego", titulo: "Memorama Scout", duracion: 20, descripcion: "Juego de memoria con símbolos scouts.", materiales: ["Tarjetas con símbolos scouts (pares)"], instrucciones: ["Colocar tarjetas boca abajo.", "Por turnos, voltear dos tarjetas buscando pares.", "Al encontrar par, explicar qué significa el símbolo.", "Quien más pares tenga, gana."] },
      { tipo: "técnica", titulo: "Símbolos Scouts", duracion: 45, descripcion: "Estudio de la flor de lis, colores, y insignias.", materiales: ["Bandera scout", "Poster de flor de lis", "Uniforme de ejemplo"], instrucciones: ["La Flor de Lis: 3 pétalos = las 3 partes de la Promesa.", "Los dos ojos del lobato en la flor de lis = observación.", "Colores de la Manada: significado de cada color.", "El uniforme: dónde va cada insignia.", "La pañoleta: cómo se dobla y se usa.", "Practicar el doblado correcto de la pañoleta."] },
      { tipo: "juego", titulo: "Rally de Símbolos", duracion: 30, descripcion: "Estaciones con pruebas sobre símbolos.", instrucciones: ["5 estaciones con pruebas diferentes.", "Est. 1: Dibujar la flor de lis de memoria.", "Est. 2: Doblar la pañoleta correctamente.", "Est. 3: Identificar insignias en un poster.", "Est. 4: Responder preguntas sobre significados.", "Est. 5: Armar un rompecabezas de la bandera scout."] },
      { tipo: "descanso", titulo: "Merienda", duracion: 15, descripcion: "Descanso.", instrucciones: ["Merienda."] },
      { tipo: "actividad", titulo: "Mi Bandera de Seisena", duracion: 30, descripcion: "Cada seisena crea su bandera propia.", materiales: ["Tela o cartulina grande", "Pinturas", "Palos"], instrucciones: ["Cada seisena diseña su bandera con su animal y color.", "Debe incluir el lema de la seisena.", "Presentar ante la Manada.", "Las banderas se usarán en todos los encuentros futuros."] },
      { tipo: "reflexión", titulo: "Cierre con Arriamiento", duracion: 10, descripcion: "Ceremonia de arriamiento de bandera.", instrucciones: ["Ceremonia de arriamiento.", "Reflexión: ¿Por qué son importantes los símbolos?", "Gran Aullido.", "Sticker en carnet."] },
    ],
  },
  {
    id: 7, titulo: "Primeros Auxilios: Lo Básico", etapa: 1,
    objetivo: "Aprender a curar heridas menores y cuándo pedir ayuda.",
    lema: "Un scout siempre está preparado para ayudar",
    actividades: [
      { tipo: "ceremonia", titulo: "Apertura", duracion: 15, descripcion: "Ceremonia estándar.", instrucciones: ["Herradura.", "Gran Aullido.", "Ley.", "Izamiento."] },
      { tipo: "juego", titulo: "¿Qué Harías Si...?", duracion: 20, descripcion: "Juego de escenarios donde deben decidir qué hacer.", instrucciones: ["El Akela plantea situaciones: '¿Qué harías si tu amigo se cae y se raspa?'", "Los lobatos levantan la mano para responder.", "Discutir las respuestas correctas e incorrectas.", "Escenarios: raspón, dolor de cabeza, picadura, sangrado de nariz."] },
      { tipo: "técnica", titulo: "Botiquín y Curaciones Básicas", duracion: 45, descripcion: "Cómo armar un botiquín y curar heridas menores.", materiales: ["Botiquín completo", "Vendas", "Gasas", "Agua oxigenada", "Cinta adhesiva", "Guantes"], instrucciones: ["Presentar el botiquín: qué contiene y para qué sirve cada cosa.", "Regla #1: SIEMPRE lavarse las manos primero.", "Regla #2: Si hay mucha sangre o hueso visible, LLAMAR A UN ADULTO.", "Práctica 1: Limpiar y cubrir un raspón (usar muñecos o entre ellos).", "Práctica 2: Cómo detener sangrado de nariz (inclinar hacia adelante, presionar).", "Práctica 3: Qué hacer con una picadura (no rascar, aplicar frío).", "Práctica 4: Posición lateral de seguridad (acostarse de lado)."] },
      { tipo: "juego", titulo: "Relevos del Botiquín", duracion: 30, descripcion: "Carrera identificando y usando materiales del botiquín.", materiales: ["Botiquines por seisena"], instrucciones: ["Cada seisena tiene un botiquín desordenado.", "El Akela grita un escenario: '¡Raspón en la rodilla!'", "Deben elegir los materiales correctos y simular la curación.", "Puntos por velocidad y por elegir los materiales correctos.", "4 rondas con diferentes escenarios."] },
      { tipo: "descanso", titulo: "Merienda", duracion: 15, descripcion: "Descanso.", instrucciones: ["Merienda."] },
      { tipo: "actividad", titulo: "Mi Mini Botiquín", duracion: 30, descripcion: "Armar un mini botiquín personal.", materiales: ["Bolsitas de tela", "Curitas", "Gasas pequeñas", "Toallitas antisépticas"], instrucciones: ["Cada lobato arma su propio mini botiquín.", "Incluir: 3 curitas, 1 gasa, 2 toallitas.", "Decorar la bolsita.", "Llevarlo siempre a los encuentros."] },
      { tipo: "reflexión", titulo: "Cierre", duracion: 10, descripcion: "Reflexión sobre primeros auxilios.", instrucciones: ["¿Cuándo debemos pedir ayuda de un adulto?", "Gran Aullido.", "Sticker de primeros auxilios en carnet."] },
    ],
  },
  {
    id: 8, titulo: "Naturaleza: Árboles y Plantas", etapa: 1,
    objetivo: "Identificar 5 árboles y 5 plantas comunes de la zona.",
    lema: "Un scout conoce y protege la naturaleza",
    actividades: [
      { tipo: "ceremonia", titulo: "Apertura al Aire Libre", duracion: 15, descripcion: "Ceremonia en un espacio natural.", instrucciones: ["Herradura bajo un árbol.", "Gran Aullido.", "Hoy Baloo (el oso maestro) nos enseñará sobre la naturaleza."] },
      { tipo: "juego", titulo: "Bingo Natural", duracion: 20, descripcion: "Buscar elementos naturales en una lista.", materiales: ["Tarjetas de bingo con elementos naturales"], instrucciones: ["Cada lobato recibe una tarjeta con 9 elementos: hoja ovalada, piedra lisa, flor amarilla, etc.", "Deben encontrar cada elemento en los alrededores.", "El primero en completar una línea grita '¡Buenas cacerías!'", "Verificar los hallazgos juntos."] },
      { tipo: "técnica", titulo: "Árboles y Plantas", duracion: 45, descripcion: "Identificación de especies locales.", materiales: ["Guía de árboles local", "Lupas", "Bolsas para muestras"], instrucciones: ["Caminata guiada identificando 5 árboles comunes.", "Para cada árbol: nombre, forma de hojas, corteza, usos.", "Identificar 5 plantas: comestibles vs. venenosas (NUNCA probar sin permiso).", "Recoger hojas caídas (nunca arrancar).", "Enseñar: 'Deja el lugar mejor de como lo encontraste.'"] },
      { tipo: "juego", titulo: "Carrera de Hojas", duracion: 30, descripcion: "Identificar hojas por equipos.", instrucciones: ["Esparcir hojas recolectadas en el centro.", "El Akela dice el nombre de un árbol.", "Las seisenas compiten por encontrar la hoja correcta.", "Puntos por acierto."] },
      { tipo: "descanso", titulo: "Merienda", duracion: 15, descripcion: "Descanso.", instrucciones: ["Merienda bajo los árboles."] },
      { tipo: "actividad", titulo: "Herbario Scout", duracion: 30, descripcion: "Iniciar un herbario con las hojas recolectadas.", materiales: ["Hojas recolectadas", "Papel periódico", "Cinta", "Carnets"], instrucciones: ["Prensar las hojas entre papel periódico.", "Pegar una muestra en el carnet.", "Escribir nombre del árbol y fecha.", "Esto será el inicio de su herbario scout."] },
      { tipo: "reflexión", titulo: "Cierre", duracion: 10, descripcion: "Reflexión ecológica.", instrucciones: ["¿Por qué debemos cuidar los árboles?", "Compromiso: plantar una semilla esta semana.", "Gran Aullido.", "Sticker de naturaleza."] },
    ],
  },
  {
    id: 9, titulo: "Trabajo en Equipo", etapa: 1,
    objetivo: "Fortalecer la cooperación y el trabajo en seisenas.",
    lema: "Juntos somos más fuertes",
    actividades: [
      { tipo: "ceremonia", titulo: "Apertura", duracion: 15, descripcion: "Ceremonia estándar.", instrucciones: ["Herradura.", "Gran Aullido.", "Ley.", "Tema: hoy la Manada trabajará unida."] },
      { tipo: "juego", titulo: "La Isla", duracion: 20, descripcion: "Juego cooperativo de equilibrio.", materiales: ["Periódicos o cartones grandes"], instrucciones: ["Cada seisena tiene un 'isla' (cartón grande).", "Todos deben caber en la isla.", "Cada ronda, la isla se hace más pequeña (se dobla).", "Deben encontrar formas creativas de que todos quepan.", "La seisena que lo logra con la isla más pequeña, gana."] },
      { tipo: "técnica", titulo: "Roles en el Equipo", duracion: 45, descripcion: "Aprender los roles dentro de una seisena.", instrucciones: ["Explicar roles: Seisenero (líder), Subseisenero (segundo), Guardián del material, Cronista, Animador, Vigía.", "Cada lobato elige o se le asigna un rol.", "Actividad práctica: construir una torre con materiales reciclados.", "Cada rol tiene una función específica en la construcción.", "Evaluar cómo funcionó el equipo."], materiales: ["Materiales reciclados", "Cinta adhesiva", "Tijeras"] },
      { tipo: "juego", titulo: "La Telaraña", duracion: 30, descripcion: "Todos deben pasar por una telaraña de cuerdas sin tocarla.", materiales: ["Cuerda", "Dos postes o árboles"], instrucciones: ["Armar una telaraña de cuerdas entre dos postes.", "Cada hueco es de diferente tamaño.", "Todos deben pasar al otro lado sin tocar las cuerdas.", "Cada hueco solo se puede usar una vez.", "Si alguien toca, todo el equipo vuelve a empezar.", "Necesitan planificar quién pasa por dónde."] },
      { tipo: "descanso", titulo: "Merienda", duracion: 15, descripcion: "Descanso.", instrucciones: ["Merienda."] },
      { tipo: "actividad", titulo: "Código de Seisena", duracion: 30, descripcion: "Crear reglas de convivencia para cada seisena.", materiales: ["Cartulina", "Marcadores"], instrucciones: ["Cada seisena discute y escribe 5 reglas de convivencia.", "Ejemplo: 'Escuchamos cuando alguien habla', 'Compartimos los materiales'.", "Todos firman la cartulina.", "Se exhibirá en el Rincón de Seisena."] },
      { tipo: "reflexión", titulo: "Cierre", duracion: 10, descripcion: "Reflexión sobre el trabajo en equipo.", instrucciones: ["¿Qué es más difícil: trabajar solo o en equipo? ¿Por qué?", "Gran Aullido.", "Sticker de trabajo en equipo."] },
    ],
  },
  {
    id: 10, titulo: "¡Gran Fogata de Pata Tierna!", etapa: 1,
    objetivo: "Celebrar el cierre de la primera etapa con una fogata especial.",
    lema: "Hemos dado nuestros primeros pasos",
    actividades: [
      { tipo: "ceremonia", titulo: "Gran Apertura de Fogata", duracion: 15, descripcion: "Ceremonia especial de fogata.", instrucciones: ["Formación en círculo alrededor de la fogata (simulada o real).", "Gran Aullido especial.", "El Akela dice: 'Hoy celebramos todo lo aprendido en Pata Tierna.'"] },
      { tipo: "juego", titulo: "Trivial Scout", duracion: 20, descripcion: "Preguntas sobre todo lo aprendido en los 9 encuentros anteriores.", instrucciones: ["Preguntas por seisenas sobre: Ley, nudos, señales, formaciones, símbolos, primeros auxilios, naturaleza.", "Formato de eliminación: seisena que no responda, pierde turno.", "Gran premio para los ganadores."] },
      { tipo: "técnica", titulo: "Repaso General y Evaluación", duracion: 45, descripcion: "Evaluación práctica de todas las habilidades aprendidas.", instrucciones: ["Circuito de 6 estaciones:", "1. Hacer nudo rizo y as de guía.", "2. Identificar 5 señales de pista.", "3. Formarse en herradura en menos de 30 seg.", "4. Curar un raspón simulado.", "5. Identificar 3 hojas de árboles.", "6. Recitar la Ley y Promesa.", "Cada lobato pasa por todas las estaciones.", "Se evalúa con ✓ o 'Necesita práctica'."] },
      { tipo: "juego", titulo: "Juego Nocturno: Luciérnagas", duracion: 30, descripcion: "Juego con linternas en la oscuridad (o con ojos vendados).", materiales: ["Linternas pequeñas", "Vendas para ojos"], instrucciones: ["Un lobato es la 'luciérnaga' con linterna.", "Los demás con ojos vendados deben encontrarla.", "La luciérnaga enciende la linterna 3 segundos cada 30 segundos.", "Los demás se guían por la luz y el sonido.", "Quien la encuentre, es la siguiente luciérnaga."] },
      { tipo: "descanso", titulo: "Merienda Especial", duracion: 15, descripcion: "Merienda especial de celebración.", instrucciones: ["Merienda especial con algo dulce para celebrar.", "Compartir en círculo alrededor del fuego."] },
      { tipo: "actividad", titulo: "Canciones y Sketches", duracion: 30, descripcion: "Cada seisena presenta una canción o sketch.", instrucciones: ["Cada seisena prepara una presentación: canción scout, sketch o baile.", "Presentar frente a la Manada.", "Aplaudir y celebrar cada presentación.", "Cantar juntos 'Canto de la Promesa' o canción scout favorita."] },
      { tipo: "reflexión", titulo: "Ceremonia de Paso", duracion: 10, descripcion: "Entrega de insignia de Pata Tierna.", instrucciones: ["Cada lobato recibe su insignia/sticker de 'Pata Tierna Completada'.", "El Akela felicita individualmente a cada uno.", "Adelanto: 'La próxima etapa es Saltador. ¡Prepárense para más aventuras!'", "Gran Aullido final.", "Foto grupal."] },
    ],
  },
  // === ETAPA 2: SALTADOR (11-20) ===
  ...generateStage2(),
  // === ETAPA 3: RASTREADOR (21-30) ===
  ...generateStage3(),
  // === ETAPA 4: CAZADOR (31-40) ===
  ...generateStage4(),
  // === ETAPA 5: LOBATO SUPERIOR (41-50) ===
  ...generateStage5(),
];

function generateStage2(): Encounter[] {
  const titles = [
    { id: 11, titulo: "La Brújula: Norte, Sur, Este, Oeste", objetivo: "Aprender a usar la brújula y orientarse.", lema: "Un scout nunca se pierde" },
    { id: 12, titulo: "Semáforo y Morse", objetivo: "Aprender comunicación con banderas y código Morse básico.", lema: "Comunicarse es sobrevivir" },
    { id: 13, titulo: "Primeros Auxilios: Fracturas y Esguinces", objetivo: "Aprender a inmovilizar y cuándo no mover a un herido.", lema: "No hagas más daño del que hay" },
    { id: 14, titulo: "Astronomía Scout", objetivo: "Identificar constelaciones y orientarse con las estrellas.", lema: "Las estrellas son el mapa del cielo" },
    { id: 15, titulo: "Nudos Intermedios", objetivo: "Aprender ballestrinque, tensor y margarita.", lema: "Cada nudo tiene su momento" },
    { id: 16, titulo: "Fauna Local", objetivo: "Identificar animales de la zona y sus huellas.", lema: "Cada huella cuenta una historia" },
    { id: 17, titulo: "Cocina Scout Básica", objetivo: "Preparar alimentos sencillos al aire libre.", lema: "Un scout se alimenta bien" },
    { id: 18, titulo: "Construcciones con Cuerdas", objetivo: "Hacer amarres básicos para construcciones simples.", lema: "Con cuerdas y palos, todo es posible" },
    { id: 19, titulo: "Juegos de Acecho", objetivo: "Desarrollar habilidades de sigilo y observación.", lema: "Moverse sin ser visto" },
    { id: 20, titulo: "¡Gran Aventura Saltador!", objetivo: "Evaluación y celebración de la etapa Saltador.", lema: "Saltamos hacia adelante" },
  ];

  return titles.map(t => ({
    ...t,
    etapa: 2,
    actividades: [
      { tipo: "ceremonia" as const, titulo: "Apertura y Gran Aullido", duracion: 15, descripcion: "Ceremonia de apertura con izamiento de bandera.", instrucciones: ["Formación en herradura.", "Izamiento de bandera.", "Gran Aullido.", "Recitar Ley y Promesa.", `Presentar tema: ${t.titulo}`] },
      { tipo: "juego" as const, titulo: "Juego de Calentamiento", duracion: 20, descripcion: `Juego energético relacionado con ${t.titulo}.`, instrucciones: getWarmupGame(t.id) },
      { tipo: "técnica" as const, titulo: `Técnica: ${t.titulo}`, duracion: 45, descripcion: `Enseñanza detallada sobre ${t.titulo.toLowerCase()}.`, materiales: getMaterials(t.id), instrucciones: getTechInstructions(t.id) },
      { tipo: "juego" as const, titulo: "Juego Temático", duracion: 30, descripcion: "Juego que refuerza la técnica aprendida.", instrucciones: getThematicGame(t.id) },
      { tipo: "descanso" as const, titulo: "Merienda", duracion: 15, descripcion: "Descanso e hidratación.", instrucciones: ["Merienda.", "Compartir experiencias."] },
      { tipo: "actividad" as const, titulo: "Actividad Práctica", duracion: 30, descripcion: "Aplicación práctica de lo aprendido.", instrucciones: getPracticalActivity(t.id) },
      { tipo: "reflexión" as const, titulo: "Cierre y Reflexión", duracion: 10, descripcion: "Cierre del encuentro.", instrucciones: ["Reflexión sobre lo aprendido.", "Gran Aullido de cierre.", "Sticker de logro en carnet.", "Despedida con apretón scout."] },
    ],
  }));
}

function generateStage3(): Encounter[] {
  const titles = [
    { id: 21, titulo: "El Arte del Fuego", objetivo: "Aprender a encender y mantener una fogata segura.", lema: "El fuego es un amigo peligroso" },
    { id: 22, titulo: "Campismo: La Carpa", objetivo: "Aprender a montar y desmontar una carpa correctamente.", lema: "Tu carpa es tu hogar temporal" },
    { id: 23, titulo: "Cocina al Aire Libre", objetivo: "Cocinar una comida completa en fogón.", lema: "Cocinar es un arte de supervivencia" },
    { id: 24, titulo: "Construcciones Pioneriles", objetivo: "Construir mesas, bancos y portales con troncos y cuerdas.", lema: "Construimos con lo que la naturaleza nos da" },
    { id: 25, titulo: "Rastreo y Acecho Avanzado", objetivo: "Seguir rastros complejos y acecho en terreno.", lema: "El rastreador lee la tierra" },
    { id: 26, titulo: "Primeros Auxilios: Quemaduras y Ahogamiento", objetivo: "Técnicas para quemaduras y RCP básico.", lema: "Cada segundo cuenta" },
    { id: 27, titulo: "Meteorología Scout", objetivo: "Predecir el clima observando la naturaleza.", lema: "El cielo nos habla" },
    { id: 28, titulo: "Ecología y Conservación", objetivo: "Proyectos de cuidado del medio ambiente.", lema: "Deja el mundo mejor de como lo encontraste" },
    { id: 29, titulo: "Nudos Avanzados y Poleas", objetivo: "Nudos de rescate y sistemas de poleas simples.", lema: "La cuerda es la herramienta universal" },
    { id: 30, titulo: "¡Campamento Rastreador!", objetivo: "Mini campamento de evaluación y celebración.", lema: "Ya somos rastreadores" },
  ];
  return titles.map(t => ({
    ...t, etapa: 3,
    actividades: [
      { tipo: "ceremonia" as const, titulo: "Apertura", duracion: 15, descripcion: "Ceremonia con himno scout.", instrucciones: ["Formación.", "Izamiento.", "Gran Aullido.", `Tema: ${t.titulo}`] },
      { tipo: "juego" as const, titulo: "Juego Inicial", duracion: 20, descripcion: "Juego de activación.", instrucciones: getStage3WarmupGame(t.id) },
      { tipo: "técnica" as const, titulo: t.titulo, duracion: 45, descripcion: t.objetivo, materiales: getStage3Materials(t.id), instrucciones: getStage3TechInstructions(t.id) },
      { tipo: "juego" as const, titulo: "Desafío Práctico", duracion: 30, descripcion: "Reto que aplica la técnica.", instrucciones: getStage3Challenge(t.id) },
      { tipo: "descanso" as const, titulo: "Merienda", duracion: 15, descripcion: "Descanso.", instrucciones: ["Merienda y descanso."] },
      { tipo: "actividad" as const, titulo: "Taller Aplicado", duracion: 30, descripcion: "Práctica extendida.", instrucciones: getStage3Workshop(t.id) },
      { tipo: "reflexión" as const, titulo: "Cierre", duracion: 10, descripcion: "Reflexión final.", instrucciones: ["¿Qué aprendimos hoy?", "Gran Aullido.", "Registro en carnet."] },
    ],
  }));
}

function generateStage4(): Encounter[] {
  const titles = [
    { id: 31, titulo: "Liderazgo Scout", objetivo: "Desarrollar habilidades de liderazgo y toma de decisiones.", lema: "Liderar es servir" },
    { id: 32, titulo: "Cartografía y Mapas", objetivo: "Leer mapas topográficos y crear croquis.", lema: "El mapa es tu guía" },
    { id: 33, titulo: "Supervivencia: Agua y Refugio", objetivo: "Encontrar y purificar agua, construir refugios.", lema: "Sobrevivir es saber adaptarse" },
    { id: 34, titulo: "Primeros Auxilios Avanzados", objetivo: "Transporte de heridos y evaluación de emergencias.", lema: "Actuar con calma salva vidas" },
    { id: 35, titulo: "Servicio Comunitario I", objetivo: "Planificar un proyecto de servicio a la comunidad.", lema: "Servir con alegría" },
    { id: 36, titulo: "Comunicaciones Avanzadas", objetivo: "Morse completo, señales con espejo y radio.", lema: "La comunicación es poder" },
    { id: 37, titulo: "Excursionismo", objetivo: "Planificar y ejecutar una excursión.", lema: "El camino es la recompensa" },
    { id: 38, titulo: "Servicio Comunitario II", objetivo: "Ejecutar el proyecto de servicio comunitario.", lema: "Las acciones hablan más que las palabras" },
    { id: 39, titulo: "Especialidades Scout", objetivo: "Explorar especialidades: artista, deportista, científico.", lema: "Descubre tu talento" },
    { id: 40, titulo: "¡Expedición Cazador!", objetivo: "Gran expedición de evaluación.", lema: "Somos cazadores de aventuras" },
  ];
  return titles.map(t => ({
    ...t, etapa: 4,
    actividades: [
      { tipo: "ceremonia" as const, titulo: "Apertura Formal", duracion: 15, descripcion: "Ceremonia con protocolo completo.", instrucciones: ["Formación en línea.", "Izamiento solemne.", "Himno.", "Gran Aullido.", `Tema: ${t.titulo}`] },
      { tipo: "juego" as const, titulo: "Activación", duracion: 20, descripcion: "Dinámica de grupo.", instrucciones: getStage4Game(t.id) },
      { tipo: "técnica" as const, titulo: t.titulo, duracion: 45, descripcion: t.objetivo, instrucciones: getStage4TechInstructions(t.id) },
      { tipo: "juego" as const, titulo: "Reto de Equipo", duracion: 30, descripcion: "Desafío grupal aplicando la técnica.", instrucciones: getStage4Challenge(t.id) },
      { tipo: "descanso" as const, titulo: "Merienda", duracion: 15, descripcion: "Descanso.", instrucciones: ["Merienda."] },
      { tipo: "actividad" as const, titulo: "Proyecto Aplicado", duracion: 30, descripcion: "Trabajo práctico en equipo.", instrucciones: getStage4Project(t.id) },
      { tipo: "reflexión" as const, titulo: "Cierre", duracion: 10, descripcion: "Reflexión y compromiso.", instrucciones: ["Reflexión del día.", "Compromiso semanal.", "Gran Aullido.", "Registro en carnet."] },
    ],
  }));
}

function generateStage5(): Encounter[] {
  const titles = [
    { id: 41, titulo: "Mi Especialidad I", objetivo: "Elegir y comenzar una especialidad scout.", lema: "Ser el mejor en lo que amas" },
    { id: 42, titulo: "Mi Especialidad II", objetivo: "Desarrollar la especialidad elegida.", lema: "La práctica hace al maestro" },
    { id: 43, titulo: "Enseñar a Otros", objetivo: "Preparar una clase para lobatos más jóvenes.", lema: "Enseñar es la mejor forma de aprender" },
    { id: 44, titulo: "Campamento de Liderazgo", objetivo: "Liderar actividades como preparación final.", lema: "El líder sirve a su equipo" },
    { id: 45, titulo: "Proyecto Final I: Planificación", objetivo: "Planificar un gran proyecto de servicio.", lema: "Planificar es la mitad del éxito" },
    { id: 46, titulo: "Proyecto Final II: Ejecución", objetivo: "Ejecutar el proyecto de servicio final.", lema: "Del plan a la acción" },
    { id: 47, titulo: "Historia del Escultismo", objetivo: "Conocer la historia mundial y nacional del escultismo.", lema: "Conocer el pasado ilumina el futuro" },
    { id: 48, titulo: "Evaluación Final", objetivo: "Evaluación integral de todas las habilidades.", lema: "Todo lo aprendido nos hace fuertes" },
    { id: 49, titulo: "Preparación para la Tropa", objetivo: "Conocer qué viene después: la vida en la Tropa Scout.", lema: "Un nuevo capítulo comienza" },
    { id: 50, titulo: "¡Gran Ceremonia de Paso!", objetivo: "Ceremonia de graduación y paso a la Tropa Scout.", lema: "Siempre listos, siempre mejores" },
  ];
  return titles.map(t => ({
    ...t, etapa: 5,
    actividades: [
      { tipo: "ceremonia" as const, titulo: "Apertura Solemne", duracion: 15, descripcion: "Ceremonia formal de apertura.", instrucciones: ["Formación completa.", "Izamiento.", "Himno scout.", "Gran Aullido.", `Tema: ${t.titulo}`] },
      { tipo: "juego" as const, titulo: "Dinámica", duracion: 20, descripcion: "Actividad energética.", instrucciones: getStage5Game(t.id) },
      { tipo: "técnica" as const, titulo: t.titulo, duracion: 45, descripcion: t.objetivo, instrucciones: getStage5TechInstructions(t.id) },
      { tipo: "juego" as const, titulo: "Desafío Final", duracion: 30, descripcion: "Reto avanzado.", instrucciones: getStage5Challenge(t.id) },
      { tipo: "descanso" as const, titulo: "Merienda", duracion: 15, descripcion: "Descanso.", instrucciones: ["Merienda especial."] },
      { tipo: "actividad" as const, titulo: "Actividad de Cierre", duracion: 30, descripcion: "Actividad significativa de la etapa final.", instrucciones: getStage5Activity(t.id) },
      { tipo: "reflexión" as const, titulo: "Cierre Especial", duracion: 10, descripcion: "Reflexión profunda.", instrucciones: ["Reflexión personal.", "Compartir con la Manada.", "Gran Aullido.", "Registro final en carnet."] },
    ],
  }));
}

// Helper functions for Stage 2
function getWarmupGame(id: number): string[] {
  const games: Record<number, string[]> = {
    11: ["Juego 'Norte, Sur, Este, Oeste': El Akela grita una dirección.", "Los lobatos deben correr hacia ese punto cardinal.", "Quien se equivoque, hace una sentadilla.", "Aumentar velocidad progresivamente."],
    12: ["Juego de Espejo: en parejas, uno hace señas con los brazos.", "El otro debe copiar exactamente los movimientos.", "Cambiar roles cada 2 minutos.", "Reflexión: la comunicación requiere atención."],
    13: ["Carrera de la Camilla: en tríos, dos llevan al tercero sentado en sus brazos.", "Recorrer 20 metros y volver.", "Cambiar roles.", "Reflexión: mover heridos requiere técnica."],
    14: ["Juego de Constelaciones: formar figuras con los cuerpos acostados en el suelo.", "El Akela dice una forma y deben crearla juntos.", "Estrellas, osa mayor, cruz del sur.", "Gana la seisena más creativa."],
    15: ["Relevos de cuerdas: cada lobato corre con una cuerda.", "Al llegar, hace un nudo básico y vuelve.", "El siguiente deshace el nudo y hace uno nuevo.", "Velocidad y precisión."],
    16: ["Juego de Huellas: el Akela muestra huellas impresas.", "Los lobatos deben adivinar el animal.", "Puntos por acierto.", "Usar huellas de animales locales."],
    17: ["Carrera de Ingredientes: ingredientes dispersos en el campo.", "Cada seisena recibe una receta.", "Deben encontrar y recolectar los ingredientes correctos.", "Primera seisena con todos los ingredientes gana."],
    18: ["Juego de Torres: con palitos de helado construir la torre más alta.", "Solo se puede usar amarre (no pegamento).", "3 minutos de tiempo.", "La torre más alta que se mantenga en pie gana."],
    19: ["Juego de Estatuas: cuando el Akela se voltea, todos se congelan.", "Quien se mueva, queda eliminado.", "El objetivo es acercarse al Akela sin ser visto.", "Práctica de sigilo y control corporal."],
    20: ["Gran Juego de Repaso: 20 preguntas sobre todo lo aprendido.", "Formato de competencia por seisenas.", "Preguntas de brújula, Morse, nudos, fauna, etc.", "Premio especial para la seisena ganadora."],
  };
  return games[id] || ["Juego libre de calentamiento."];
}

function getMaterials(id: number): string[] {
  const mats: Record<number, string[]> = {
    11: ["Brújulas (1 por seisena)", "Mapa simple del lugar", "Conos de colores"],
    12: ["Banderas de señales (2 por lobato)", "Tabla de código Morse", "Linternas"],
    13: ["Vendas", "Tablillas", "Triángulos de tela", "Muñecos de práctica"],
    14: ["Mapa estelar", "Linterna roja", "Brújula"],
    15: ["Cuerdas de 2 metros", "Postes", "Diagramas de nudos"],
    16: ["Guía de huellas", "Yeso para moldes", "Lupas"],
    17: ["Fogón portátil", "Ingredientes simples", "Utensilios básicos"],
    18: ["Cuerdas variadas", "Palos largos", "Estacas"],
    19: ["Pañuelos", "Pintura facial", "Elementos de camuflaje"],
    20: ["Todo el material de evaluación", "Insignias de Saltador"],
  };
  return mats[id] || [];
}

function getTechInstructions(id: number): string[] {
  const instructions: Record<number, string[]> = {
    11: ["Presentar la brújula: partes (aguja, limbo, base).", "La aguja SIEMPRE apunta al Norte magnético.", "Enseñar los 4 puntos cardinales y los 4 intermedios.", "Práctica: encontrar el Norte y señalar los demás puntos.", "Tomar rumbos: apuntar la flecha de dirección y leer el grado.", "Ejercicio: tomar rumbo a 5 objetos diferentes.", "Caminar siguiendo un rumbo de 90° durante 20 pasos.", "Triangulación simple: ubicarse con 2 puntos conocidos."],
    12: ["SEMÁFORO: posiciones básicas de brazos con banderas.", "Posición de inicio: brazos abajo formando V invertida.", "Enseñar las letras A-Z una por una.", "Practicar en parejas: enviar y recibir mensajes simples.", "MORSE: sistema de puntos y rayas.", "Enseñar las letras más usadas: E, T, A, I, N, S, O.", "SOS: ··· --- ··· (la señal universal de emergencia).", "Practicar con golpes en mesa o con linterna."],
    13: ["Diferencia entre fractura y esguince.", "NUNCA mover un hueso roto sin inmovilizar primero.", "Inmovilización con tablillas: colocar a ambos lados.", "Atar con vendas: firme pero sin cortar circulación.", "Cabestrillo: usar triángulo de tela para brazo.", "Esguince de tobillo: método RICE (Reposo, Hielo, Compresión, Elevación).", "Práctica simulada con compañeros.", "Cuándo llamar emergencias: fractura abierta, deformidad, no puede mover."],
    14: ["La Estrella Polar: cómo encontrarla desde la Osa Mayor.", "Osa Mayor: las dos estrellas del final señalan la Polar.", "Cruz del Sur: señala el Sur (hemisferio sur).", "Orión: visible desde ambos hemisferios.", "La Luna: fases y cómo orientarse con ella.", "Luna creciente: los cuernos apuntan al Este.", "Planetas vs estrellas: los planetas no titilan.", "Práctica con mapa estelar (planisferio celeste)."],
    15: ["BALLESTRINQUE: para atar cuerda a un poste.", "Paso 1: dar una vuelta al poste.", "Paso 2: cruzar por encima y dar otra vuelta.", "Paso 3: pasar la punta bajo la X formada.", "TENSOR: para tensar cuerdas de tienda.", "Crear un lazo, pasar la punta, hacer dos vueltas.", "MARGARITA: para acortar una cuerda sin cortarla.", "Hacer tres lazos y asegurar los extremos."],
    16: ["Huellas: cada animal tiene una huella única.", "Perro vs gato: el perro muestra uñas, el gato no.", "Aves: patas palmeadas (acuáticas) vs garras (rapaces).", "Roedores: 4 dedos delante, 5 detrás.", "Cómo hacer molde de huella con yeso.", "Señales de presencia: excrementos, marcas, nidos.", "Cadena alimenticia local: quién come a quién.", "Observación silenciosa: 10 minutos quietos observando fauna."],
    17: ["Higiene: lavarse manos, limpiar superficie, alimentos frescos.", "Fuego seguro: zona despejada, tener agua cerca.", "Receta 1: Banana split en fogata (banana con chocolate en aluminio).", "Receta 2: Pan twist (masa enrollada en palo).", "Receta 3: Brochetas de frutas asadas.", "Cómo apagar el fuego correctamente.", "Limpieza: no dejar rastro (Leave No Trace).", "Almacenamiento de alimentos en campamento."],
    18: ["Amarre cuadrado: para unir palos en ángulo recto.", "Paso a paso: ballestrinque, vueltas alternadas, ballestrinque final.", "Amarre diagonal: para palos en X.", "Amarre redondo: para palos paralelos.", "Práctica: construir un trípode con 3 palos.", "Construir un portarrollos o perchero.", "Trabajo en seisenas para construcción mayor.", "Seguridad: verificar firmeza antes de usar."],
    19: ["El arte del acecho: moverse sin ser detectado.", "Paso del zorro: pisar con la punta primero, luego el talón.", "Usar la vegetación como cobertura.", "Regla del horizonte: nunca recortarse contra el cielo.", "Camuflaje: romper la silueta humana.", "Usar sombras a tu favor.", "Observación: detectar movimiento a distancia.", "Práctica en parejas: acechar y detectar."],
    20: ["Circuito final de evaluación Saltador:", "Estación 1: Orientación con brújula - tomar 3 rumbos.", "Estación 2: Enviar mensaje en Morse con linterna.", "Estación 3: Inmovilizar un brazo con cabestrillo.", "Estación 4: Hacer 3 nudos intermedios.", "Estación 5: Identificar 5 huellas de animales.", "Estación 6: Encender fogón y preparar pan twist.", "Todos deben completar al menos 4 de 6 estaciones."],
  };
  return instructions[id] || ["Contenido de técnica para este encuentro."];
}

function getThematicGame(id: number): string[] {
  const games: Record<number, string[]> = {
    11: ["Búsqueda del Tesoro con Brújula:", "Dar coordenadas (rumbo + pasos) para 5 puntos.", "En cada punto hay una pista para el siguiente.", "El tesoro final tiene un premio para la seisena.", "Todas las seisenas hacen el recorrido."],
    12: ["Batalla de Mensajes: cada seisena envía un mensaje en Morse.", "La otra seisena debe decodificarlo.", "Mensajes secretos con instrucciones.", "La seisena que descifre más mensajes gana."],
    13: ["Simulacro de Emergencia: escenario con 3 'heridos'.", "Cada seisena evalúa y atiende a un herido.", "Deben decidir prioridades.", "Evaluación por el Akela."],
    14: ["Juego del Planetario: lobatos representan planetas.", "Deben orbitar alrededor del 'Sol' en orden correcto.", "Velocidades diferentes para cada planeta.", "Quien choque, sale del sistema solar."],
    15: ["Puente de Monos: construir un puente de cuerdas entre dos árboles.", "Usar ballestrinque para atar.", "Todos deben cruzar.", "Trabajo en equipo para la seguridad."],
    16: ["Safari Fotográfico: buscar y 'fotografiar' (dibujar) animales o rastros.", "30 minutos de exploración.", "Compartir hallazgos.", "Premio al mejor 'fotógrafo'."],
    17: ["Master Chef Scout: cada seisena prepara un plato.", "Ingredientes limitados.", "Creatividad y sabor.", "Jurado: los Akelas y viejos lobatos."],
    18: ["Competencia de Construcción: cada seisena construye un proyecto.", "Opciones: mesa, banqueta, portabandera.", "30 minutos de construcción.", "Evaluación: firmeza, estética, utilidad."],
    19: ["Captura la Bandera Scout: combinación de acecho y estrategia.", "Cada seisena defiende su bandera.", "Deben acechar y capturar la bandera rival.", "Sin ser detectados por los vigías."],
    20: ["Gran Juego Final: combina todas las habilidades.", "Recorrido con estaciones de brújula, Morse, nudos.", "Competencia amistosa entre seisenas.", "Celebración al completar."],
  };
  return games[id] || ["Juego aplicando la técnica del día."];
}

function getPracticalActivity(id: number): string[] {
  const activities: Record<number, string[]> = {
    11: ["Crear un mapa simple del lugar de reunión.", "Marcar el Norte con una flecha.", "Ubicar puntos de referencia.", "Usar simbología básica de mapas."],
    12: ["Crear una tabla personal de código Morse.", "Pegarla en el carnet.", "Decorar con colores.", "Practicar con un compañero."],
    13: ["Armar un kit de inmovilización para el botiquín de seisena.", "Incluir tablillas, vendas y triángulos.", "Etiquetar cada elemento.", "Agregar instrucciones paso a paso."],
    14: ["Dibujar un mapa estelar en el carnet.", "Marcar las constelaciones aprendidas.", "Incluir cómo encontrar el Norte/Sur con estrellas.", "Decorar con brillo."],
    15: ["Crear un tablero de nudos.", "Montar los 6 nudos aprendidos en una tabla.", "Etiquetar cada uno con nombre y uso.", "Exhibir en el Rincón de Seisena."],
    16: ["Crear moldes de huellas con yeso.", "Dejar secar y etiquetar.", "Agregar al herbario/carnet.", "Investigar más sobre el animal."],
    17: ["Escribir un recetario scout en el carnet.", "Incluir las 3 recetas aprendidas.", "Agregar dibujos de los pasos.", "Planificar el menú para el próximo campamento."],
    18: ["Diseñar un proyecto de construcción para el campamento.", "Hacer un croquis con medidas.", "Listar materiales necesarios.", "Presentar el diseño a la Manada."],
    19: ["Crear un diario de observaciones.", "Registrar animales, plantas y personas observados.", "Practicar el camuflaje con materiales naturales.", "Planificar una ruta de acecho."],
    20: ["Ceremonia de entrega de insignias Saltador.", "Cada lobato recibe su insignia.", "Foto grupal con banderas de seisena.", "Planificar la primera actividad como Rastreador."],
  };
  return activities[id] || ["Actividad práctica del encuentro."];
}

// Stage 3 helpers
function getStage3WarmupGame(id: number): string[] {
  const games: Record<number, string[]> = {
    21: ["Relevos de leña: recoger ramitas clasificadas por grosor.", "Yesca (fina como cabello), leña fina (como lápiz), leña gruesa (como brazo).", "La seisena que clasifique mejor, gana.", "Reflexión: sin buena leña, no hay buen fuego."],
    22: ["Carrera de armar/desarmar: usando sábanas y palos simular montar carpa.", "Velocidad y orden.", "Todo debe quedar bien doblado al desarmar."],
    23: ["Juego del Chef: un lobato describe un plato sin decir el nombre.", "Los demás adivinan.", "Puntos por rapidez."],
    24: ["Torres de vasos: construir la torre más alta con vasos.", "Solo se pueden usar en 3 minutos.", "Trabajo en seisena."],
    25: ["Juego del Depredador: uno es el depredador con ojos vendados.", "Los demás deben cruzar el área sin hacer ruido.", "Si el depredador señala correctamente, el lobato queda eliminado."],
    26: ["Simulacro cronometrado: ¿en cuánto tiempo pueden llamar al 911?", "Practicar dar información: qué, dónde, cuántos heridos.", "Todos practican.", "La calma es clave."],
    27: ["Juego de predicciones: observar el cielo ahora.", "Cada seisena predice si lloverá, hará sol, etc.", "Verificar al final del encuentro.", "Puntos por acierto."],
    28: ["Carrera de reciclaje: clasificar basura en orgánica, plástico, papel, vidrio.", "Velocidad y precisión.", "Reflexión sobre contaminación."],
    29: ["Juego de poleas humanas: en fila, pasar objetos de mano en mano.", "Diferentes pesos y tamaños.", "La fila más eficiente gana."],
    30: ["Gran juego de pistas combinando todas las técnicas de la etapa.", "Recorrido por estaciones.", "Evaluación divertida."],
  };
  return games[id] || ["Juego de activación."];
}

function getStage3Materials(id: number): string[] {
  const mats: Record<number, string[]> = {
    21: ["Leña clasificada", "Fósforos de seguridad", "Balde de agua", "Parrilla portátil"],
    22: ["Carpas", "Estacas", "Martillo", "Lonas"],
    23: ["Fogón", "Ollas", "Ingredientes para guiso simple", "Agua", "Utensilios"],
    24: ["Troncos delgados", "Cuerdas largas", "Serruchos (solo adultos)", "Martillo"],
    25: ["Pintura facial", "Pañuelos", "Silbatos"],
    26: ["Maniquí de RCP (o almohadón)", "Vendas", "Sábana", "Agua fría"],
    27: ["Termómetro", "Veleta casera", "Cuaderno de registro"],
    28: ["Bolsas de basura", "Guantes", "Semillas", "Herramientas de jardín"],
    29: ["Cuerdas gruesas", "Poleas simples", "Mosquetones", "Cargas pesadas"],
    30: ["Todo el material de las etapas anteriores", "Insignias de Rastreador"],
  };
  return mats[id] || [];
}

function getStage3TechInstructions(id: number): string[] {
  const instr: Record<number, string[]> = {
    21: ["Seguridad: zona despejada de 3 metros, balde de agua cerca SIEMPRE.", "Tipos de fuego: pirámide (iluminación), estrella (cocina), trinchera (viento).", "Preparar el nido de yesca: material seco y fino.", "Agregar leña fina en forma de pirámide sobre la yesca.", "Encender desde abajo, proteger del viento.", "Alimentar gradualmente con leña más gruesa.", "NUNCA dejar fuego sin vigilancia.", "Apagar: echar agua, revolver cenizas, verificar con la mano (no debe sentirse calor)."],
    22: ["Elegir terreno: plano, sin piedras, lejos de arroyos, protegido del viento.", "Desplegar la carpa: identificar piso, cuerpo, sobretecho.", "Armar estructura (parantes/varillas).", "Tensar correctamente: la tela no debe tocar el suelo.", "Clavar estacas en ángulo de 45° alejándolas de la carpa.", "Cavar canaleta alrededor si hay riesgo de lluvia.", "Desmontar: sacudir, secar, doblar ordenadamente.", "Almacenar: nunca guardar húmeda."],
    23: ["Planificación: menú, ingredientes, roles (cocinero, ayudante, fueguista, lavador).", "Higiene: lavarse manos, lavar vegetales, superficie limpia.", "Receta: Guiso scout (arroz con vegetales y proteína).", "Paso 1: Encender fogón y calentar agua.", "Paso 2: Sofreír cebolla y ajo.", "Paso 3: Agregar vegetales cortados.", "Paso 4: Agregar arroz y agua. Cocinar tapado.", "Limpieza: lavar todo, apagar fuego, no dejar rastro."],
    24: ["Tipos de construcciones: mesa, banco, portaherramientas, portal.", "Amarre cuadrado para ángulos de 90°.", "Amarre diagonal para refuerzos en X.", "Planificación: dibujar el diseño antes de construir.", "Medir y cortar (adultos) los troncos necesarios.", "Armar la base primero, luego agregar estructura.", "Verificar estabilidad: sacudir suavemente.", "Decorar y personalizar."],
    25: ["Rastreo avanzado: seguir un rastro de 500 metros.", "Señales de paso: ramas rotas, hierba aplastada, huellas.", "Edad del rastro: humedad, nitidez, insectos.", "Acecho: acercarse a un objetivo sin ser detectado.", "Técnicas: usar vegetación, moverse con el viento a favor.", "Freezing: quedarse inmóvil cuando el objetivo mira.", "Práctica: acechar al Akela que vigila desde un punto elevado.", "Debriefing: qué funcionó y qué no."],
    26: ["Quemaduras: grados 1 (rojo), 2 (ampollas), 3 (profunda).", "Grado 1: agua fría 10 minutos, NO hielo, NO cremas.", "Grado 2: agua fría, NO reventar ampollas, cubrir con gasa.", "Grado 3: NO tocar, cubrir, llamar emergencias.", "Ahogamiento: NO meterse al agua sin saber nadar.", "Lanzar algo flotante (cuerda, botella, tabla).", "RCP básico: 30 compresiones, 2 ventilaciones (solo demostración).", "Posición lateral de seguridad si la persona respira."],
    27: ["Nubes: cirros (tiempo bueno), cúmulos (variable), nimbos (lluvia).", "Viento: cambio de dirección puede indicar cambio de tiempo.", "Presión: caída de presión = mal tiempo.", "Indicadores naturales: hormigas tapan hormigueros antes de lluvia.", "Rocío abundante por la mañana = día soleado.", "Cielo rojo al atardecer = buen tiempo mañana.", "Registrar observaciones en cuaderno meteorológico.", "Comparar predicciones con la realidad."],
    28: ["Los 7 principios de No Dejar Rastro.", "Reducir, reutilizar, reciclar: las 3R.", "Impacto del plástico en la naturaleza.", "Proyecto: limpieza de un área del parque/bosque.", "Clasificar la basura recolectada.", "Plantar un árbol o sembrar semillas.", "Compostar: cómo hacer abono orgánico.", "Compromiso personal de cuidado ambiental."],
    29: ["Nudos de rescate: ocho doble, prusik, nudo de agua.", "Ocho doble: para asegurar arnés.", "Prusik: para ascender por una cuerda.", "Poleas: ventaja mecánica - mover más con menos fuerza.", "Polea simple: cambia dirección de la fuerza.", "Polea doble: reduce la fuerza necesaria a la mitad.", "Práctica: izar un peso de 20 kg con sistema de poleas.", "Seguridad: SIEMPRE supervisión adulta en ejercicios con altura."],
    30: ["Mini campamento de 3 horas simulando un día completo.", "Montar campamento: carpa, cocina, área de fogata.", "Preparar almuerzo scout.", "Actividad de rastreo y acecho.", "Construcción pionera.", "Evaluación de todas las técnicas de la etapa.", "Ceremonia de entrega de insignias Rastreador.", "Celebración y foto grupal."],
  };
  return instr[id] || ["Instrucciones de la técnica."];
}

function getStage3Challenge(id: number): string[] {
  return ["Desafío por seisenas aplicando la técnica del día.", "Tiempo limitado: 20 minutos.", "Evaluación por calidad y trabajo en equipo.", "La seisena ganadora recibe puntos extra.", "Todas las seisenas reciben reconocimiento por participar."];
}

function getStage3Workshop(id: number): string[] {
  return ["Taller práctico extendido de la técnica.", "Cada lobato practica individualmente.", "El Akela y los seiseneros ayudan a quienes necesitan.", "Registro del avance en el carnet.", "Preparar material para el próximo encuentro."];
}

// Stage 4 helpers
function getStage4Game(id: number): string[] {
  const games: Record<number, string[]> = {
    31: ["Juego del Líder Ciego: el seisenero con ojos vendados dirige a su equipo.", "Solo puede dar instrucciones verbales.", "Deben completar un circuito de obstáculos.", "Reflexión: liderar requiere comunicación clara."],
    32: ["Orientación con mapa: encontrar 5 puntos marcados.", "Usar solo el mapa (sin brújula).", "Registrar coordenadas.", "Primera seisena en encontrar todos gana."],
    33: ["Supervivencia simulada: ¿qué llevarías a una isla desierta?", "Cada seisena elige 10 objetos de una lista de 30.", "Deben justificar cada elección.", "Debate grupal sobre las mejores elecciones."],
    34: ["Triage: clasificar heridos por prioridad.", "Escenarios con múltiples heridos.", "Decidir quién atender primero.", "Discusión sobre toma de decisiones bajo presión."],
    35: ["Lluvia de ideas: ¿qué problemas tiene nuestra comunidad?", "Cada seisena propone 5 problemas.", "Votar los 3 más importantes.", "Comenzar a pensar en soluciones."],
    36: ["Juego de Comunicación: enviar un mensaje complejo por Morse.", "Incluir números y letras.", "Decodificar contra reloj.", "La comunicación clara salva vidas."],
    37: ["Planificación de ruta: usando mapa, planificar una excursión.", "Calcular distancia y tiempo.", "Identificar fuentes de agua y refugio.", "Presentar plan al grupo."],
    38: ["Ejecución del proyecto: cada seisena tiene un rol.", "Coordinación entre seisenas.", "Seguimiento del plan.", "Resolver problemas sobre la marcha."],
    39: ["Feria de especialidades: estaciones con diferentes actividades.", "Arte, deporte, ciencia, naturaleza, servicio.", "Cada lobato prueba todas.", "Elegir la que más le guste."],
    40: ["Gran expedición con todas las habilidades.", "Navegación, supervivencia, liderazgo.", "Trabajo en equipo.", "Evaluación integral."],
  };
  return games[id] || ["Dinámica de grupo."];
}

function getStage4TechInstructions(id: number): string[] {
  const instr: Record<number, string[]> = {
    31: ["¿Qué es liderazgo? No es mandar, es SERVIR.", "Tipos de liderazgo: democrático, autocrático, laissez-faire.", "El mejor líder scout es democrático.", "Habilidades: escuchar, comunicar, decidir, motivar.", "Ejercicio: cada lobato lidera una actividad de 5 minutos.", "Feedback constructivo: qué hizo bien, qué puede mejorar.", "El Consejo de Roca: tomar decisiones en grupo.", "Responsabilidad: el líder responde por su equipo."],
    32: ["Elementos del mapa: escala, leyenda, orientación, coordenadas.", "Curvas de nivel: cómo leer el relieve.", "Escala: 1:25000 significa 1 cm = 250 metros.", "Cómo orientar el mapa con brújula.", "Crear un croquis del lugar de reunión.", "Triangulación con mapa y brújula.", "GPS vs mapa: ventajas de saber usar ambos.", "Ejercicio: navegación con mapa al punto indicado."],
    33: ["Prioridades de supervivencia: Refugio > Agua > Fuego > Comida.", "Refugio: tipos naturales (cueva, árbol caído) y construidos.", "Lean-to: refugio simple con ramas y hojas.", "Agua: NUNCA beber agua sin purificar.", "Métodos de purificación: hervir (5 min), pastillas, filtro.", "Fuego sin fósforos: pedernal, lupa, arco.", "Señales de rescate: fuego con humo, SOS en el suelo.", "Regla del 3: 3 min sin aire, 3 horas sin refugio (extremo), 3 días sin agua, 3 semanas sin comida."],
    34: ["Evaluación primaria: ¿Responde? ¿Respira? ¿Tiene pulso?", "Protocolo ABC: Airway, Breathing, Circulation.", "Transporte de heridos: técnicas de 1, 2 y 4 personas.", "Camilla improvisada con palos y chaquetas.", "Inmovilización de columna: NUNCA mover si se sospecha.", "Posición anti-shock: piernas elevadas.", "Botiquín completo de Manada: inventario y reposición.", "Práctica: simulacro completo con escenarios."],
    35: ["¿Qué es servicio comunitario? Ayudar sin esperar nada a cambio.", "Baden-Powell: 'Dejad el mundo mejor de como lo encontrasteis.'", "Identificar necesidades: observar la comunidad.", "Planificación: objetivo, recursos, cronograma, responsables.", "Tipos de proyectos: limpieza, pintura, enseñanza, acompañamiento.", "Presupuesto simple: ¿qué necesitamos y cuánto cuesta?", "Pedir ayuda: cómo hablar con autoridades y vecinos.", "Cada seisena prepara un mini proyecto."],
    36: ["Morse completo: todo el alfabeto y números.", "Velocidad: empezar lento e ir aumentando.", "Señales con espejo: usar el reflejo del sol.", "Ángulo de señal: apuntar al receptor.", "Radio: protocolo básico de comunicación.", "'Cambio' para indicar fin de transmisión.", "'Corto y fuera' para terminar.", "Práctica: comunicación a distancia entre seisenas."],
    37: ["Planificación de excursión: ruta, permisos, equipo, comida, emergencias.", "Equipo personal: mochila, agua, comida, botiquín, abrigo, linterna.", "Equipo grupal: carpa, fogón, cuerda, mapa, radio.", "Ritmo de marcha: 4 km/h en llano, descanso cada hora.", "Señales en el camino: dejar rastro para los que siguen.", "Qué hacer si te pierdes: STOP (Sit, Think, Observe, Plan).", "Etiqueta de sendero: ceder paso, no atajar, no dejar basura.", "Plan B: siempre tener una alternativa."],
    38: ["Ejecución del proyecto de servicio elegido.", "Distribución de tareas entre seisenas.", "Documentar con fotos y notas.", "Resolver problemas que surjan.", "Comunicación efectiva con la comunidad.", "Seguridad durante el proyecto.", "Evaluación: ¿cumplimos el objetivo?", "Celebrar el logro juntos."],
    39: ["Especialidades disponibles: Artista, Deportista, Naturalista, Científico, Servicio.", "Artista: dibujo, música, teatro, manualidades.", "Deportista: atletismo, natación, ciclismo.", "Naturalista: botánica, zoología, ecología.", "Científico: experimentos, tecnología, astronomía.", "Servicio: primeros auxilios avanzados, bomberos, socorrismo.", "Cada lobato elige UNA especialidad para desarrollar.", "Plan de trabajo: 3 encuentros para completar la especialidad."],
    40: ["Gran expedición de evaluación integral.", "Ruta de 3 km con estaciones de prueba.", "Navegación autónoma con mapa y brújula.", "Resolución de emergencias simuladas.", "Construcción de refugio temporal.", "Preparación de alimento.", "Ceremonia de entrega de insignias Cazador.", "Discurso del Akela sobre el crecimiento del lobato."],
  };
  return instr[id] || ["Instrucciones técnicas."];
}

function getStage4Challenge(id: number): string[] {
  return ["Desafío avanzado por seisenas.", "Requiere aplicar múltiples técnicas aprendidas.", "Evaluación de liderazgo y trabajo en equipo.", "Tiempo limitado: 25 minutos.", "Presentación de resultados ante la Manada."];
}

function getStage4Project(id: number): string[] {
  return ["Proyecto aplicado en equipo.", "Documentar el proceso en el carnet.", "Presentar ante el grupo.", "Evaluar entre pares (feedback constructivo).", "Registro de logro en carnet."];
}

// Stage 5 helpers
function getStage5Game(id: number): string[] {
  const games: Record<number, string[]> = {
    41: ["Feria de talentos: cada lobato muestra su habilidad elegida.", "3 minutos por presentación.", "Aplausos y reconocimiento.", "Elegir su especialidad basado en lo que más disfrutan."],
    42: ["Práctica intensiva de la especialidad.", "Mentoría entre lobatos más avanzados y nuevos.", "Registro de progreso.", "Preparar para la evaluación."],
    43: ["Preparar una mini clase: cada lobato enseña algo que domina.", "Practicar frente a su seisena.", "Feedback de los compañeros.", "Mejorar y practicar de nuevo."],
    44: ["Juego de liderazgo complejo: los lobatos dirigen TODO el encuentro.", "Seiseneros planifican las actividades.", "El Akela solo observa y asesora.", "Evaluación de capacidad de liderazgo."],
    45: ["Sesión de planificación: identificar necesidad comunitaria.", "Diseñar el proyecto paso a paso.", "Asignar responsabilidades.", "Crear cronograma realista."],
    46: ["Ejecución del proyecto final.", "Los lobatos lideran la actividad.", "Documentación completa.", "Celebración del logro."],
    47: ["Timeline viviente: cada seisena representa una época del escultismo.", "Dramatizar momentos clave.", "Baden-Powell, Jamborees, escultismo local.", "Presentar ante la Manada."],
    48: ["Circuito final de evaluación con TODAS las técnicas.", "Auto-evaluación y evaluación por pares.", "Identificar fortalezas y áreas de mejora.", "Plan personal de desarrollo."],
    49: ["Visita de scouts de la Tropa.", "Charla sobre la vida en la Tropa.", "Preguntas y respuestas.", "Actividad conjunta."],
    50: ["Gran Juego de Despedida con actividades memorables.", "Circuito de recuerdos: una actividad de cada etapa.", "Libro de firmas y mensajes.", "Preparación para la ceremonia."],
  };
  return games[id] || ["Dinámica de grupo."];
}

function getStage5TechInstructions(id: number): string[] {
  const instr: Record<number, string[]> = {
    41: ["Elegir especialidad: ¿qué te apasiona?", "Planificar: 3 objetivos concretos para tu especialidad.", "Buscar un mentor: alguien que sepa del tema.", "Crear un portafolio de tu especialidad.", "Practicar regularmente.", "Documentar tu progreso con fotos y notas.", "Preparar una presentación final.", "La especialidad es tu marca personal como scout."],
    42: ["Desarrollo intensivo de la especialidad.", "Completar al menos 2 de los 3 objetivos.", "Crear un producto final (obra, prueba física, experimento, etc.).", "Documentar el proceso.", "Recibir feedback del mentor.", "Ajustar y mejorar.", "Preparar la evaluación final.", "Compartir conocimientos con la seisena."],
    43: ["El scout enseña: crear un plan de clase de 15 minutos.", "Estructura: introducción, desarrollo, práctica, cierre.", "Materiales: preparar todo lo necesario.", "Lenguaje: adaptar al nivel de los estudiantes.", "Paciencia: repetir cuantas veces sea necesario.", "Evaluar: ¿los estudiantes aprendieron?", "Reflexión: ¿qué mejoraría para la próxima vez?", "Enseñar a los Pata Tierna en el próximo encuentro."],
    44: ["Los seiseneros planifican el encuentro completo.", "Deben incluir: apertura, juego, técnica, actividad, cierre.", "Gestionar tiempo y recursos.", "Resolver conflictos.", "Motivar a sus seisenas.", "El Akela solo interviene si es necesario.", "Evaluación de desempeño como líderes.", "Reflexión grupal sobre el liderazgo ejercido."],
    45: ["Proyecto final: debe beneficiar a la comunidad.", "Diagnóstico: ¿qué necesita nuestra comunidad?", "Elegir proyecto por votación democrática.", "Planificar: objetivo, actividades, recursos, cronograma.", "Presupuesto: costos y cómo conseguir los recursos.", "Roles: quién hace qué.", "Plan de comunicación: informar a la comunidad.", "Presentar el plan al Grupo Scout para aprobación."],
    46: ["Ejecutar el proyecto planificado.", "Cada lobato cumple su rol asignado.", "Documentar con fotos y video.", "Resolver problemas sobre la marcha.", "Mantener la motivación del equipo.", "Agradecer a todos los colaboradores.", "Evaluar: ¿se cumplió el objetivo?", "Celebrar el logro colectivo."],
    47: ["1907: Baden-Powell realiza el primer campamento scout en Brownsea.", "1908: Se publica 'Escultismo para Muchachos'.", "1910: Se crea la rama femenina (Guías).", "1916: Se crea la Manada de Lobatos (Cubbing).", "Promesa y Ley: valores que no cambian.", "El escultismo en nuestro país: historia local.", "Grandes Jamborees: encuentros mundiales.", "El futuro del escultismo: ¿cómo seguimos creciendo?"],
    48: ["Evaluación integral de TODAS las habilidades:", "Nudos: 8 nudos diferentes en 10 minutos.", "Orientación: navegar 500m con brújula.", "Primeros auxilios: resolver 3 escenarios.", "Campismo: montar carpa y encender fuego.", "Señales y comunicación: enviar mensaje en Morse.", "Naturaleza: identificar 10 especies.", "Liderazgo: dirigir una actividad de 10 minutos.", "Servicio: presentar portafolio de servicio comunitario."],
    49: ["La Tropa Scout: ¿qué es y cómo funciona?", "Patrullas vs Seisenas: más autonomía y responsabilidad.", "Nuevas técnicas: rappel, kayak, espeleología.", "Campamentos más largos y desafiantes.", "Sistema de progresión: de Scout a Rover.", "El Guía de Patrulla: el siguiente paso de liderazgo.", "Expectativas y compromisos.", "Prepararse mental y emocionalmente para el cambio."],
    50: ["Preparación de la Ceremonia de Paso.", "Ensayo general de la ceremonia.", "Palabras del Akela para cada lobato.", "Entrega de carta personal a cada graduado.", "Traspaso simbólico: de la pañoleta de Manada a la de Tropa.", "Juramento de continuar el camino scout.", "Discurso de un lobato representante.", "Momento de agradecimiento a padres y dirigentes."],
  };
  return instr[id] || ["Instrucciones técnicas."];
}

function getStage5Challenge(id: number): string[] {
  const challenges: Record<number, string[]> = {
    41: ["Presentar ante la Manada el plan de especialidad.", "Recibir preguntas y sugerencias.", "Ajustar el plan según feedback."],
    42: ["Demostración de habilidad ante un jurado.", "Evaluación formal.", "Retroalimentación constructiva."],
    43: ["Dar la clase preparada a lobatos de Pata Tierna.", "Evaluación por los 'estudiantes'.", "Autoevaluación."],
    44: ["Liderar un juego complejo para toda la Manada.", "Gestionar 30+ minutos de actividad.", "Resolver imprevistos."],
    45: ["Presentar el proyecto ante el Consejo de Grupo.", "Defender la propuesta.", "Incorporar sugerencias."],
    46: ["Completar el proyecto en el tiempo establecido.", "Documentar resultados.", "Presentar a la comunidad."],
    47: ["Quiz de historia del escultismo.", "Debate sobre el futuro del movimiento.", "Reflexión personal."],
    48: ["Circuito completo de evaluación.", "Tiempo límite estricto.", "Autoevaluación honesta."],
    49: ["Actividad conjunta con la Tropa Scout.", "Participar como observador en una reunión de Tropa.", "Reflexión sobre el cambio."],
    50: ["Ceremonia de Paso completa.", "Discurso personal de cada graduado.", "Entrega de insignia de Lobato Superior.", "Foto final de generación.", "¡Fiesta de celebración!"],
  };
  return challenges[id] || ["Desafío del encuentro."];
}

function getStage5Activity(id: number): string[] {
  const activities: Record<number, string[]> = {
    41: ["Crear el portafolio de especialidad.", "Diseñar la portada.", "Primera entrada del diario de especialidad."],
    42: ["Sesión práctica extendida.", "Feedback de mentor.", "Actualizar portafolio."],
    43: ["Preparar materiales didácticos.", "Ensayar la clase.", "Pedir feedback a un compañero."],
    44: ["Evaluar el encuentro que lideraron.", "Identificar logros y áreas de mejora.", "Plan de mejora personal."],
    45: ["Crear materiales para el proyecto (volantes, carteles).", "Contactar colaboradores.", "Confirmar logística."],
    46: ["Evaluación del proyecto ejecutado.", "Crear informe final.", "Preparar presentación de resultados."],
    47: ["Crear línea de tiempo ilustrada para el rincón scout.", "Agregar la historia local.", "Compartir con la comunidad."],
    48: ["Completar el carnet de logros.", "Autoevaluación escrita.", "Carta al yo del futuro scout."],
    49: ["Escribir carta de despedida a la Manada.", "Preparar regalo simbólico para los más jóvenes.", "Ensayar ceremonia de paso."],
    50: ["Gran Ceremonia de Paso con padres y comunidad scout.", "Entrega de certificados e insignias.", "Fogata de despedida con canciones.", "Abrazo de Manada: todos juntos una última vez.", "¡El lobo ha crecido, pero siempre será parte de la Manada!"],
  };
  return activities[id] || ["Actividad final del encuentro."];
}

export function getEncounterById(id: number): Encounter | undefined {
  return encounters.find(e => e.id === id);
}

export function getStageByNumber(num: number): Stage | undefined {
  return stages.find(s => s.numero === num);
}

export function getEncountersByStage(stageNum: number): Encounter[] {
  return encounters.filter(e => e.etapa === stageNum);
}
