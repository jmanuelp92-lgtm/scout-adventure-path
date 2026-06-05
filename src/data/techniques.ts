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
  { id: "manual-salud", nombre: "Manual de Salud", icono: "💊", color: "from-pink-700 to-fuchsia-500" },
  { id: "campismo", nombre: "Campismo", icono: "⛺", color: "from-blue-700 to-cyan-500" },
  { id: "manada", nombre: "Manada", icono: "🐺", color: "from-amber-800 to-orange-500" },
  { id: "orientacion", nombre: "Orientación", icono: "🧭", color: "from-indigo-700 to-blue-500" },
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

  // === MANUAL DE SALUD ===
  {
    id: "salud-deshidratacion",
    nombre: "Deshidratación",
    categoria: "manual-salud",
    descripcion: "Ocurre cuando el cuerpo pierde más líquidos de los que ingiere. Común en actividades al aire libre con calor.",
    pasos: [
      "Identifica los síntomas: boca seca, mareo, dolor de cabeza, orina oscura, debilidad.",
      "Lleva a la persona a la sombra y hazla sentar o acostar.",
      "Dale agua o suero oral a pequeños sorbos (nunca de golpe).",
      "Si no tienes suero, mezcla: 1 litro de agua + 6 cucharaditas de azúcar + 1/2 cucharadita de sal.",
      "Afloja la ropa y refresca con paños húmedos en frente y cuello.",
      "Si no mejora en 30 minutos o pierde el conocimiento, busca atención médica urgente."
    ],
    consejos: ["Prevención: beber agua cada 20-30 min durante actividades.", "No esperar a tener sed para hidratarse."],
    dificultad: "fácil",
    icono: "💧"
  },
  {
    id: "salud-reaccion-alergica",
    nombre: "Reacción Alérgica",
    categoria: "manual-salud",
    descripcion: "Respuesta del cuerpo a alimentos, picaduras o sustancias. Puede ser leve (ronchas) o grave (anafilaxia).",
    pasos: [
      "Alérgica LEVE (ronchas, picazón, estornudos): retira el alérgeno, lava la zona, aplica compresas frías.",
      "Si tiene antihistamínico recetado, ayúdalo a tomarlo.",
      "Alérgica GRAVE (hinchazón de labios/garganta, dificultad para respirar, mareo): LLAMA A EMERGENCIAS de inmediato.",
      "Si la persona tiene epinefrina autoinyectable (EpiPen), ayúdala a usarla en el muslo externo.",
      "Acuéstala con las piernas elevadas (si puede respirar). Si no puede respirar bien, siéntala.",
      "Vigila su respiración constantemente hasta que llegue la ayuda.",
      "NUNCA le des de comer o beber si tiene dificultad para respirar."
    ],
    consejos: ["SIEMPRE pregunta por alergias antes de cada campamento.", "Ten un registro de alergias de cada scout.", "Los alérgenos más comunes: maní, mariscos, picaduras de abeja, látex, medicamentos."],
    dificultad: "medio",
    icono: "🤧"
  },
  {
    id: "salud-asma",
    nombre: "Crisis de Asma",
    categoria: "manual-salud",
    descripcion: "Dificultad para respirar causada por inflamación de las vías respiratorias. Puede ocurrir por esfuerzo, alérgenos o frío.",
    pasos: [
      "Mantén la calma y tranquiliza a la persona.",
      "Siéntala en posición cómoda (ligeramente inclinada hacia adelante).",
      "Ayúdala a usar su inhalador de rescate (2 inhalaciones, esperar 1 minuto, repetir si no mejora).",
      "Afloja ropa apretada alrededor del pecho y cuello.",
      "Aléjala de posibles desencadenantes (humo, polvo, frío).",
      "Si no tiene inhalador o no mejora en 10-15 minutos, llama a emergencias.",
      "Si empeora (labios azulados, no puede hablar), es emergencia: llama al 123."
    ],
    consejos: ["Los scouts asmáticos deben llevar siempre su inhalador.", "Registra qué scouts tienen asma antes de cada actividad."],
    dificultad: "medio",
    icono: "🫁"
  },
  {
    id: "salud-dolor-estomago",
    nombre: "Dolor de Estómago / Diarrea",
    categoria: "manual-salud",
    descripcion: "Malestar digestivo común en campamentos por cambio de alimentación, agua o nervios.",
    pasos: [
      "Haz que la persona descanse acostada en posición cómoda.",
      "Dale líquidos claros: agua, suero oral, agua de arroz.",
      "Evita alimentos sólidos, grasosos o lácteos por unas horas.",
      "Si hay diarrea, hidratar constantemente con suero oral.",
      "Si hay vómito, esperar 30 minutos antes de dar líquidos (a sorbos pequeños).",
      "Si hay fiebre alta, sangre en las heces o dolor intenso, busca atención médica."
    ],
    consejos: ["Prevención: lavarse las manos antes de comer, usar agua potabilizada.", "Llevar siempre suero oral en el botiquín."],
    dificultad: "fácil",
    icono: "🤢"
  },
  {
    id: "salud-fiebre",
    nombre: "Fiebre en Campamento",
    categoria: "manual-salud",
    descripcion: "Temperatura corporal elevada (mayor a 38°C). Puede indicar infección, insolación o agotamiento.",
    pasos: [
      "Mide la temperatura con termómetro (si está disponible).",
      "Acuesta a la persona en lugar fresco y ventilado.",
      "Retira exceso de ropa y cúbrelo con una sábana ligera.",
      "Aplica paños de agua tibia (NO helada) en frente, axilas y cuello.",
      "Dale abundante agua y suero oral.",
      "Si tiene acetaminofén (y no es alérgico), administrar según su peso/edad.",
      "Si la fiebre supera 39.5°C o dura más de 24 horas, busca atención médica."
    ],
    consejos: ["NO uses alcohol para bajar la fiebre.", "NO abrigues en exceso a alguien con fiebre."],
    dificultad: "fácil",
    icono: "🌡️"
  },
  {
    id: "salud-hipotermia",
    nombre: "Hipotermia",
    categoria: "manual-salud",
    descripcion: "Temperatura corporal baja (menor a 35°C). Ocurre por exposición prolongada al frío o mojarse con viento.",
    pasos: [
      "Identifica: temblores, confusión, torpeza, piel fría y pálida, somnolencia.",
      "Lleva a la persona a un lugar seco y protegido del viento.",
      "Retira TODA la ropa mojada.",
      "Envuélvela en mantas, sacos de dormir o ropa seca (incluida la cabeza).",
      "Dale bebidas calientes y dulces (NO alcohol, NO café).",
      "Si está consciente, usa calor corporal: otra persona se acuesta junto a ella en el saco.",
      "Si pierde el conocimiento o los temblores cesan (grave): llama a emergencias de inmediato."
    ],
    consejos: ["Calienta gradualmente, nunca con agua caliente directa.", "La hipotermia puede ocurrir incluso a 10°C si hay viento y humedad."],
    dificultad: "avanzado",
    icono: "🥶"
  },
  {
    id: "salud-convulsiones",
    nombre: "Convulsiones / Epilepsia",
    categoria: "manual-salud",
    descripcion: "Movimientos involuntarios causados por actividad eléctrica anormal en el cerebro. Requiere calma y protección.",
    pasos: [
      "Mantén la CALMA. No intentes sujetar a la persona ni detener los movimientos.",
      "Despeja el área de objetos que puedan lastimarla.",
      "Coloca algo suave bajo su cabeza (chaqueta, toalla).",
      "NUNCA metas nada en su boca (ni dedos, ni cucharas, ni tela).",
      "Pon a la persona de lado (posición de recuperación) para evitar que se ahogue.",
      "Toma el tiempo: si dura más de 5 minutos, llama a emergencias.",
      "Quédate con ella hasta que recupere la conciencia. Habla con calma."
    ],
    consejos: ["Pregunta siempre si algún scout tiene epilepsia.", "Después de una convulsión la persona estará confundida: no la bombardees con preguntas."],
    dificultad: "avanzado",
    icono: "⚡"
  },
  {
    id: "salud-fractura",
    nombre: "Posible Fractura",
    categoria: "manual-salud",
    descripcion: "Lesión ósea por caída o golpe fuerte. Dolor intenso, hinchazón, deformidad o incapacidad de mover la zona.",
    pasos: [
      "NO muevas la zona lesionada. Inmoviliza en la posición que está.",
      "Si hay herida abierta, cubre con gasa estéril sin presionar el hueso.",
      "Inmoviliza usando un entablillado improvisado (palos, cartón, revista) y vendas.",
      "El entablillado debe cubrir la articulación de arriba y de abajo de la fractura.",
      "Aplica hielo envuelto en tela cerca (no directamente sobre la piel).",
      "Eleva la extremidad si es posible.",
      "Traslada a la persona a atención médica SIN mover la zona fracturada."
    ],
    consejos: ["Ante la duda, trata como fractura.", "NUNCA intentes 'acomodar' un hueso."],
    dificultad: "avanzado",
    icono: "🦴"
  },
  {
    id: "salud-sangrado-nariz",
    nombre: "Sangrado de Nariz",
    categoria: "manual-salud",
    descripcion: "Hemorragia nasal común por calor, golpes, sequedad o esfuerzo. Generalmente no es grave.",
    pasos: [
      "Sienta a la persona con la cabeza ligeramente inclinada HACIA ADELANTE (NO hacia atrás).",
      "Presiona ambas fosas nasales con los dedos por 10 minutos sin soltar.",
      "Que respire por la boca mientras tanto.",
      "Aplica una compresa fría en el puente de la nariz.",
      "Después de 10 minutos, suelta lentamente. Si sigue sangrando, repite otros 10 minutos.",
      "Si no para después de 20-30 minutos, busca atención médica."
    ],
    consejos: ["NO inclinar la cabeza hacia atrás: la sangre puede ir al estómago y causar vómito.", "No sonarse la nariz después del sangrado por al menos 2 horas."],
    dificultad: "fácil",
    icono: "👃"
  },
  {
    id: "salud-mordedura-serpiente",
    nombre: "Mordedura de Serpiente",
    categoria: "manual-salud",
    descripcion: "Emergencia que requiere atención médica inmediata. Lo más importante es mantener la calma y trasladar al hospital.",
    pasos: [
      "Mantén a la víctima en CALMA y quieta (el movimiento acelera la dispersión del veneno).",
      "Acuesta a la persona y mantén la zona mordida por debajo del nivel del corazón.",
      "Retira anillos, pulseras o ropa ajustada cerca de la mordedura (se hinchará).",
      "Lava la herida suavemente con agua y jabón.",
      "NO hagas torniquete, NO chupes el veneno, NO apliques hielo, NO cortes la herida.",
      "Si puedes, toma foto de la serpiente (a distancia segura) para identificarla.",
      "Traslada al hospital lo más rápido posible. Llama al 123."
    ],
    consejos: ["El 80% de las mordeduras de serpiente NO son venenosas, pero siempre trata como si lo fuera.", "Lleva siempre botas altas y bastón en zonas de campo."],
    dificultad: "avanzado",
    icono: "🐍"
  },
  {
    id: "salud-botiquin",
    nombre: "Botiquín Scout Básico",
    categoria: "manual-salud",
    descripcion: "Lista esencial de lo que debe contener el botiquín de tu grupo para campamentos y actividades.",
    pasos: [
      "Gasas estériles, esparadrapo, vendas elásticas y curitas de varios tamaños.",
      "Antiséptico (yodo o clorhexidina), agua oxigenada, suero fisiológico.",
      "Guantes desechables (mínimo 5 pares).",
      "Tijeras de punta roma, pinzas, termómetro.",
      "Acetaminofén, suero oral, antihistamínico (con prescripción).",
      "Protector solar, repelente de insectos.",
      "Linterna pequeña, manta térmica, bolsas plásticas.",
      "Lista de emergencias, teléfonos de padres y registro de alergias de cada scout."
    ],
    consejos: ["Revisa el botiquín antes de CADA salida: repón lo que falte.", "Asigna un responsable del botiquín por patrulla.", "Verifica fechas de vencimiento cada 3 meses."],
    dificultad: "fácil",
    icono: "🧰"
  },

  // ===== TÉCNICAS DE MANADA =====
  {
    id: "ley-del-lobato",
    nombre: "Ley del Lobato",
    categoria: "manada",
    descripcion: "Las dos leyes que todo lobato debe conocer y vivir. Base de la Manada.",
    pasos: [
      "1. El Lobato escucha al Viejo Lobo.",
      "2. El Lobato no se escucha a sí mismo.",
      "Repítela en cada reunión durante el Gran Aullido.",
      "Conversa con los lobatos qué significa cada ley en su vida diaria.",
      "Relaciónala con situaciones reales: colegio, casa, manada."
    ],
    consejos: ["Memorízala con gestos y juegos, no solo recitándola.", "Liga la Ley a personajes del Libro: Akela y Mowgli."],
    dificultad: "fácil",
    icono: "📜"
  },
  {
    id: "maximas-de-baloo",
    nombre: "Máximas de Baloo",
    categoria: "manada",
    descripcion: "Enseñanzas del oso Baloo, maestro de los lobatos, para vivir bien en la selva.",
    pasos: [
      "El Lobato piensa primero en los demás.",
      "El Lobato abre los ojos y los oídos.",
      "El Lobato es limpio, decente y alegre.",
      "El Lobato dice siempre la verdad.",
      "El Lobato es trabajador y servicial."
    ],
    consejos: ["Trabaja una máxima por mes en las reuniones.", "Premia con 'colmillos' o estrellas a quien viva una máxima."],
    dificultad: "fácil",
    icono: "🐻"
  },
  {
    id: "promesa-lobato",
    nombre: "Promesa del Lobato",
    categoria: "manada",
    descripcion: "Compromiso solemne del lobato ante la Manada y Akela.",
    pasos: [
      "'Yo prometo hacer lo mejor que pueda...'",
      "'...por cumplir mis deberes para con Dios y mi Patria,...'",
      "'...ayudar al prójimo en toda ocasión...'",
      "'...y cumplir fielmente la Ley de la Manada.'",
      "Se hace el saludo del lobato (dos dedos arriba)."
    ],
    consejos: ["La Promesa se hace una sola vez, en ceremonia especial.", "Prepara al lobato durante varias reuniones antes."],
    dificultad: "fácil",
    icono: "✋"
  },
  {
    id: "gran-aullido-tecnica",
    nombre: "El Gran Aullido (cómo hacerlo)",
    categoria: "manada",
    descripcion: "Ceremonia de apertura y cierre que une a toda la Manada en torno a Akela.",
    pasos: [
      "Akela grita: '¡Manada, manada, manada!'",
      "Los lobatos corren y forman círculo perfecto alrededor.",
      "A la señal, se ponen en cuclillas tocando el suelo con los dedos como orejas.",
      "Aúllan fuerte: '¡Ah-eh-la! ¡Haremos lo mejor!'",
      "Se ponen de pie haciendo el saludo y un lobato grita '¡Mejor!', y todos responden '¡Mejor, mejor, mejor!'."
    ],
    consejos: ["Practica la formación rápida del círculo: parte del juego.", "Akela siempre al centro mirando al norte."],
    dificultad: "fácil",
    icono: "🌕"
  },
  {
    id: "seisena",
    nombre: "La Seisena",
    categoria: "manada",
    descripcion: "Pequeño grupo de 6 lobatos dirigido por un Seisenero. Base del trabajo en la Manada.",
    pasos: [
      "La Manada se divide en seisenas de 6 lobatos cada una.",
      "Cada seisena tiene un color (amarillo, café, gris, negro, blanco, rojo).",
      "El Seisenero es el lobato más experimentado, ayudado por un Subseisenero.",
      "La seisena trabaja unida en juegos, postas y servicios.",
      "Compiten sanamente entre seisenas en la Carrera de Seisenas."
    ],
    consejos: ["Rota los roles de seisenero cada 3-6 meses.", "Cada seisena puede tener un grito y un símbolo propio."],
    dificultad: "fácil",
    icono: "🎨"
  },
  {
    id: "saludo-lobato",
    nombre: "Saludo y Seña del Lobato",
    categoria: "manada",
    descripcion: "Gestos propios del lobato que lo identifican como parte de la Manada mundial.",
    pasos: [
      "Saludo: dos dedos (índice y medio) levantados formando una V, representan las orejas del lobo.",
      "Mano derecha a la altura de la sien, codo a 90°.",
      "Apretón de manos: con la mano izquierda (mano del corazón).",
      "Lema: '¡Haremos lo mejor!'",
      "Saluda al entrar y salir del Cubil y al ver la bandera."
    ],
    consejos: ["Practícalo hasta que sea natural."],
    dificultad: "fácil",
    icono: "✌️"
  },

  // ===== ORIENTACIÓN =====
  {
    id: "norte-sin-brujula",
    nombre: "Encontrar el Norte sin Brújula",
    categoria: "orientacion",
    descripcion: "Métodos clásicos scouts para orientarse usando el sol, las estrellas o un reloj.",
    pasos: [
      "Sol: sale por el Este y se pone por el Oeste. Al mediodía indica el Norte (hemisferio sur).",
      "Reloj análogo: apunta la manecilla horaria al sol; la bisectriz entre la manecilla y las 12 indica el Norte.",
      "Palo y sombra: clava un palo vertical, marca la punta de su sombra; espera 15 min y marca de nuevo. La línea va de Oeste a Este.",
      "De noche: en Colombia busca la Cruz del Sur; prolonga su eje mayor 4,5 veces y ese punto es el Sur celeste.",
      "Vegetación: el musgo crece más en la cara húmeda y sombreada de los árboles."
    ],
    consejos: ["Confirma con dos métodos si es posible."],
    dificultad: "medio",
    icono: "🧭"
  },
  {
    id: "uso-brujula",
    nombre: "Uso Básico de la Brújula",
    categoria: "orientacion",
    descripcion: "Cómo tomar un rumbo y seguirlo con una brújula tipo Silva.",
    pasos: [
      "Sostén la brújula horizontal a la altura del pecho.",
      "Gira tu cuerpo hasta que la aguja roja apunte al Norte (N) del limbo.",
      "Para tomar un rumbo: gira el limbo hasta alinear la dirección deseada con la flecha de marcha.",
      "Sigue la flecha de marcha caminando sin perder el norte de la aguja.",
      "Cada 50-100 metros, verifica de nuevo la aguja."
    ],
    consejos: ["Aléjate de objetos metálicos y celulares (alteran la lectura)."],
    dificultad: "medio",
    icono: "🧭"
  },
  {
    id: "mapa-topografico",
    nombre: "Leer un Mapa Topográfico",
    categoria: "orientacion",
    descripcion: "Interpretar curvas de nivel, símbolos y escala de un mapa para orientarse.",
    pasos: [
      "Orienta el mapa: alinea el Norte del mapa con el Norte real (con brújula).",
      "Escala: 1:25.000 significa que 1 cm en el mapa = 250 m reales.",
      "Curvas de nivel: líneas que unen puntos a igual altitud. Muy juntas = pendiente fuerte.",
      "Identifica símbolos: ríos (azul), bosques (verde), construcciones (negro), caminos (rojo).",
      "Localiza tu posición usando 2-3 puntos visibles del terreno."
    ],
    consejos: ["Lleva el mapa en bolsa plástica para protegerlo."],
    dificultad: "avanzado",
    icono: "🗺️"
  },

  // ===== CAMPISMO ADICIONAL =====
  {
    id: "armar-mochila",
    nombre: "Cómo Armar la Mochila",
    categoria: "campismo",
    descripcion: "Orden correcto para empacar la mochila scout y caminar cómodo todo el día.",
    pasos: [
      "Fondo: bolsa de dormir y ropa para dormir.",
      "Centro pegado a la espalda: lo más pesado (carpa, comida enlatada, agua).",
      "Centro exterior: ropa y cosas de peso medio.",
      "Arriba: chaqueta impermeable, gorra, botiquín.",
      "Bolsillos laterales: cantimplora, linterna, snacks, navaja.",
      "Atado afuera: aislante y, si llueve, cubre-mochila."
    ],
    consejos: ["La mochila no debe pesar más del 20% de tu peso corporal.", "Ajusta primero la correa de cadera, luego los hombros."],
    dificultad: "fácil",
    icono: "🎒"
  },
  {
    id: "fuego-seguro",
    nombre: "Encender Fuego de Forma Segura",
    categoria: "campismo",
    descripcion: "Técnica básica de fuego de campamento respetando la naturaleza y la seguridad.",
    pasos: [
      "Elige el lugar: zona despejada, lejos de pasto seco, árboles y carpas.",
      "Construye un círculo de piedras para contener el fuego.",
      "Prepara tres tipos de leña: yesca (hojas, papel), astillas (palitos delgados), leña gruesa.",
      "Forma una pirámide con la yesca al centro y las astillas alrededor.",
      "Enciende desde abajo soplando suave en la base.",
      "Añade leña gruesa solo cuando ya hay buenas llamas.",
      "Apaga COMPLETAMENTE con agua y revuelve las cenizas antes de irte."
    ],
    consejos: ["Nunca dejes el fuego solo.", "Ten agua y tierra a mano para apagar."],
    dificultad: "medio",
    icono: "🔥"
  },
  {
    id: "armar-carpa",
    nombre: "Armar una Carpa en 5 Pasos",
    categoria: "campismo",
    descripcion: "Cómo montar una carpa de campismo rápido y bien tensionada.",
    pasos: [
      "Elige terreno plano, sin piedras ni ramas, lejos de zonas inundables.",
      "Extiende el plástico (sobre-piso) en el suelo.",
      "Despliega la carpa encima, con la puerta lejos del viento.",
      "Arma los parantes y pásalos por las cintas; levanta la carpa.",
      "Clava las estacas en las 4 esquinas tensionando bien; pon el sobre-techo si llueve."
    ],
    consejos: ["Practica antes en casa.", "Cava una pequeña zanja alrededor si esperas lluvia."],
    dificultad: "medio",
    icono: "⛺"
  },

  // ===== TÉCNICAS ADICIONALES (Reporte ASC/WOSM) =====
  {
    id: "nudo-de-ocho",
    nombre: "Nudo de Ocho",
    categoria: "nudos",
    descripcion: "Nudo de tope que se forma como un '8'. Evita que la cuerda se escape por un agujero o argolla. Fácil de deshacer.",
    pasos: [
      "Forma un bucle con el cabo libre cruzando sobre la cuerda principal.",
      "Lleva el cabo libre por DETRÁS de la cuerda principal.",
      "Pasa el cabo libre por DENTRO del bucle inicial, dibujando un '8'.",
      "Ajusta tirando del cabo y de la cuerda principal.",
      "Verifica: debe verse claramente la forma de ocho."
    ],
    consejos: ["Ideal como base de pulseras de paracord.", "Más fácil de deshacer que el nudo simple después de cargar peso."],
    dificultad: "fácil",
    icono: "8️⃣"
  },
  {
    id: "pls",
    nombre: "Posición Lateral de Seguridad (PLS)",
    categoria: "primeros-auxilios",
    descripcion: "Posición correcta para una persona inconsciente que respira. Evita atragantamiento mientras llega ayuda.",
    pasos: [
      "Verifica que la persona respira pero no responde.",
      "Coloca su brazo más cercano a ti en ángulo recto, palma hacia arriba.",
      "Cruza el otro brazo sobre el pecho con la mano en la mejilla opuesta.",
      "Dobla la pierna lejana en ángulo recto con el pie apoyado en el suelo.",
      "Tira con cuidado de esa rodilla y gira a la persona hacia ti, sobre su costado.",
      "Inclina la cabeza ligeramente hacia atrás para mantener la vía aérea abierta.",
      "Llama al 123 y vigila la respiración hasta que llegue ayuda."
    ],
    consejos: ["No usar si sospechas lesión de cuello o columna.", "Practica con un compañero como simulacro."],
    dificultad: "medio",
    icono: "🆘"
  },
  {
    id: "cuaderno-de-campo",
    nombre: "Cuaderno de Campo",
    categoria: "campismo",
    descripcion: "Pequeño cuaderno donde el scout dibuja, anota y guarda recuerdos de cada excursión. Desarrolla observación.",
    pasos: [
      "Lleva un cuaderno tamaño bolsillo y un lápiz a cada salida.",
      "Anota fecha, lugar, hora y clima al inicio.",
      "Dibuja 3 cosas que llamen tu atención (planta, animal, rastro, paisaje).",
      "Anota lo que aprendiste y una emoción del día.",
      "Pega hojas, plumas o boletos como recuerdo (sin dañar la naturaleza).",
      "Comparte tu cuaderno en la Roca del Consejo al volver."
    ],
    consejos: ["No tienes que dibujar perfecto: la idea es observar.", "Personalízalo con tu nombre y un emblema propio."],
    dificultad: "fácil",
    icono: "📓"
  },
  {
    id: "sin-dejar-rastro",
    nombre: "Sin Dejar Rastro (LNT)",
    categoria: "campismo",
    descripcion: "Principios para disfrutar la naturaleza sin dañarla. Base de la ética scout al aire libre.",
    pasos: [
      "Planifica con tiempo: lleva sólo lo necesario y empaca todo en bolsas reutilizables.",
      "Camina por senderos marcados; no abras nuevos caminos.",
      "Acampa en zonas autorizadas, lejos de fuentes de agua (mínimo 50 m).",
      "Empaca TODA la basura, incluso restos de comida y papel higiénico.",
      "No tomes nada (flores, piedras, animales); deja todo como lo encontraste.",
      "Minimiza el impacto del fuego: usa estufa o fuego controlado en zona permitida.",
      "Respeta la fauna: obsérvala de lejos, nunca la alimentes ni la persigas.",
      "Sé considerado con otros visitantes y comunidades cercanas."
    ],
    consejos: ["Regla scout: 'No tomes nada excepto fotos, no dejes nada excepto huellas.'", "Enseña LNT con el ejemplo, no con sermones."],
    dificultad: "fácil",
    icono: "🌱"
  },
  {
    id: "clasificacion-residuos",
    nombre: "Clasificación de Residuos",
    categoria: "campismo",
    descripcion: "Cómo separar correctamente los residuos en campamento o en el cubil para cuidar la naturaleza.",
    pasos: [
      "Prepara 3 recipientes etiquetados: ORGÁNICO (verde), RECICLABLE (blanco), NO APROVECHABLE (negro).",
      "Orgánico: restos de comida, cáscaras, papel sucio con comida.",
      "Reciclable: plástico limpio, latas, cartón seco, vidrio.",
      "No aproveachable: pañales, papel higiénico usado, envoltorios mixtos.",
      "Pilas y baterías: bolsa aparte, NUNCA al suelo (son tóxicas).",
      "Al cerrar campamento, llévate todo y deposítalo correctamente en la ciudad."
    ],
    consejos: ["En Colombia se usa el código de 3 bolsas desde 2021.", "Compite por seisenas: la que mejor clasifique gana puntos."],
    dificultad: "fácil",
    icono: "♻️"
  },
  {
    id: "pulsera-paracord",
    nombre: "Pulsera de Paracord",
    categoria: "manada",
    descripcion: "Manualidad clásica del lobato: una pulsera tejida con nudo plano (cobra) que se puede usar como cuerda en emergencia.",
    pasos: [
      "Corta 1 metro de cuerda paracord (o cordón resistente).",
      "Forma un bucle y mide la pulsera contra tu muñeca.",
      "Empieza el nudo plano: el cabo izquierdo cruza sobre el centro; el derecho pasa por detrás y por el ojo izquierdo.",
      "Aprieta. Repite invirtiendo lados (ahora el derecho sobre el centro, el izquierdo por detrás).",
      "Sigue alternando hasta cubrir toda la pulsera.",
      "Corta el sobrante y funde los extremos con la ayuda de un adulto."
    ],
    consejos: ["Usa dos colores para una pulsera más vistosa.", "Personalízala con el color de tu seisena."],
    dificultad: "medio",
    icono: "📿"
  },
  {
    id: "totem-seisena",
    nombre: "Tótem de Seisena",
    categoria: "manada",
    descripcion: "Símbolo de identidad de cada seisena construido con materiales naturales y elementos significativos.",
    pasos: [
      "La seisena elige un animal o personaje del Libro de la Selva como espíritu.",
      "Consigue un palo de bambú o madera de 80-100 cm como base.",
      "Decora con: pintura del color de la seisena, plumas, semillas, cintas.",
      "Cada lobato añade un elemento personal que represente algo que aporta a la seisena.",
      "Escribe el nombre de la seisena y la fecha de creación.",
      "Presenta el tótem en la Roca del Consejo; debe estar presente en cada reunión."
    ],
    consejos: ["Es un proyecto a varias reuniones; no se hace en un día.", "El tótem viaja con la seisena a los campamentos."],
    dificultad: "medio",
    icono: "🪵"
  },
  {
    id: "codigo-semaforo",
    nombre: "Código Semáforo (Banderas)",
    categoria: "senales",
    descripcion: "Sistema scout de comunicación a distancia con dos banderines de colores. Cada posición del cuerpo y banderas indica una letra.",
    pasos: [
      "Toma dos banderines de colores contrastantes (rojo/amarillo) uno en cada mano.",
      "El cuerpo se mantiene firme mirando al receptor.",
      "Cada letra se forma colocando los brazos en posiciones específicas (ej: 'A' = brazo derecho abajo-derecha; 'B' = brazo derecho horizontal).",
      "Para enviar un mensaje, deletrea letra por letra haciendo pausa entre cada una.",
      "El receptor anota letra por letra y reconstruye la palabra.",
      "Practica primero con palabras cortas: SOS, AYUDA, OK."
    ],
    consejos: ["Aprende primero las letras del nombre propio.", "Pídele a un dirigente la tabla completa del código semáforo."],
    dificultad: "avanzado",
    icono: "🚩"
  },
];
