// Check that JavaScript file is loaded
console.log("script.js is loaded!") // comment behind code

/* Your code here

allt här är en kommentar


 */

let myVariable = "Hello";

// Våra frågor och svar
const questions = [{ "question": "Fråga1", "answer": "Svar1" }, { "question": "Fråga2", "answer": "Svar2" }, { "question": "Fråga3", "answer": "Svar3" }];
// console.log(questions);

// Initiala värden
let question = "";
let correctAnswer = "";
let yourAnswer = "";
let index = 0;
let score = 0;

// Våra HTML element
const showQuestion = document.querySelector("#question");
const getAnswer = document.querySelector("#input1");
const result = document.querySelector("#result");
const showScore = document.querySelector("#score");

// Element och lyssnare för kontrollera svar
const btnCheckAnswer = document.querySelector("#checkAnswer");
btnCheckAnswer.addEventListener("click", checkAnswer);

// Skriv ut första frågan i HTML
showQuestion.innerHTML = questions[index].question;

// Funktionen som kontrollerar svaret och gör lite till
function checkAnswer() {

    if (questions.length == index) {
        showQuestion.innerHTML = "Frågorna är slut!";
        showScore.innerHTML = "";
        getAnswer.value = "";
        result.innerHTML = "Alla frågor är besvarade. Din poäng blev " + score;
        return;
    }


    // sätt värden på våra variabler
    yourAnswer = getAnswer.value;
    correctAnswer = questions[index].answer;

    // kontrollera om svaret är rätt
    if (correctAnswer.toLocaleLowerCase() == yourAnswer.toLocaleLowerCase()) {
        score++;
        result.innerHTML = "Rätt";
    }
    else {
        result.innerHTML = "Fel";
    }

    // Skriv ut poäng
    showScore.innerHTML = score;

    // Nästa fråga
    if (questions.length != index) {
        index++;
        showQuestion.innerHTML = questions[index].question;
        getAnswer.value = "";
    }

};