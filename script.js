const questions = [

    {
        question: "El motor gira?",
        noTitle: "El motor no gira",
        noText: "Posa primera marxa, treu el fre de mà i empeny el cotxe per comprovar si el motor gira. Si les rodes es bloquegen i el motor no es mou, pot estar gripat o bloquejat i caldrà revisar l'interior del motor."
    },

    {
        question: "La bateria i el motor d'arrencada funcionen?",
        noTitle: "Revisa la bateria i l'arrencada",
        noText: "Comprova l'estat de la bateria, les connexions i els cables. Revisa també el motor d'arrencada i comprova si gira correctament quan intentes arrencar."
    },

    {
        question: "Hi ha espurna a les bugies?",
        noTitle: "Revisa el sistema d'encesa",
        noText: "Comprova les bugies, els cables d'alta tensió, la bobina, el distribuïdor i les seves connexions. Cal assegurar-se que l'espurna arriba correctament a les bugies."
    },

    {
        question: "El motor rep gasolina?",
        noTitle: "Revisa l'alimentació de combustible",
        noText: "Comprova que hi hagi gasolina al dipòsit i que arribi correctament al carburador. Revisa les mànegues, el filtre de gasolina i la bomba de combustible."
    },

    {
        question: "La combustió està ben sincronitzada?",
        noTitle: "Revisa la sincronització",
        noText: "Comprova el punt d'encesa i la posició del distribuïdor. Revisa també que la distribució del motor estigui correctament sincronitzada."
    },

    {
        question: "El motor té bona compressió?",
        noTitle: "Revisa la compressió del motor",
        noText: "Fes una prova de compressió als cilindres. Si algun cilindre té una compressió massa baixa, cal revisar vàlvules, junta de culata, pistons, segments i cilindres."
    },

    {
        question: "Hi ha oli al motor i està en bon estat?",
        noTitle: "Revisa l'oli del motor",
        noText: "Comprova el nivell d'oli i el seu estat. Si està molt degradat o contaminat, cal substituir-lo abans de continuar."
    },

    {
        question: "El filtre d'oli està en bon estat?",
        noTitle: "Canvia o revisa el filtre d'oli",
        noText: "Comprova que el filtre no estigui obstruït o excessivament brut. Si és necessari, substitueix-lo."
    },

    {
        question: "El sistema de refrigeració té líquid i no té fuites?",
        noTitle: "Revisa la refrigeració",
        noText: "Comprova el nivell del líquid refrigerant i revisa radiador, mànegues, unions i bomba d'aigua per detectar possibles fuites."
    },

    {
        question: "El motor manté una temperatura correcta?",
        noTitle: "Revisa la temperatura del motor",
        noText: "Comprova que el motor no s'escalfi massa ni treballi a una temperatura incorrecta. Revisa el termòstat, el radiador i el circuit de refrigeració."
    },

    {
        question: "El ventilador entra en funcionament quan toca?",
        noTitle: "Revisa el ventilador",
        noText: "Comprova que el ventilador funcioni quan el motor arriba a la temperatura de funcionament. Revisa el seu sistema d'accionament i les connexions."
    },

    {
        question: "L'embragatge funciona correctament?",
        noTitle: "Revisa l'embragatge",
        noText: "Comprova que el pedal tingui un funcionament correcte i que l'embragatge permeti connectar i desconnectar el motor de la caixa de canvis sense patinar ni quedar enganxat."
    },

    {
        question: "La caixa de canvis funciona i entren totes les marxes?",
        noTitle: "Revisa la caixa de canvis",
        noText: "Comprova que totes les marxes entrin correctament i que la palanca no presenti problemes. Revisa també el mecanisme de selecció."
    },

    {
        question: "Els palieres i la transmissió estan en bon estat?",
        noTitle: "Revisa la transmissió",
        noText: "Inspecciona els palieres, juntes i elements de transmissió. Comprova que no tinguin joc excessiu, esquerdes o danys."
    },

    {
        question: "Els pneumàtics estan en bon estat?",
        noTitle: "Revisa els pneumàtics",
        noText: "Comprova que els pneumàtics no tinguin esquerdes, deformacions o desgast excessiu i que mantinguin una pressió adequada."
    },

    {
        question: "Les rodes giren correctament i no tenen joc excessiu?",
        noTitle: "Revisa les rodes",
        noText: "Aixeca el vehicle de manera segura i comprova que les rodes girin correctament i que els rodaments i altres elements no tinguin un joc excessiu."
    },

    {
        question: "Els amortidors estan en bon estat?",
        noTitle: "Revisa els amortidors",
        noText: "Comprova que no hi hagi fuites d'oli i que els amortidors treballin correctament. També revisa el seu estat general."
    },

    {
        question: "Les barres estabilitzadores i els seus elements estan en bon estat?",
        noTitle: "Revisa les barres estabilitzadores",
        noText: "Comprova les barres estabilitzadores, silentblocks, bieletes i les seves fixacions. Busca esquerdes, desgast o jocs excessius."
    },

    {
        question: "La direcció funciona correctament i no té joc excessiu?",
        noTitle: "Revisa la direcció",
        noText: "Comprova el volant, la caixa o cremallera de direcció, les ròtules i les articulacions. No hi ha d'haver un joc excessiu."
    },

    {
        question: "El pedal de fre funciona correctament?",
        noTitle: "Revisa el pedal de fre",
        noText: "Comprova que el pedal tingui un tacte correcte i que no baixi excessivament. Revisa també possibles fuites del sistema de frens."
    },

    {
        question: "Els frens de les quatre rodes funcionen correctament?",
        noTitle: "Revisa els frens",
        noText: "Comprova discs o tambors, pastilles o sabates, bombins o pinces, tubs i mànegues. Cal assegurar-se que les quatre rodes frenen correctament."
    },

    {
        question: "El fre de mà funciona correctament?",
        noTitle: "Revisa el fre de mà",
        noText: "Comprova que el fre de mà actuï correctament sobre les rodes corresponents i que mantingui el vehicle immobilitzat."
    },

    {
        question: "Els fars funcionen?",
        noTitle: "Revisa els fars",
        noText: "Comprova les bombetes, els fusibles, els cables, les connexions i els interruptors dels fars."
    },

    {
        question: "Funcionen els intermitents?",
        noTitle: "Revisa els intermitents",
        noText: "Comprova les bombetes, fusibles, connexions i el sistema d'intermitència."
    },

    {
        question: "Funcionen les llums de fre?",
        noTitle: "Revisa les llums de fre",
        noText: "Comprova les bombetes i el sensor o interruptor del pedal de fre, així com les connexions elèctriques."
    },

    {
        question: "Funcionen les llums de posició i matrícula?",
        noTitle: "Revisa les llums de posició i matrícula",
        noText: "Comprova bombetes, fusibles, cables i connexions de les llums de posició i de la matrícula."
    },

    {
        question: "El clàxon funciona?",
        noTitle: "Revisa el clàxon",
        noText: "Comprova el clàxon, el fusible, les connexions i el comandament del volant."
    },

    {
        question: "La carrosseria i el xassís estan en condicions segures per circular?",
        noTitle: "Revisa la carrosseria i el xassís",
        noText: "Comprova que no hi hagi corrosió estructural, esquerdes, deformacions o danys que puguin comprometre la seguretat del vehicle."
    }

];


let currentQuestion = 0;


/* =========================
   COMENÇAR
========================= */

function startManual() {

    document.getElementById("cover").classList.add("hidden");
    document.getElementById("manual").classList.remove("hidden");

    currentQuestion = 0;

    showQuestion();
}


/* =========================
   MOSTRAR PREGUNTA
========================= */

function showQuestion() {

    const content = document.getElementById("content");

    const question = questions[currentQuestion];

    document.getElementById("progress").textContent =
        `Pregunta ${currentQuestion + 1} de ${questions.length}`;


    content.innerHTML = `

        <div class="question-number">
            PREGUNTA ${currentQuestion + 1}
        </div>

        <h1 class="question">
            ${question.question}
        </h1>

        <div class="answer-buttons">

            <button
                class="answer-button yes-button"
                onclick="answerYes()">
                SÍ
            </button>

            <button
                class="answer-button no-button"
                onclick="answerNo()">
                NO
            </button>

        </div>

    `;
}


/* =========================
   RESPONDRE SÍ
========================= */

function answerYes() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {
        showFinish();
        return;
    }

    showQuestion();
}


/* =========================
   RESPONDRE NO
========================= */

function answerNo() {

    const content = document.getElementById("content");

    const question = questions[currentQuestion];

    content.innerHTML = `

        <div class="problem-box">

            <button
                class="done-button"
                onclick="problemFixed()">
                FET
            </button>

            <h2>
                ${question.noTitle}
            </h2>

            <p>
                ${question.noText}
            </p>

        </div>

    `;
}


/* =========================
   BOTÓ FET
========================= */

function problemFixed() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {
        showFinish();
        return;
    }

    showQuestion();
}


/* =========================
   FINAL
========================= */

function showFinish() {

    document.getElementById("progress").textContent =
        "Manual completat";

    const content = document.getElementById("content");

    content.innerHTML = `

        <div class="finish-screen">

            <h1>Revisió completada</h1>

            <p>
                Has completat totes les comprovacions del manual
                de diagnosi i restauració.
            </p>

            <p>
                Abans de circular, cal verificar que el vehicle
                compleix totes les condicions de seguretat i
                els requisits legals corresponents.
            </p>

            <button
                class="restart-button"
                onclick="restart()">
                TORNAR A COMENÇAR
            </button>

        </div>

    `;
}


/* =========================
   TORNAR A COMENÇAR
========================= */

function restart() {

    currentQuestion = 0;

    document.getElementById("manual").classList.add("hidden");
    document.getElementById("cover").classList.remove("hidden");

}