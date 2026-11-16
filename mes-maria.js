// =====================================================================
// MES DE MARÍA 2026 (8 de noviembre – 8 de diciembre)
// Estructura diaria, temas y citas bíblicas según el folleto
// «Mes de María 2026 – Madre que acoge, espera y comparte»
// (Conferencia Episcopal de Chile).
// Las moniciones, reflexiones, preguntas y peticiones son redacción propia.
// Textos bíblicos: adaptación al español actual de la traducción católica de
// Félix Torres Amat (1825, de la Vulgata; dominio público), cotejada con la
// edición ilustrada por Gustavo Doré (Montaner y Simón, 1883-1884).
// Se modernizó el lenguaje (ustedes, ortografía, nombres propios) y se
// suprimieron las glosas del traductor. No es un texto litúrgico aprobado.
// =====================================================================

const MM_BIBLIA = (() => {
    // Pasajes base (adaptación al español actual de la traducción de Torres Amat).
    // Las claves con versículos sueltos se arman más abajo a partir de los versículos.
    const v = {
        "Lc 1": {
            26: "Estando ya Isabel en su sexto mes, envió Dios al ángel Gabriel a Nazaret, ciudad de Galilea,",
            27: "a una virgen desposada con un varón de la casa de David, llamado José; y el nombre de la virgen era María.",
            28: "Y habiendo entrado el ángel a donde ella estaba, le dijo: «Dios te salve, llena de gracia, el Señor está contigo; bendita tú eres entre todas las mujeres».",
            29: "Al oír tales palabras, la Virgen se turbó y se puso a considerar qué significaría aquel saludo.",
            30: "Pero el ángel le dijo: «No temas, María, porque has hallado gracia ante Dios.",
            31: "Concebirás en tu seno y darás a luz un hijo, a quien pondrás por nombre Jesús.",
            32: "Él será grande y será llamado Hijo del Altísimo; el Señor Dios le dará el trono de David, su padre,",
            33: "reinará en la casa de Jacob para siempre, y su reino no tendrá fin».",
            34: "María dijo al ángel: «¿Cómo será esto, pues no conozco varón?».",
            35: "El ángel le respondió: «El Espíritu Santo descenderá sobre ti, y el poder del Altísimo te cubrirá con su sombra; por eso el santo que nacerá de ti será llamado Hijo de Dios.",
            36: "Y mira: tu parienta Isabel, en su vejez, ha concebido también un hijo, y la que llamaban estéril ya está en su sexto mes,",
            37: "porque para Dios nada es imposible».",
            38: "Entonces dijo María: «He aquí la esclava del Señor; hágase en mí según tu palabra». Y el ángel se retiró de su presencia.",
            39: "En aquellos días partió María y se fue apresuradamente a la región montañosa, a una ciudad de Judá.",
            40: "Entró en la casa de Zacarías y saludó a Isabel.",
            41: "En cuanto Isabel oyó el saludo de María, el niño saltó de alegría en su vientre, e Isabel quedó llena del Espíritu Santo.",
            42: "Y exclamando en alta voz, dijo: «Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre.",
            43: "¿De dónde a mí tanto bien, que venga la madre de mi Señor a visitarme?",
            44: "Pues en cuanto llegó a mis oídos la voz de tu saludo, la criatura saltó de júbilo en mi vientre.",
            45: "¡Bienaventurada tú, que has creído!, porque se cumplirán las cosas que se te han dicho de parte del Señor».",
            46: "Entonces María dijo: «Mi alma glorifica al Señor,",
            47: "y mi espíritu salta de gozo en Dios, mi Salvador,",
            48: "porque ha puesto los ojos en la pequeñez de su esclava; por eso desde ahora me llamarán bienaventurada todas las generaciones.",
            49: "Porque ha hecho en mí cosas grandes el Todopoderoso, cuyo nombre es santo,",
            50: "y su misericordia se derrama de generación en generación sobre los que le temen.",
            51: "Hizo alarde del poder de su brazo: deshizo los planes del corazón de los soberbios.",
            52: "Derribó de su trono a los poderosos y ensalzó a los humildes.",
            53: "Colmó de bienes a los hambrientos, y a los ricos los despidió sin nada.",
            54: "Acordándose de su misericordia, acogió a Israel, su siervo,",
            55: "según la promesa que hizo a nuestros padres, a Abraham y a su descendencia para siempre».",
            56: "María se quedó con Isabel unos tres meses, y después volvió a su casa."
        },
        "Lc 2": {
            4: "José, como era de la casa y familia de David, subió desde Nazaret, ciudad de Galilea, a la ciudad de David llamada Belén, en Judea,",
            5: "para empadronarse con María, su esposa, que estaba encinta.",
            6: "Y sucedió que, estando allí, le llegó la hora del parto.",
            7: "Y dio a luz a su Hijo primogénito, lo envolvió en pañales y lo recostó en un pesebre, porque no hubo lugar para ellos en la posada.",
            39: "Cumplidas todas las cosas ordenadas en la Ley del Señor, regresaron a Galilea, a su ciudad de Nazaret.",
            40: "Entretanto, el niño iba creciendo y fortaleciéndose, lleno de sabiduría, y la gracia de Dios estaba en él.",
            41: "Sus padres iban todos los años a Jerusalén para la fiesta de la Pascua.",
            42: "Cuando el niño tuvo doce años, subieron a Jerusalén, según la costumbre de aquella fiesta.",
            43: "Terminados aquellos días, cuando ya regresaban, el niño Jesús se quedó en Jerusalén sin que sus padres lo advirtieran.",
            45: "Como no lo encontraron, volvieron a Jerusalén en su búsqueda.",
            46: "Al cabo de tres días lo encontraron en el templo, sentado en medio de los maestros, escuchándolos y haciéndoles preguntas.",
            48: "Al verlo, sus padres quedaron maravillados, y su madre le dijo: «Hijo, ¿por qué te has portado así con nosotros? Mira que tu padre y yo, llenos de aflicción, te hemos andado buscando».",
            49: "Él les respondió: «¿Por qué me buscaban? ¿No sabían que debo ocuparme de las cosas de mi Padre?».",
            50: "Pero ellos no comprendieron entonces el sentido de su respuesta.",
            51: "Luego bajó con ellos, vino a Nazaret y les estaba sujeto. Y su madre conservaba todas estas cosas en su corazón."
        },
        "Lc 10": {
            1: "Después de esto, el Señor eligió a otros setenta y dos discípulos y los envió de dos en dos delante de él, a todas las ciudades y lugares adonde él mismo había de ir.",
            2: "Y les decía: «La mies es mucha, pero los trabajadores pocos. Rueguen, pues, al dueño de la mies que envíe trabajadores a su mies.",
            3: "Vayan: miren que yo los envío como corderos en medio de lobos».",
            30: "Un hombre bajaba de Jerusalén a Jericó y cayó en manos de ladrones, que lo despojaron de todo, lo cubrieron de heridas y se fueron, dejándolo medio muerto.",
            33: "Pero un samaritano que iba de viaje llegó adonde estaba y, al verlo, se conmovió.",
            34: "Se acercó, le vendó las heridas, curándolas con aceite y vino; luego lo montó en su cabalgadura, lo llevó a una posada y cuidó de él.",
            35: "Al día siguiente sacó dos denarios, se los dio al posadero y le dijo: «Cuídalo, y lo que gastes de más te lo pagaré a mi vuelta»."
        },
        "Mt 26": {
            36: "Entonces llegó Jesús con ellos a un huerto llamado Getsemaní, y dijo a los discípulos: «Siéntense aquí, mientras yo voy más allá a orar».",
            37: "Y llevando consigo a Pedro y a los dos hijos de Zebedeo, comenzó a sentir tristeza y angustia.",
            38: "Entonces les dijo: «Mi alma siente angustias de muerte; quédense aquí y velen conmigo».",
            39: "Y adelantándose unos pasos, se postró rostro en tierra, orando y diciendo: «Padre mío, si es posible, no me hagas beber este cáliz; pero que no se haga lo que yo quiero, sino lo que tú».",
            40: "Volvió después a sus discípulos, los encontró durmiendo y dijo a Pedro: «¿Es posible que no hayan podido velar una hora conmigo?».",
            45: "Luego volvió a sus discípulos y les dijo: «Duerman ahora y descansen: ha llegado la hora, y el Hijo del hombre va a ser entregado en manos de los pecadores.",
            46: "¡Levántense, vamos! Ya llega el que me va a entregar»."
        },
        "1 Sam 3": {
            3: "Samuel dormía en el templo del Señor, donde estaba el Arca de Dios; y antes de que se apagara la lámpara de Dios,",
            4: "el Señor llamó a Samuel. Él respondió: «Aquí estoy»,",
            5: "y corrió enseguida adonde estaba Elí y le dijo: «Aquí estoy, porque me has llamado». Elí le dijo: «No te he llamado; vuelve a dormir». Samuel se fue y se acostó de nuevo.",
            7: "Samuel aún no conocía la voz del Señor, pues hasta entonces no se le había revelado la palabra del Señor.",
            8: "El Señor llamó por tercera vez a Samuel, quien se levantó, fue adonde estaba Elí",
            9: "y le dijo: «Aquí estoy, porque me has llamado». Comprendió entonces Elí que era el Señor quien llamaba al joven, y dijo a Samuel: «Vete a dormir, y si te llama otra vez, responde: Habla, Señor, que tu siervo escucha». Samuel volvió a su lugar y se acostó.",
            10: "Vino entonces el Señor, se acercó y lo llamó como las otras veces: «¡Samuel, Samuel!». Y Samuel respondió: «Habla, Señor, que tu siervo escucha»."
        },
        "Mt 20": {
            1: "El reino de los cielos se parece a un dueño de casa que salió al amanecer a contratar trabajadores para su viña.",
            2: "Se ajustó con ellos en un denario por día y los envió a su viña.",
            3: "Salió de nuevo a media mañana y encontró a otros que estaban en la plaza sin hacer nada,",
            4: "y les dijo: «Vayan también ustedes a mi viña, y les daré lo que sea justo».",
            5: "Y ellos fueron. Volvió a salir al mediodía y a media tarde, e hizo lo mismo.",
            6: "Finalmente salió al caer la tarde, encontró a otros que estaban todavía sin hacer nada y les dijo: «¿Por qué están aquí ociosos todo el día?».",
            7: "Le respondieron: «Porque nadie nos ha contratado». Él les dijo: «Vayan también ustedes a mi viña».",
            8: "Al anochecer, el dueño de la viña dijo a su mayordomo: «Llama a los trabajadores y págales el jornal, empezando por los últimos y terminando por los primeros».",
            9: "Vinieron los que habían llegado al caer la tarde y recibieron un denario cada uno.",
            10: "Cuando llegaron los primeros, pensaron que recibirían más; pero también ellos recibieron un denario cada uno.",
            11: "Al recibirlo, murmuraban contra el dueño de casa,",
            12: "diciendo: «Estos últimos han trabajado solo una hora, y los has igualado a nosotros, que hemos soportado el peso del día y el calor».",
            13: "Pero él respondió a uno de ellos: «Amigo, no te hago ninguna injusticia: ¿no te ajustaste conmigo en un denario?",
            14: "Toma lo que es tuyo y vete. Yo quiero dar a este último lo mismo que a ti.",
            15: "¿Acaso no puedo hacer lo que quiero con lo que es mío? ¿O vas a mirar con envidia porque yo soy bueno?».",
            16: "Así, los últimos serán primeros, y los primeros, últimos; porque muchos son los llamados, pero pocos los escogidos."
        },
        "Ef 1": {
            3: "Bendito sea el Dios y Padre de nuestro Señor Jesucristo, que nos ha colmado en Cristo de toda clase de bendiciones espirituales en el cielo.",
            4: "Él nos eligió en Cristo antes de la creación del mundo, para que fuéramos santos e irreprochables en su presencia por el amor.",
            5: "Nos predestinó a ser sus hijos adoptivos por medio de Jesucristo, por puro efecto de su buena voluntad,",
            6: "para alabanza de la gloria de su gracia, con la que nos hizo gratos a sus ojos en su Hijo amado.",
            11: "En él también nosotros fuimos llamados como herencia, predestinados según el designio de aquel que hace todas las cosas conforme a su voluntad,",
            12: "para que seamos alabanza de su gloria, nosotros, los que ya esperábamos en Cristo."
        },
        "Ap 12": {
            1: "Apareció en el cielo un gran prodigio: una mujer vestida del sol, con la luna bajo sus pies y en su cabeza una corona de doce estrellas.",
            2: "Estaba encinta y gritaba con los dolores del parto.",
            13: "Cuando el dragón se vio arrojado a la tierra, persiguió a la mujer que había dado a luz al hijo varón.",
            14: "Pero a la mujer le dieron las dos alas de la gran águila, para que volara al desierto, a su lugar, donde es alimentada por un tiempo, dos tiempos y la mitad de un tiempo, lejos de la serpiente.",
            15: "Entonces la serpiente vomitó de su boca, tras la mujer, agua como un río, para que la arrastrara la corriente.",
            16: "Pero la tierra socorrió a la mujer: abrió su boca y se tragó el río que el dragón había arrojado de la suya.",
            17: "Entonces el dragón se enfureció contra la mujer y se fue a hacer la guerra contra el resto de sus descendientes, los que guardan los mandamientos de Dios y mantienen el testimonio de Jesucristo."
        },
        "Gn 3": {
            9: "El Señor Dios llamó a Adán y le dijo: «¿Dónde estás?».",
            10: "Él respondió: «Oí tu voz en el paraíso y tuve miedo, porque estoy desnudo; por eso me escondí».",
            11: "Dios le replicó: «¿Y quién te ha hecho saber que estabas desnudo, sino el haber comido del fruto del árbol que te había prohibido comer?».",
            12: "Respondió Adán: «La mujer que me diste por compañera me dio del fruto de aquel árbol, y comí».",
            13: "El Señor Dios dijo a la mujer: «¿Por qué has hecho esto?». Ella respondió: «La serpiente me engañó, y comí».",
            14: "Entonces el Señor Dios dijo a la serpiente: «Por haber hecho esto, maldita seas entre todos los animales y bestias de la tierra: andarás arrastrándote sobre tu pecho y comerás tierra todos los días de tu vida.",
            15: "Pondré enemistad entre ti y la mujer, y entre tu descendencia y la suya: ella quebrantará tu cabeza, y tú andarás acechando su talón».",
            20: "Adán puso a su mujer el nombre de Eva, que significa «vida», porque había de ser la madre de todos los vivientes."
        }
    };

    // Pasajes completos
    const b = {
        "Jn 2,1-11": "Tres días después se celebraron unas bodas en Caná de Galilea, y estaba allí la madre de Jesús. También fue invitado a las bodas Jesús con sus discípulos. Como llegó a faltar el vino, la madre de Jesús le dijo: «No tienen vino». Jesús le respondió: «Mujer, ¿qué nos va a mí y a ti? Aún no ha llegado mi hora». Dijo entonces su madre a los sirvientes: «Hagan lo que él les diga». Había allí seis tinajas de piedra, destinadas a las purificaciones de los judíos, en cada una de las cuales cabían dos o tres cántaros. Jesús les dijo: «Llenen de agua esas tinajas». Y las llenaron hasta arriba. Después les dijo: «Saquen ahora un poco y llévenlo al encargado del banquete». Y así lo hicieron. Apenas probó el encargado el agua convertida en vino —él no sabía de dónde venía, aunque sí lo sabían los sirvientes que la habían sacado—, llamó al novio y le dijo: «Todos sirven primero el mejor vino y, cuando los invitados ya han bebido bastante, sacan el más flojo; tú, en cambio, has reservado el buen vino hasta ahora». Así, en Caná de Galilea, hizo Jesús el primero de sus milagros, con el que manifestó su gloria, y sus discípulos creyeron más en él.",
        "Jn 2,3-5.11": "Como llegó a faltar el vino, la madre de Jesús le dijo: «No tienen vino». Jesús le respondió: «Mujer, ¿qué nos va a mí y a ti? Aún no ha llegado mi hora». Dijo entonces su madre a los sirvientes: «Hagan lo que él les diga». (…) Así, en Caná de Galilea, hizo Jesús el primero de sus milagros, con el que manifestó su gloria, y sus discípulos creyeron más en él.",
        "Jn 19,25-27": "Junto a la cruz de Jesús estaban su madre, la hermana de su madre, María, mujer de Cleofás, y María Magdalena. Jesús, al ver a su madre y junto a ella al discípulo que él amaba, dijo a su madre: «Mujer, ahí tienes a tu hijo». Después dijo al discípulo: «Ahí tienes a tu madre». Y desde aquel momento el discípulo la recibió en su casa.",
        "Lc 7,12-16": "Cuando estaba cerca de la puerta de la ciudad, sacaban a enterrar a un difunto, hijo único de su madre, que era viuda; y la acompañaba mucha gente de la ciudad. Al verla, el Señor, movido a compasión, le dijo: «No llores». Se acercó y tocó el féretro, y los que lo llevaban se detuvieron. Entonces dijo: «Joven, yo te lo mando: levántate». Y enseguida el difunto se incorporó y comenzó a hablar. Y Jesús se lo entregó a su madre. Todos quedaron llenos de un santo temor y glorificaban a Dios, diciendo: «Un gran profeta ha aparecido entre nosotros, y Dios ha visitado a su pueblo».",
        "Mt 2,13-15": "Después que ellos partieron, un ángel del Señor se apareció en sueños a José y le dijo: «Levántate, toma al niño y a su madre, huye a Egipto y quédate allí hasta que yo te avise, porque Herodes va a buscar al niño para matarlo». José se levantó, tomó de noche al niño y a su madre y se retiró a Egipto, donde permaneció hasta la muerte de Herodes. Así se cumplió lo que dijo el Señor por medio del profeta: «De Egipto llamé a mi hijo».",
        "Mt 12,46-50": "Todavía estaba él hablando a la gente cuando su madre y sus hermanos estaban fuera, queriendo hablarle. Alguien le dijo: «Mira, tu madre y tus hermanos están allí fuera y preguntan por ti». Pero él respondió al que se lo decía: «¿Quién es mi madre y quiénes son mis hermanos?». Y señalando con la mano a sus discípulos, dijo: «Estos son mi madre y mis hermanos. Porque cualquiera que haga la voluntad de mi Padre, que está en los cielos, ese es mi hermano, y mi hermana, y mi madre».",
        "Mc 10,46-52": "Llegaron a Jericó; y al salir de Jericó con sus discípulos, seguido de muchísima gente, Bartimeo, el ciego, hijo de Timeo, estaba sentado junto al camino pidiendo limosna. Al oír que era Jesús Nazareno el que pasaba, comenzó a gritar: «¡Jesús, hijo de David, ten misericordia de mí!». Muchos lo reprendían para que se callara, pero él gritaba mucho más: «¡Hijo de David, ten compasión de mí!». Jesús se detuvo y lo mandó llamar. Llamaron al ciego diciéndole: «¡Ánimo, levántate, que te llama!». Él, arrojando su manto, se puso en pie de un salto y fue hacia Jesús. Jesús le dijo: «¿Qué quieres que te haga?». El ciego le respondió: «Maestro, que yo vea». Jesús le dijo: «Anda, tu fe te ha sanado». Y al instante recobró la vista, y lo seguía por el camino.",
        "Mt 18,21-22": "Entonces Pedro se acercó y le dijo: «Señor, ¿cuántas veces tendré que perdonar a mi hermano cuando peque contra mí? ¿Hasta siete veces?». Jesús le respondió: «No te digo hasta siete veces, sino hasta setenta veces siete».",
        "Jn 21,15-17": "Terminada la comida, Jesús dijo a Simón Pedro: «Simón, hijo de Juan, ¿me amas más que estos?». Él le respondió: «Sí, Señor, tú sabes que te amo». Jesús le dijo: «Apacienta mis corderos». Le preguntó por segunda vez: «Simón, hijo de Juan, ¿me amas?». Él respondió: «Sí, Señor, tú sabes que te amo». Jesús le dijo: «Apacienta mis corderos». Le preguntó por tercera vez: «Simón, hijo de Juan, ¿me amas?». Pedro se entristeció de que le preguntara por tercera vez si lo amaba, y le respondió: «Señor, tú lo sabes todo; tú sabes que te amo». Jesús le dijo: «Apacienta mis ovejas».",
        "Lc 4,16-21": "Jesús fue a Nazaret, donde se había criado; el sábado entró, según su costumbre, en la sinagoga y se levantó para hacer la lectura. Le entregaron el libro del profeta Isaías y, al abrirlo, encontró el pasaje donde estaba escrito: «El Espíritu del Señor está sobre mí, porque me ha consagrado con su unción y me ha enviado a anunciar la buena noticia a los pobres, a sanar a los de corazón quebrantado, a anunciar la libertad a los cautivos y la vista a los ciegos, a liberar a los oprimidos y a proclamar el año de gracia del Señor». Enrolló el libro, lo devolvió al ayudante y se sentó. Todos en la sinagoga tenían los ojos fijos en él. Y comenzó a decirles: «Hoy se ha cumplido esta Escritura que acaban de oír».",
        "Mc 10,13-16": "Le presentaban unos niños para que los tocara y bendijera, pero los discípulos reñían a los que los traían. Al verlo, Jesús se indignó y les dijo: «Dejen que los niños vengan a mí y no se lo impidan, porque el reino de Dios es de los que son como ellos. En verdad les digo: quien no reciba el reino de Dios como un niño, no entrará en él». Y abrazándolos, los bendecía imponiéndoles las manos.",
        "Mt 14,15-20": "Al caer la tarde, sus discípulos se acercaron a él y le dijeron: «Este lugar es desierto y ya es tarde: despide a la gente para que vayan a los pueblos a comprar algo de comer». Pero Jesús les dijo: «No tienen necesidad de irse; denles ustedes de comer». Ellos respondieron: «No tenemos aquí más que cinco panes y dos peces». Él les dijo: «Tráiganmelos». Y después de mandar a la gente que se sentara sobre la hierba, tomó los cinco panes y los dos peces, levantó los ojos al cielo, los bendijo, los partió y dio los panes a los discípulos, y los discípulos se los dieron a la gente. Todos comieron hasta quedar satisfechos, y de lo que sobró recogieron doce canastos llenos de pedazos.",
        "1 Re 18,42-45": "Ajab fue a comer y beber; Elías, en cambio, subió a la cima del Carmelo, se postró en tierra y puso el rostro entre las rodillas. Dijo a su criado: «Sube y mira hacia el mar». El criado subió, miró y dijo: «No hay nada». Elías le dijo: «Vuelve», hasta siete veces. A la séptima vez el criado dijo: «Sube del mar una nube pequeña, como la palma de la mano de un hombre». Entonces Elías le dijo: «Ve y dile a Ajab: Prepara tu carro y baja, para que no te detenga la lluvia». Mientras tanto, el cielo se oscureció de nubes y viento, y empezó a caer una gran lluvia. Ajab subió a su carro y se fue a Jezrael.",
        "Mt 13,31-32": "Jesús les propuso otra parábola: «El reino de los cielos se parece a un grano de mostaza que un hombre tomó y sembró en su campo. Es la más pequeña de todas las semillas, pero cuando crece es mayor que todas las hortalizas y se hace árbol, de modo que las aves del cielo vienen y anidan en sus ramas».",
        "Mc 10,42-45": "Jesús los llamó y les dijo: «Ustedes saben que los que gobiernan las naciones las dominan, y que sus jefes ejercen sobre ellas un poder absoluto. No debe ser así entre ustedes: el que quiera ser grande entre ustedes, que sea su servidor; y el que quiera ser el primero, que se haga servidor de todos. Porque tampoco el Hijo del hombre vino a ser servido, sino a servir y a dar su vida por la redención de muchos».",
        "Ef 4,1-6": "Yo, pues, que estoy preso por el Señor, los exhorto a que se porten de una manera digna de la vocación a la que han sido llamados: con toda humildad y mansedumbre, con paciencia, soportándose unos a otros con amor, esforzándose por conservar la unidad del Espíritu con el vínculo de la paz. Hay un solo cuerpo y un solo Espíritu, así como una sola es la esperanza a la que han sido llamados. Un solo Señor, una sola fe, un solo bautismo. Un solo Dios y Padre de todos, que está sobre todos, actúa por medio de todos y habita en todos.",
        "Hch 2,42-47": "Todos perseveraban en escuchar la enseñanza de los apóstoles, en la comunión, en la fracción del pan y en la oración. Un santo temor se apoderaba de todos, porque los apóstoles hacían muchos prodigios y milagros en Jerusalén. Los creyentes vivían unidos y tenían todo en común: vendían sus posesiones y demás bienes y los repartían entre todos, según la necesidad de cada uno. Cada día acudían juntos al templo con un mismo espíritu, partían el pan en las casas y tomaban el alimento con alegría y sencillez de corazón. Alababan a Dios y se ganaban el aprecio de todo el pueblo. Y el Señor aumentaba cada día el número de los que se salvaban."
    };

    // Construye un pasaje a partir de los versículos: "Lc 1,28-31.34-35.38"
    const armar = ref => {
        const [, libro, cap, tramos] = ref.match(/^(.+?) (\d+),(.+)$/);
        const vs = v[`${libro} ${cap}`];
        let prev = null;
        return tramos.split(".").map(t => {
            const [a, z = a] = t.split("-").map(Number);
            const partes = [];
            for (let i = a; i <= z; i++) partes.push(vs[i]);
            const salto = prev !== null && a !== prev + 1 ? "(…) " : "";
            prev = z;
            // Cada tramo debe quedar legible por sí solo: sin coma final y con comillas equilibradas
            let s = partes.join(" ").replace(/[,;]$/, "…");
            const abre = (s.match(/«/g) || []).length, cierra = (s.match(/»/g) || []).length;
            if (abre > cierra) s = s.endsWith(".") ? s.slice(0, -1) + "»." : s + "»";
            if (cierra > abre) s = "«" + s;
            return salto + s;
        }).join(" ");
    };

    [
        "Lc 1,26-38", "Lc 1,46-55", "Gn 3,9-15.20", "Lc 1,39-45.56", "Mt 26,36-40.45-46",
        "Lc 10,1-3", "Lc 2,4-7", "Lc 1,28-31.34-35.38", "Lc 2,41-43.45-46.48-51",
        "1 Sam 3,3-5.7-10", "Lc 1,41-47", "Lc 1,46-50", "Lc 1,50-53", "Lc 1,46-47.54-55",
        "Lc 2,39-40", "Mt 20,1-16", "Lc 10,30.33-35", "Ap 12,1-2.13-17", "Ef 1,3-6.11-12"
    ].forEach(ref => { b[ref] = armar(ref); });

    return b;
})();

const MM_ACLAMACION = {
    evangelio: ["Palabra del Señor.", "Gloria a ti, Señor Jesús."],
    otro: ["Palabra de Dios.", "Te alabamos, Señor."]
};

const MM_SEMANAS = [
    {
        titulo: "Primera semana",
        lema: "María nos invita a escuchar la realidad",
        texto: { titulo: "Las bodas de Caná", cita: "Jn 2,1-11" },
        motivacion: "En Caná, María fue la primera en darse cuenta de que faltaba algo. No se quedó mirando: llevó la necesidad a Jesús y confió. Esta semana le pedimos esa misma mirada atenta para descubrir a quienes sufren cerca de nosotros: los enfermos y quienes los cuidan, las personas que viven solas, las familias que pasan necesidad y los migrantes que llegan a nuestro país."
    },
    {
        titulo: "Segunda semana",
        lema: "María nos ayuda a acoger la voluntad de Dios",
        texto: { titulo: "La Anunciación", cita: "Lc 1,26-38" },
        motivacion: "En Nazaret, María escuchó al ángel, hizo preguntas y finalmente dijo «sí». Su respuesta no fue ciega: nació de la confianza en que para Dios nada es imposible. Esta semana aprendemos de ella a escuchar, a dialogar con paciencia, a pedir perdón y a reconstruir la confianza entre nosotros, como Iglesia y como país."
    },
    {
        titulo: "Tercera semana",
        lema: "El cántico de María que reconstruye la esperanza de nuestro Pueblo",
        texto: { titulo: "El Magníficat", cita: "Lc 1,46-55" },
        motivacion: "El Magníficat es la oración de una mujer sencilla que reconoce las maravillas de Dios en su vida y en la historia de su pueblo. Esta semana rezamos con sus palabras: damos gracias, nos hacemos pequeños, miramos a los pobres como Dios los mira y renovamos la esperanza de que un país más justo y fraterno es posible."
    },
    {
        titulo: "Cuarta semana",
        lema: "María, Patrona de Chile, nos llama a la corresponsabilidad en la construcción del Reino",
        texto: { titulo: "María al pie de la cruz", cita: "Jn 19,25-27" },
        motivacion: "Al pie de la cruz, Jesús nos entregó a María como madre, y ella nos recibió a todos como hijos. Desde ese momento nadie queda fuera de su cuidado. Esta semana, bajo el manto de la Virgen del Carmen, reconocemos que cada persona tiene algo que aportar y que todos somos responsables de construir el Reino: en la familia, el trabajo, la comunidad y la vida pública."
    },
    {
        titulo: "Quinta semana",
        lema: "María, Reina de Chile, camina entre el pueblo",
        texto: { titulo: "La promesa del Mesías", cita: "Gn 3,9-15.20" },
        motivacion: "Llegamos a los últimos días de este mes, en el centenario de la coronación de la Virgen del Carmen. Nos preparamos para celebrar a la Inmaculada Concepción: María, preservada de todo pecado, es la mujer de la promesa, la madre de todos los vivientes. Le encomendamos los rostros que hemos recordado durante este mes y le pedimos que siga caminando con nuestro pueblo."
    }
];

// misterios: gozosos | dolorosos | gloriosos | luminosos
// lectura: "evangelio" u "otro" (define la aclamación final)
const MM_DIAS = [
    // ---------------- PRIMERA SEMANA ----------------
    {
        fecha: "2026-11-08", semana: 0, misterios: "gloriosos",
        tema: "María está atenta a las necesidades de nuestro pueblo",
        cita: "Jn 2,3-5.11", libro: "Del Evangelio según san Juan", lectura: "evangelio",
        motivacion: "Comenzamos el Mes de María reuniéndonos en torno a nuestra Madre. Durante estas semanas queremos caminar con ella, rezar juntos y aprender su manera de mirar la vida: una mirada que no pasa de largo ante lo que le falta a los demás.",
        reflexion: "«No tienen vino». Con estas pocas palabras María muestra lo que lleva en el corazón: se preocupa por la alegría de otros y confía la necesidad a su Hijo sin exigirle nada. Así también nosotros podemos presentar a Jesús, por medio de ella, lo que hoy falta en nuestras familias, en nuestros barrios y en nuestro país. Su consejo sigue siendo el mismo: «Hagan lo que él les diga».",
        preguntas: [
            "¿Qué necesidades de mi familia, mi barrio o mi comunidad me cuesta ver?",
            "¿Qué quisiera poner hoy en manos de María para que ella lo presente a Jesús?"
        ],
        peticiones: [
            "Por nuestras familias, para que no les falte el pan, el trabajo ni la alegría de estar juntos.",
            "Por quienes viven en la pobreza o lejos de su tierra, para que encuentren en nosotros una mano tendida."
        ]
    },
    {
        fecha: "2026-11-09", semana: 0, misterios: "gozosos",
        tema: "María nos acompaña en el dolor",
        cita: "Lc 7,12-16", libro: "Del Evangelio según san Lucas", lectura: "evangelio",
        motivacion: "Hay dolores que no tienen explicación y que se viven en silencio. Hoy le pedimos a María, que conoció el sufrimiento, que nos enseñe a acompañar a quienes están heridos, sin discursos y con mucha cercanía.",
        reflexion: "Jesús ve a una madre que llora a su único hijo y se conmueve. No le pide nada; se acerca, la consuela y le devuelve la vida. El Evangelio nos muestra un Dios que no es indiferente al dolor humano. María, que estuvo de pie junto a la cruz, nos ayuda a estar también nosotros cerca de quienes sufren, con una presencia humilde que vale más que muchas palabras.",
        preguntas: [
            "¿Conozco a alguien que hoy vive un dolor en silencio? ¿Cómo podría acercarme?",
            "¿Qué dolor propio necesito poner en las manos de María?"
        ],
        peticiones: [
            "Por quienes han perdido a un ser querido, para que encuentren consuelo y compañía.",
            "Por quienes sienten que su vida ha perdido sentido, para que descubran la ternura de Dios a través de nosotros."
        ]
    },
    {
        fecha: "2026-11-10", semana: 0, misterios: "dolorosos",
        tema: "Personas con alguna enfermedad y sus cuidadores",
        cita: "Lc 1,39-45.56", libro: "Del Evangelio según san Lucas", lectura: "evangelio",
        motivacion: "Apenas supo que su prima Isabel la necesitaba, María se puso en camino. Hoy rezamos por los enfermos y por quienes los cuidan día y noche, muchas veces sin descanso ni reconocimiento.",
        reflexion: "María se quedó tres meses en casa de Isabel. No fue una visita de cortesía, sino un servicio largo y sencillo. Cuidar a un enfermo exige también esa fidelidad diaria, que desgasta y que necesita apoyo. Una comunidad cristiana se reconoce porque nadie cuida solo: sostenemos al enfermo y también a quien lo acompaña.",
        preguntas: [
            "¿A qué enfermo o cuidador de mi entorno podría ayudar esta semana?",
            "¿Me dejo cuidar cuando lo necesito, o me cuesta reconocer mi fragilidad?"
        ],
        peticiones: [
            "Por los enfermos, especialmente los que están solos, para que reciban atención digna y compañía.",
            "Por los cuidadores, familiares y voluntarios, para que encuentren descanso y redes de apoyo que los sostengan."
        ]
    },
    {
        fecha: "2026-11-11", semana: 0, misterios: "gloriosos",
        tema: "Personas que viven en situación de soledad",
        cita: "Mt 26,36-40.45-46", libro: "Del Evangelio según san Mateo", lectura: "evangelio",
        motivacion: "La soledad es una de las pobrezas más extendidas de nuestro tiempo: adultos mayores, enfermos, jóvenes lejos de casa, madres que sacan adelante solas a sus hijos. Hoy los ponemos en el corazón de María.",
        reflexion: "En Getsemaní, Jesús pide a sus amigos que se queden despiertos con él, pero ellos se duermen. Él mismo conoció la experiencia de estar acompañado y, sin embargo, solo. Por eso entiende a quienes hoy se sienten así. Acompañar no siempre es resolver: a veces basta con quedarse, escuchar y velar junto a otro.",
        preguntas: [
            "¿Quién, a mi alrededor, vive solo y espera una visita o una llamada?",
            "¿Qué significa para mí decir, como Jesús, «hágase tu voluntad»?"
        ],
        peticiones: [
            "Por las personas mayores que viven solas, para que encuentren en nuestras comunidades una familia.",
            "Por quienes se sienten abandonados, para que nuestra cercanía les recuerde que Dios no los olvida."
        ]
    },
    {
        fecha: "2026-11-12", semana: 0, misterios: "luminosos",
        tema: "Con María pedimos al Señor que envíe obreros a su mies",
        cita: "Lc 10,1-3", libro: "Del Evangelio según san Lucas", lectura: "evangelio",
        motivacion: "Toda vida es una vocación. Hoy rezamos con María para que niños, jóvenes y adultos descubran a qué los llama Dios: al sacerdocio, a la vida consagrada, al matrimonio o al servicio desde su profesión.",
        reflexion: "Jesús envía a sus discípulos de dos en dos y les confiesa que «la cosecha es abundante, pero los trabajadores son pocos». Lo primero que les pide es rezar. La vocación nace del encuentro con Dios y se descubre en comunidad. María, que dijo «sí» siendo muy joven, acompaña hoy a quienes sienten miedo o dudas ante el llamado.",
        preguntas: [
            "¿Qué temores pueden estar frenando a los jóvenes que conozco para responder a su vocación?",
            "¿Cómo pongo mis dones al servicio de la Iglesia y de los demás?"
        ],
        peticiones: [
            "Por quienes sienten el llamado de Dios, para que respondan con generosidad y alegría.",
            "Por los sacerdotes, religiosas y religiosos, para que perseveren en su entrega."
        ]
    },
    {
        fecha: "2026-11-13", semana: 0, misterios: "dolorosos",
        tema: "Personas en situación de pobreza y vulnerabilidad",
        cita: "Lc 2,4-7", libro: "Del Evangelio según san Lucas", lectura: "evangelio",
        motivacion: "Jesús nació en un pesebre porque no hubo lugar para ellos. Hoy pensamos en las familias que buscan un techo, un trabajo estable o simplemente una oportunidad, y las confiamos a María.",
        reflexion: "José y María llegaron a Belén cansados y no encontraron dónde alojarse. Así comenzó la vida del Hijo de Dios: en la pobreza y la precariedad. Desde entonces, cada persona sin hogar o sin recursos tiene el rostro de esa familia. Creer en Jesús nacido en un pesebre nos compromete a hacer sitio a quienes hoy no lo tienen.",
        preguntas: [
            "¿Qué situaciones de pobreza material o espiritual hay en mi entorno más cercano?",
            "¿Qué gesto concreto puedo hacer para «hacer lugar» a alguien que lo necesita?"
        ],
        peticiones: [
            "Por las familias que viven en campamentos o en la calle, para que encuentren un hogar digno.",
            "Por quienes trabajan con los más pobres, para que no les falten fuerzas ni recursos."
        ]
    },
    {
        fecha: "2026-11-14", semana: 0, misterios: "gozosos",
        tema: "Personas migrantes",
        cita: "Mt 2,13-15", libro: "Del Evangelio según san Mateo", lectura: "evangelio",
        motivacion: "La Sagrada Familia tuvo que huir de noche a un país extranjero para salvar la vida del niño. Hoy rezamos por los migrantes y refugiados que han llegado a Chile buscando un futuro mejor.",
        reflexion: "María conoció el desarraigo: dejar la propia tierra, vivir entre extraños, depender de la hospitalidad de otros. Por eso es madre cercana de quienes hoy cruzan fronteras. El Evangelio nos invita a mirar a los migrantes no como una amenaza, sino como hermanos en quienes Cristo sigue tocando nuestra puerta.",
        preguntas: [
            "¿Cómo miro y trato a las personas migrantes que encuentro en mi día a día?",
            "¿Qué podría hacer mi comunidad para acogerlas mejor?"
        ],
        peticiones: [
            "Por los migrantes y refugiados, para que encuentren acogida, trabajo y respeto a su dignidad.",
            "Por quienes los acompañan y atienden, para que su servicio esté guiado por la justicia y la compasión."
        ]
    },

    // ---------------- SEGUNDA SEMANA ----------------
    {
        fecha: "2026-11-15", semana: 1, misterios: "gloriosos",
        tema: "María acoge la voluntad de Dios",
        cita: "Lc 1,28-31.34-35.38", libro: "Del Evangelio según san Lucas", lectura: "evangelio",
        motivacion: "Contemplamos hoy la Anunciación, el momento en que Dios pidió permiso a una joven de Nazaret para hacerse hombre. Con ella aprendemos a reconocer cómo Dios sigue hablándonos en lo cotidiano.",
        reflexion: "Dios no llega con poder ni con imposiciones: saluda, tranquiliza («no temas») y propone. María pregunta lo que no entiende y luego se entrega por completo. Cada uno de nosotros está llamado también a dar su propio «sí», en las circunstancias concretas de su vida, para que Cristo siga naciendo en nuestra historia.",
        preguntas: [
            "¿Qué me enseña María sobre la confianza y la disponibilidad para acoger la voluntad de Dios?"
        ],
        peticiones: [
            "Por la Iglesia, para que como María sepa escuchar a Dios en lo sencillo y responder con generosidad.",
            "Por nuestras familias, para que sean lugares donde se aprende a confiar en Dios."
        ]
    },
    {
        fecha: "2026-11-16", semana: 1, misterios: "gozosos",
        tema: "María, ejemplo de escucha en el camino sinodal",
        cita: "Lc 2,41-43.45-46.48-51", libro: "Del Evangelio según san Lucas", lectura: "evangelio",
        motivacion: "Caminar juntos como Iglesia comienza por escucharnos. María nos enseña que escuchar no es solo oír, sino abrir el corazón a Dios y a los demás, incluso cuando no entendemos todo.",
        reflexion: "María y José buscan a Jesús con angustia y, al encontrarlo, no comprenden su respuesta. Sin embargo, María no se cierra: guarda todo en su corazón. Ese es el camino de la escucha: acoger lo que no entendemos, darle tiempo y dejar que Dios lo ilumine. Una Iglesia sinodal es una comunidad que se escucha con paciencia.",
        preguntas: [
            "¿Dónde necesito volver a buscar a Jesús en este tiempo?",
            "¿Escucho de verdad a los demás, o solo espero mi turno para hablar?"
        ],
        peticiones: [
            "Por los adolescentes y jóvenes, para que sepamos escucharlos con humildad y cariño.",
            "Por nuestras comunidades, para que aprendan a discernir juntas la voluntad de Dios."
        ]
    },
    {
        fecha: "2026-11-17", semana: 1, misterios: "dolorosos",
        tema: "María nos invita a dialogar para mejorar nuestras relaciones comunitarias",
        cita: "Mt 12,46-50", libro: "Del Evangelio según san Mateo", lectura: "evangelio",
        motivacion: "Las comunidades se fortalecen cuando sus miembros se hablan con respeto y se preocupan unos por otros. Hoy pedimos a María el don del diálogo sincero.",
        reflexion: "Jesús amplía la familia: su madre y sus hermanos son quienes cumplen la voluntad del Padre. Esta palabra no desplaza a María; al contrario, la muestra como la primera que escuchó y vivió la Palabra. Pertenecer a la familia de Jesús significa construir relaciones nuevas, donde el diálogo y el cuidado mutuo reemplazan la indiferencia.",
        preguntas: [
            "¿Qué significa para mí ser parte de una comunidad?",
            "¿Con quién necesito retomar un diálogo pendiente?"
        ],
        peticiones: [
            "Por nuestra comunidad, para que el diálogo respetuoso nos ayude a superar las diferencias.",
            "Por quienes se sienten excluidos de la vida comunitaria, para que encuentren un lugar entre nosotros."
        ]
    },
    {
        fecha: "2026-11-18", semana: 1, misterios: "gloriosos",
        tema: "María nos ayuda a ser una comunidad acogedora e inclusiva",
        cita: "Mc 10,46-52", libro: "Del Evangelio según san Marcos", lectura: "evangelio",
        motivacion: "En nuestras familias y barrios hay personas que pasan desapercibidas. Hoy le pedimos a María que nos ayude a abrirles espacio y a construir comunidades donde todos tengan lugar.",
        reflexion: "Bartimeo está al borde del camino y muchos quieren hacerlo callar. Jesús, en cambio, se detiene, lo llama y le pregunta qué necesita. La escena nos cuestiona: ¿somos quienes mandan callar o quienes acercan a los demás a Jesús? Una comunidad acogedora es la que dice al que está al margen: «Ánimo, levántate, te llama».",
        preguntas: [
            "¿Quiénes están hoy «al borde del camino» en mi familia, barrio o comunidad?",
            "¿Me he sentido yo mismo alguna vez al margen? ¿Qué me ayudó?"
        ],
        peticiones: [
            "Por quienes se sienten solos, enfermos o excluidos, para que encuentren en la Iglesia una casa abierta.",
            "Por nosotros, para que revisemos las actitudes que dejan a otros fuera."
        ]
    },
    {
        fecha: "2026-11-19", semana: 1, misterios: "luminosos",
        tema: "Pedimos por los jóvenes que están en discernimiento vocacional",
        cita: "1 Sam 3,3-5.7-10", libro: "Del primer libro de Samuel", lectura: "otro",
        motivacion: "Muchos jóvenes se preguntan qué hacer con su vida. Hoy rezamos por ellos, para que, como María, se atrevan a confiar su futuro a Dios.",
        reflexion: "Samuel escucha una voz y no sabe de quién es. Necesita la ayuda de Elí para reconocer que es Dios quien lo llama. La vocación casi nunca llega de golpe; se descubre poco a poco, y necesita adultos que acompañen con paciencia. «Habla, Señor, que tu servidor escucha» puede ser también nuestra oración de hoy.",
        preguntas: [
            "¿Rezo por las vocaciones sacerdotales, religiosas y matrimoniales?",
            "¿Me he preguntado alguna vez a qué me llama Dios?"
        ],
        peticiones: [
            "Por los jóvenes que disciernen su vocación, para que respondan con un «sí» generoso.",
            "Por las familias y comunidades, para que sean espacios de acompañamiento y escucha."
        ]
    },
    {
        fecha: "2026-11-20", semana: 1, misterios: "dolorosos",
        tema: "Perdón por nuestros pecados que dañan la comunión de la Iglesia",
        cita: "Mt 18,21-22", libro: "Del Evangelio según san Mateo", lectura: "evangelio",
        motivacion: "La Iglesia está formada por personas frágiles. Hoy reconocemos nuestras faltas, pedimos perdón y le pedimos a María que nos ayude a reconstruir la comunión.",
        reflexion: "Pedro quiere ponerle un límite al perdón y Jesús le responde que no hay límite. Perdonar no es olvidar ni justificar el mal; es renunciar a la venganza y abrir un camino de reconciliación. Nuestras comunidades también tienen heridas. María, que perdonó a quienes crucificaron a su Hijo, nos enseña a pedir perdón y a perdonar.",
        preguntas: [
            "¿Contribuyo a resolver los conflictos de mi comunidad, o los agrando?",
            "¿A quién necesito perdonar, o a quién debo pedir perdón?"
        ],
        peticiones: [
            "Por la Iglesia, para que reconozca sus errores y repare el daño causado.",
            "Por nuestras comunidades, para que sepan dar segundas oportunidades y vivir reconciliadas."
        ]
    },
    {
        fecha: "2026-11-21", semana: 1, misterios: "gozosos",
        tema: "Reconstruimos confianzas para caminar juntos como Pueblo de Dios",
        cita: "Jn 21,15-17", libro: "Del Evangelio según san Juan", lectura: "evangelio",
        motivacion: "La confianza se rompe con facilidad y cuesta mucho reconstruirla. Hoy le pedimos a María que nos ayude a sanar los vínculos dañados en nuestras familias, en la Iglesia y en la sociedad.",
        reflexion: "Pedro había negado a Jesús tres veces. Jesús no le reprocha nada; le pregunta tres veces si lo ama y, a cada respuesta, le confía una misión. Así reconstruye Dios la confianza: desde el amor y no desde la sospecha. Nosotros también podemos volver a empezar, si dejamos que el amor sane nuestras heridas.",
        preguntas: [
            "¿Qué vínculos de mi vida necesitan ser sanados para volver a caminar juntos?"
        ],
        peticiones: [
            "Por quienes han perdido la confianza a causa de heridas o decepciones, para que encuentren caminos de sanación.",
            "Por nosotros, para que seamos una comunidad que sabe escuchar, pedir perdón y cuidar los vínculos."
        ]
    },

    // ---------------- TERCERA SEMANA ----------------
    {
        fecha: "2026-11-22", semana: 2, misterios: "gloriosos",
        tema: "María exalta la grandeza del Señor",
        cita: "Lc 1,41-47", libro: "Del Evangelio según san Lucas", lectura: "evangelio",
        motivacion: "Comenzamos la tercera semana con alegría: María nos enseña a alabar a Dios por todo lo que hace en nuestra vida, aunque a veces nos parezca pequeño.",
        reflexion: "Isabel reconoce en María a la madre de su Señor, y María responde con un canto de alabanza. Ninguna de las dos se queda en sí misma: ambas miran a Dios. La alabanza nace cuando reconocemos que todo lo bueno es regalo. Hoy podemos unirnos a ese encuentro y dar gracias a Dios por María y por todo lo que obra en nosotros.",
        preguntas: [
            "¿Qué acción de Dios en mi vida me mueve hoy a alabarlo?",
            "¿Qué maravillas ha hecho Dios en mi familia?"
        ],
        peticiones: [
            "Por todos nosotros, para que nuestras palabras sean instrumento de alabanza y no de queja.",
            "Por nuestras comunidades, para que sepan reconocer y celebrar los dones de Dios."
        ]
    },
    {
        fecha: "2026-11-23", semana: 2, misterios: "gozosos",
        tema: "Damos gracias a Dios por nuestra historia",
        cita: "Lc 1,46-50", libro: "Del Evangelio según san Lucas", lectura: "evangelio",
        motivacion: "En una cultura que siempre quiere más, María nos invita a detenernos y agradecer. Hoy damos gracias por nuestra historia personal, familiar y como pueblo.",
        reflexion: "María recuerda su propia historia y descubre en ella la mirada de Dios sobre su pequeñez. Agradecer es aprender a leer la vida con esos ojos: el amor de la familia, la amistad, la salud, la naturaleza, la fe recibida. Quien agradece reconoce que no se hizo a sí mismo y se vuelve más generoso con los demás.",
        preguntas: [
            "¿Vivo mi propia vida como un don de Dios?",
            "¿Por qué motivos o por quiénes quiero dar gracias hoy?"
        ],
        peticiones: [
            "Por los pastores de nuestra Iglesia, para que tengan un corazón agradecido y atento a su pueblo.",
            "Por quienes sufren y no logran ver la presencia de Dios, para que descubran su amor en sus vidas."
        ]
    },
    {
        fecha: "2026-11-24", semana: 2, misterios: "dolorosos",
        tema: "Somos corresponsables en el servicio a los más pobres",
        cita: "Lc 1,50-53", libro: "Del Evangelio según san Lucas", lectura: "evangelio",
        motivacion: "Dios no construye su Reino con el poder ni con el dinero, sino con corazones humildes y sedientos de justicia. Hoy le pedimos a María que nos haga servidores de los más pobres.",
        reflexion: "El Magníficat anuncia un mundo al revés: Dios derriba a los poderosos y levanta a los humildes, colma a los hambrientos y despide vacíos a los ricos. Lo que el mundo considera grande no es lo que Dios privilegia. Este canto nos pide revisar nuestras prioridades y ponernos del lado de quienes no tienen voz.",
        preguntas: [
            "¿Qué «tronos» personales o sociales necesitan caer para que crezca la fe?",
            "¿Qué lugar ocupan los pobres en mis decisiones de cada día?"
        ],
        peticiones: [
            "Por quienes viven marginados por la pobreza, la guerra o la injusticia, para que encuentren servicio y acompañamiento.",
            "Por quienes anuncian el Evangelio entre los más olvidados, para que nos contagien su compromiso."
        ]
    },
    {
        fecha: "2026-11-25", semana: 2, misterios: "gloriosos",
        tema: "Con María, Madre y Reina de Chile, reconstruimos nuestro país con esperanza",
        cita: "Lc 1,46-47.54-55", libro: "Del Evangelio según san Lucas", lectura: "evangelio",
        motivacion: "María conocía la historia de su pueblo y sus sufrimientos. Hoy le confiamos nuestro país, con sus heridas y sus esperanzas, y le pedimos que nos ayude a construir una patria más fraterna.",
        reflexion: "María recuerda la fidelidad de Dios, que no se olvida de su pueblo y cumple sus promesas de generación en generación. Esa memoria la llena de esperanza. También Chile tiene una historia en la que Dios ha estado presente. Recordarlo nos da fuerza para reconstruir lo que está roto y cuidar los vínculos que nos unen como nación.",
        preguntas: [
            "¿Cuántas veces he celebrado la bondad de Dios en mi historia y en la de mi comunidad?",
            "¿Qué puedo ofrecer a Dios como respuesta a su fidelidad?"
        ],
        peticiones: [
            "Por Chile, para que sepamos construir un país reconciliado donde se cuide la dignidad de todos.",
            "Por los que se sienten sin esperanza, para que nuestras comunidades les devuelvan la confianza en el futuro."
        ]
    },
    {
        fecha: "2026-11-26", semana: 2, misterios: "luminosos",
        tema: "Vocaciones al servicio de las periferias existenciales",
        cita: "Lc 4,16-21", libro: "Del Evangelio según san Lucas", lectura: "evangelio",
        motivacion: "Jesús comienza su misión anunciando la liberación a los pobres, los cautivos y los oprimidos. Hoy rezamos por quienes dedican su vida a llevar esa buena noticia a las periferias.",
        reflexion: "En la sinagoga de Nazaret, Jesús hace suyas las palabras del profeta: ha sido enviado a los pobres, a los presos, a los ciegos y a los oprimidos. Las periferias de hoy tienen rostros concretos: enfermos, personas privadas de libertad, quienes viven con depresión o sin esperanza. María nos enseña que la fe se demuestra con las manos puestas al servicio.",
        preguntas: [
            "¿Qué acción concreta me pide hoy el Señor por alguien de mi barrio o familia que sufre?",
            "¿Qué buena noticia puedo compartir con quien vive con miedo o desesperanza?"
        ],
        peticiones: [
            "Por la Iglesia, para que salga al encuentro de los más olvidados siguiendo el ejemplo de María.",
            "Por las vocaciones sacerdotales y consagradas, para que lleven esperanza a donde hay soledad y tristeza."
        ]
    },
    {
        fecha: "2026-11-27", semana: 2, misterios: "dolorosos",
        tema: "La mirada de Dios hacia los pequeños",
        cita: "Mc 10,13-16", libro: "Del Evangelio según san Marcos", lectura: "evangelio",
        motivacion: "En una sociedad que valora el éxito y la autosuficiencia, María nos enseña la grandeza de hacerse pequeños y confiar en Dios como un niño confía en sus padres.",
        reflexion: "Los discípulos quieren apartar a los niños, pero Jesús se enoja y los abraza. Hacerse como niño no es ser ingenuo, sino reconocer que todo lo recibimos de Dios y que no podemos salvarnos solos. María se llamó a sí misma «la servidora del Señor»: su grandeza está en esa confianza total.",
        preguntas: [
            "¿En qué situaciones me cuesta reconocer mis límites y confiar en Dios?",
            "¿Qué actitudes de sencillez puedo cultivar en mis relaciones diarias?"
        ],
        peticiones: [
            "Por los niños, especialmente los que sufren abandono o violencia, para que sean protegidos y amados.",
            "Por nosotros, para que demos testimonio de sencillez y autenticidad."
        ]
    },
    {
        fecha: "2026-11-28", semana: 2, misterios: "gozosos",
        tema: "Una mesa para todos: corresponsables en la justicia",
        cita: "Mt 14,15-20", libro: "Del Evangelio según san Mateo", lectura: "evangelio",
        motivacion: "Terminamos la tercera semana contemplando a Jesús que da de comer a una multitud. El milagro empieza con lo poco que los discípulos ponen en sus manos.",
        reflexion: "Los discípulos quieren despedir a la gente; Jesús les dice: «Denles ustedes de comer». Con cinco panes y dos peces, puestos en sus manos, alimenta a todos y sobra. Dios no nos pide lo que no tenemos, sino lo que somos. María, que ofreció toda su vida, nos anima a compartir para que en la mesa de nuestro país haya lugar para todos.",
        preguntas: [
            "¿Qué falta en nuestra sociedad para que las necesidades básicas de todos estén cubiertas?",
            "¿Estoy dispuesto a compartir mis bienes para que otros vivan con dignidad?"
        ],
        peticiones: [
            "Por quienes tienen autoridad, para que promuevan la justicia y nadie carezca de lo necesario.",
            "Por nosotros, para que aprendamos a ser solidarios con los más necesitados."
        ]
    },

    // ---------------- CUARTA SEMANA ----------------
    {
        fecha: "2026-11-29", semana: 3, misterios: "gloriosos",
        tema: "María y el cuidado de sus hijos",
        cita: "Jn 19,25-27", libro: "Del Evangelio según san Juan", lectura: "evangelio",
        motivacion: "Al pie de la cruz, María recibe la misión de ser madre de todos. Hoy contemplamos su cuidado y le pedimos que nos enseñe a cuidarnos unos a otros.",
        reflexion: "En el momento de mayor dolor, Jesús piensa en su madre y en su discípulo, y los confía el uno al otro. Desde entonces, María es madre de quienes buscan consuelo y compañía. Recibirla «en nuestra casa» significa aprender de ella a cuidar la vida, especialmente la más frágil, y a construir una Iglesia y una sociedad donde nadie se sienta desamparado.",
        preguntas: [
            "¿De qué manera estoy cuidando a las personas que Dios ha puesto en mi camino?",
            "¿Siento que María me acoge y me protege?"
        ],
        peticiones: [
            "Por los más débiles de nuestra sociedad, para que nadie se sienta solo ni excluido.",
            "Por Chile, para que bajo la protección de María construyamos una convivencia más justa y fraterna."
        ]
    },
    {
        fecha: "2026-11-30", semana: 3, misterios: "gozosos",
        tema: "Chile, una sola familia bajo el manto de la Virgen del Carmen",
        cita: "1 Re 18,42-45", libro: "Del primer libro de los Reyes", lectura: "otro",
        motivacion: "La Virgen del Carmen está unida al monte Carmelo, donde el profeta Elías rezó por la lluvia en tiempo de sequía. Hoy nos reunimos como una sola familia bajo su manto.",
        reflexion: "Elías ora con perseverancia y envía siete veces a su servidor a mirar el horizonte. Al final aparece una nube pequeña, como la palma de una mano, que anuncia la lluvia. A veces las respuestas de Dios tardan y comienzan casi imperceptibles. La Virgen del Carmen nos enseña a no perder la esperanza y a reconocer esas «pequeñas nubes» de vida en medio de nuestras sequías.",
        preguntas: [
            "¿Qué «pequeñas nubes» o signos de la presencia de Dios puedo reconocer hoy en mi vida?",
            "¿Cómo puedo ser signo de esperanza para quien atraviesa un momento difícil?"
        ],
        peticiones: [
            "Por Chile y por quienes viven sequías espirituales, materiales o afectivas, para que vuelvan a florecer.",
            "Por los niños y niñas del mundo, para que crezcan protegidos y acompañados."
        ]
    },
    {
        fecha: "2026-12-01", semana: 3, misterios: "dolorosos",
        tema: "Corresponsables del Reino: nadie sobra en esta construcción",
        cita: "Mt 13,31-32", libro: "Del Evangelio según san Mateo", lectura: "evangelio",
        motivacion: "En esta cuarta semana sentimos que María nos ha acompañado de cerca. Hoy le pedimos que la semilla de fe sembrada en estos días siga creciendo después del mes.",
        reflexion: "El grano de mostaza es la más pequeña de las semillas, pero crece hasta dar sombra y refugio a los pájaros. Así es el Reino de Dios: comienza en lo pequeño y se desarrolla con paciencia. Muchas personas han sido árbol para nosotros; hoy damos gracias por ellas y nos comprometemos a ser refugio para otros.",
        preguntas: [
            "¿Qué motivos tengo hoy para dar gracias a Dios?",
            "¿A quiénes cuido, y quiénes me cuidan a mí?"
        ],
        peticiones: [
            "Por quienes viven momentos de dificultad, para que su fe no decaiga y confíen en Dios.",
            "Por nuestras vidas, para que sean lugar de acogida y refugio para quien lo necesite."
        ]
    },
    {
        fecha: "2026-12-02", semana: 3, misterios: "gloriosos",
        tema: "El ejercicio del poder como servicio",
        cita: "Mc 10,42-45", libro: "Del Evangelio según san Marcos", lectura: "evangelio",
        motivacion: "Toda autoridad, en la familia, la Iglesia o la sociedad, existe para el bien común. Hoy pedimos a María que quienes ejercen algún poder lo vivan como servicio.",
        reflexion: "Jesús contrapone dos formas de autoridad: la de quienes dominan y la de quienes sirven. Entre sus discípulos, el más grande debe ser el servidor de todos, porque él mismo «no vino a ser servido, sino a servir». Esta palabra vale para todos los que tienen alguna responsabilidad: padres, profesores, pastores, autoridades públicas.",
        preguntas: [
            "En la familia, el trabajo, la Iglesia o la vida pública, ¿cómo ejerzo la autoridad que tengo?",
            "¿Busco reconocimiento, o realizo mi misión con espíritu de servicio?"
        ],
        peticiones: [
            "Por los pastores y agentes pastorales, para que ejerzan su ministerio con humildad y servicio.",
            "Por las autoridades de nuestro país, para que busquen el bien común y la justicia."
        ]
    },
    {
        fecha: "2026-12-03", semana: 3, misterios: "luminosos",
        tema: "Llamados a construir la unidad",
        cita: "Ef 4,1-6", libro: "De la carta de san Pablo a los Efesios", lectura: "otro",
        motivacion: "Hemos recorrido casi todo este mes de la mano de María. Hoy le pedimos que nos ayude a construir la unidad en medio de nuestras diferencias.",
        reflexion: "San Pablo pide a los cristianos vivir con humildad, paciencia y amor para conservar la unidad del Espíritu. La unidad no es uniformidad: se construye desde la diversidad de dones y personas. Las diferencias pueden dividirnos o enriquecernos. María, que caminó con discípulos muy distintos entre sí, nos enseña a valorar lo que cada uno aporta.",
        preguntas: [
            "¿Qué gestos puedo hacer en mi familia, barrio o trabajo para tender puentes?",
            "¿Valoro los dones y carismas de los demás en mi comunidad?"
        ],
        peticiones: [
            "Por los jóvenes de nuestras comunidades, para que se animen a responder a la vocación que Dios les regala.",
            "Por nuestras comunidades, para que acojan la diversidad de dones como riqueza y no como amenaza."
        ]
    },
    {
        fecha: "2026-12-04", semana: 3, misterios: "dolorosos",
        tema: "Sembrar el Chile del mañana",
        cita: "Lc 2,39-40", libro: "Del Evangelio según san Lucas", lectura: "evangelio",
        motivacion: "María y José acompañaron el crecimiento de Jesús en lo cotidiano de Nazaret. Hoy rezamos por las nuevas generaciones y por quienes las educan.",
        reflexion: "El Evangelio resume en una frase años de vida familiar: el niño crecía, se fortalecía y se llenaba de sabiduría. Detrás de ese crecimiento hay paciencia, cariño y ejemplo. En un mundo lleno de voces, las familias y los educadores tienen la tarea hermosa de enseñar a discernir lo bueno. Así se siembra el Chile del mañana.",
        preguntas: [
            "A ejemplo de María y José, ¿cómo podemos acompañar a las nuevas generaciones a crecer en sabiduría?"
        ],
        peticiones: [
            "Por las madres, padres y cuidadores, para que guíen con amor y rectitud a los niños y jóvenes.",
            "Por los educadores, para que acompañen el crecimiento integral de sus estudiantes."
        ]
    },
    {
        fecha: "2026-12-05", semana: 3, misterios: "gozosos",
        tema: "Trabajo digno y salarios justos",
        cita: "Mt 20,1-16", libro: "Del Evangelio según san Mateo", lectura: "evangelio",
        motivacion: "La fe no es ajena a la vida laboral. Hoy rezamos por los trabajadores, por quienes buscan empleo y por la justicia en el mundo del trabajo.",
        reflexion: "El dueño de la viña sale una y otra vez a buscar trabajadores y paga a todos lo necesario para vivir ese día. La parábola habla de la generosidad de Dios, que no calcula como nosotros, y también nos recuerda que el trabajo y el salario están al servicio de la dignidad de la persona y de su familia.",
        preguntas: [
            "¿Considero que mi trabajo es justo? Si tengo personas a mi cargo, ¿les pago lo justo?",
            "¿Me alegro del bien de los demás o me comparo con envidia?"
        ],
        peticiones: [
            "Por cada familia, para que tenga un trabajo y un salario dignos para vivir con tranquilidad.",
            "Por quienes están cesantes, para que pronto encuentren una fuente de trabajo."
        ]
    },

    // ---------------- QUINTA SEMANA ----------------
    {
        fecha: "2026-12-06", semana: 4, misterios: "gloriosos",
        tema: "Vocación al servicio público",
        cita: "Lc 10,30.33-35", libro: "Del Evangelio según san Lucas", lectura: "evangelio",
        motivacion: "El Mes de María está terminando. Hoy pensamos en quienes sirven en lo público y le pedimos a María que su trabajo esté marcado por la compasión y el bien común.",
        reflexion: "El samaritano no pregunta quién es el herido; se detiene, lo cura, lo lleva a un lugar seguro y paga por su cuidado. La compasión verdadera se traduce en acciones concretas y responsables. Quienes ejercen un servicio público están llamados a vivir esta parábola: hacer el bien sin mirar a quién, especialmente a quienes más lo necesitan.",
        preguntas: [
            "¿Me conmuevo ante las dificultades de quienes encuentro en mi camino?",
            "¿Me da miedo detenerme cuando alguien está en problemas?"
        ],
        peticiones: [
            "Por quienes ejercen un servicio público, para que trabajen con honestidad y transparencia.",
            "Por los chilenos, para que cada día seamos más los que nos detenemos ante el dolor de los demás."
        ]
    },
    {
        fecha: "2026-12-07", semana: 4, misterios: "gozosos",
        tema: "Reconstruir el tejido social de nuestras comunidades",
        cita: "Hch 2,42-47", libro: "Del libro de los Hechos de los Apóstoles", lectura: "otro",
        motivacion: "Después de casi un mes caminando con María, miramos a la primera comunidad cristiana, donde ella estaba presente, para aprender a vivir unidos.",
        reflexion: "Los primeros cristianos escuchaban la enseñanza de los apóstoles, compartían el pan y sus bienes, y oraban juntos. Su vida comunitaria era tan atrayente que otros se sumaban cada día. Frente al individualismo y la desconfianza, este relato nos muestra un camino: reunirnos, compartir y responder juntos a las necesidades de todos.",
        preguntas: [
            "¿Qué significa hoy para mí poner en común lo que tengo y lo que soy?",
            "¿Es la Eucaristía un lugar donde alimento mi compromiso con la justicia y la caridad?"
        ],
        peticiones: [
            "Por nuestras comunidades, para que crezcan en la fe acercándose a Jesús como lo hizo María.",
            "Por nuestra sociedad, para que superemos la indiferencia y salgamos al encuentro de los más necesitados."
        ]
    },
    {
        fecha: "2026-12-08", semana: 4, misterios: "gloriosos",
        tema: "María, Reina de Chile",
        cita: "Ap 12,1-2.13-17", libro: "Del libro del Apocalipsis", lectura: "otro",
        celebracion: true,
        motivacion: "Hoy es fiesta: celebramos la Inmaculada Concepción y terminamos el Mes de María. Junto a tantas personas que peregrinan a los santuarios marianos, ponemos bajo su protección todo lo que hemos rezado y vivido en estas semanas.",
        reflexion: "La mujer vestida de sol es signo de la victoria de la vida sobre el mal. La Iglesia ve en ella a María, la nueva Eva, que acompaña a su pueblo en medio de las dificultades. Como Patrona de Chile, María no reina dominando, sino sirviendo e intercediendo por sus hijos. Su protección nos anima a seguir construyendo, después de este mes, un país más fraterno.",
        preguntas: [
            "¿Qué quisiera agradecer a María al terminar este mes dedicado a ella?"
        ],
        peticiones: [
            "Por todos los que habitamos esta tierra, para que bajo el amparo de María derribemos los muros que nos separan.",
            "Por quienes sufren y por los más vulnerables, para que encuentren en nosotros manos solidarias y en María el consuelo de una madre."
        ]
    }
];

// Cantos marianos del folleto (enlaces de sus códigos QR). No se incluyen letras.
const MM_CANTOS = [
    { titulo: "Santa María del Camino", autor: "Juan Antonio Espinosa", url: "https://www.youtube.com/watch?v=maBCcJi-dsU" },
    { titulo: "Madre del silencio", autor: "Luis Hernán Muñoz", url: "https://www.youtube.com/watch?v=5gfbm_8Ag9s" },
    { titulo: "Virgen del Carmen bella", autor: "Tradicional", url: "https://www.youtube.com/watch?v=5pNo_9e3T_U" },
    { titulo: "Venid y vamos todos", autor: "Tradicional", url: "https://www.youtube.com/watch?v=hog_nI1reU0" },
    { titulo: "Madre de los cansados", autor: "Los Perales; letra: Esteban Gumucio ss.cc.", url: "https://www.youtube.com/watch?v=slZg1W5c5aQ" },
    { titulo: "Señora del Camino", autor: "Luis Guillermo Sarasa sj", url: "https://www.youtube.com/watch?v=nlD2snFNUuQ" },
    { titulo: "Maravillas hizo en mí", autor: "", url: "https://www.youtube.com/watch?v=H5ilYlMvLUc" },
    { titulo: "Dios te salve, María", autor: "Pablo Coloma", url: "https://www.youtube.com/watch?v=ebg0L8QnzHw" },
    { titulo: "Alégrate, María", autor: "Hnas. Marianas de Schoenstatt", url: "https://www.youtube.com/watch?v=3dfJHLni8B4" },
    { titulo: "Ven y reina, Madre de Dios", autor: "Jorge Álvarez", url: "https://www.youtube.com/watch?v=FCMcb93Pomc" },
    { titulo: "Auxiliadora de la Iglesia", autor: "", url: "https://www.youtube.com/watch?v=GaodRPw4-vM" },
    { titulo: "Dijiste sí", autor: "La Anunciación y Luispo", url: "https://www.youtube.com/watch?v=IaJHD3LTufY" },
    { titulo: "María, mírame", autor: "", url: "https://www.youtube.com/watch?v=KZpTMZy65y8" },
    { titulo: "Mi alma glorifica (Magníficat)", autor: "", url: "https://www.youtube.com/watch?v=STKnFVUsYUc" },
    { titulo: "Santa María de la esperanza", autor: "", url: "https://www.youtube.com/watch?v=3kBu_keh2XY" },
    { titulo: "La elegida", autor: "", url: "https://www.youtube.com/watch?v=RyNv7NlHBpU" },
    { titulo: "Ave María", autor: "Gen Rosso", url: "https://www.youtube.com/watch?v=Rnejdwzo6NU" }
];

// Oraciones marianas del folleto.
// Las tradicionales (de dominio público) se muestran completas;
// las de autores contemporáneos se indican con su fuente.
const MM_ORACIONES = [
    { titulo: "Oración tradicional de inicio del Mes de María", texto: "inicial" },
    { titulo: "Oración tradicional final del Mes de María", texto: "final" },
    {
        titulo: "Bendita sea tu pureza", autor: "Oración tradicional",
        texto: "Bendita sea tu pureza y eternamente lo sea, pues todo un Dios se recrea en tan graciosa belleza. A ti, celestial princesa, Virgen sagrada María, yo te ofrezco en este día alma, vida y corazón. Mírame con compasión, no me dejes, Madre mía."
    },
    { titulo: "Oración por Chile", autor: "Texto en el folleto del Mes de María 2026" },
    { titulo: "María", autor: "Antonio Rendic · texto en el folleto" },
    { titulo: "Oración a la Virgen María", autor: "San Alberto Hurtado sj · texto en el folleto" },
    { titulo: "Quédate con nosotros", autor: "Oración de las Orientaciones Pastorales · texto en el folleto" },
    { titulo: "A la Virgen", autor: "Gabriela Mistral · texto en el folleto" },
    {
        titulo: "Oración a María, madre de la Iglesia y madre de nuestra fe", autor: "Papa Francisco, encíclica Lumen fidei, n. 60",
        url: "https://www.vatican.va/content/francesco/es/encyclicals/documents/papa-francesco_20130629_enciclica-lumen-fidei.html"
    },
    { titulo: "Oración a Nuestra Señora de la Paz", autor: "Esteban Gumucio ss.cc. · texto en el folleto" }
];

// Celebración de la Solemnidad de la Inmaculada Concepción (8 de diciembre)
// para comunidades que no cuentan con celebración eucarística.
// Estructura según el folleto; moniciones e intenciones de redacción propia.
// Roles: A = Animador, G = Guía, L = Lector, T = Todos.
const MM_CELEBRACION = [
    { tipo: "titulo", texto: "Motivación" },
    { rol: "G", texto: "Durante este mes nos hemos reunido para rezar con María, en el centenario de la coronación de la Virgen del Carmen como Reina y Madre de Chile. Hoy celebramos con alegría a la Inmaculada, la «llena de gracia», preservada de todo pecado. También nosotros, por el bautismo, hemos recibido la gracia de ser hijos e hijas de Dios. Comencemos cantando." },
    { tipo: "titulo", texto: "Canto de entrada", canto: true },
    { tipo: "titulo", texto: "Rito de acogida" },
    { rol: "A", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo." },
    { rol: "T", texto: "Amén." },
    { rol: "A", texto: "Te bendecimos, Padre, porque elegiste a María para ser la madre de tu Hijo y la preservaste de todo pecado desde el primer instante de su vida. En esta fiesta queremos alabarte y darte gracias por medio de Jesucristo, tu Hijo, que vive y reina por los siglos de los siglos." },
    { rol: "T", texto: "Amén." },
    { tipo: "titulo", texto: "Acto penitencial" },
    { rol: "A", texto: "Hermanos y hermanas, la Inmaculada nos muestra la belleza de lo que Dios puede hacer en una vida abierta a su gracia. Reconozcamos con humildad aquello que nos aleja de él, para acoger mejor a Jesús." },
    { rol: "T", texto: "Yo confieso ante Dios todopoderoso y ante ustedes, hermanos, que he pecado mucho de pensamiento, palabra, obra y omisión. Por mi culpa, por mi culpa, por mi gran culpa. Por eso ruego a Santa María, siempre Virgen, a los ángeles, a los santos y a ustedes, hermanos, que intercedan por mí ante Dios, nuestro Señor." },
    { tipo: "nota", texto: "También se puede entonar un canto de perdón." },
    { tipo: "titulo", texto: "Liturgia de la Palabra" },
    { tipo: "subtitulo", texto: "Motivación a la primera lectura" },
    { rol: "G", texto: "Después del primer pecado, Dios no abandona a la humanidad: promete que la descendencia de la mujer vencerá al mal. Escuchemos con atención." },
    { tipo: "lectura", rol: "L", titulo: "Lectura del libro del Génesis", cita: "Gn 3,9-15.20", aclamacion: "otro" },
    { tipo: "subtitulo", texto: "Motivación al salmo" },
    { rol: "G", texto: "La promesa se cumplió en Jesucristo, hijo de María. Respondamos con alegría alabando al Señor." },
    { tipo: "salmo", rol: "L", titulo: "Salmo responsorial", cita: "Sal 98 (97), 1-4",
      respuesta: "Canten al Señor un canto nuevo, porque ha hecho maravillas.",
      estrofas: [
          "Canten al Señor una canción nueva, porque ha hecho maravillas. Su mano derecha y su santo brazo le han dado la victoria.",
          "El Señor ha dado a conocer su salvación; ha revelado su justicia a la vista de las naciones. Se ha acordado de su gran amor y de su fidelidad hacia la familia de Israel.",
          "Todos los rincones de la tierra han visto la salvación de nuestro Dios. ¡Aclamen alegres al Señor, habitantes de toda la tierra! ¡Prorrumpan en gritos de alegría y canten salmos!"
      ] },
    { tipo: "subtitulo", texto: "Motivación a la segunda lectura" },
    { rol: "G", texto: "San Pablo bendice a Dios porque nos eligió en Cristo, desde antes de la creación, para ser santos en el amor." },
    { tipo: "lectura", rol: "L", titulo: "Lectura de la carta de san Pablo a los Efesios", cita: "Ef 1,3-6.11-12", aclamacion: "otro" },
    { tipo: "subtitulo", texto: "Motivación al Evangelio" },
    { rol: "G", texto: "El Evangelio nos lleva a Nazaret, donde una joven recibe la noticia que cambiaría la historia. Nos ponemos de pie para aclamarlo con el Aleluya." },
    { tipo: "titulo", texto: "Aclamación al Evangelio" },
    { rol: "T", texto: "Aleluya, aleluya. Alégrate, María, llena de gracia, el Señor está contigo; bendita tú entre las mujeres. Aleluya." },
    { tipo: "lectura", rol: "A", titulo: "Evangelio de nuestro Señor Jesucristo según san Lucas", cita: "Lc 1,26-38", aclamacion: "evangelio" },
    { tipo: "titulo", texto: "Reflexión" },
    { rol: "A", texto: "Celebramos esta fiesta en pleno Adviento, mientras nos preparamos para recibir al Señor. María, la Inmaculada, no está lejos de nosotros: es hermana en la lucha contra el mal y, sobre todo, madre que nos acompaña. Los invito a compartir brevemente qué les dicen hoy estos textos, o a guardar un momento de silencio." },
    { tipo: "titulo", texto: "Profesión de fe" },
    { rol: "A", texto: "Nos ponemos de pie y proclamamos juntos nuestra fe." },
    { rol: "T", texto: "Creo en Dios, Padre todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén." },
    { tipo: "titulo", texto: "Oración universal" },
    { rol: "A", texto: "Presentemos nuestras súplicas a Dios por intercesión de María Inmaculada, respondiendo: «Ruega al Señor por nosotros»." },
    { rol: "G", texto: "Santa María, joven de Nazaret que acogiste la Palabra con fe:" },
    { rol: "T", texto: "Ruega al Señor por nosotros." },
    { rol: "G", texto: "Madre de Jesús, que lo llevaste en tu seno y en tu corazón:" },
    { rol: "T", texto: "Ruega al Señor por nosotros." },
    { rol: "G", texto: "Bendita entre las mujeres, consuelo de los que sufren:" },
    { rol: "T", texto: "Ruega al Señor por nosotros." },
    { rol: "G", texto: "Reina y Patrona de Chile, mujer vestida de sol:" },
    { rol: "T", texto: "Ruega al Señor por nosotros." },
    { tipo: "nota", texto: "Se puede invitar a los presentes a expresar sus propias intenciones." },
    { tipo: "titulo", texto: "Padre nuestro" },
    { rol: "A", texto: "Unidos a la Virgen María, llena de gracia, digamos juntos la oración que Jesús nos enseñó:" },
    { rol: "T", texto: "Padre nuestro, que estás en el cielo…" },
    { tipo: "titulo", texto: "Saludo de la paz" },
    { rol: "A", texto: "En Cristo, que nos ha hecho hermanos por su cruz, démonos un saludo de paz como signo de reconciliación." },
    { tipo: "titulo", texto: "Liturgia de comunión" },
    { tipo: "nota", texto: "Solo si la celebración se realiza en una capilla u oratorio con la comunión reservada, por un ministro autorizado. De lo contrario, se continúa con la acción de gracias." },
    { rol: "A", texto: "Este es el Cordero de Dios, que quita el pecado del mundo. Dichosos los invitados a la cena del Señor." },
    { rol: "T", texto: "Señor, no soy digno de que entres en mi casa, pero una palabra tuya bastará para sanarme." },
    { tipo: "titulo", texto: "Acción de gracias: el Magníficat" },
    { rol: "A", texto: "Llena del Espíritu Santo, María proclamó la grandeza de Dios. Hagamos nuestro su canto." },
    { tipo: "lectura", rol: "T", titulo: "Cántico de María", cita: "Lc 1,46-55", sinAclamacion: true },
    { tipo: "titulo", texto: "Oración de conclusión" },
    { rol: "A", texto: "Señor, Dios nuestro, que preservaste a la Virgen María de toda mancha de pecado, concédenos, por su intercesión, vivir con un corazón limpio y llegar a ti. Digamos juntos:" },
    { rol: "T", texto: "Dios te salve, María, llena eres de gracia…" },
    { tipo: "titulo", texto: "Envío y bendición" },
    { rol: "A", texto: "Hermanos y hermanas, hemos celebrado a la Inmaculada Concepción. María nos lleva siempre a su Hijo y nos dice: «Hagan lo que él les diga». Que el Señor nos bendiga, nos guarde de todo mal y nos lleve a la vida eterna." },
    { rol: "T", texto: "Amén." },
    { tipo: "titulo", texto: "Canto final a la Virgen", canto: true }
];
