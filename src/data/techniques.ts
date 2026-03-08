export interface Technique {
  id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  pasos: string[];
  consejos?: string[];
  dificultad: "fácil" | "medio" | "avanzado";
  icono: string;
}

export type TechCategory = {
  id: string;
  nombre: string;
  icono: string;
  color: string;
};

export const techCategories: TechCategory[] = [
  { id: "todas", nombre: "Todas", icono: "🔍", color: "from-gray-600 to-gray-400" },
  { id: "nudos", nombre: "Nudos", icono: "🪢", color: "from-amber-700 to-yellow-500" },
  { id: "senales", nombre: "Señales de Pista", icono: "🧭", color: "from-emerald-700 to-green-500" },
  { id: "primeros-auxilios", nombre: "Primeros Auxilios", icono: "🏥", color: "from-red-700 to-rose-500" },
  { id: "campismo", nombre: "Campismo", icono: "⛺", color: "from-blue-700 to-cyan-500" },
];

export const techniques: Technique[] = [
  // === NUDOS ===
  {
    id: "as-de-guia",
    nombre: "As de Guía",
    categoria: "nudos",
    descripcion: "El rey de los nudos. Crea un lazo fijo que no se aprieta ni se afloja. Ideal para rescate y amarre seguro.",
    pasos: [
      "Forma un pequeño lazo (ojo) en la cuerda, dejando un cabo libre.",
      "Pasa el cabo libre por dentro del ojo, de abajo hacia arriba.",
      "Rodea el cabo libre por detrás de la cuerda principal (firme).",
      "Vuelve a pasar el cabo libre por el ojo, ahora de arriba hacia abajo.",
      "Ajusta tirando del lazo grande y del cabo libre al mismo tiempo."
    ],
    consejos: ["Recuerda: 'La serpiente sale del pozo, rodea el árbol y vuelve al pozo.'", "Es el nudo más importante del escultismo."],
    dificultad: "medio",
    icono: "🪢"
  },
  {
    id: "ballestrinque",
    nombre: "Ballestrinque",
    categoria: "nudos",
    descripcion: "Nudo de amarre rápido a un poste o estaca. Muy usado para iniciar y terminar amarres en construcciones.",
    pasos: [
      "Pasa la cuerda por encima del poste de izquierda a derecha.",
      "Cruza la cuerda por encima de sí misma formando una X.",
      "Da otra vuelta al poste pasando por debajo de la X.",
      "Mete el cabo libre por debajo de la última vuelta.",
      "Ajusta tirando de ambos extremos."
    ],
    consejos: ["Es el nudo con el que se inician casi todos los amarres.", "Puede aflojarse si no tiene tensión constante."],
    dificultad: "fácil",
    icono: "🪢"
  },
  {
    id: "rizo",
    nombre: "Nudo Rizo (Nudo Llano)",
    categoria: "nudos",
    descripcion: "Une dos cuerdas del mismo grosor. Es plano y simétrico. Usado en vendajes y para atar paquetes.",
    pasos: [
      "Toma un cabo en cada mano.",
      "Cruza el cabo derecho sobre el izquierdo y pásalo por debajo.",
      "Ahora cruza el cabo izquierdo sobre el derecho y pásalo por debajo.",
      "Ajusta tirando de ambos cabos.",
      "Verifica: los cabos deben salir paralelos (no cruzados)."
    ],
    consejos: ["Recuerda: 'Derecho sobre izquierdo, izquierdo sobre derecho.'", "Si los cabos salen cruzados, hiciste un nudo de vaca (incorrecto)."],
    dificultad: "fácil",
    icono: "🪢"
  },
  {
    id: "vuelta-de-escota",
    nombre: "Vuelta de Escota",
    categoria: "nudos",
    descripcion: "Une dos cuerdas de diferente grosor. Más seguro que el nudo rizo para cuerdas desiguales.",
    pasos: [
      "Haz un seno (U) con la cuerda más gruesa.",
      "Pasa la cuerda delgada por dentro del seno, de abajo hacia arriba.",
      "Rodea ambos lados del seno con la cuerda delgada.",
      "Mete el cabo de la cuerda delgada por debajo de sí misma.",
      "Ajusta tirando de los extremos opuestos."
    ],
    dificultad: "medio",
    icono: "🪢"
  },
  {
    id: "presilla-de-alondra",
    nombre: "Presilla de Alondra",
    categoria: "nudos",
    descripcion: "Nudo rápido para sujetar una cuerda a un poste o anilla. Se hace con un lazo ya formado.",
    pasos: [
      "Dobla la cuerda por la mitad formando un seno.",
      "Pasa el seno por detrás del poste o anilla.",
      "Abre el seno y pasa los dos cabos por dentro.",
      "Tira de los cabos para ajustar.",
    ],
    dificultad: "fácil",
    icono: "🪢"
  },
  {
    id: "nudo-margarita",
    nombre: "Margarita",
    categoria: "nudos",
    descripcion: "Acorta una cuerda sin cortarla. También sirve para aislar una sección dañada de la cuerda.",
    pasos: [
      "Forma tres senos (lazos) consecutivos en la cuerda.",
      "Toma el seno central y pásalo por dentro de cada seno lateral.",
      "Ajusta tirando de los extremos de la cuerda.",
      "Mantén tensión constante para que no se desarme."
    ],
    dificultad: "avanzado",
    icono: "🪢"
  },
  {
    id: "ocho",
    nombre: "Nudo en Ocho",
    categoria: "nudos",
    descripcion: "Nudo de tope que impide que la cuerda se pase por un orificio. Base de muchos nudos de escalada.",
    pasos: [
      "Forma un lazo simple con la cuerda.",
      "Pasa el cabo libre por detrás de la cuerda firme.",
      "Introduce el cabo por el lazo desde arriba.",
      "Ajusta y verás la forma de un 8."
    ],
    dificultad: "fácil",
    icono: "🪢"
  },

  // === SEÑALES DE PISTA ===
  {
    id: "senal-seguir-recto",
    nombre: "Seguir Recto",
    categoria: "senales",
    descripcion: "Flecha que indica continuar en la dirección señalada. La señal más básica del rastreo.",
    pasos: [
      "Dibuja una flecha en el suelo con piedras, palos o tiza.",
      "La punta señala la dirección a seguir.",
      "Colócala en un lugar visible al inicio del camino.",
      "Puedes usar también hierba atada apuntando en la dirección."
    ],
    dificultad: "fácil",
    icono: "➡️"
  },
  {
    id: "senal-girar-derecha",
    nombre: "Girar a la Derecha",
    categoria: "senales",
    descripcion: "Indica que el camino gira hacia la derecha.",
    pasos: [
      "Dibuja una flecha curvada hacia la derecha.",
      "O coloca una piedra grande con una pequeña a su derecha.",
      "También: un palo con hierba atada indicando derecha."
    ],
    dificultad: "fácil",
    icono: "↪️"
  },
  {
    id: "senal-girar-izquierda",
    nombre: "Girar a la Izquierda",
    categoria: "senales",
    descripcion: "Indica que el camino gira hacia la izquierda.",
    pasos: [
      "Dibuja una flecha curvada hacia la izquierda.",
      "O coloca una piedra grande con una pequeña a su izquierda.",
      "También: un palo con hierba atada indicando izquierda."
    ],
    dificultad: "fácil",
    icono: "↩️"
  },
  {
    id: "senal-peligro",
    nombre: "Peligro / No Pasar",
    categoria: "senales",
    descripcion: "Señal de advertencia. Indica que no se debe seguir por ese camino.",
    pasos: [
      "Coloca tres piedras en fila o dibuja una X grande.",
      "También: dos palos cruzados en forma de X.",
      "Asegúrate de que sea muy visible.",
      "Úsala para señalar caminos peligrosos o equivocados."
    ],
    dificultad: "fácil",
    icono: "⛔"
  },
  {
    id: "senal-campamento",
    nombre: "Campamento Cerca",
    categoria: "senales",
    descripcion: "Indica que el campamento o destino está próximo.",
    pasos: [
      "Dibuja un triángulo (forma de carpa) con una bandera.",
      "O haz un montículo de piedras con un palo vertical.",
      "Colócalo a unos 200-500 metros del campamento."
    ],
    dificultad: "fácil",
    icono: "🏕️"
  },
  {
    id: "senal-mensaje-oculto",
    nombre: "Mensaje Oculto",
    categoria: "senales",
    descripcion: "Indica que hay un mensaje escondido cerca. Busca a la distancia de un paso en la dirección señalada.",
    pasos: [
      "Dibuja un círculo con un punto en el centro.",
      "La dirección del punto indica dónde buscar el mensaje.",
      "El mensaje puede estar bajo una piedra, en un árbol, etc.",
      "A veces se acompaña de un número indicando los pasos."
    ],
    dificultad: "medio",
    icono: "📩"
  },

  // === PRIMEROS AUXILIOS ===
  {
    id: "pa-herida",
    nombre: "Curar una Herida",
    categoria: "primeros-auxilios",
    descripcion: "Limpieza y protección básica de heridas menores (rasguños, cortes superficiales).",
    pasos: [
      "Lávate las manos con agua y jabón antes de tocar la herida.",
      "Limpia la herida con agua limpia, de adentro hacia afuera.",
      "Si hay tierra o suciedad, retírala suavemente.",
      "Aplica un antiséptico (agua oxigenada o yodo).",
      "Cubre con gasa estéril y fija con esparadrapo.",
      "Si sangra mucho, presiona con gasa limpia por 10 minutos."
    ],
    consejos: ["Nunca soples una herida.", "Si es profunda o no para de sangrar, busca ayuda médica."],
    dificultad: "fácil",
    icono: "🩹"
  },
  {
    id: "pa-esguince",
    nombre: "Tratar un Esguince",
    categoria: "primeros-auxilios",
    descripcion: "Primeros cuidados para torcedura de tobillo u otra articulación.",
    pasos: [
      "Sienta o acuesta al herido. No permitas que apoye el pie.",
      "Aplica hielo envuelto en tela durante 15-20 minutos.",
      "Eleva la zona afectada por encima del corazón.",
      "Inmoviliza con una venda elástica (sin apretar demasiado).",
      "Reposo total. No mover la articulación.",
      "Si hay mucho dolor o inflamación, busca atención médica."
    ],
    consejos: ["Recuerda RICE: Reposo, Hielo, Compresión, Elevación.", "Nunca apliques calor en las primeras 48 horas."],
    dificultad: "medio",
    icono: "🦶"
  },
  {
    id: "pa-quemadura",
    nombre: "Tratar una Quemadura",
    categoria: "primeros-auxilios",
    descripcion: "Primeros auxilios para quemaduras leves causadas por fuego, agua caliente o sol.",
    pasos: [
      "Retira la fuente de calor inmediatamente.",
      "Coloca la zona quemada bajo agua fría corriente por 10-20 minutos.",
      "No apliques hielo directamente, pasta de dientes ni mantequilla.",
      "Si hay ampollas, NO las revientes.",
      "Cubre con gasa estéril húmeda.",
      "Si la quemadura es grande o profunda, busca atención médica."
    ],
    dificultad: "medio",
    icono: "🔥"
  },
  {
    id: "pa-insolacion",
    nombre: "Atender Insolación",
    categoria: "primeros-auxilios",
    descripcion: "Qué hacer cuando alguien sufre golpe de calor o insolación durante actividades al aire libre.",
    pasos: [
      "Lleva a la persona a la sombra inmediatamente.",
      "Acuéstala con las piernas ligeramente elevadas.",
      "Retira ropa innecesaria para refrescar.",
      "Aplica paños húmedos fríos en frente, cuello y axilas.",
      "Dale agua fresca a pequeños sorbos (si está consciente).",
      "Si pierde el conocimiento o vomita, busca ayuda médica urgente."
    ],
    dificultad: "medio",
    icono: "☀️"
  },
  {
    id: "pa-picadura",
    nombre: "Picadura de Insecto",
    categoria: "primeros-auxilios",
    descripcion: "Cómo actuar ante picaduras de mosquitos, abejas o avispas.",
    pasos: [
      "Si hay aguijón, retíralo raspando con una tarjeta (no uses pinzas).",
      "Lava la zona con agua y jabón.",
      "Aplica hielo envuelto en tela por 10 minutos.",
      "Si hay hinchazón excesiva, dificultad para respirar o mareo, busca ayuda médica urgente (puede ser alergia)."
    ],
    consejos: ["Vigila signos de reacción alérgica: hinchazón en cara, labios o garganta.", "Pregunta siempre si alguien es alérgico antes de salir al campo."],
    dificultad: "fácil",
    icono: "🐝"
  },

  // === CAMPISMO ===
  {
    id: "camp-fogata",
    nombre: "Encender una Fogata",
    categoria: "campismo",
    descripcion: "Técnica segura para armar y encender una fogata en campamento.",
    pasos: [
      "Elige un lugar seguro, lejos de árboles y carpas. Limpia el suelo.",
      "Haz un círculo de piedras para contener el fuego.",
      "Coloca yesca en el centro (hojas secas, papel, algodón).",
      "Sobre la yesca, arma una estructura de ramitas finas (tipi o cabaña).",
      "Enciende la yesca desde abajo con fósforos o encendedor.",
      "Ve agregando leña más gruesa conforme crece el fuego.",
      "Nunca dejes el fuego sin vigilancia. Apaga con agua y tierra al terminar."
    ],
    consejos: ["Nunca uses gasolina u otros acelerantes.", "Ten siempre agua cerca por seguridad.", "Respeta las normas del lugar sobre fogatas."],
    dificultad: "medio",
    icono: "🔥"
  },
  {
    id: "camp-carpa",
    nombre: "Armar una Carpa",
    categoria: "campismo",
    descripcion: "Cómo montar correctamente una carpa de campaña para pasar la noche.",
    pasos: [
      "Elige un terreno plano, sin piedras, ligeramente elevado (evita zonas bajas).",
      "Limpia el área de piedras y ramas puntiagudas.",
      "Extiende el piso (groundsheet) o plástico protector.",
      "Arma la estructura de varillas según las instrucciones de tu carpa.",
      "Coloca la carpa sobre la estructura y fíjala con clips o ganchos.",
      "Clava las estacas en ángulo de 45° alejándolas de la carpa.",
      "Tensa los vientos (cuerdas laterales) para mayor estabilidad.",
      "Coloca el sobretecho si llueve o hay rocío."
    ],
    dificultad: "medio",
    icono: "⛺"
  },
  {
    id: "camp-agua",
    nombre: "Potabilizar Agua",
    categoria: "campismo",
    descripcion: "Métodos para hacer segura el agua en situaciones de campamento.",
    pasos: [
      "Método 1 - Hervir: Hierve el agua a burbujeo fuerte por 3-5 minutos.",
      "Deja enfriar y pásala de un recipiente a otro para oxigenarla.",
      "Método 2 - Pastillas: Usa pastillas potabilizadoras según las instrucciones.",
      "Método 3 - Filtro: Filtra con tela limpia para quitar partículas grandes, luego hierve.",
      "Almacena el agua potabilizada en recipientes limpios y tapados."
    ],
    consejos: ["Nunca bebas agua de ríos o quebradas sin potabilizar.", "En la duda, hierve siempre."],
    dificultad: "fácil",
    icono: "💧"
  },
  {
    id: "camp-orientacion",
    nombre: "Orientación con Brújula",
    categoria: "campismo",
    descripcion: "Cómo usar una brújula para orientarte en el campo.",
    pasos: [
      "Sostén la brújula horizontal y nivelada sobre tu mano.",
      "Espera a que la aguja se estabilice. La punta roja señala el Norte.",
      "Gira la cápsula hasta alinear la N con la aguja roja.",
      "Para seguir un rumbo: gira tu cuerpo hasta que la aguja coincida con la N.",
      "Camina en la dirección que señala la flecha de dirección de la brújula.",
      "Toma puntos de referencia visuales para no desviarte."
    ],
    consejos: ["Aléjate de objetos metálicos y celulares al usar la brújula.", "Practica en lugares conocidos antes de depender de ella."],
    dificultad: "medio",
    icono: "🧭"
  },
  {
    id: "camp-mochila",
    nombre: "Armar la Mochila",
    categoria: "campismo",
    descripcion: "Cómo organizar y distribuir el peso correctamente en tu mochila de campamento.",
    pasos: [
      "Zona inferior: saco de dormir y ropa que no necesitarás durante el día.",
      "Zona media (cerca de la espalda): objetos pesados (comida, agua, carpa).",
      "Zona superior: ropa de lluvia, linterna, snacks, botiquín.",
      "Bolsillos laterales: botella de agua, mapa, brújula.",
      "Ajusta las correas de hombro, cintura y pecho para distribuir el peso.",
      "El peso total no debe superar el 20-25% de tu peso corporal."
    ],
    dificultad: "fácil",
    icono: "🎒"
  },
];
