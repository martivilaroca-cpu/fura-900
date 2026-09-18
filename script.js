/* ============================================================
   RESTAURACIÓ SEAT FURA 900
   SISTEMA DE PREGUNTES SÍ / NO
   ============================================================ */


/* ------------------------------------------------------------
   PREGUNTES
   ------------------------------------------------------------

   Cada pregunta té:

   question = pregunta que apareix a la pantalla

   noTitle = títol que apareix si contestem NO

   noText = explicació del que s'ha de fer si contestem NO
------------------------------------------------------------ */


const questions = [

    {
        question: "El motor gira?",
        noTitle: "El motor no gira",
        noText:
            "Posa la primera marxa, treu el fre de mà i empeny el cotxe suaument. L'objectiu és comprovar si el motor es pot fer girar. Si continua sense girar, el motor pot estar bloquejat o gripat i caldrà revisar-lo abans de continuar."
    },


    {
        question: "La bateria i el motor d'arrencada funcionen?",
        noTitle: "Revisa la bateria i el motor d'arrencada",
        noText:
            "Comprova que la bateria estigui carregada i que els borns estiguin nets i ben subjectats. Si la bateria està bé però el motor d'arrencada no funciona, cal revisar el motor d'arrencada, els cables i les connexions."
    },


    {
        question: "Hi ha espurna a les bugies?",
        noTitle: "Revisa el sistema d'encesa",
        noText:
            "Cal revisar les bugies, els cables d'alta, el distribuïdor, la bobina i les connexions del sistema d'encesa. L'objectiu és aconseguir una espurna correcta abans de continuar."
    },


    {
        question: "El motor rep gasolina?",
        noTitle: "Revisa el sistema de combustible",
        noText:
            "Comprova que hi hagi gasolina al dipòsit. Després revisa el conducte de gasolina, el filtre, la bomba de gasolina i el carburador. El combustible ha d'arribar correctament al motor."
    },


    {
        question: "La combustió està ben sincronitzada?",
        noTitle: "Revisa el punt d'encesa i la distribució",
        noText:
            "Cal comprovar que el punt d'encesa sigui correcte i que la distribució estigui ben sincronitzada. Ajusta el sistema segons les especificacions del motor."
    },


    {
        question: "El motor té bona compressió?",
        noTitle: "Revisa l'interior del motor",
        noText:
            "Cal comprovar la compressió del motor. Si és massa baixa, pot ser necessari revisar la culata, les vàlvules, la junta de culata, els pistons, els segments i els cilindres."
    },


    {
        question: "Hi ha oli al motor i està en bon estat?",
        noTitle: "Canvia l'oli del motor",
        noText:
            "Comprova el nivell d'oli amb la vareta. Si el nivell és baix o l'oli està en mal estat, fes un canvi d'oli i posa l'oli adequat per al motor."
    },


    {
        question: "El filtre d'oli està en bon estat?",
        noTitle: "Substitueix el filtre d'oli",
        noText:
            "Substitueix el filtre d'oli per un de nou. Després comprova que no hi hagi cap fuita d'oli."
    },


    {
        question: "El sistema de refrigeració té líquid i no té fuites?",
        noTitle: "Revisa el sistema de refrigeració",
        noText:
            "Comprova el nivell del líquid refrigerant i revisa el radiador, els manguitos i les connexions. Repara qualsevol fuita abans de continuar."
    },


    {
        question: "El motor manté una temperatura correcta?",
        noTitle: "Revisa la refrigeració del motor",
        noText:
            "Comprova el radiador, el termòstat, la bomba d'aigua i el circuit de refrigeració. No mantinguis el motor funcionant si s'escalfa excessivament."
    },


    {
        question: "El ventilador entra en funcionament quan toca?",
        noTitle: "Revisa el ventilador",
        noText:
            "Comprova el ventilador, el termocontacte, els fusibles, el cablejat i les connexions. El ventilador ha d'entrar en funcionament quan el motor arriba a la temperatura corresponent."
    },


    {
        question: "L'embragatge funciona correctament?",
        noTitle: "Revisa l'embragatge",
        noText:
            "Comprova que el pedal funcioni correctament i que l'embragatge transmeti la força sense patinar. Si hi ha problemes, cal revisar el mecanisme, el disc, el plat i el collarí."
    },


    {
        question: "La caixa de canvis funciona i entren totes les marxes?",
        noTitle: "Revisa la caixa de canvis",
        noText:
            "Comprova que totes les marxes entrin correctament. Si no entren o fan sorolls anormals, cal revisar el comandament del canvi, l'embragatge i la caixa de canvis."
    },


    {
        question: "Els palieres i la transmissió estan en bon estat?",
        noTitle: "Revisa la transmissió",
        noText:
            "Revisa els palieres, les juntes i els guardapols. Si hi ha joc excessiu, cops, esquerdes o pèrdues de greix, cal reparar-los abans de circular."
    },


    {
        question: "Els pneumàtics estan en bon estat?",
        noTitle: "Canvia els pneumàtics",
        noText:
            "Comprova que els pneumàtics no estiguin excessivament desgastats, esquerdats o deformats. Comprova també que tinguin la pressió correcta. Si no estan en condicions, substitueix-los."
    },


    {
        question: "Les rodes giren correctament i no tenen joc excessiu?",
        noTitle: "Revisa les rodes i els rodaments",
        noText:
            "Comprova que les rodes girin correctament i que no hi hagi un joc anormal. Cal revisar els rodaments, els bujes i els elements associats."
    },


    {
        question: "Els amortidors estan en bon estat?",
        noTitle: "Revisa els amortidors",
        noText:
            "Comprova que els amortidors no tinguin fuites d'oli ni danys visibles. També comprova que el cotxe no reboti excessivament. Si estan malmesos, cal substituir-los."
    },


    {
        question: "Les barres estabilitzadores i els seus elements estan en bon estat?",
        noTitle: "Revisa les barres estabilitzadores",
        noText:
            "Revisa els silentblocks, les bieletes i els seus ancoratges. Si estan trencats, esquerdats o tenen massa joc, cal substituir-los."
    },


    {
        question: "La direcció funciona correctament i no té joc excessiu?",
        noTitle: "Revisa la direcció",
        noText:
            "Comprova que el volant mogui les rodes amb normalitat i que no hi hagi un joc excessiu. Si hi ha problemes, cal revisar la caixa de direcció, les ròtules i els terminals."
    },


    {
        question: "El pedal de fre funciona correctament?",
        noTitle: "Revisa els frens abans de continuar",
        noText:
            "El pedal de fre ha de tenir una sensació ferma i no hauria de baixar fins al fons. Si el pedal està molt tou o baixa massa, no circulis amb el vehicle i fes revisar el sistema de frens."
    },


    {
        question: "Els frens de les quatre rodes funcionen correctament?",
        noTitle: "Revisa el sistema de frens",
        noText:
            "Cal revisar discos o tambors, pastilles o sabates, bombes, conduccions i líquid de frens. No circulis fins solucionar qualsevol problema del sistema de frenada."
    },


    {
        question: "El fre de mà funciona correctament?",
        noTitle: "Repara o ajusta el fre de mà",
        noText:
            "Comprova que el fre de mà mantingui el vehicle immobilitzat. Si no ho fa, cal revisar i ajustar el mecanisme."
    },


    {
        question: "Els fars funcionen?",
        noTitle: "Revisa els fars",
        noText:
            "Comprova les bombetes, els fusibles, els interruptors i el cablejat. Substitueix o repara l'element que estigui fallant."
    },


    {
        question: "Funcionen els intermitents?",
        noTitle: "Revisa els intermitents",
        noText:
            "Comprova les bombetes, els fusibles, el comandament i el cablejat. Repara qualsevol avaria."
    },


    {
        question: "Funcionen les llums de fre?",
        noTitle: "Revisa les llums de fre",
        noText:
            "Comprova les bombetes, el fusible, el cablejat i l'interruptor del pedal de fre."
    },


    {
        question: "Funcionen les llums de posició i matrícula?",
        noTitle: "Revisa les llums",
        noText:
            "Comprova les bombetes, els fusibles i el cablejat. Substitueix o repara els elements que no funcionin."
    },


    {
        question: "El clàxon funciona?",
        noTitle: "Revisa el clàxon",
        noText:
            "Comprova el fusible, el botó, el cablejat i el mateix clàxon."
    },


    {
        question: "La carrosseria i el xassís estan en condicions segures per circular?",
        noTitle: "Repara la carrosseria o el xassís",
        noText:
            "Revisa especialment l'òxid, les zones estructurals, els ancoratges i qualsevol deformació important. Qualsevol problema que afecti la seguretat s'ha de reparar abans de circular."
    }

];


/* ------------------------------------------------------------
   VARIABLES
------------------------------------------------------------ */

let currentQuestion = 0;


/* ------------------------------------------------------------
   ELEMENT PRINCIPAL
------------------------------------------------------------ */

const appContent = document.getElementById("app-content");
const progress = document.getElementById("progress");


/* ------------------------------------------------------------
   MOSTRAR PREGUNTA
------------------------------------------------------------ */

function showQuestion() {

    const question = questions[currentQuestion];

    progress.textContent =
        `${currentQuestion + 1} / ${questions.length}`;


    appContent.innerHTML = `

        <section class="question-container">

            <p class="question-number">
                Pregunta ${currentQuestion + 1}
            </p>

            <h1 class="question">
                ${question.question}
            </h1>

            <div class="buttons">

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

        </section>

    `;
}


/* ------------------------------------------------------------
   SI
------------------------------------------------------------ */

function answerYes() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        showFinish();

    } else {

        showQuestion();

    }

}


/* ------------------------------------------------------------
   NO
------------------------------------------------------------ */

function answerNo() {

    const question = questions[currentQuestion];

    appContent.innerHTML = `

        <section class="problem-container">

            <div class="problem-box">

                <button
                    class="done-button"
                    onclick="problemFixed()">
                    FET
                </button>

                <p class="problem-label">
                    PROBLEMA DETECTAT
                </p>

                <h1 class="problem-title">
                    ${question.noTitle}
                </h1>

                <p class="problem-text">
                    ${question.noText}
                </p>

            </div>

        </section>

    `;

}


/* ------------------------------------------------------------
   FET
------------------------------------------------------------ */

function problemFixed() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        showFinish();

    } else {

        showQuestion();

    }

}


/* ------------------------------------------------------------
   FINAL
------------------------------------------------------------ */

function showFinish() {

    progress.textContent = "COMPLETAT";

    appContent.innerHTML = `

        <section class="finish-container">

            <div class="finish-icon">
                ✓
            </div>

            <h1 class="finish-title">
                Revisió completada
            </h1>

            <p class="finish-text">
                Has completat totes les comprovacions del formulari
                de restauració del SEAT Fura 900.
            </p>

            <button
                class="restart-button"
                onclick="restart()">
                Tornar a començar
            </button>

        </section>

    `;

}


/* ------------------------------------------------------------
   REINICIAR
------------------------------------------------------------ */

function restart() {

    currentQuestion = 0;

    showQuestion();

}


/* ------------------------------------------------------------
   INICIAR APLICACIÓ
------------------------------------------------------------ */

showQuestion();