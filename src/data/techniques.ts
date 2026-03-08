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
];
