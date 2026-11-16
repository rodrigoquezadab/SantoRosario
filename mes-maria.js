// =====================================================================
// MES DE MARÍA 2026 (8 de noviembre – 8 de diciembre)
// «Madre que acoge, espera y comparte»
// Centenario de la coronación de la Virgen del Carmen, 1926-2026
// Conferencia Episcopal de Chile · Universidad Católica del Norte.
// =====================================================================

const MM_BIBLIA = {
    "Jn 2,1-11": "Tres días después se celebraba una boda en Caná de Galilea; allí estaba la madre de Jesús. También Jesús y sus discípulos estaban invitados a la boda. Se acabó el vino, y la madre de Jesús le dice: —No tienen vino. Jesús le responde: —¿Qué quieres de mí, mujer? Aún no ha llegado mi hora. La madre dice a los que servían: —Hagan lo que él les diga. Había allí seis tinajas de piedra destinadas a los ritos de purificación de los judíos, con una capacidad de setenta a cien litros cada una. Jesús les dice: —Llenen de agua las tinajas. Las llenaron hasta el borde. Les dice: —Ahora saquen un poco y llévenlo al encargado del banquete para que lo pruebe. Se lo llevaron. Cuando el encargado del banquete probó el agua convertida en vino, sin saber de dónde procedía, aunque los servidores que habían sacado el agua lo sabían, se dirige al novio y le dice: —Todo el mundo sirve primero el mejor vino, y cuando los convidados están algo bebidos, saca el peor. Tú, en cambio, has guardado hasta ahora el mejor vino. En Caná de Galilea hizo Jesús esta primera señal, manifestó su gloria y creyeron en él los discípulos. Después bajó a Cafarnaún con su madre, sus hermanos y discípulos, y se detuvo allí varios días.",
    "Jn 2,3-5.11": "Se acabó el vino, y la madre de Jesús le dice: -No tienen vino. Jesús le responde: - ¿Qué quieres de mí, mujer? Aún no ha llegado mi hora. La madre dice a los que servían: -Hagan lo que él les diga. En Caná de Galilea hizo Jesús esta primera señal, manifestó su gloria y creyeron en él los discípulos.",
    "Lc 7,12-16": "Justo cuando se acercaba a la puerta de la ciudad, sacaban a un muerto, hijo único de una viuda; la acompañaba un grupo considerable de vecinos. Al verla, el Señor sintió compasión y le dijo: -No llores. Se acercó, tocó el féretro... Entonces dijo: -Muchacho, yo te lo ordeno, levántate. El muerto se incorporó y empezó a hablar. Jesús se lo entregó a su madre. Todos quedaron sobrecogidos y daban gloria a Dios diciendo: -Un gran profeta ha surgido entre nosotros; Dios se ha ocupado de su pueblo.",
    "Lc 1,39-45.56": "María se levantó y se dirigió a un pueblo de Judea. Entró en casa de Zacarías y saludó a Isabel. Cuando Isabel oyó el saludo la criatura dio un salto en su vientre; Isabel, llena del Espíritu Santo, exclamó: -Bendita tú entre las mujeres y bendito el fruto de tu vientre ¿Quién soy yo para que me visite la madre de mi Señor? María se quedó con ella tres meses.",
    "Mt 26,36-40.45-46": "Entonces Jesús fue con ellos a un lugar llamado Getsemaní y dijo a sus discípulos: Siéntense aquí mientras yo voy allá a orar. Se adelantó un poco y, postrado su rostro en tierra, oró así: -Padre, si es posible, que se aparte de mí esta copa. Pero no se haga mi voluntad, sino la tuya. Volvió donde estaban los discípulos. Los encontró dormidos. Está próxima la hora en que el Hijo del Hombre será entregado... Levántense, vamos.",
    "Lc 10,1-3": "Después de esto designó el Señor a otros setenta y dos y los envió por delante de dos en dos, a todas las ciudades y lugares adonde pensaba ir. Les decía: -La cosecha es abundante, pero los trabajadores son pocos. Rueguen al dueño de los campos que envíe trabajadores para su cosecha. Vayan, que yo los envío como ovejas entre lobos.",
    "Lc 2,4-7": "José subió de Nazaret, ciudad de Galilea, a la Ciudad de David en Judea, llamada Belén -pues pertenecía a la Casa y familia de David-, a inscribirse con María, su esposa, que estaba embarazada. Estando ellos allí, le llegó la hora del parto y dio a luz a su hijo primogénito. Lo envolvió en pañales y lo acostó en un pesebre, porque no habían encontrado sitio en la posada.",
    "Mt 2,13-15": "Un ángel del Señor se apareció en sueños a José y le dijo: -Levántate, toma al niño y a su madre, huye a Egipto y quédate allí hasta que te avise, porque Herodes va a buscar al niño para matarlo. Se levantó, todavía de noche, tomó al niño y a su madre y partió hacia Egipto, donde residió hasta la muerte de Herodes.",
    "Lc 1,26-38": "El sexto mes envió Dios al ángel Gabriel a una ciudad de Galilea llamada Nazaret, a una virgen prometida a un hombre llamado José, de la familia de David; la virgen se llamaba María. Entró el ángel a donde estaba ella y le dijo: —Alégrate, llena de gracia, el Señor está contigo. Al oírlo, ella quedó desconcertada y se preguntaba qué clase de saludo era aquél. El ángel le dijo: —No temas, María, que gozas del favor de Dios. Mira, concebirás y darás a luz un hijo, a quien llamarás Jesús. Será grande, llevará el título de Hijo del Altísimo; el Señor Dios le dará el trono de David, su padre, para que reine sobre la Casa de Jacob por siempre y su reino no tenga fin. María respondió al ángel: — ¿Cómo sucederá eso si no convivo con un hombre? El ángel le respondió: —El Espíritu Santo vendrá sobre ti y el poder del Altísimo te cubrirá con su sombra; por eso, el consagrado que nazca llevará el título de Hijo de Dios. Mira, también tu pariente Isabel ha concebido en su vejez, y la que se consideraba estéril está ya de seis meses. Pues nada es imposible para Dios. Respondió María: —Yo soy la esclava del Señor: que se cumpla en mí tu palabra. El ángel la dejó y se fue.",
    "Lc 1,28-31.34-35.38": "Entró el ángel a donde estaba ella y le dijo: -Alégrate, llena de gracia, el Señor está contigo. Al oírlo, ella quedó desconcertada y se preguntaba qué clase de saludo era aquél. El ángel le dijo: -No temas, María, que gozas del favor de Dios. Mira concebirás y darás a luz un hijo, a quien llamarás Jesús. María respondió al ángel: -¿Cómo sucederá eso si no convivo con un hombre? El ángel le respondió: -El Espíritu Santo vendrá sobre ti y el poder del Altísimo te cubrirá con su sombra. Respondió María: -Yo soy la esclava del Señor: que se cumpla en mí tu palabra.",
    "Lc 2,41-43.45-46.48-51": "Para la fiesta de Pascua iban sus padres todos los años a Jerusalén. Cuando cumplió doce años, subieron a la fiesta según Costumbre. Al terminar ésta, mientras ellos se volvían, el niño Jesús se quedó en Jerusalén, sin que sus padres lo supieran. Al no encontrarlo, regresaron a buscarlo a Jerusalén. Luego de tres días lo encontraron en el templo, sentado en medio de los doctores de la ley, escuchándolos y haciéndoles preguntas. Al verlo, se quedaron desconcertados, y su madre le dijo: -Hijo, ¿por qué nos has hecho esto? Míranos que tu padre Y yo te buscábamos angustiados. Él respondió: -¿Por qué me buscaban? ¿No sabían que yo debo estar en los asuntos de mi Padre? Ellos no entendieron lo que les dijo. Regresó con ellos, fue a Nazaret y siguió bajo su autoridad. Su madre guardaba todas estas cosas en su corazón.",
    "Mt 12,46-50": "Todavía estaba hablando a la multitud, cuando se presentaron su madre y sus hermanos, que estaban afuera, deseosos de hablar con él, Uno le dijo: -Mira, tu madre y tus hermanos están afuera y desean hablar contigo. Él contestó al que se lo decía: -¿Quién es mi madre? ¿Quiénes son mis hermanos? Y señalando con la mano a sus discípulos, dijo: -¡Ahí están mi madre y mis hermanos! Cualquiera que haga la voluntad de mi Padre del cielo, ése es mi hermano, mi hermana y mi madre.",
    "Mc 10,46-52": "Llegaron a Jericó. Y cuando salía de allí con sus discípulos y un gentío considerable, Bartimeo, hijo de Timeo, un mendigo ciego, estaba sentado al costado del camino. Al oír que era Jesús de Nazaret se puso a gritar: ¡Jesús, Hijo de David, compadécete de mi! Muchos lo reprendían para que se callase, Pero él gritaba más fuerte: Hijo de David, compadécete de mí! Jesús se detuvo y dijo: -Llámenlo. Llamaron al ciego diciéndole: -¡Ánimo, levántate, que te llama! El dejó el manto, se puso en pie y se acercó a Jesús. Jesús le preguntó: -¿Qué quieres de mí? Contestó el ciego: - Maestro, que recobre la vista. Jesús le dijo: Vete tu fe te ha salvado.",
    "1 Sam 3,3-5.7-10": "El Señor llamó: -¡Samuel, Samuel! Y este respondió: -Aquí estoy; vengo porque me has llamado. Elí respondió: -No te he llamado, vuelve a acostarte. Samuel no conocía todavía al Señor. Elí comprendió entonces, que era el Señor quien llamaba al niño y le dijo: -Si te llama alguien dices: -Habla, Señor, que tu servidor escucha. El Señor se presentó y lo llamó como antes. Samuel respondió: -Habla, que tu servidor escucha.",
    "Mt 18,21-22": "Entonces se acercó Pedro y le preguntó: - Señor, si mi hermano me ofende, ¿cuántas veces tengo que perdonarle? ¿Hasta siete veces?. Le contestó Jesús: -No te digo hasta siete veces, sino hasta setenta veces siete.",
    "Jn 21,15-17": "Cuando terminaron de comer, dice Jesús a Simón Pedro: -Simón hijo de Juan, ¿me quieres más que éstos? Él le responde: -Sí, Señor, tú sabes que te quiero. Jesús le dice: -Apacienta mis corderos. Le pregunta por segunda vez: -Simón hijo de Juan, ¿me quieres? El le responde: -Sí, Señor, tú sabes que te quiero. Jesús le dice: -Apacienta mis ovejas. Por tercera vez le pregunta: -Simón hijo de Juan, ¿me quieres? Pedro se entristeció de que le preguntara por tercera vez si lo quería y le dijo: -Señor, tú lo sabes todo, tú sabes que te quiero. Jesús le dice: -Apacienta mis ovejas.",
    "Lc 1,46-55": "María dijo: Mi alma canta la grandeza del Señor, mi espíritu festeja a Dios mi salvador, porque se ha fijado en la humillación de su esclava y en adelante me felicitarán todas las generaciones. Porque el Poderoso ha hecho grandes cosas por mí, su nombre es santo. Su misericordia con sus fieles se extiende de generación en generación. Despliega la fuerza de su brazo, dispersa a los soberbios en sus planes, derriba del trono a los poderosos y eleva a los humildes, colma de bienes a los hambrientos y despide vacíos a los ricos. Socorre a Israel, su siervo, recordando la lealtad, prometida a nuestros antepasados, en favor de Abrahán y su descendencia para siempre.",
    "Lc 1,41-47": "Cuando Isabel oyó el saludo de María, la criatura dio un salto en su vientre; Isabel llena de Espíritu Santo, exclamó con voz fuerte: -Bendita tú entre las mujeres y bendito el fruto de tu vientre. ¿Quién soy yo para que me visite la madre de mi Señor? Mira, en cuanto tu saludo llegó a mis oídos, la criatura dio un salto de gozo en mi vientre. ¡Dichosa tú que creíste! Porque se cumplirá lo que el Señor te anunció. María dijo: ‘Mi alma canta la grandeza del Señor, mi espíritu festeja a Dios mi salvador’.",
    "Lc 1,46-50": "Cuando Isabel oyó el saludo de María, la criatura dio un salto en su vientre; Isabel llena de Espíritu Santo, exclamó con voz fuerte: -Bendita tú entre las mujeres y bendito el fruto de tu vientre. ¿Quién soy yo para que me visite la madre de mi Señor? Mira, en cuanto tu saludo llegó a mis oídos, la criatura dio un salto de gozo en mi vientre. ¡Dichosa tú que creíste! Porque se cumplirá lo que el Señor te anunció. María dijo: ‘Mi alma canta la grandeza del Señor, mi espíritu festeja a Dios mi salvador’.",
    "Lc 1,46-53": "Mi alma canta la grandeza del Señor, mi espíritu festeja a Dios mi salvador, porque se ha fijado en la humillación de su esclava y en adelante me felicitarán todas las generaciones. Porque el Poderoso ha hecho grandes cosas por mí su nombre es santo. Su misericordia con sus fieles se extiende de generación en generación.",
    "Lc 1,50-53": "Su misericordia con sus fieles se extiende de generación en generación. Despliega la fuerza de su brazo, dispersa a los soberbios en sus planes, derriba del trono a los poderosos y eleva a los humildes, colma de bienes a los hambrientos y despide vacíos a los ricos.",
    "Lc 1,46-47.54-55": "Mi alma canta la grandeza del Señor mi espíritu festeja a Dios mi salvador. Socorre a Israel, su siervo, recordando la lealtad, prometida a nuestros antepasados, en favor de Abrahán y su descendencia para siempre.",
    "Lc 4,16-21": "Fue a Nazaret, donde se había criado, y según su costumbre entró un sábado en la sinagoga y se puso en pie para hacer la lectura. Le entregaron el libro del profeta Isaías. Lo abrió y encontró el texto que dice: El Espíritu del Señor está sobre mí, porque él me ha ungido para que dé la Buena Noticia a los pobres; me ha enviado a anunciar la libertad a los cautivos y la vista a los ciegos, para poner en libertad a los oprimidos, para proclamar el año de gracia del Señor, Lo cerró, se lo entregó al ayudante y se sentó. Toda la sinagoga tenía los ojos fijos en él. El empezó diciéndoles: -Hoy, en presencia de ustedes, se ha cumplido este pasaje de la Escritura.",
    "Mc 10,13-16": "Le traían niños para que los bendijera, y los discípulos los reprendían. Jesús, al verlo, se enojó y dijo: -Dejen que los niños se acerquen a mí; no se lo impidan, porque el reino de Dios pertenece a los que son como ellos. Les aseguro, el que no reciba el reino de Dios como un niño, no entrará en él. Y los acariciaba y bendecía imponiendo las manos sobre ellos.",
    "Mt 14,15-20": "Al atardecer los discípulos fueron a decirle: -El lugar está despoblado y ya es tarde; despide a la multitud para que vayan a los pueblos a comprar algo de comer. Jesús les respondió: -No hace falta que vayan; denle ustedes de comer. Respondieron: -Aquí no tenemos más que cinco panes y dos pescados. El les dijo: -Tráiganlos. Después mandó a la multitud sentarse en la hierba, tomó los cinco panes y los dos pescados, alzó la vista al cielo, dio gracias, partió el pan y se lo dio a sus discípulos; ellos se lo dieron a la multitud. Comieron todos, quedaron satisfechos, recogieron las sobras y llenaron doce canastos.",
    "Jn 19,25-27": "Junto a la cruz de Jesús estaban su madre, la hermana de su madre, María de Cleofás y María Magdalena. Jesús, viendo a su madre y al lado al discípulo amado, dice a su madre: —Mujer, ahí tienes a tu hijo. Después dice al discípulo: —Ahí tienes a tu madre. Y desde aquel momento el discípulo se la llevó a su casa.",
    "1 Re 18,42-45": "Mientras Elías subía a la cima del Carmelo ordenó a su criado: -Sube a mirar el mar. El criado subió, miró y dijo: -No se ve nada, Elías ordenó: -Vuelve otra vez. El criado volvió siete veces, y a la séptima dijo: -Sube del mar una nubecilla como la palma de una mano. En un instante se encapotó el cielo con nubes empujadas por el viento y empezó una fuerte lluvia.",
    "Mt 13,31-32": "Les contó otra parábola: -El reino de los cielos se parece a una semilla de mostaza que un hombre toma y siembra en su campo. Es más pequeña que las demás semillas; pero, cuando crece es más alta que otras hortalizas; se hace un árbol, vienen las aves del cielo y anidan en sus ramas.",
    "Mc 10,42-45": "Pero Jesús los llamó y les dijo: Saben que entre los paganos los que son tenidos por gobernantes dominan a las naciones como si fueran sus dueños y los poderosos imponen su autoridad. No será así entre ustedes; más bien, quien entre ustedes quiera llegar a ser grande que se haga servidor de los demás; y quien quiera ser el primero que se haga sirviente de todos. Porque el Hijo del Hombre no vino a ser servido, sino a servir y a dar su vida como rescate por muchos.",
    "Ef 4,1-6": "Yo el prisionero por el Señor, los exhorto a vivir de acuerdo con la vocación que han recibido. Sean humildes y amables, tengan paciencia y sopórtense unos a otros con amor, esfuércense por mantener la unidad del espíritu con el vínculo de la paz. Uno es el cuerpo, uno el Espíritu, como una es la esperanza a que han sido llamados, un solo Señor, una sola fe, un solo bautismo, uno es Dios, Padre de todos, que está sobre todos, entre todos, en todos.",
    "Lc 2,39-40": "Cumplidos todos los preceptos de la ley del Señor, se volvieron a Galilea, a su ciudad de Nazaret. El niño crecía y se fortalecía, llenándose de sabiduría; y el favor de Dios lo acompañaba.",
    "Mt 20,1-16": "El reino de los cielos se parece a un hacendado que salió de mañana a contratar trabajadores para su viña. Cerró trato con ellos en un denario al día y los envió a su viña. Volvió a salir a media mañana... Volvió a salir a mediodía y a media tarde e hizo lo mismo... Al anochecer, el dueño de la viña dijo al capataz: Reúne a los trabajadores y págales su jornal, empezando por los últimos y acabando por los primeros. Pasaron los del atardecer y recibieron un denario. Cuando llegaron los primeros, esperaban recibir más; pero también ellos recibieron la misma paga. Al recibirlo, se quejaron contra el hacendado: Estos últimos han trabajado una hora y les has pagado igual que a nosotros, que hemos soportado la fatiga y el calor del día. El contestó a uno de ellos: Amigo, no estoy siendo injusto; ¿no habíamos cerrado trato en un denario? Entonces toma lo tuyo y vete. Que yo quiero dar al último lo mismo que a ti. ¿O no puedo yo disponer de mis bienes como me parezca? ¿Por qué tomas a mal que yo sea generoso? Así los últimos serán los primeros y los primeros serán los últimos.",
    "Gn 3,9-15.20": "Después que el hombre y la mujer comieron del árbol que Dios les había prohibido, el Señor Dios llamó al hombre y le dijo: “¿Dónde estás?”. “Oí tus pasos por el jardín”, respondió él, “y tuve miedo porque estaba desnudo. Por eso me escondí”. Él replicó: “¿Y quién te dijo que estabas desnudo? ¿Acaso has comido del árbol que yo te prohibí?”. El hombre respondió: “La mujer que pusiste a mi lado me dio el fruto y yo comí de él”. El Señor Dios dijo a la mujer: “¿Cómo hiciste semejante cosa?”. La mujer respondió: “La serpiente me sedujo y comí”. Y el Señor Dios dijo a la serpiente: “Por haber hecho esto, maldita seas entre todos los animales domésticos y entre todos los animales del campo. Te arrastrarás sobre tu vientre, y comerás polvo todos los días de tu vida. Pondré enemistad entre ti y la mujer, entre tu descendencia y la suya. Él te aplastará la cabeza y tú le acecharás el talón”. El hombre dio a su mujer el nombre de Eva, por ser ella la madre de todos los vivientes.",
    "Lc 10,30.33-35": "Un hombre bajaba de Jerusalén a Jericó. Tropezó con unos asaltantes que lo desnudaron, lo hirieron y se fueron dejándolo medio muerto. Un samaritano que iba de camino llegó adonde estaba, lo vio y se compadeció... montándolo en su cabalgadura, lo condujo a una posada y lo cuidó. Al día siguiente sacó dos monedas, se las dio al dueño de la posada y le encargó: Cuida de él, y lo que gastes de más te lo pagaré a la vuelta.",
    "Hch 2,42-47": "Se reunían frecuentemente para escuchar la enseñanza de los apóstoles, y participar en la vida común, en la fracción del pan y en las oraciones. Ante los prodigios y señales que hacían los apóstoles, un sentido de reverencia se apoderó de todos. Los creyentes estaban todos unidos y poseían todo en común. Vendían bienes y posesiones y las repartían según la necesidad de cada uno. A diario acudían fielmente e íntimamente unidos al templo; en sus casas partían el pan, compartían la comida con alegría y sencillez sincera. Alababan a Dios y todo el mundo los estimaba. El Señor iba incorporando a la comunidad a cuantos se iban salvando.",
    "Ap 12,1-2.13-17": "Una gran señal apareció en el cielo: una mujer revestida del sol, la luna bajo los pies y en la cabeza una corona de doce estrellas. Estaba encinta y gritaba de dolor en el trance del parto (...) Cuando vio el dragón que había sido arrojado en tierra, persiguió a la mujer que había dado a luz al varón. A la mujer le dieron las dos alas del águila gigante, para que volase a su puesto en el desierto, donde la sustentarán un año y dos años y medio año, lejos de la serpiente. La serpiente echó por la boca agua como un río detrás de la mujer, para arrastrarla en la corriente. Pero la tierra auxilió a la mujer abriendo la boca y bebiendo el río que había echado por la boca el dragón. Enfurecido el dragón con la mujer, se alejó a pelear con el resto de sus descendientes, los que cumplen los preceptos de Dios y conservan el testimonio de Jesús.",
    "Ef 1,3-6.11-12": "Bendito sea Dios, el Padre de nuestro Señor Jesucristo, que nos ha bendecido en Cristo con toda clase de bienes espirituales en el cielo, y nos ha elegido en Él, antes de la creación del mundo, para que fuéramos santos e irreprochables en su presencia por el amor. Él nos predestinó a ser sus hijos adoptivos por medio de Jesucristo, conforme al beneplácito de su voluntad, para alabanza de la gloria de su gracia, que nos dio en su Hijo muy querido. En Él, nosotros, los que hemos puesto nuestra esperanza en Él, hemos sido constituidos herederos y destinados de antemano, para ser alabanza de su gloria, según el previo designio del que realiza todas las cosas conforme a su voluntad."
};

const MM_ACLAMACION = {
    evangelio: ["Palabra del Señor.", "Gloria a ti, Señor Jesús."],
    otro: ["Palabra de Dios.", "Te alabamos, Señor."]
};

const MM_SEMANAS = [
    {
        "titulo": "Primera semana",
        "lema": "María nos invita a escuchar la realidad",
        "texto": {
            "titulo": "Las bodas de Caná",
            "cita": "Jn 2,1-11"
        },
        "motivacion": "En esta primera semana del Mes de María, el relato de las bodas de Caná nos invita a mirar con el corazón las necesidades de nuestro entorno. Recordemos que allí, la atenta intercesión de María no solo resolvió una falta material, sino que adelantó la obra de Jesús para devolver la alegría a la fiesta. Así como la Virgen tomó la iniciativa frente a aquella carencia, hoy ella nos llama a escuchar y acompañar el dolor de nuestro pueblo. Siguiendo su ejemplo, pidámosle la fuerza para ser una comunidad atenta: que sepa brindar cercanía a las personas con alguna enfermedad o fragilidad y a quienes les cuidan, que busquemos maneras de visibilizar a quienes viven en situación de calle, y que acojamos con más cariño a los migrantes en nuestro país."
    },
    {
        "titulo": "Segunda semana",
        "lema": "María nos ayuda a acoger la voluntad de Dios",
        "texto": {
            "titulo": "La Anunciación",
            "cita": "Lc 1,26-38"
        },
        "motivacion": "Esta semana, María nos invita a escuchar la voz de Dios, tal como ella lo hizo cuando recibió el mensaje del ángel en Nazaret. Ella nos enseña a confiar y a decirle que “sí” al Señor en las cosas sencillas de cada día y también en las que a veces nos desconciertan. Queremos superar las tensiones de nuestra sociedad para dialogar con paciencia y sanar las divisiones en nuestras comunidades. Nos comprometemos a ser una Iglesia acogedora, donde los jóvenes descubran la alegría de servir a los demás. Con la seguridad de que nada es imposible para Dios, pedimos perdón por nuestras faltas y nos disponemos a trabajar juntos para reconstruir la paz y la confianza en nuestro Chile."
    },
    {
        "titulo": "Tercera semana",
        "lema": "El cántico de María que reconstruye la esperanza de nuestro Pueblo",
        "texto": {
            "titulo": "El Magníficat",
            "cita": "Lc 1,46-55"
        },
        "motivacion": "El cántico del Magníficat es la expresión más excelsa para proclamar la grandeza de Dios y es una profunda oración de confianza y gratitud. Confiados y llenos de esperanza queremos cantar con ella las maravillas de Dios en la historia y en nuestras historias."
    },
    {
        "titulo": "Cuarta semana",
        "lema": "María Patrona de Chile, nos llama a la corresponsabilidad en la construcción del Reino",
        "texto": {
            "titulo": "María a los pies de la cruz",
            "cita": "Jn 19,25-27"
        },
        "motivacion": "En esta cuarta semana del Mes de María, el Evangelio de Juan que presenta a María al pie de la cruz, será el texto inspirador que guiará nuestra reflexión (Jn 19, 25-27). En medio del dolor, ella permanece fiel y presente. No huye de la tragedia, sino que acompaña con amor y esperanza. En ese momento, el más dramático de la vida de Jesús, Él tiene un gesto de preocupación filial, Jesús regala a María la misión de ser Madre de la Iglesia naciente al decirle: “Mujer, ahí tienes a tu hijo”; y confía al discípulo amado a su amparo maternal: “Ahí tienes a tu madre”. Con estas palabras, Jesús nos entrega a María como madre de todos. Desde la cruz nace una nueva humanidad y fraternidad en torno a su madre donde nadie queda fuera.\\nMaría, es la madre que nos enseña a acoger, cuidar e integrar a todos, especialmente a quienes se sienten excluidos o invisibles en nuestra sociedad. Hoy, su ejemplo nos interpela profundamente. Nos llama a construir un mundo más inclusivo, donde cada persona tenga un lugar, sea respetada en su dignidad y pueda desarrollarse plenamente. La inclusión y la integración son compromisos concretos que debemos vivir en nuestra realidad cotidiana: la escuela, la familia, el trabajo y la comunidad. Cada uno de nosotros tiene algo único que aportar. Es así como desde nuestra vocación, talentos y trabajo, colaboramos en la construcción del Reino de Dios. No importa cuán grande o pequeña parezca nuestra tarea; toda acción hecha con amor suma y contribuye a un mundo más justo, fraterno y solidario."
    },
    {
        "titulo": "Quinta semana",
        "lema": "María Reina de Chile camina entre el pueblo",
        "texto": {
            "titulo": "La promesa del Mesías",
            "cita": "Gn 3,9-15.20"
        },
        "motivacion": "Hemos llegado a la última semana del Mes de María, un tiempo de gracia en el que hemos querido conmemorar de manera especial los cien años de la coronación de la Virgen del Carmen. A lo largo de estos días de encuentro y oración, nos hemos dispuesto para celebrar la solemnidad de la Inmaculada Concepción, dogma proclamado por el Papa Pío IX el 8 de diciembre de 1854. Esta verdad de fe subraya cómo Dios preservó a María del pecado desde su concepción, afirmando con fuerza que ella es la «llena de gracia». Con su «sí», María nos abrió el camino para que el Espíritu Santo engendre verdaderos discípulos y discípulas de Cristo.\\nAl concluir este itinerario, encomendemos nuestra patria a la intercesión de María. Durante este mes han salido al encuentro los rostros de tantos hermanos y hermanas que atraviesan situaciones de vulnerabilidad: los enfermos y sus cuidadores, los migrantes, las personas mayores que viven en soledad, quienes sufren por la cesantía, las víctimas del flagelo de las adicciones y los jóvenes que buscan con dificultad un sentido para sus vidas. Sin embargo, también han resplandecido rostros de esperanza en cada una de las comunidades que se han reunido a orar por la Iglesia, las vocaciones, las familias y las autoridades de nuestro país.\\nQue la finalización de este mes nos impulse a cultivar, de la mano de María, un amor cada vez más profundo a Dios y a nuestros hermanos."
    }
];

const MM_DIAS = [
    {
        "fecha": "2026-11-08",
        "semana": 0,
        "misterios": "gloriosos",
        "tema": "María está atenta a las necesidades de nuestro pueblo",
        "cita": "Jn 2,3-5.11",
        "libro": "Del Evangelio de San Juan",
        "lectura": "evangelio",
        "motivacion": "Al comienzo de este Mes de María, queremos ponernos en camino junto a nuestra madre. María nos ayuda a estar atentos a la realidad, como en las bodas de Caná. Hoy, la mirada se vuelve hacia las carencias de nuestro entorno, a los desafíos actuales de la inmigración, a la vulnerabilidad y a los distintos rostros de pobreza.",
        "reflexion": "Hoy nos reunimos por primera vez en este Mes de María 2026. Lo hacemos desde el texto de las bodas de Caná. El relato representa la preocupación de María frente a una necesidad. María actúa como intercesora de la necesidad humana cuando le comenta a su hijo que “no tienen vino”. Ella expone con claridad la carencia de los esposos, sin imponer, confiando y mostrando un modo de acudir a Dios para obtener lo solicitado. De la misma manera, le pedimos hoy a María que exponga con claridad las necesidades de tantos inmigrantes, personas vulneradas y tantas formas de pobreza que hay en nuestro país y en el mundo.",
        "preguntas": [
            "Mirando a nuestra familia, país, ciudad, nuestro barrio, nuestra comunidad eclesial: ¿cuáles son las necesidades o carencias urgentes de aquellas personas más desvalidas?",
            "¿Qué necesidad me gustaría colocar como María delante de Jesús?"
        ],
        "peticiones": [
            "María, tú que estás atenta a las necesidades de nuestro pueblo, te pedimos por todas las necesidades de nuestras familias: esposos, niños, jóvenes, adultos mayores y aquellos que componen nuestro hogar.",
            "María, tú que estás atenta a las necesidades de nuestro pueblo, te pedimos por los inmigrantes, por las personas más vulnerables y por todas y todos aquellos que viven menoscabo en su dignidad como persona."
        ]
    },
    {
        "fecha": "2026-11-09",
        "semana": 0,
        "misterios": "gozosos",
        "tema": "María nos acompaña en el dolor",
        "cita": "Lc 7,12-16",
        "libro": "Del Evangelio de San Lucas",
        "lectura": "evangelio",
        "motivacion": "El mes de María queremos vivirlo en comunidad, así como en nuestros espacios familiares y laborales, para aprender de nuestra Madre su empatía y pedir la gracia de Dios, de acompañar el dolor y el sin sentido de las personas. Queremos compartir con ellas nuestra fe pues, desde el Evangelio, podemos aportar mucho a nuestro país: nuestras convicciones, actitudes, opciones y el cuidado de la vida.",
        "reflexion": "Hoy nos acercamos a esta palabra, dejémonos sorprender por la delicadeza de Jesús que no pasa de largo ante el dolor pues sabe intuir lo hondo del sufrimiento de esa madre viuda que, aunque va acompañada por muchos, no encuentra paz ni sentido a su pérdida. Vivamos al modo de Jesús, que no minimiza el dolor, sino que lo reconoce y acoge. Ante el dolor de la pasión, María supo permanecer de pie ante el sufrimiento de su hijo en la cruz y hoy nos sigue enseñando a no temer al dolor propio o de los otros. Aprendamos de María a estar de pie ante las cruces de hoy y saber ofrecer una palabra de aliento, no desde la teoría, sino desde una fe probada y forjada en las circunstancias de la propia experiencia.",
        "preguntas": [
            "En nuestro entorno ¿he percibido personas en situaciones de dolor o sin sentido, he buscado acercarme a ellas?",
            "¿Siento que soy yo quien necesita la mano de María ante mis angustias, dolores y preocupaciones?"
        ],
        "peticiones": [
            "María, tú que supiste estar al pie de la Cruz, enséñanos a acercarnos a las personas que no encuentran paz ni consuelo en su dolor, para que puedan experimentar a través de nosotros el amor misericordioso y compasivo de Dios.",
            "Señor Jesús que conoces lo hondo del corazón humano, te pedimos por los que sufren y se encuentran vacíos y sin sentido, que este mes pueda ser una ocasión para encontrar en María compañía y apoyo para sobrellevar su dolor."
        ]
    },
    {
        "fecha": "2026-11-10",
        "semana": 0,
        "misterios": "dolorosos",
        "tema": "Personas con alguna enfermedad y sus cuidadores",
        "cita": "Lc 1,39-45.56",
        "libro": "Del Evangelio de San Lucas",
        "lectura": "evangelio",
        "motivacion": "María nos inspira y enseña a servir a los hermanos con prontitud cuando tienen una necesidad. Su decisión de quedarse tres meses con su prima Isabel nos enseña a acompañar con fidelidad en el día a día. Al servir, permitimos que el Espíritu Santo convierta nuestra presencia en una bendición para los demás.",
        "reflexion": "En un mundo que olvida a menudo a los débiles, el cuidado devuelve la dignidad a cada persona. Aunque no haya cura médica, nuestra compañía siempre ofrece esperanza. La regla es clara: nunca debemos dejar de cuidar y acompañar. Es necesario que todos apoyemos a quienes dedican su vida a cuidar al prójimo, porque el desgaste es alto y cuidar a quienes cuidan es un acto elemental de justicia y amor fraterno. Unidos podemos generar un ambiente que ayude a vivir con dignidad tanto a la persona enferma como a su cuidador. Al sostener al que cuida, nos aseguramos de que nadie se agote en su entrega. Así, cada gesto de ayuda se convierte en un puente para unir de nuevo a nuestras comunidades y sociedad.",
        "preguntas": [
            "Ante el dolor de quien está a mi lado, ¿Qué me resulta difícil dejar para acompañar de verdad al otro en su dolor, más allá de una visita o ayuda pasajera?",
            "¿Cuido a alguien y me siento desgastado? ¿Conozco a alguien en esa situación al cual nuestra comunidad podría ayudar?"
        ],
        "peticiones": [
            "Por los enfermos y necesitados, para que reciban siempre una compañía adecuada que defienda su dignidad frente a una cultura del descarte. Pedimos no ignorar el dolor ajeno y recordar que siempre debemos cuidar y acompañar, tanto al enfermo como a su cuidador.",
            "Por los cuidadores, familiares y voluntarios, para que, a ejemplo de María, sean signos de afecto y compañía fiel de Dios. Rogamos por nosotros para que seamos capaces de crear redes de apoyo permanente que reconozcan que quien cuida también necesita ser sostenido, para que su vocación no se transforme en una carga insoportable."
        ]
    },
    {
        "fecha": "2026-11-11",
        "semana": 0,
        "misterios": "gloriosos",
        "tema": "Personas que viven en situación de soledad",
        "cita": "Mt 26,36-40.45-46",
        "libro": "Del Evangelio de San Mateo",
        "lectura": "evangelio",
        "motivacion": "En esta primera semana nos queremos acercar con los ojos de María a situaciones que duelen en silencio y que están muchas veces invisibilizadas. En muchos casos se resienten cuando el ruido se apaga. Hoy concretamente recordamos a las personas que viven en situación de soledad: personas mayores; jóvenes que están lejos de casa; padres ausentes a causa de sus trabajos muy demandantes; migrantes que han tenido que abandonar su red de apoyo para buscar un mejor futuro o mujeres, jefas de hogar, que solas mantienen su núcleo familiar,",
        "reflexion": "Este relato tomado de la oración en Getsemaní nos acerca a Jesucristo, Dios y hombre verdadero, que asume hasta el fondo nuestra condición humana. Jesús experimenta la soledad aunque tenga compañía, porque los que están a su lado no comprenden ni su corazón ni su misión, porque no acaban de entender la densidad extrema del momento. Sus discípulos, los más cercanos, no supieron comprender la soledad interior que proviene del sentirse impotente, vulnerable ante la injusticia y la traición. Jesús cae de rodillas para suplicar a su Abbá Padre, y en medio de esa experiencia, en donde parece que hasta Dios hace silencio, su corazón posiblemente vuelve a refugiarse en el rostro de María su madre, ella que está al pie de la cruz testimoniando un amor sincero hecho presencia y la fidelidad de Dios. Es aquí que el “Hágase tu voluntad” llega al extremo de la confianza y abandono.",
        "preguntas": [
            "¿Reconocemos en nuestro entorno gestos o palabras que piden compañía en medio de tantas soledades?",
            "¿Qué significa para mí hoy “hágase tu voluntad”? ¿qué debo depositar en las manos de Dios con confianza?"
        ],
        "peticiones": [
            "Señor, tú que nos diste a María como Madre nuestra, te pedimos que como ella sepamos ser presencia del amor misericordioso de Dios Padre para los que experimentan la soledad.",
            "María, tú que entiendes la soledad del corazón de las personas, te pedimos que nos enseñes a salir al encuentro de los jóvenes y adultos que viven en situación de soledad."
        ]
    },
    {
        "fecha": "2026-11-12",
        "semana": 0,
        "misterios": "luminosos",
        "tema": "Con María pedimos al Señor que envíe obreros a su mies",
        "cita": "Lc 10,1-3",
        "libro": "Del Evangelio de San Lucas",
        "lectura": "evangelio",
        "motivacion": "María nos sigue inspirando a mirar la realidad atentos a las necesidades de los demás y empáticos ante el sufrimiento de nuestros prójimos. Jesús, en la reflexión de hoy, nos hace una invitación: “¡Pónganse en camino\" un llamado a vivir nuestra vocación respondiendo a las necesidades del mundo. Qué grande es Dios al regalarnos una Madre que acompaña y alienta nuestro camino vocacional.",
        "reflexion": "En este quinto día nos reunimos para dar gracias por la abundancia de la cosecha. Jesús nos recuerda una realidad que sigue vigente: “La cosecha es abundante, pero los trabajadores son pocos”. Por eso, Jesús nos invita a “rogar”, recordándonos que toda vocación es un don. En segundo lugar, nos convoca a ponernos en camino con generosidad. Todos somos llamados. Sabemos que muchas veces nos habitan miedos, dudas e incertidumbres, porque nos reconocemos vulnerables. Hoy acudimos a María, nuestra Madre, para que fortalezca la fe y acompañe a niños, jóvenes y adultos en el descubrimiento de su vocación, ya sea a la vida consagrada, al matrimonio o al servicio de la sociedad desde sus profesiones y talentos puestos al servicio del Reino de Dios.",
        "preguntas": [
            "Pensando en nuestros niños y jóvenes cercanos, ¿cuáles son los miedos, inseguridades o desesperanzas que hoy pueden estar impidiendo que piensen la vida como una vocación de servicio?",
            "Considerando mis dones, habilidades, talentos y la vocación a la que Dios me llama, ¿de qué manera puedo ponerme al servicio de la Iglesia y de los demás?"
        ],
        "peticiones": [
            "María, tú que aceptaste con amor el llamado de Dios y viviste plenamente tu vocación como Madre de Jesús y Madre nuestra, te pedimos por todas y todos quienes sienten el llamado a servir a la Iglesia y a las necesidades del mundo.",
            "María, tú que conoces nuestra comunidad y sus necesidades, intercede para que Dios envíe “obreros” capaces de reconocer las esperanzas y el dolor de tu pueblo. Acrecienta también la fe y la vocación de quienes ya trabajan por construir el Reino de Dios."
        ]
    },
    {
        "fecha": "2026-11-13",
        "semana": 0,
        "misterios": "dolorosos",
        "tema": "Personas en situación de pobreza y vulnerabilidad",
        "cita": "Lc 2,4-7",
        "libro": "Del Evangelio de San Lucas",
        "lectura": "evangelio",
        "motivacion": "María, madre de la dulce espera, acompaña y guía a los peregrinos para que puedan encontrar siempre un lugar donde cobijar sus anhelos, esperanzas y sufrimientos. Así, como recibiste y acurrucaste a tu Hijo, consuélanos en nuestras pobrezas espirituales y materiales.",
        "reflexion": "El viaje de José y María hacia Belén nos sitúa en nuestra permanente búsqueda de nuevos rumbos y, a través de ellos, la mejora de las propias expectativas de vida. En este pequeño Belén, se cumplen las profecías y nace Jesús, envuelto en el amor de sus padres. Con esta imagen de la Sagrada Familia, cobijada en la sencillez de un pesebre, pensemos en todos aquellos que caminan por la vida buscando un hogar, un lugar donde sentirse queridos y acompañados: los que se aferran a la esperanza de tiempos mejores y a los que viajan soñando con oportunidades dejando muchas veces atrás a sus propias familias. Pongamos en manos de María Madre, todos estos rostros sufrientes y vulnerables, para que ella en su ternura y amor los envuelva y arrope, acercándolos a su Hijo Jesús.",
        "preguntas": [
            "¿Soy capaz de percibir las situaciones de abandono material, vulnerabilidad y pobreza que hay en mi entorno inmediato?",
            "Frente a esta realidad desigual ¿actúo como María y doy una señal clara de esperanza espiritual y material frente a los más abandonados y abatidos?"
        ],
        "peticiones": [
            "María, Madre de la esperanza, permítenos tener la mirada atenta y un corazón generoso para acompañar las situaciones de vulnerabilidad en nuestro entorno.",
            "María, Madre de la esperanza, que con tanto amor acunaste al pequeño Jesús, recibe las preocupaciones y sufrimientos de todos quienes han partido de sus hogares en busca de nuevas oportunidades."
        ]
    },
    {
        "fecha": "2026-11-14",
        "semana": 0,
        "misterios": "gozosos",
        "tema": "Personas migrantes",
        "cita": "Mt 2,13-15",
        "libro": "Del Evangelio de San Mateo",
        "lectura": "evangelio",
        "motivacion": "Hoy, ponemos nuestra mirada en uno de los rostros más dolorosos: el de las personas migrantes, por razones políticas y económicas. La Sagrada Familia en su viaje a Egipto se convierte en imagen de tantas hermanas y hermanos que hoy emprenden caminos inciertos esperanzados en una vida más digna. María, que conoce el desarraigo y la incertidumbre del exilio, nos invita a contemplar con nuevos ojos el rostro de las personas migrantes para reconocer en ellos a Cristo que sigue buscando acogida.",
        "reflexion": "José y María toman al niño Jesús en plena noche y parten hacia tierras desconocidas, impulsados no por el deseo de abandonar su hogar, sino por el instinto más profundo de proteger la vida. María, como toda madre migrante, cargó en sus brazos a su pequeño hijo enfrentando la incertidumbre del camino. Ella conoce desde adentro lo que significa cruzar fronteras en la oscuridad, llegar a un lugar extraño y depender de la hospitalidad del otro. Esta imagen representa hoy la de tantas familias migrantes que, en distintos rincones del mundo y también en nuestro país, se ven obligadas a dejar atrás su tierra, su lengua, sus lazos, su historia. Por eso, la invitación que hoy se nos hace en el Mes de María es mirar esos rostros, no como amenaza, sino como presencia de Cristo que sigue llegando a nuestra puerta buscando acogida.",
        "preguntas": [
            "¿Hago parte de esos migrantes forzados por razones políticas o económicas?",
            "¿Me he dado el tiempo para escuchar y acoger a algún migrante?"
        ],
        "peticiones": [
            "María, madre migrante que conoces el dolor del exilio y la esperanza del camino, te pedimos por todas las personas migrantes y refugiadas que hoy cruzan fronteras buscando seguridad y dignidad.",
            "María, intercesora de los más vulnerables, te pedimos por quienes trabajan en la atención y acogida de migrantes para que su servicio esté guiado por la justicia y la compasión."
        ]
    },
    {
        "fecha": "2026-11-15",
        "semana": 1,
        "misterios": "gloriosos",
        "tema": "María acoge la voluntad de Dios",
        "cita": "Lc 1,28-31.34-35.38",
        "libro": "Del Evangelio de San Lucas",
        "lectura": "evangelio",
        "motivacion": "En este Domingo del Mes de María nos reunimos para contemplar uno de los momentos más hermosos y decisivos de la historia de la salvación: la Anunciación. En el silencio de una pequeña aldea, Dios sorprende a una joven mujer con una propuesta que cambiará el destino de la humanidad. Hoy, al escuchar este Evangelio, abramos también nuestro corazón para descubrir cómo Dios sigue actuando en nuestra historia.",
        "reflexion": "Hoy cada uno de nosotros está llamado a dar su propio Sí. El Papa León XIV, nos recuerda que el misterio de la Encarnación continúa estando presente en el tejido de nuestra historia actual, desafiándonos a defender y humanizar cada rincón de nuestra sociedad. Que nuestro Sí sea la respuesta ante el hambre, la soledad, el abandono y la profunda orfandad de hombres y mujeres que viven sin conocer el amor de Jesucristo. “Alégrate”, “No temas”, “Has encontrado gracia ante Dios”. Son palabras que nos recuerdan que Dios no llega para imponerse, pues Dios no eligió la distancia ni el poder, sino nuestra condición humana para encontrarse con cada uno de nosotros.",
        "preguntas": [
            "¿Qué me enseña hoy María sobre la confianza y la disponibilidad para acoger la voluntad de Dios en mi propia vida?"
        ],
        "peticiones": [
            "María, mujer del “hágase”, enséñanos a abrir el corazón a la voluntad de Dios y a reconocer su presencia en lo sencillo, para que Cristo siga naciendo en nuestras vidas y en nuestras familias.",
            "María, madre y discípula ayúdanos a ser una Iglesia abierta al Espíritu, capaz de encarnar la presencia de Dios en la historia mediante gestos de acogida, misericordia y servicio a los demás."
        ]
    },
    {
        "fecha": "2026-11-16",
        "semana": 1,
        "misterios": "gozosos",
        "tema": "María ejemplo de escucha en el camino sinodal",
        "cita": "Lc 2,41-43.45-46.48-51",
        "libro": "Del Evangelio de San Lucas",
        "lectura": "evangelio",
        "motivacion": "En este mes consagrado a nuestra Madre María, se nos regala un tiempo de gracia, una oportunidad para redescubrir que la escucha en el camino sinodal no es un método, sino un estilo de vida ya presente en María. Ella nos enseña que escuchar es el primer paso para amar y acoger la voluntad de Dios, sólo quien escucha puede verdaderamente caminar junto a otros en el Señor.",
        "reflexion": "En el relato de San Lucas vemos a María viviendo la angustia de perder a Jesús y la alegría de encontrarlo en el templo. Ante la respuesta de su hijo, que no comprende del todo, nuestra madre no se cierra, ni se rebela, sino que acoge el misterio con fe: no podemos entender todo y hay que confiar en la acción de Dios cuando no entendemos las búsquedas de nuestros hijos, nietos o sobrinos. María nos enseña que escuchar va más allá de oír palabras; significa abrir el corazón a Dios, a permanecer abiertos a la acción del Señor en el otro. En este camino sinodal, donde la iglesia busca que seamos más participativos, inclusivos Y misioneros, sigamos su ejemplo de escucha, paciencia y comunión.",
        "preguntas": [
            "¿Dónde debo regresar para encontrar a Jesús?",
            "¿Qué cosas no entiendo y siento que debo abrirme para comprender el misterio?"
        ],
        "peticiones": [
            "María ayúdanos a seguir tu ejemplo, para que sepamos escuchar con humildad y amor la voz de Dios y las necesidades de nuestros adolescentes y jóvenes.",
            "María te pedimos por nuestras comunidades, para que aprendamos a escucharnos con respeto, a discernir unidos la voluntad de Dios y guardar en el corazón aquello que no entendemos."
        ]
    },
    {
        "fecha": "2026-11-17",
        "semana": 1,
        "misterios": "dolorosos",
        "tema": "María nos invita a dialogar para mejorar nuestras relaciones comunitarias",
        "cita": "Mt 12,46-50",
        "libro": "Del Evangelio de San Mateo",
        "lectura": "evangelio",
        "motivacion": "Este tiempo de oración con nuestra Madre María nos ayuda a comprender la importancia de vivir la palabra de Dios. “Estar en Cristo” se concreta en estar para los demás, en estar atentos a las necesidades de nuestro prójimo, es decir, tanto para quienes vemos a diario como también aquellos que están distantes y, especialmente, los más necesitados de nuestro consuelo.",
        "reflexion": "La familia de Jesús se preocupa por Él. Este relato es muy importante porque abre la relación de Jesús con su madre a algo más trascendente que los lazos de filiación: La fe. El texto no minimiza la maternidad de María, al contrario, la reconoce como madre de los creyentes. Esto abre las puertas a una nueva relación con Dios desde una perspectiva familiar y comunitaria donde la unión de sus integrantes se concreta en hacer la voluntad del Padre.",
        "preguntas": [
            "¿Qué significa para mí hacer parte de la comunidad?",
            "¿He pensado que la figura de María es valiosa por su maternidad pero sobre todo por su fe?"
        ],
        "peticiones": [
            "María, Madre de la escucha atenta y generosa, ayúdanos a tener el corazón siempre dispuesto al diálogo respetuoso con quienes nos rodean.",
            "María, Madre de los creyentes, te pedimos por nuestra comunidad para que a través de la escucha atenta de la Palabra podamos discernir la voluntad de Dios."
        ]
    },
    {
        "fecha": "2026-11-18",
        "semana": 1,
        "misterios": "gloriosos",
        "tema": "María nos ayuda a ser una comunidad acogedora e inclusiva",
        "cita": "Mc 10,46-52",
        "libro": "Del Evangelio de San Marcos",
        "lectura": "evangelio",
        "motivacion": "En este día del Mes de María, queremos pedirle a nuestra Madre que nos enseñe a mirar con el corazón de Dios. En nuestras familias, barrios y comunidades hay personas que muchas veces pasan desapercibidas porque viven solas o sufren alguna enfermedad. María, que acogió con humildad la voluntad del Señor, nos invita también a abrir un espacio en nuestras agendas para acompañarlos, Junto a ella, queremos aprender a ser una comunidad más cercana, fraterna y acogedora.",
        "reflexion": "El Evangelio nos presenta a Bartimeo, un hombre que no puede ver, que estaba sentado al borde del camino. Su situación nos recuerda a tantas personas que, por distintas razones, quedan al margen de la vida familiar, social o comunitaria esperando que algo rompa la rutina. Cuando Bartimeo escucha que Jesús pasa cerca, comienza a llamarlo con fe: “Jesús, Hijo de David, ten compasión de mí”. No pide un milagro, pide misericordia, una miguita de ternura de parte del Mesías. Algunos intentan hacerlo callar, pero Jesús se detiene, lo escucha y le pregunta: “¿Qué quieres que haga por ti?”. En ese gesto descubrimos algo profundo de Jesús: El no pasa de largo ante la necesidad humana: se detiene, llama y escucha. Pidamos a María transformarnos en una comunidad fiel al Evangelio que procura no dejar a nadie al margen del camino.",
        "preguntas": [
            "¿Quiénes son hoy, en nuestra familia, barrio o comunidad, las personas que necesitan ser miradas, escuchadas y acogidas con más atención? ¿soy acaso yo?"
        ],
        "peticiones": [
            "María, Madre cercana, te pedimos por quienes se sienten solos, enfermos, excluidos o poco escuchados. Que encuentren consuelo en Jesús y en una comunidad que los acoja con cariño.",
            "María, ayúdanos a revisar nuestras actitudes para no dejar a nadie al margen. Que nuestra comunidad sea un lugar de encuentro, respeto e inclusión."
        ]
    },
    {
        "fecha": "2026-11-19",
        "semana": 1,
        "misterios": "luminosos",
        "tema": "Pedimos por los jóvenes que están en discernimiento vocacional",
        "cita": "1 Sam 3,3-5.7-10",
        "libro": "Del primer libro de Samuel",
        "lectura": "otro",
        "motivacion": "Hoy nos disponemos junto a María a rezar por tantos jóvenes que están discerniendo su vocación. La vocación no llega de forma repentina, es un regalo de Dios que se descubre cuando afinamos el oído a su voz. María, se animó a decir que “sí” con total confianza, pero es una respuesta fruto de un proceso, Ella además nos invita a no tener miedo a colocar la vida en las manos de Dios. Oremos para que el Señor les dé a nuestros jóvenes fortaleza y valentía para responder “sí” a la vocación que el Señor les está llamando.",
        "reflexion": "La historia de Samuel nos recuerda que Dios llama personalmente. Muchas veces, la voz divina se confunde con otras voces, pero la paciencia y la guía de quienes acompañan permiten reconocerla. Los jóvenes de hoy enfrentan incertidumbres, presiones y miedos, pero también sueños y esperanzas. La vocación no es solo una elección personal, sino una respuesta de amor a una llamada. Como comunidad, quisiéramos sostenerlos con oración y cercanía. Por eso le pedimos a María que interceda por cada uno y una de ellos, que en la búsqueda de felicidad y propósito, la vocación presbiteral, religiosa o matrimonial, se presente como un camino que puede colocarnos al servicio del prójimo.",
        "preguntas": [
            "¿Ruego por las vocaciones religiosas, sacerdotales y matrimoniales?",
            "¿Me he hecho la pregunta, a qué Dios me llama?"
        ],
        "peticiones": [
            "Señor, te pedimos por los jóvenes que disciernen su vocación, para que, como María, puedan responder con un “sí” generoso.",
            "Señor, te pedimos por la perseverancia de todos los consagrados y consagradas que tienen la tarea de iluminar y acompañar como Samuel a tantas personas a discernir la voz de Dios en sus vidas.",
            "Te pedimos por las familias y comunidades, para que sean generosas y capaces de crear verdaderos espacios de acompañamiento y escucha en el discernimiento vocacional."
        ]
    },
    {
        "fecha": "2026-11-20",
        "semana": 1,
        "misterios": "dolorosos",
        "tema": "Perdón por nuestros pecados que dañan la comunión de la Iglesia",
        "cita": "Mt 18,21-22",
        "libro": "Del Evangelio de San Mateo",
        "lectura": "evangelio",
        "motivacion": "Este día queremos dedicarlo a rezar por la reconciliación, que María nos acompañe en el largo proceso de comunión y perdón que estamos llamados a vivir desde el Evangelio.",
        "reflexion": "Nuestras comunidades están llenas de experiencias hermosas, pero también están marcadas por diversas heridas. El perdón y la resolución de conflictos son pilares fundamentales para la vida en comunidad, en especial en estos tiempos difíciles en que las comunidades son permeadas por dificultades relacionales. Por lo mismo, Jesús, sabiéndonos frágiles, nos invita a dejar de lado el orgullo, buscar la paz mediante la comunicación sincera y reflejar la misericordia divina, pidiendo perdón, perdonando o perdonándonos. En este mes de María contemplemos a nuestra madre que supo perdonar las ofensas de todos quienes persiguieron, traicionaron y condenaron a su Hijo.",
        "preguntas": [
            "Mirando la Comunidad en la que cada uno participa y pertenece, ¿contribuyo a la resolución de los conflictos tendiendo puentes de unidad?",
            "¿Confío a María las dificultades relacionales, pidiéndole que me ayude a mirar los conflictos desde la fe?"
        ],
        "peticiones": [
            "María, Madre de la Iglesia, te pedimos nos enseñes a reconocer nuestros errores, pedir perdón y perdonar a nuestros hermanos para que en nuestras comunidades florezca la paz y el entendimiento.",
            "María, tú que estás intercediendo por todo el Pueblo de Dios, te pedimos nos ayudes a crear comunidades reconciliadas en donde no se coloquen etiquetas a las personas y sepamos dar segundas oportunidades."
        ]
    },
    {
        "fecha": "2026-11-21",
        "semana": 1,
        "misterios": "gozosos",
        "tema": "Reconstruimos confianzas para caminar juntos como Pueblo de Dios",
        "cita": "Jn 21,15-17",
        "libro": "Del Evangelio de San Juan",
        "lectura": "evangelio",
        "motivacion": "En este día del Mes de María, nos reunimos como comunidad para pedir la gracia de volver a confiar. Sabemos que la confianza es un regalo frágil: se construye con gestos sencillos, pero también puede herirse con palabras, silencios o indiferencias. También es necesario construir confianzas a nivel institucional. A María, le pedimos que nos ayude a trabajar nuestras heridas personales e institucionales, De su mano, queremos aprender a sanar los vínculos, a pedir perdón, a crecer en transparencia y a caminar juntos como Pueblo de Dios en una verdadera cultura del cuidado.",
        "reflexion": "El Evangelio nos presenta el encuentro de Jesús resucitado con Pedro. Pedro había prometido fidelidad, pero en la hora del miedo negó conocer al Señor. Jesús no se acerca para reprocharle su caída, sino para tocar la raíz más profunda de ella en su corazón con una pregunta: “¿me amas?”. Antes de confiarle una misión, sana sus heridas. Antes de pedirle que cuide a otros, Dios le reconstruye desde la misericordia. También nuestras familias, comunidades y la sociedad necesitan volver una y otra vez a esa pregunta de Jesús: “¿me amas?” Porque solo el amor verdadero puede sanar la desconfianza, vencer el miedo y devolvernos la alegría de caminar. Que María nos acompañe en este arduo trabajo de reconstrucción. Ella nos recuerda que la voluntad de Dios no es la división ni la sospecha, sino la confianza y comunión. Con ella, queremos ser un Pueblo que no niega sus heridas, pero que tampoco renuncia a la esperanza de la reconciliación.",
        "preguntas": [
            "¿Qué vínculos de nuestra familia, comunidad o instituciones civiles necesitan ser sanados para volver a caminar juntos con mayor confianza?"
        ],
        "peticiones": [
            "María, te pedimos por quienes han perdido la confianza a causa de heridas, divisiones o decepciones.",
            "María, ayúdanos a ser una comunidad que sabe escuchar, pedir perdón y cuidar los vínculos para que caminemos como verdadero Pueblo de Dios."
        ]
    },
    {
        "fecha": "2026-11-22",
        "semana": 2,
        "misterios": "gloriosos",
        "tema": "María exalta la grandeza del Señor",
        "cita": "Lc 1,46-50",
        "libro": "Del Evangelio de San Lucas",
        "lectura": "evangelio",
        "motivacion": "Damos comienzo a esta tercera semana del Mes de María, acogiendo a Dios en nuestros corazones y saliendo al encuentro de nuestras hermanas y hermanos. Hoy nuestra madre María nos invita a sentirnos alegres de sabernos amados y elegidos por Él. Queremos responder a este amor tan grande con gestos y palabras que transparentan una mirada desde la fe y un afecto que nace de la relación con Dios.",
        "reflexion": "La oración del Magníficat es una de las más bellas que disponemos en la Biblia. En ella María reconoce la grandeza de Dios y testimonia su pequeñez frente a un regalo tan maravilloso. Su prima Isabel, también bendice y alaba a Dios por sus acciones, por su elección y porque nada es imposible para el Señor. Isabel reconoce a María como la elegida y alaba “¡Bendita eres!”. Imaginemos en esa escena también a nosotros, alabando a Dios, dando gracias por María, porque ella nos sigue visitando y porque también Dios obra maravillas en nosotros.",
        "preguntas": [
            "¿Qué acción de Dios nos mueve a alabarlo en este día?",
            "¿Qué maravillas hace Dios en mí y en mi familia?"
        ],
        "peticiones": [
            "María, tú que supiste responder al ángel cuando te pidió ser la Madre de Jesús, inspira nuestras palabras para que seamos instrumentos de alabanza.",
            "María, ayúdanos a alabar a Dios por las maravillas que ha hecho en nosotros y en nuestras comunidades."
        ]
    },
    {
        "fecha": "2026-11-23",
        "semana": 2,
        "misterios": "gozosos",
        "tema": "Damos gracias a Dios por nuestra historia",
        "cita": "Lc 1,46-53",
        "libro": "Del Evangelio de San Lucas",
        "lectura": "evangelio",
        "motivacion": "Como el día de ayer seguimos dando gracias y alabando a Dios por sus grandezas. En un mundo donde el deseo y el consumo parecen ser los principales motores de la sociedad, María nos invita a asombrarnos por el don de Dios que se expresa en diversos tipos de dones y regalos, como son su amor, cercanía y compañía.",
        "reflexion": "Lucas nos regala una mirada al corazón agradecido de María, quien contempla cada momento de su existencia con admiración y reconociendo la obra salvífica que Dios realiza en ella. Esta presencia es atesorada como la certeza más valiosa, aquella que la llena de alegría, esperanza y amor, impulsándola a declarar abiertamente: “mi alma canta la grandeza del Señor... y en adelante me felicitarán todas las generaciones”. Hoy queremos dejarnos sorprender por el sol que nos abraza, por la lluvia que nutre la tierra; por el cariño de nuestras familias y amigos; por la salud; por la belleza de la naturaleza; por la risa de los niños y por tantas otras maravillas. Reconozcamos en todas ellas la presencia amorosa de Dios y, junto a María, agradecemos la historia de salvación que el Señor hace con nosotros.",
        "preguntas": [
            "¿Experimento mi propia vida como un don de Dios?",
            "¿Por qué motivos o por quiénes quisiera agradecer a Dios hoy?"
        ],
        "peticiones": [
            "Te pedimos Señor por los pastores de nuestra Iglesia, para que les regales un corazón atento y agradecido, para servir a la comunidades.",
            "Te pedimos Señor por quienes sufren y, en medio de su dolor, no logran ver tu presencia amorosa, te pedimos que ilumines su mirada y les regales la claridad necesaria para descubrirte a su lado."
        ]
    },
    {
        "fecha": "2026-11-24",
        "semana": 2,
        "misterios": "dolorosos",
        "tema": "Somos corresponsables en el servicio a los más pobres",
        "cita": "Lc 1,50-53",
        "libro": "Del Evangelio de San Lucas",
        "lectura": "evangelio",
        "motivacion": "Para renovar la historia del mundo Dios no se vale del poder ni de la riqueza sino de los corazones humildes, hambrientos y sedientos de justicia. En este martes de la tercera semana del mes de María, prestemos oídos atentos a su Palabra para continuar acompañando a nuestros hermanos más vulnerables de nuestras comunidades y, de esa manera colaborar en la construcción del Reino de Dios.",
        "reflexion": "Desde la fe y la experiencia creyente se descubre que Dios actúa en la historia desde una lógica invertida: lo que el mundo, la política, la economía, la farándula, las redes sociales consideran grande, fuerte o exitoso, no es lo que Dios privilegia para la construcción del Reino de Dios. Dios no se deja impresionar por el aparente poder humano; su mirada se inclina hacia los invisibilizados. Él prefiere promover a los pequeños, a los frágiles y a los que no tienen voz. Los “humildes” representan a quienes viven reconociendo su vulnerabilidad y depositando su confianza en Dios.",
        "preguntas": [
            "¿Qué “tronos” internos o externos necesitan caer para que la fe pueda crecer en nosotros?",
            "Mirando el ejemplo de María preguntémonos: ¿Nuestro concepto de humildad contempla, desde la fe, reconocer nuestros límites, escuchar la voz de Dios y dejarse tocar por El?"
        ],
        "peticiones": [
            "Oremos con María, por nuestro caminar, para que se convierta en una senda de auténtico servicio y acompañamiento de quienes necesitan ser incluidos y restaurados en este tiempo, a causa de las marginaciones sociales, las guerras o la soberbia humana.",
            "Oremos a María, por quienes día a día anuncian el Evangelio entre los grupos más invisibilizados, ayúdanos a ser corresponsables en el cuidado de los más vulnerables, especialmente, los niños y las personas mayores."
        ]
    },
    {
        "fecha": "2026-11-25",
        "semana": 2,
        "misterios": "gloriosos",
        "tema": "Con María, Madre y Reina de Chile, reconstruimos nuestro país con esperanza",
        "cita": "Lc 1,46-47.54-55",
        "libro": "Del Evangelio de San Lucas",
        "lectura": "evangelio",
        "motivacion": "María de Nazareth, como fiel hija del pueblo de Israel, no estuvo ajena al sufrimiento de sus contemporáneos. La Alianza de Dios con su pueblo, nos desafía a ser una sociedad reconciliada donde se cuiden los vínculos de fraternidad y donde coloquemos nuestras alianzas humanas bajo la mirada del Señor.",
        "reflexion": "María de Nazareth, hija de Israel, glorifica a Dios por la elección de su pueblo y fidelidad a la alianza. Es una promesa dada a nuestros antepasados en donde el Señor promete sostener, levantar y ser fiel a su pueblo, cumpliendo así la alianza hecha a Abrahán y a su descendencia. Esta promesa se renueva hoy, nos toma de la mano, nos sostiene y, si caemos, nos levanta. En lenguaje de hoy diríamos que su cercanía nos auxilia, nos contiene, nos refuerza positivamente y nos acompaña en nuestras debilidades y opresiones. Como país, confiamos que María, Reina de Chile, nos ayude a construir un país más fraterno.",
        "preguntas": [
            "Recorriendo tu historia personal: ¿Cuántas veces has celebrado las bondades de Dios contigo, con tus cercanos y con la comunidad?",
            "¿Qué puedes ofrecer a Dios como respuesta a la alianza que hace contigo?"
        ],
        "peticiones": [
            "María, tú que supiste celebrar las misericordias de Dios, enséñanos a reconocer su presencia en nuestras vidas, sobre todo cuando en las adversidades su mano nos sostiene y levanta.",
            "María, tú que estabas consciente e inmersa en la historia de tu pueblo, enséñanos a ser discípulos y profetas de tu hijo frente a las necesidades y los sufrimientos, despertando esperanzas en nuestro propio pueblo."
        ]
    },
    {
        "fecha": "2026-11-26",
        "semana": 2,
        "misterios": "luminosos",
        "tema": "Vocaciones al servicio de las periferias existenciales",
        "cita": "Lc 4,16-21",
        "libro": "Del Evangelio de San Lucas",
        "lectura": "evangelio",
        "motivacion": "Hoy contemplamos a Jesús que anuncia la esperanza de la liberación que nos llena de vida. María hace parte de quienes reciben esta promesa de consuelo y de liberación para los que se encuentran en las periferias existenciales.",
        "reflexion": "Jesús proclama que el Espíritu de Dios está en Él, pues ha sido ungido para anunciar la Buena noticia a los pobres y la liberación a los oprimidos. Las “periferias existenciales” se encarnan hoy en los rostros de quienes olvidamos: los enfermos, los que viven en soledad o quienes han perdido la alegría por estar viviendo experiencias de depresión, angustia o estrés. María nos enseña que la fe se nota cuando nuestras manos se mueven para ayudar, cuando desde nuestra voz surge una palabra de aliento o cuando realizamos un gesto de justicia. Con estos actos sencillos podemos ser instrumento de Dios para reconstruir la esperanza de los pobres, los cautivos, los ciegos y los oprimidos del mundo de hoy.",
        "preguntas": [
            "¿Qué acción concreta me está pidiendo el Señor hacer hoy por alguien de mi barrio o familia que sufre?",
            "¿Qué buena nueva puedo compartir con aquellos que tienen miedo o sufren la desesperanza?"
        ],
        "peticiones": [
            "Por la Iglesia y nuestra comunidad, para que veamos en el Señor una fuerza que nos empuja a servir a los más olvidados, siguiendo el ejemplo de entrega de María.",
            "Oremos por las vocaciones sacerdotales y la vida consagrada, para que la Iglesia lleve esperanza donde hay oscuridad, soledad o tristeza."
        ]
    },
    {
        "fecha": "2026-11-27",
        "semana": 2,
        "misterios": "dolorosos",
        "tema": "La mirada de Dios hacia los pequeños",
        "cita": "Mc 10,13-16",
        "libro": "Del Evangelio de San Marcos",
        "lectura": "evangelio",
        "motivacion": "En esta tercera semana del mes de María, se nos invita a contemplar la figura de esta mujer como sierva y discípula de Dios. En nuestra Madre reconocemos un testimonio vivo de fe, humildad y confianza. En una sociedad marcada por el éxito, el individualismo, la productividad y la autosuficiencia, María nos enseña que la verdadera grandeza nace de hacerse pequeños, como los niños que confían plenamente en el amor de su Padre y construyen comunidad desde la fraternidad.",
        "reflexion": "El texto de hoy nos invita a volvernos como niños para entrar al Reino, hacernos pequeños, condición necesaria para que el amor y gracia divina se manifieste de manera más auténtica y directa. Este llamado se contradice frente a la propuesta de la sociedad actual, donde la inmediatez, la satisfacción superflua y vana se centra en las apariencias. ¿Pero qué significa hacerse niños en la Biblia? Hacerse niños significa reconocer la propia pequeñez y recibir el Reino como un don. No significa ingenuidad o inmadurez sino humildad, sencillez y dependencia filial de Dios. También exige abandonar la pretensión de poder y acoger a los pequeños, vulnerables y excluidos como lo hace Jesús. La Virgen María se presenta como la verdadera discípula porque reconoce que todo es don y se abandona plenamente a la voluntad de Dios. Su grandeza no nace de sus logros, sino de su confianza y disponibilidad para que Dios actúe en ella.",
        "preguntas": [
            "¿En qué situaciones de mi vida me cuesta reconocer mis límites y confiar en Dios, en lugar de querer resolverlo todo con mis propias fuerzas?",
            "¿Qué actitudes inspiradas en la Virgen María y en la actitud de un niño según el Evangelio, puedo cultivar en mis relaciones con los demás y en mis responsabilidades diarias?"
        ],
        "peticiones": [
            "María, modelo de pequeñez evangélica, guíanos en nuestras acciones diarias para dar testimonio de sencillez y autenticidad."
        ]
    },
    {
        "fecha": "2026-11-28",
        "semana": 2,
        "misterios": "gozosos",
        "tema": "Una mesa para todos: corresponsables en la justicia",
        "cita": "Mt 14,15-20",
        "libro": "Del Evangelio de San Mateo",
        "lectura": "evangelio",
        "motivacion": "Al terminar esta tercera semana del Mes de María, contemplamos a Jesús compasivo y generoso que cura a los enfermos y satisface las necesidades de todas las personas a través de la multiplicación de los panes y peces. Es importante considerar que el milagro comienza con el aporte, aunque pequeño, de cinco panes y dos peces ... el resto lo hará Dios.",
        "reflexion": "Jesús toma lo poco que tenemos para bendecirlo y alimentar al pueblo. Mostrando así su preocupación por las necesidades básicas de las personas. Luego es el mismo Jesús que los envía a compartir. La escena posee un profundo sentido eucarístico. María también entra en esta dinámica de poner delante de Dios todo lo que ella es y tiene, confiando en que el Señor hará el resto.",
        "preguntas": [
            "¿Qué falta en nuestra sociedad para que las necesidades básicas de todos puedan ser satisfechas?",
            "¿En qué medida estoy dispuesto a colaborar con mis bienes para que todas las personas tengan lo mínimo para una vida digna?"
        ],
        "peticiones": [
            "María, tú que eres nuestra madre compasiva, inspira a las personas que tienen autoridad en nuestra sociedad, para que sepan promover la justicia, de modo que todos puedan tener lo que necesitan para vivir dignamente.",
            "María, tú que eres compasiva y generosa, inspíranos con tu ejemplo, para que aprendamos a ser solidarios y sepamos compartir nuestros bienes con los más necesitados."
        ]
    },
    {
        "fecha": "2026-11-29",
        "semana": 3,
        "misterios": "gloriosos",
        "tema": "María y el cuidado de sus hijos",
        "cita": "Jn 19,25-27",
        "libro": "Del Evangelio de San Juan",
        "lectura": "evangelio",
        "motivacion": "En este nuevo encuentro del Mes de María, contemplamos a nuestra Madre al pie de la cruz, María se convierte así en signo de cuidado, unidad y amor fiel. Ella da testimonio de lo que debería ser una Iglesia que acoge, acompaña y protege a todos sus hijos, especialmente a los más frágiles. Hoy somos invitados a construir una patria y una Iglesia más fraternas, donde todos se sientan cuidados.",
        "reflexion": "En la cruz, Jesús no solo entrega su vida, sino que también nos deja un gran regalo: su Madre. María se convierte en madre de todos, en especial de quienes necesitan consuelo, compañía y esperanza. Su presencia al pie de la cruz refleja un amor que no abandona, incluso en el dolor más profundo. Es la Virgen de los Dolores, de los que sufren pérdidas especialmente de hijos. En un mundo marcado muchas veces por la división y la indiferencia, hoy este gesto nos interpela para acoger, cuidar y acompañar a los demás como verdaderos hermanos. Recibir a María “en nuestra casa” significa también aprender a cuidar la vida, a sostener al que sufre y a trabajar por una sociedad más justa y fraterna, donde cada persona se sienta parte, valorada y protegida.",
        "preguntas": [
            "¿De qué manera estoy acogiendo y cuidando a las personas que Dios ha puesto en mi camino?",
            "¿Siento que María me acoge, protege y cuida?"
        ],
        "peticiones": [
            "María, Madre de todos, enséñanos a acoger y cuidar a cada persona, especialmente a los más débiles, para que en nuestra sociedad nadie se sienta solo ni excluido.",
            "María, Madre y Patrona de Chile, intercede por nuestro país, para que sepamos construir una unidad nacional más justa, respetuosa y fraterna."
        ]
    },
    {
        "fecha": "2026-11-30",
        "semana": 3,
        "misterios": "gozosos",
        "tema": "Chile, una sola familia bajo el manto de la Virgen del Carmen",
        "cita": "1 Re 18,42-45",
        "libro": "De la Primera de Reyes",
        "lectura": "otro",
        "motivacion": "En esta cuarta semana, bajo el amparo de la Virgen del Carmen, somos invitados a subir simbólicamente al Monte Carmelo junto al profeta Elías. En medio de las sequías, incertidumbres y desafíos de nuestros tiempos, confiamos en Dios que nunca abandona a su pueblo. Al igual que Elías subió a la cumbre del Carmelo para interceder por su pueblo, hoy nos unimos como una sola familia, buscando el rostro del Señor que anhela que todos nos acerquemos a él.",
        "reflexion": "En medio de una intensa sequía, contemplamos al profeta Elías en la cumbre del Monte Carmelo donde eleva su oración con humildad y perseverancia, confiando plenamente en la acción de Dios. Aunque la respuesta parece tardar y las primeras veces no se observa ninguna señal Elías no deja de esperar. Solo una pequeña nube en el horizonte basta para anunciar la lluvia que devolverá la vida a la tierra. Hoy en el Monte Carmelo de Haifa-Israel, hay una hermosa imagen de la Virgen María Patrona de Chile. Todos los que sufren soledad, violencia, injusticias, pobreza o falta de oportunidades pueden confiarse a ella al igual que Elías. Que, de la mano de la Virgen del Carmen, sepamos reconocer esos signos de la acción de Dios y renovar nuestra esperanza.",
        "preguntas": [
            "¿Qué “pequeñas nubes” o signos de la presencia de Dios puedo reconocer en mi vida, en mi familia o en mi comunidad?",
            "Siguiendo el ejemplo de María y Elias, ¿de qué manera puedo ser un signo o palabra de esperanza y confianza para quienes atraviesan momentos de dificultad?"
        ],
        "peticiones": [
            "Por Chile y por todos quienes cruzan momentos de sequía espiritual, material o afectiva, para que, por intercesión de la Virgen del Carmen puedan florecer nuevamente.",
            "Por todos los niños y niñas del mundo, para que el Señor los bendiga, los proteja y los acompañe en cada etapa de sus vidas, ayudándolos a crecer en gracia y sabiduria."
        ]
    },
    {
        "fecha": "2026-12-01",
        "semana": 3,
        "misterios": "dolorosos",
        "tema": "Corresponsables del Reino: nadie sobra en esta construcción",
        "cita": "Mt 13,31-32",
        "libro": "Del Evangelio de San Mateo",
        "lectura": "evangelio",
        "motivacion": "Ya estamos en la cuarta semana de este mes. Nuestra Madre nos ha acompañado en este caminar, con ella nos sentimos acogidos y esperanzados. En nuestros corazones germina la semilla de la fe, la caridad y el amor. Sabemos que más allá de este mes estamos llamados a acompañar a otros ante las adversidades que se presentan en el día a día.",
        "reflexion": "El grano de mostaza representa lo humilde y pequeño pero que en el tiempo, con cuidado y paciencia, crece siendo capaz de dar sombra y cobijo a quienes lo necesitan. En este día damos gracias por ser un árbol, hemos crecido, hemos acompañado y cuidado la vida de tantos otros. Pensemos en quienes se han sentido protegidos por nosotros y demos gracias a Dios por quienes lo hicieron por nosotros. Que bajo el manto de María sigamos resguardándonos y fortaleciendo la comunión entre hermanos y hermanas.",
        "preguntas": [
            "¿Qué motivos mueven hoy mi corazón para dar gracias a Dios?",
            "¿A quiénes cuido y quienes me cuidan?"
        ],
        "peticiones": [
            "Madre nuestra, tú que conoces el corazón de tus hijos, te pedimos que no permitas que nuestra fe decaiga, ayúdanos a confiar, aun en los momentos de mayor dificultad.",
            "Madre, te pedimos que nuestras vidas sean lugar de acogida y que nuestras acciones sirvan de refugio a quien lo necesite."
        ]
    },
    {
        "fecha": "2026-12-02",
        "semana": 3,
        "misterios": "gloriosos",
        "tema": "El ejercicio del poder como servicio",
        "cita": "Mc 10,42-45",
        "libro": "Del Evangelio de San Marcos",
        "lectura": "evangelio",
        "motivacion": "Hoy reflexionamos sobre el tema de la autoridad. En efecto, la palabra misma “autoridad” viene del latín, auctoritas, que significa ayudar a progresar. En cualquier realidad humana existen personas que ejercen la autoridad. Jesús mismo no niega la autoridad. Es necesaria para custodiar y garantizar el bien común de las personas y el bien. Progresar en el bien común y la justicia es el anhelo de cualquier sociedad. Jesús nos habla de cómo hay que ejercer la autoridad a raíz de una solicitud que le hacen dos de sus discípulos más cercanos.",
        "reflexion": "Se acercan a Jesús los hijos de Zebedeo, Santiago y Juan para pedirle un favor. Quieren que Jesús les dé un puesto privilegiado al lado de Él, uno a la derecha y el otro a la izquierda. Los otros diez se molestan, ¡Con razón! ¿Por qué los hijos de Zebedeo eran más importantes que los otros? O ¿quizás por celos? Jesús aprovecha la situación para darles una lección a todos sobre el ejercicio de la autoridad. El dice que los poderosos del mundo ejercen el poder como dominio sobre los demás, sin embargo, en la comunidad eclesial la autoridad se comprende desde el servicio. Jesús marca la diferencia: Él mismo se coloca como ejemplo cuando señala que el “Hijo del hombre no vino a ser servido, sino a servir”.",
        "preguntas": [
            "En la familia, en el trabajo, en la Iglesia, en la política: ¿cómo ejerzo la autoridad?",
            "En la parroquia o en la comunidad que participo ¿mi misión la realizo con un verdadero espíritu de servicio?¿busco el reconocimiento?"
        ],
        "peticiones": [
            "Oremos por nuestros pastores, diáconos, religiosos, religiosas, catequistas y agentes pastorales, para que ejerzan su ministerio con espíritu de servicio a la comunidad.",
            "Por nuestros políticos y todos quienes ejercen cargos públicos, para que guiados por un deseo auténtico de servir a todos, busquen el bien común y la justicia."
        ]
    },
    {
        "fecha": "2026-12-03",
        "semana": 3,
        "misterios": "luminosos",
        "tema": "Llamados a construir la unidad",
        "cita": "Ef 4,1-6",
        "libro": "De la carta a los Efesios",
        "lectura": "otro",
        "motivacion": "Hemos ido recorriendo de la mano de María este mes, abriendo nuestros ojos y nuestro corazón a tantas realidades que queremos agradecer y también transformar. En estos últimos días abramos el corazón a la certeza de que el mismo Dios que hace dos mil años fijó su mirada en María, hoy nos mira con cariño, invitándonos a abrazar nuestra vocación al servicio del amor y la unidad.",
        "reflexion": "Hoy la lectura de San Pablo nos exhorta a construir y cuidar la unidad, la unión es sólo posible desde la diversidad. Sin embargo esta diversidad puede ser fuente de divisiones, envidias y celos. María es capaz de caminar con su pueblo, con los discípulos y apóstoles, unos diferentes del otro. Con la ayuda del Espíritu Santo valoremos los diversos carismas de nuestra comunidad y vivamos de acuerdo a la vocación a la que Dios nos llama.",
        "preguntas": [
            "En nuestro entorno más cercano, familia, barrio, trabajo: ¿Qué gestos y acciones puedo realizar para tender puentes entre las personas?",
            "En mi comunidad eclesial ¿soy capaz de valorar la riqueza y los dones de cada uno?"
        ],
        "peticiones": [
            "María, tú que respondiste con generosidad al Señor, te pedimos que en nuestras comunidades los jóvenes se animen a discernir la vocación a la vida sacerdotal o religiosa.",
            "María tú que aceptaste la llamada de Dios, enséñanos a acoger los dones y carismas que Dios suscita a través del Espíritu Santo al servicio de nuestros hermanos y hermanas."
        ]
    },
    {
        "fecha": "2026-12-04",
        "semana": 3,
        "misterios": "dolorosos",
        "tema": "Sembrar el Chile del mañana",
        "cita": "Lc 2,39-40",
        "libro": "Del Evangelio de San Lucas",
        "lectura": "evangelio",
        "motivacion": "Hoy nos reunimos para encontrarnos con María y José como figuras paternales que acompañan el crecimiento y desarrollo de Jesús. Caminan junto a El, comparten la vida cotidiana y participan de las tradiciones que fortalecen los lazos familiares y la fe. Jesús es el Hijo de Dios, pero también es hijo de una familia que lo cuida, lo protege y lo orienta. María y José nos muestran que educar es acompañar con amor, atención y paciencia.",
        "reflexion": "Estamos invitados a seguir el ejemplo de María y José para acompañar el crecimiento de niños, niñas y jóvenes. Frente a un mundo complejo, donde la información está disponible casi sin restricciones y donde abundan las voces que buscan orientar sus decisiones, son las familias y los educadores quienes tienen la hermosa tarea de enseñar a discernir a las nuevas generaciones. El Evangelio nos muestra el fruto de ese acompañamiento: Jesús crecía en sabiduría. Crecer en sabiduría significa aprender a reconocer lo bueno, lo que a Dios gusta, es optar por la vida buena.",
        "preguntas": [
            "A ejemplo de María y José, ¿cómo podemos acompañar a las nuevas generaciones a crecer en sabiduría?"
        ],
        "peticiones": [
            "María, tú que estás atenta a las familias, te pedimos que des sabiduría a las madres, padres y cuidadores para que sepan guiar con amor y rectitud a las nuevas generaciones.",
            "María, tú que cuidaste con amor a tu Hijo, enséñanos a acompañar a nuestros niños y jóvenes para que nuestras comunidades se rejuvenezcan y florezcan nuevos carismas."
        ]
    },
    {
        "fecha": "2026-12-05",
        "semana": 3,
        "misterios": "gozosos",
        "tema": "Trabajo digno y salarios justos",
        "cita": "Mt 20,1-16",
        "libro": "Del Evangelio de San Mateo",
        "lectura": "evangelio",
        "motivacion": "En este último sábado del mes dedicado a nuestra Madre, queremos traer a nuestra atención el concepto de Justicia Social. Como cristianos no podemos quedarnos indiferentes ante las problemáticas del mundo del trabajo: desde la necesidad de un buen clima laboral, hasta temas tan sensibles como el salario justo y digno.",
        "reflexion": "El evangelista Mateo es el único que nos entrega la parábola de los que fueron a trabajar a la Viña. En este texto el dueño llama e invita a trabajar ofreciendo el sueldo justo para la época. Siendo el sueldo lo que se usaba para vivir un día a la vez, todos recibieron el mismo salario, caso contrario no habrían podido vivir ese día. La parábola es un mensaje de esperanza para todos los que luchan por encontrar un empleo y salario adecuado. Pero aún más, el Señor no solo promete trabajo sino que invita a una relación de amistad con él. Que María, interceda por todos los que buscan condiciones laborales más dignas para llevar el pan a sus hogares.",
        "preguntas": [
            "¿Considero que mi trabajo es justo? Si tengo empleados, ¿puedo decir que pago lo justo?",
            "¿Delante de Dios me siento empleado o amigo?"
        ],
        "peticiones": [
            "Pedimos al Señor para que cada familia pueda tener un salario digno para poder vivir con serenidad y por los empleadores, para que cuiden el ambiente laboral y la justicia salarial.",
            "Oremos por quienes están al borde del camino a la espera de un trabajo para que puedan encontrar pronto una oferta laboral."
        ]
    },
    {
        "fecha": "2026-12-06",
        "semana": 4,
        "misterios": "gloriosos",
        "tema": "Vocación al servicio público",
        "cita": "Lc 10,30.33-35",
        "libro": "Del Evangelio de San Lucas",
        "lectura": "evangelio",
        "motivacion": "Con gran devoción hemos compartido este Mes de María 2026, que ya casi va finalizando. Protegidos bajo el manto de nuestra madre y caminando en sinodalidad junto a cada persona, agrupación, colegio, comunidad, familia, etc., nos hemos acercado a Jesús a través de su madre. Compartamos la reflexión de la parábola del Buen Samaritano, invitando a quienes puedan, a mantener durante el resto del año el rezo del Santo Rosario por el prójimo.",
        "reflexion": "La parábola narrada por Jesús, cuenta que un viajero fue asaltado para robarle sus pertenencias, quedando abandonado en el camino y malherido. Pasaron personas que lo vieron, pero siguieron de largo sin ayudarlo. Hasta que un samaritano se conmovió y lo auxilió: lo atendió curándole las heridas, lo trasladó hasta un albergue, encargó su cuidado, y pagó para que recibiera la atención necesaria. Esa acción compasiva del buen samaritano con el prójimo desconocido, nos enseña a no ser indiferentes, a actuar con misericordia, con cualquier persona que necesita ayuda o se cruza en nuestro camino, sin importar quien sea. Aplicándolo en nuestra patria, quienes son servidores públicos están llamados a hacer el bien sin mirar a quién, y su vocación de servicio debiera abarcar todo el país, promoviendo la ayuda hacia quienes necesitan sin importar sus convicciones políticas, religiosas o sociales.",
        "preguntas": [
            "¿Me conmuevo y soy empático ante las dificultades del prójimo?",
            "¿Tengo miedo de detenerme cuando alguien está en problemas?"
        ],
        "peticiones": [
            "María, te pedimos que intercedas para que podamos construir la patria común que necesitamos: justa, respetuosa y transparente.",
            "María, tú que eres nuestra Patrona de Chile, te pedimos que intercedas para que cada vez haya más chilenos que se detengan ante el dolor humano."
        ]
    },
    {
        "fecha": "2026-12-07",
        "semana": 4,
        "misterios": "gozosos",
        "tema": "Reconstruir el tejido social de nuestras comunidades",
        "cita": "Hch 2,42-47",
        "libro": "Del libro de los Hechos de los Apóstoles",
        "lectura": "otro",
        "motivacion": "Durante 29 días hemos caminado con María y el mensaje de su “sí” ha guiado nuestro actuar como creyentes. Hoy queremos acercarnos al libro de los Hechos de los Apóstoles que relata la vida de las primeras comunidades donde María estuvo presente junto a los apóstoles y los primeros discípulos. Las experiencias de los inicios de la Iglesia nos animan a crecer en comunidad.",
        "reflexion": "Reconstruir el tejido social frente al individualismo y la desconfianza actuales no es fácil. El texto de hoy nos recuerda que la comunión cristiana no se vive aisladamente, sino compartiendo y respondiendo juntos a las necesidades comunes. El gran desafío de nuestras organizaciones sociales y comunitarias hoy es hacer vida el principio de solidaridad, justicia y participación al servicio del bien común. El relato bíblico es una exhortación a compartir para que a nadie le falte el mínimo necesario para vivir con dignidad. Sanar los territorios exige pasar de ser meros residentes de nuestros hogares a ser miembros activos y presentes de una auténtica comunidad que, unida, organiza la esperanza y devuelve la vida a nuestros barrios.",
        "preguntas": [
            "¿Qué significa hoy poner en común con otros lo que tenemos y somos?",
            "¿Es nuestra Eucaristía un lugar para alimentar la búsqueda de la justicia y la caridad?"
        ],
        "peticiones": [
            "María, tú que conservaste vivo el amor de tu Hijo en las primeras comunidades continúa acercándonos a El para que crezca nuestra fe.",
            "María, tú que te enfrentaste a una sociedad desigual, te pedimos que intercedas ante tu Hijo para que elimines nuestras apatías y nos animes a ir al encuentro de nuestros hermanos más necesitados."
        ]
    },
    {
        "fecha": "2026-12-08",
        "semana": 4,
        "misterios": "gloriosos",
        "tema": "María, Reina de Chile",
        "cita": "Ap 12,1-2.13-17",
        "libro": "Del libro del Apocalipsis",
        "lectura": "otro",
        "celebracion": true,
        "motivacion": "En este día de fiesta sellamos el compromiso de caminar junto a María y la celebramos como Patrona de Chile. Ella nos invita a mirar el futuro con esperanza, recordándonos que nadie sobra y que todos tenemos algo que aportar a la construcción de una patria común en donde reine el amor y la justicia, llevando a la práctica todas las reflexiones que hemos realizado durante este mes. Unidos en oración junto a las miles de personas que hoy peregrinan hasta los santuarios marianos, con sus dolores y alegrías queremos concluir el Mes de María bajo su protección, hoy consagramos nuestros anhelos de unidad para todo el pueblo de Chile.",
        "reflexion": "La figura de la mujer vestida de sol nos habla de la victoria de la vida y la gracia sobre la adversidad. María, reconocida como Patrona de Chile, no ejerce un dominio de poder, sino de servicio e intercesión constante por sus hijos. Con este lenguaje simbólico se presenta a María, nueva Eva y se nos invita a ver el culmen de la historia de Salvación en Jesucristo, nuevo Adán, Dios y hombre verdadero que vence al mal. Ella protege el caminar de nuestro pueblo, animándonos a ser corresponsables en la construcción de un Chile más fraterno.",
        "preguntas": [
            "¿Qué quisiera agradecer a María al término de este mes a ella dedicado?"
        ],
        "peticiones": [
            "María, Reina de Chile, te pedimos por todos los que habitamos esta nación, para que bajo tu amparo maternal aprendamos a derribar los muros que nos separan y trabajemos con esperanza en la construcción de una patria común para todos.",
            "María, Patrona de nuestra nación, te encomendamos a quienes sufren y a los más vulnerables de nuestra sociedad, para que encuentren en nosotros manos solidarias y en ti el consuelo de una madre que nunca nos abandona."
        ]
    }
];

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

// Oraciones marianas del folleto oficial Mes de María 2026.
const MM_ORACIONES = [
    { titulo: "Oración tradicional de inicio del Mes de María", texto: "inicial" },
    { titulo: "Oración tradicional final del Mes de María", texto: "final" },
    {
        titulo: "Bendita sea tu pureza", autor: "Oración tradicional",
        texto: "Bendita sea tu pureza<br>y eternamente lo sea,<br>pues todo un Dios se recrea<br>en tan graciosa belleza.<br>A ti, celestial princesa,<br>Virgen Sagrada María,<br>yo te ofrezco en este día<br>alma, vida y corazón.<br>Mírame con compasión,<br>no me dejes, madre mía."
    },
    {
        titulo: "Oración por Chile", autor: "Texto en el folleto del Mes de María 2026",
        texto: "Virgen del Carmen, María Santísima, Dios te escogió como Madre de su Hijo, del Señor Jesús que nos trae el amor y la paz. Madre de Chile, a ti honraron los Padres de la Patria y los más valientes de la historia; desde los comienzos nos diste bendición.</p><p>Hoy te confiamos lo que somos y tenemos; nuestros hogares, escuelas y oficinas; nuestras fábricas, estadios y rutas; el campo, las pampas, las minas y el mar. Protégenos de terremotos y guerras, sálvanos de la discordia; asiste a nuestros gobernantes; concede tu amparo a nuestros hombres de armas; enséñanos a conquistar el verdadero progreso, que es construir una gran nación de hermanos donde cada uno tenga pan, respeto y alegría.</p><p>Virgen del Carmen, Estrella de Chile, en la bandera presides nuestros días y en las noches tormentosas sabiamente alumbras el camino.</p><p>Madre de la Iglesia, tú recibes y nos entregas a Cristo; contigo nos ofrecemos a Él, para que sobre Chile extienda los brazos salvadores de Su cruz y la esperanza de Su resurrección. Amén."
    },
    {
        titulo: "María", autor: "Antonio Rendic",
        texto: "Quisiera hacerte una estrofa<br>de tan sutil poesía<br>que, de tocarte, sangrara<br>y al repetirla arrullara<br>como tu nombre, María.</p><p>Una estrofa tierna, pía,<br>plena de amor y humildad.<br>Y en la que tu alma y la mía,<br>hicieran juntas la vía<br>por toda la eternidad."
    },
    {
        titulo: "Oración a la Virgen María", autor: "San Alberto Hurtado sj",
        texto: "¡Madre mía querida y muy querida!<br>Ahora que ves en tus brazos<br>a este Niño bellísimo y dulcísimo,<br>no te olvides de este<br>esclavito indigno.<br>Aunque sea por compasión,<br>mírame.</p><p>Ya sé que te cuesta apartar<br>los ojos de Jesús<br>para ponerlos en mis miserias.<br>Pero, Madre, si tú no me miras,<br>¿cómo se disiparán mis penas?<br>Si tú no te vuelves hacia mi rincón,<br>¿quién se acordará de mí?<br>Si tú no me miras,<br>Jesús, que tiene<br>sus ojitos clavados<br>en los tuyos,<br>no me mirará.<br>Si tú me miras,<br>Él seguirá tu mirada y me verá.</p><p>Y entonces, con que le digas:<br>“¡Pobrecito! Necesita nuestra ayuda”<br>Jesús me atraerá a sí<br>y me bendecirá y lo amaré,<br>y me dará fuerza y alegría,<br>y confianza y desprendimiento,<br>y me llenará de su amor y<br>de tu amor, y trabajaré mucho<br>por Él y por Ti,<br>y haré que todos los amen<br>y amándote se salvarán.<br>¡Madre! ¡Y sólo con que me mires!"
    },
    {
        titulo: "Quédate con nosotros", autor: "Oración Orientaciones Pastorales",
        texto: "Quédate con nosotros, Señor,<br>para calmar nuestros temores,<br>para apoyarnos en nuestras debilidades,<br>para santificarnos por tu Espíritu.</p><p>Quédate con nosotros<br>para vivir relaciones más fraternas,<br>para avanzar en sinodalidad y en misión compartida,<br>para construir una cultura del cuidado y del buen trato.</p><p>Quédate con nosotros,<br>para dar testimonio de nuestra fe en medio del mundo,<br>para salir al encuentro de los pobres y sufrientes,<br>para acompañar a los jóvenes en sus búsquedas y alegrías.</p><p>Quédate con nosotros, Señor,<br>y que tu presencia cercana y luminosa<br>en tu Palabra y en la Eucaristía,<br>nos llenen de gozo y de valentía en la misión.</p><p>Te lo pedimos junto a María,<br>y como ella nos quedamos contigo. Amén"
    },
    {
        titulo: "A la Virgen", autor: "Gabriela Mistral",
        texto: "Madre, ya estoy aquí.<br>A tus pies dejaré el corazón,<br>triste el vivir, el vivir sin ti;<br>larga el ansia y larga la aflicción.</p><p>En el más hondo pliegue<br>de tu ancho manto<br>este viejo cansancio deja dormir;<br>dame a enjugar mi llanto<br>y dame el sol antes de morir.</p><p>Madre, ya estoy aquí.<br>Llevé paz, traje tribulación<br>si no descansa por fin en ti,<br>¿dónde va a descansar<br>el corazón?"
    },
    {
        titulo: "Oración a María, madre de la Iglesia y madre de nuestra fe", autor: "Papa Francisco, Lumen fidei 60",
        texto: "¡Madre, ayuda nuestra fe!<br>Abre nuestro oído a la Palabra,<br>para que reconozcamos la voz de Dios y su llamada.<br>Aviva en nosotros el deseo de seguir sus pasos,<br>saliendo de nuestra tierra y confiando en su promesa.</p><p>Ayúdanos a dejarnos tocar por su amor,<br>para que podamos tocarlo en la fe.</p><p>Ayúdanos a fiarnos plenamente de él, a creer en su amor,<br>sobre todo en los momentos de tribulación y de cruz,<br>cuando nuestra fe es llamada a crecer y a madurar.</p><p>Siembra en nuestra fe la alegría del Resucitado.<br>Recuérdanos que quien cree no está nunca solo.<br>Enséñanos a mirar con los ojos de Jesús,<br>para que él sea luz en nuestro camino.<br>Y que esta luz de la fe crezca continuamente en nosotros,<br>hasta que llegue el día sin ocaso, que es el mismo Cristo,<br>tu Hijo, nuestro Señor."
    },
    {
        titulo: "Oración a Nuestra Señora de la Paz", autor: "Esteban Gumucio ss.cc.",
        texto: "Virgen María, madre de Jesús,<br>en tu corazón de mujer<br>se besaron la justicia y la paz,<br>la misericordia y la verdad.</p><p>Que tu Hijo Resucitado nos dé esa paz<br>que el mundo no sabe dar;<br>paz que renueve nuestra alianza con el Padre<br>y nos reconcilie con nosotros mismos;<br>paz que sea comunión de corazones en la fe,<br>forjadora de comunidad.</p><p>Paz que nos lleve al amor solidario<br>con los más necesitados;<br>paz que brille como esperanza<br>para todo hombre y todos los hombres.</p><p>Paz que nos llene de celo misionero<br>del corazón de Jesús;<br>paz que lleve al mundo entero<br>la Buena Nueva de misericordia y justicia,<br>de amor y verdad, de alegría y libertad.</p><p>Que a Jesucristo sea la gloria,<br>en el Espíritu Santo<br>para alabanza del Padre.</p><p>Amén."
    }
];

// Celebración de la Solemnidad de la Inmaculada Concepción (8 de diciembre)
// para comunidades que no cuentan con celebración eucarística.
// Estructura y textos según el folleto oficial.
// Roles: A = Animador, G = Guía, L = Lector, T = Todos.
const MM_CELEBRACION = [
    { tipo: "titulo", texto: "Motivación" },
    { rol: "G", texto: "Durante este mes nos hemos reunido para rezar con María, en el centenario de la coronación de la Virgen del Carmen como Reina y Madre de Chile. Hoy celebramos con alegría a la Inmaculada, la «llena de gracia», preservada de todo pecado. También nosotros, por el bautismo, hemos recibido la gracia de ser hijos e hijas de Dios. Comencemos cantando." },
    { tipo: "titulo", texto: "Canto de entrada", canto: true },
    { tipo: "titulo", texto: "Rito de acogida" },
    { rol: "A", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo." },
    { rol: "T", texto: "Amén." },
    { rol: "A", texto: "Te bendecimos, Dios nuestro Padre, porque has escogido a la Virgen María como Madre de tu Hijo, haciéndola santa e inmaculada en tu presencia y la colmaste de tu amor y de tu belleza. En este día de su fiesta, y en su nombre, queremos bendecirte y darte gracias por Jesucristo, su Hijo, ¡por los siglos de los siglos!" },
    { rol: "T", texto: "Amén." },
    { tipo: "titulo", texto: "Acto penitencial" },
    { rol: "A", texto: "Hermanos y hermanas, la fiesta de la Inmaculada Concepción es la fiesta de la belleza de Dios en el corazón de una madre, la fiesta del poder de su gracia en el corazón de una mujer. Que nuestra Señora nos ayude a apartarnos de aquello que entristece a Dios y podamos así acoger mejor a Jesús." },
    { rol: "T", texto: "Yo confieso ante Dios todopoderoso y ante ustedes, hermanos, que he pecado mucho de pensamiento, palabra, obra y omisión. Por mi culpa, por mi culpa, por mi gran culpa. Por eso ruego a Santa María, siempre Virgen, a los ángeles, a los santos y a ustedes, hermanos, que intercedan por mí ante Dios, nuestro Señor." },
    { tipo: "nota", texto: "También se puede entonar un canto de perdón." },
    { tipo: "titulo", texto: "Liturgia de la Palabra" },
    { tipo: "subtitulo", texto: "Motivación a la primera lectura" },
    { rol: "G", texto: "Después del primer pecado, Dios no abandona a la humanidad: promete que la descendencia de la mujer vencerá al mal. Escuchemos con atención." },
    { tipo: "lectura", rol: "L", titulo: "Lectura del libro del Génesis", cita: "Gn 3,9-15.20", aclamacion: "otro" },
    { tipo: "subtitulo", texto: "Motivación al salmo" },
    { rol: "G", texto: "La promesa se cumplió en Jesucristo, hijo de María. Respondamos con alegría alabando al Señor." },
    { tipo: "salmo", rol: "L", titulo: "Salmo responsorial", cita: "Sal 98 (97), 1-4",
      respuesta: "Canten al Señor un canto nuevo, porque Él hizo maravillas.",
      estrofas: [
          "Canten al Señor un canto nuevo, porque Él hizo maravillas: su mano derecha y su santo brazo le obtuvieron la victoria.",
          "El Señor manifestó su victoria, reveló su justicia a los ojos de las naciones: se acordó de su amor y su fidelidad a favor del pueblo de Israel.",
          "Los confines de la tierra han contemplado el triunfo de nuestro Dios. Aclame al Señor toda la tierra, prorrumpan en cantos jubilosos."
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
    { rol: "A", texto: "Imploremos la intercesión de María inmaculada, respondiendo a cada intercesión: ¡Ruega al Señor por nosotros!" },
    { rol: "G", texto: "Santa María, humilde hija de Nazaret, esposa de José el carpintero, Virgen llena de gracia." },
    { rol: "T", texto: "¡Ruega al Señor por nosotros!" },
    { rol: "G", texto: "Sierva del Señor, fuiste amada por Dios en nuestra tierra. Llevas al Niño Jesús en tu corazón." },
    { rol: "T", texto: "¡Ruega al Señor por nosotros!" },
    { rol: "G", texto: "Mujer bendita entre las mujeres, orgullo de todas las mujeres, belleza de todas las mujeres." },
    { rol: "T", texto: "¡Ruega al Señor por nosotros!" },
    { rol: "G", texto: "Gloria y honor del Pueblo de Dios, Reina y alegría de todos los hombres, mujer vestida de sol, coronada de doce estrellas." },
    { rol: "T", texto: "¡Ruega al Señor por nosotros!" },
    { tipo: "nota", texto: "Se puede invitar a los presentes a expresar sus propias intenciones." },
    { rol: "A", texto: "Tómame de la mano; Madre, guíame. Contigo tendré más fuerza en la lucha de cada día, contigo redescubriré mi belleza original." },
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
    { rol: "A", texto: "Llena del Espíritu Santo, María profetizó: «¡En adelante todas las generaciones me llamarán feliz!». Nosotros también queremos cumplir la profecía. Juntos bendigamos a Dios nuestro Padre por las maravillas de amor que realizó en María y también por aquellas que realiza en nosotros cada día." },
    { tipo: "lectura", rol: "T", titulo: "Cántico de María", cita: "Lc 1,46-55", sinAclamacion: true },
    { tipo: "titulo", texto: "Oración de conclusión" },
    { rol: "A", texto: "Señor, Dios nuestro, que el sacramento recibido repare en nosotros las consecuencias del mal, de la que preservaste a la Virgen María en su Concepción Inmaculada. Digamos juntos:" },
    { rol: "T", texto: "Dios te salve, María, llena eres de gracia…" },
    { tipo: "titulo", texto: "Envío y bendición" },
    { rol: "A", texto: "Hermanos y hermanas, hemos celebrado la Solemnidad de la Inmaculada Concepción de la Virgen María. Sabemos que María nos conduce a su Hijo, Jesús Resucitado y nos invita a hacer lo que Él nos dice. Por Jesucristo Nuestro Señor." },
    { rol: "T", texto: "Amén." },
    { rol: "A", texto: "El Señor nos bendiga, nos guarde de todo mal y nos lleve a la vida eterna." },
    { rol: "T", texto: "Amén." },
    { tipo: "titulo", texto: "Canto final a la Virgen", canto: true }
];
