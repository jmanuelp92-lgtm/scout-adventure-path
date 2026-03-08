export interface Song {
  id: number;
  titulo: string;
  categoria: "apertura" | "fogata" | "marcha" | "cierre" | "juego" | "espiritual" | "lobatos";
  letra: string;
  rama?: "todas" | "manada" | "tropa" | "comunidad" | "clan";
}

export const categorias = [
  { id: "todas", label: "Todas", icono: "🎵" },
  { id: "apertura", label: "Apertura", icono: "🌅" },
  { id: "marcha", label: "Marcha", icono: "🥾" },
  { id: "fogata", label: "Fogata", icono: "🔥" },
  { id: "espiritual", label: "Espiritual", icono: "🙏" },
  { id: "juego", label: "Juego y Animación", icono: "🎮" },
  { id: "lobatos", label: "Lobatos", icono: "🐺" },
  { id: "cierre", label: "Cierre y Despedida", icono: "🌙" },
];

export const songs: Song[] = [
  // === APERTURA ===
  {
    id: 1,
    titulo: "Soy Scout",
    categoria: "apertura",
    rama: "todas",
    letra: `Porque hice una promesa, soy scout
y la cumplo con firmeza, soy scout.
Porque llevo un uniforme, soy scout
y por eso estoy conforme, soy scout.

Porque canto esta canción, soy scout
que lo escuche la Nación, soy scout.
Porque somos una banda, soy scout
y nos gusta la pachanga, soy scout.`,
  },
  {
    id: 2,
    titulo: "Yo Soy Scout",
    categoria: "apertura",
    rama: "todas",
    letra: `Yo soy scout (bis)
de corazón (bis)
y acamparé (bis)
con ilusión (bis)

Yo soy scout de corazón,
y acamparé con ilusión.

Al monte iré (bis)
lo escalaré (bis)
nudos haré (bis)
con precisión (bis)

Al monte iré y lo escalaré,
nudos haré con precisión.

Promesa y Ley (bis)
yo cumpliré (bis)
la buena acción (bis)
yo siempre haré (bis)

Promesa y Ley yo cumpliré,
la buena acción yo siempre haré.`,
  },

  // === MARCHA ===
  {
    id: 3,
    titulo: "Avanzan las Patrullas",
    categoria: "marcha",
    rama: "tropa",
    letra: `Avanzan las patrullas
a lo lejos, adelante.
Avanzan las patrullas
al toque del tambor, ¡adelante!

CORO:
Juntos escalemos la montaña altiva,
juntos escalemos el picacho azul.
Solo los halcones sobre nuestras frentes
giran majestuosos sobre el cielo azul.

Con el morral al hombro
a lo lejos, adelante.
Con el morral al hombro
la tropa ya partió, ¡adelante!

CORO

En medio de la noche
a lo lejos, adelante.
En medio de la noche
la tropa acampará, ¡adelante!

CORO`,
  },
  {
    id: 4,
    titulo: "Subiendo la Montaña",
    categoria: "marcha",
    rama: "todas",
    letra: `Subiendo la montaña y deseosos de llegar,
los scouts cantando vamos todos a acampar.
Cuida de los pietiernos que cansados llegarán,
cuídalos con afán.

CORO:
Glori, glori, aleluya,
Glori, glori, aleluya,
Glori, glori, aleluya,
cuídalos con afán.

Cuida que los tomates no se junten con el pan,
cuida del jarro de agua que en la manga te echarán.
Un fuego generoso sin peligro de incendiar,
aprender a cocinar.

CORO (con "aprender a cocinar")`,
  },
  {
    id: 5,
    titulo: "Camino de Paz (Senda Scout)",
    categoria: "marcha",
    rama: "todas",
    letra: `Ven, toma tu lugar en esta senda scout,
camina junto a mí, nos queda mucho por andar.
Ven, alza tu canción, que se oiga tu voz,
y juntos llegaremos al camino de la paz.

Porque somos hermanos de una misma ley,
por eso cantamos con la misma fe.
Porque vamos andando por un mismo ideal,
y juntos llegaremos al camino de la paz.`,
  },

  // === FOGATA ===
  {
    id: 6,
    titulo: "La Fragua",
    categoria: "fogata",
    rama: "todas",
    letra: `¿Has visto cómo el herrero en el yunque
va golpeando el metal?
Y de la fragua ese hierro tan tosco
cobra hermosura sin par.

CORO:
Así quiero ser, templado en la fragua,
con la fuerza del bien,
y como el hierro tomar buena forma
haré de mi vida un vergel.

¿Has visto cómo el alfarero moldea
la arcilla con un torno?
Con la paciencia y el amor que le pone,
la arcilla se hace jarro.

CORO`,
  },
  {
    id: 7,
    titulo: "Madre, Anoche en la Trinchera",
    categoria: "fogata",
    rama: "todas",
    letra: `Madre, anoche en la trinchera
entre el fragor del cañón,
como un acto de fe pura
recé nuestra oración.

No había flores ni campanas,
ni bonitos vitrales,
pero estoy seguro, madre,
que Dios estaba allí.

Tú me dijiste: "Hijo mío,
cuanto más solo te halles,
más cerca estarás de Dios",
y, madre, aquí lo encontré.`,
  },
  {
    id: 8,
    titulo: "Cambiar el Mundo",
    categoria: "fogata",
    rama: "todas",
    letra: `Me gustaría cambiar el mundo,
pero no sé qué hacer,
así que te lo dejo a ti.

Me gustaría cambiar el mundo,
hacer que sea un lugar mejor,
me gustaría cambiar el mundo.

Si cada uno pusiera un poco,
si cada uno hiciera algo,
podríamos cambiar el mundo,
podríamos hacerlo mejor.`,
  },
  {
    id: 9,
    titulo: "Fuego de Campamento",
    categoria: "fogata",
    rama: "todas",
    letra: `Arde el fuego, ven ya,
ven junto a mí.
Mira las llamas brillar,
la noche es feliz.

CORO:
Fuego, fuego, fuego de campamento,
iluminas nuestras caras,
calientas nuestros corazones.
Fuego, fuego, fuego de campamento,
canta, ríe y comparte,
esta noche de fogón.

Brilla la luna, ven ya,
ven junto a mí.
Mira las chispas volar,
la noche es feliz.

CORO`,
  },

  // === ESPIRITUAL ===
  {
    id: 10,
    titulo: "Bendición de la Comida",
    categoria: "espiritual",
    rama: "todas",
    letra: `Señor, unos tienen y no pueden,
otros pueden y no tienen.
Nosotros que tenemos y podemos
te damos gracias, Señor.

Tú que le das el agua a las plantas,
la tierra a los campos,
el fruto al hombre,
bendice estos alimentos
para que ellos nos fortalezcan
y te podamos servir mejor.`,
  },
  {
    id: 11,
    titulo: "Canción de la Promesa",
    categoria: "espiritual",
    rama: "todas",
    letra: `Ante Dios y ante todos
hago esta promesa:
servir a mi patria
con toda mi fuerza.

Cumplir con mi ley,
ayudar al que pueda,
y hacer cada día
una buena acción nueva.

Esta es mi promesa,
la sello de honor.
Siempre listo estaré,
con la ayuda de Dios.`,
  },

  // === JUEGO Y ANIMACIÓN ===
  {
    id: 12,
    titulo: "Ortan Chiviri",
    categoria: "juego",
    rama: "todas",
    letra: `Ortan chiviri, ortan chiviri,
el janja de la marquisqui,
ortan chiviri manú.

Maka fuchi fuca cachi
fuca ka chiviri ma kau.
¡Jau, jau, jau!

Somos los guerreros de la tribu del kinfón,
¡venimos con nuestros trajes para dar la gran función!
Ohoho, Ortan Chiviri...

Yo soy el gran jefe y llevo puesto mi carcaj,
la flecha que lanzo al viento ¡ni con lupa encontrarás!
Ohoho, Ortan Chiviri...

Yo soy el hechicero y mando mucho más que tú,
y a todo el mundo asusto con el ¡ula ula uh!
Ohoho, Ortan Chiviri...`,
  },
  {
    id: 13,
    titulo: "Allá en el Campamento",
    categoria: "juego",
    rama: "todas",
    letra: `Allá en el campamento,
allá donde yo iba,
había un acampante
que alegre me decía:

Si tienes dulce en la carpa,
no se lo digas a nadie,
so pena que te lo coman
y culpen a las hormigas.

No estés al sol mucho tiempo
si quieres volver tostado,
que una cosa es tostadura
y otra cosa es pollo asado.`,
  },

  // === LOBATOS ===
  {
    id: 14,
    titulo: "Anikuni",
    categoria: "lobatos",
    rama: "manada",
    letra: `Por las noches cuando la luna
como plata se eleva
y a la selva ilumina
y también a las praderas.

Viejos lobos de la tribu
cantarán al gran espíritu,
al espíritu del bien.

CORO:
Anikuni, anikuni, anikuni,
ana kuai kuai.
Anikuni, anikuni, anikuni,
ana kuai kuai.`,
  },
  {
    id: 15,
    titulo: "Gran Clamor",
    categoria: "lobatos",
    rama: "manada",
    letra: `Akela: ¡Lobatos, lobatos!
Manada: ¡Akela, te escuchamos!

Akela: ¿Cuál es el lema del lobato?
Manada: (agachados, suben lentamente)
¡Haremos... lo... mejor!
(de pie, saltan con seña de lobo)
¡SIEMPRE MEJOR!

Akela: ¡Lobatos!
Manada: ¡Siempre mejor!
Akela: ¡Lobatos!
Manada: ¡Siempre mejor!
Akela: ¡Lobatos!
Manada: ¡SIEMPRE MEJOR!`,
  },
  {
    id: 16,
    titulo: "Los Lobatos de Seeonee",
    categoria: "lobatos",
    rama: "manada",
    letra: `Somos los lobatos de Seeonee,
seguimos a Akela con fe.
Corremos la selva, trepamos al monte,
cazamos la pista otra vez.

Con ojos abiertos y oídos alertas,
con manos dispuestas a ayudar.
Somos los lobatos, pueblo libre,
¡siempre haremos lo mejor!

La selva nos llama, la aventura espera,
los viejos lobos nos guiarán.
Con Baloo aprendemos, Bagheera nos cuida,
¡la manada siempre unida está!`,
  },

  // === CIERRE Y DESPEDIDA ===
  {
    id: 17,
    titulo: "Canción del Adiós",
    categoria: "cierre",
    rama: "todas",
    letra: `Por qué perder las esperanzas
de volverse a ver,
por qué perder las esperanzas
si hay tanto querer.

No es más que un hasta luego,
no es más que un breve adiós,
muy pronto junto al fuego
nos reuniremos.

Con nuestras manos enlazadas
en torno al fogón,
formemos esta noche
un círculo de amor.

Pues es el Señor que nos protege
y nos va a bendecir,
seguro que otro día
nos habrá de reunir.`,
  },
  {
    id: 18,
    titulo: "Despedida Scout",
    categoria: "cierre",
    rama: "todas",
    letra: `Llegado ya el momento de la separación,
formemos, compañeros, una cadena de amor.
Que no nos separe nunca la distancia del adiós,
que siempre nos acerque la hermandad de nuestra unión.

CORO:
Adiós, adiós, hermanos scouts,
la hora de partir llegó.
Nos vamos con la fe de que algún día
nos reunirá de nuevo el Señor.

La llama de esta fogata ya se empieza a consumir,
pero el fuego de esta hermandad nunca se va a extinguir.

CORO`,
  },
  {
    id: 19,
    titulo: "Himno Rover",
    categoria: "cierre",
    rama: "clan",
    letra: `CORO:
Toma tu morral, deja de pensar,
ven conmigo junto al mar.
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

CORO

Surco rutas peregrinas
tratando de alcanzar,
una estrella compañera
que me habrá de guiar.

Envejecen en mi senda
tiempos que son de ayer.
Ten paciencia, camarada,
surge un amanecer.

CORO`,
  },
  {
    id: 20,
    titulo: "Taps (Silencio Scout)",
    categoria: "cierre",
    rama: "todas",
    letra: `El día ya se fue,
el sol se ocultó,
la luna y estrellas
brillando están.

Buenas noches, Señor,
todo en paz está,
buenas noches, Señor,
todo en paz.`,
  },
];
