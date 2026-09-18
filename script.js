/* =========================================================
   PREGUNTES
========================================================= */

const questions = [

    {
        question: "El motor gira?",
        problem: "Posa una marxa, treu el fre de mà i empeny el cotxe. Comprova si el motor pot girar. Si continua bloquejat, pot haver-hi el motor gripat o algun problema intern."
    },

    {
        question: "La bateria i el motor d'arrencada funcionen?",
        problem: "Comprova la bateria, els terminals, la massa i el motor d'arrencada. Una bateria baixa o una mala connexió poden impedir que el motor giri correctament."
    },

    {
        question: "Hi ha espurna a les bugies?",
        problem: "Comprova les bugies, els cables d'alta tensió, la bobina, el distribuïdor i les connexions del sistema d'encesa."
    },

    {
        question: "El motor rep gasolina?",
        problem: "Comprova el dipòsit, les canonades, el filtre de gasolina, la bomba i el carburador o sistema d'injecció."
    },

    {
        question: "La combustió està ben sincronitzada?",
        problem: "Comprova el punt d'encesa, la distribució i que l'ordre d'encesa sigui correcte."
    },

    {
        question: "El motor té bona compressió?",
        problem: "Fes una prova de compressió. Si és baixa, revisa vàlvules, junta de culata, pistons, segments i cilindres."
    },

    {
        question: "Hi ha oli al motor i està en bon estat?",
        problem: "Comprova el nivell d'oli i el seu estat. Si està molt brut o degradat, fes un canvi d'oli."
    },

    {
        question: "El filtre d'oli està en bon estat?",
        problem: "Revisa el filtre d'oli i substitueix-lo si està brut o si no se sap quan es va canviar."
    },

    {
        question: "El sistema de refrigeració té líquid i no té fuites?",
        problem: "Comprova el radiador, les mànegues, el vas d'expansió, la bomba d'aigua i possibles fuites."
    },

    {
        question: "El motor manté una temperatura correcta?",
        problem: "Comprova el termòstat, el radiador, la bomba d'aigua i el sistema de refrigeració."
    },

    {
        question: "El ventilador entra en funcionament quan toca?",
        problem: "Comprova el ventilador, el termocontacte, els fusibles i les connexions elèctriques."
    },

    {
        question: "L'embragatge funciona correctament?",
        problem: "Comprova el pedal, el cable o sistema hidràulic i el conjunt d'embragatge."
    },

    {
        question: "La caixa de canvis funciona i entren totes les marxes?",
        problem: "Comprova que les marxes entrin correctament i revisa l'oli de la caixa de canvis."
    },

    {
        question: "Els palieres i la transmissió estan en bon estat?",
        problem: "Comprova els palieres, juntes, manxes i elements de transmissió."
    },

    {
        question: "Els pneumàtics estan en bon estat?",
        problem: "Comprova l'estat de la goma, la pressió, el desgast i possibles esquerdes o deformacions."
    },

    {
        question: "Les rodes giren correctament i no tenen joc excessiu?",
        problem: "Comprova els coixinets, les ròtules i els elements de fixació de les rodes."
    },

    {
        question: "Els amortidors estan en bon estat?",
        problem: "Comprova que no perdin oli i que treballin correctament."
    },

    {
        question: "Les barres estabilitzadores i els seus elements estan en bon estat?",
        problem: "Comprova les barres, silentblocks, bieletes i punts de fixació."
    },

    {
        question: "La direcció funciona correctament i no té joc excessiu?",
        problem: "Comprova la caixa de direcció, ròtules, terminals i columna de direcció."
    },

    {
        question: "El pedal de fre funciona correctament?",
        problem: "Comprova el recorregut del pedal, el líquid de frens i possibles fuites."
    },

    {
        question: "Els frens de les quatre rodes funcionen correctament?",
        problem: "Revisa discos o tambors, pastilles o sabates, bombins, pinces i canonades."
    },

    {
        question: "El fre de mà funciona correctament?",
        problem: "Comprova el cable, el mecanisme i els frens posteriors."
    },

    {
        question: "Els fars funcionen?",
        problem: "Comprova bombetes, fusibles, interruptors i connexions."
    },

    {
        question: "Funcionen els intermitents?",
        problem: "Comprova bombetes, relé, interruptor i instal·lació elèctrica."
    },

    {
        question: "Funcionen les llums de fre?",
        problem: "Comprova les bombetes, el fusible i l'interruptor del pedal de fre."
    },

    {
        question: "Funcionen les llums de posició i matrícula?",
        problem: "Comprova bombetes, fusibles i connexions."
    },

    {
        question: "El clàxon funciona?",
        problem: "Comprova el clàxon, el fusible, el botó i les connexions."
    },

    {
        question: "La carrosseria i el xassís estan en condicions segures per circular?",
        problem: "Revisa especialment la corrosió, el xassís, els punts estructurals, les portes, el capó i els elements que puguin afectar la seguretat."
    }

];


let currentQuestion = 0;


/* =========================================================
   INICIAR MANUAL
========================================================= */

function startManual() {

    document
        .getElementById("cover")
        .classList.add("hidden");

    document
        .getElementById("manual")
        .classList.remove("hidden");

    currentQuestion = 0;

    updateProgress();

    showQuestion();
}


/* =========================================================
   MOSTRAR PREGUNTA
========================================================= */

function showQuestion() {

    const content =
        document.getElementById("content");

    const question =
        questions[currentQuestion];


    content.style.animation = "none";

    void content.offsetWidth;

    content.style.animation =
        "contentAppear .5s ease";


    content.innerHTML = `

        <div class="question-number">
            DIAGNOSI · PAS ${String(currentQuestion + 1).padStart(2, "0")}
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

    updateProgress();
}


/* =========================================================
   RESPOSTA SÍ
========================================================= */

function answerYes() {

    nextQuestion();
}


/* =========================================================
   RESPOSTA NO
========================================================= */

function answerNo() {

    const content =
        document.getElementById("content");

    const question =
        questions[currentQuestion];


    content.style.animation = "none";

    void content.offsetWidth;

    content.style.animation =
        "contentAppear .5s ease";


    content.innerHTML = `

        <div class="question-number">
            PROBLEMA DETECTAT
        </div>


        <h1 class="question">
            ${question.question}
        </h1>


        <div class="problem-box">

            <button
                class="done-button"
                onclick="nextQuestion()">

                FET

            </button>


            <h2>
                Què has de revisar
            </h2>


            <p>
                ${question.problem}
            </p>

        </div>

    `;
}


/* =========================================================
   SEGÜENT PREGUNTA
========================================================= */

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        questions.length
    ) {

        showFinish();

        return;
    }


    showQuestion();
}


/* =========================================================
   ACTUALITZAR PROGRÉS
========================================================= */

function updateProgress() {

    const total =
        questions.length;

    const current =
        currentQuestion + 1;


    const percentage =
        (currentQuestion / total) * 100;


    document
        .getElementById("progress")
        .textContent =
        `Pregunta ${current} de ${total}`;


    document
        .getElementById("progress-bar")
        .style.width =
        `${percentage}%`;


    document
        .getElementById("footer-step")
        .textContent =
        `${String(current).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
}


/* =========================================================
   PANTALLA FINAL
========================================================= */

function showFinish() {

    document
        .getElementById("progress")
        .textContent =
        "Diagnosi completada";


    document
        .getElementById("progress-bar")
        .style.width =
        "100%";


    document
        .getElementById("footer-step")
        .textContent =
        "FINAL";


    const content =
        document.getElementById("content");


    content.innerHTML = `

        <div class="finish-screen">

            <div class="question-number">
                PROCÉS COMPLETAT
            </div>


            <h1>
                Revisió<br>
                completada
            </h1>


            <p>
                Has completat totes les comprovacions
                bàsiques del vehicle.
                <br><br>
                Abans de circular, comprova sempre
                l'estat general del vehicle i compleix
                els requisits legals i de seguretat.
            </p>


            <button
                class="restart-button"
                onclick="restartManual()">

                TORNAR A COMENÇAR

            </button>

        </div>

    `;
}


/* =========================================================
   REINICIAR
========================================================= */

function restartManual() {

    currentQuestion = 0;


    document
        .getElementById("manual")
        .classList.add("hidden");


    document
        .getElementById("cover")
        .classList.remove("hidden");


    document
        .getElementById("progress-bar")
        .style.width =
        "0%";


    updateProgress();
}