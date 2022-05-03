const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainer = document.getElementById('question-container')



//startButton.addEventListener('click', startGame)
// nextButton.addEventListener('click', () =>{
    
    
// })

// function startGame() {
// console.log('Started')
// startButton.classList.add('hide')


// }





const questions = [
{
question: "What gets stolen from Mr. Pitt's lobby?",
answers: [
    {text: 'couch', correct: true},
    {text: 'umbrella', correct: false},
    {text: 'mail', correct: false}
]},
{question: "Who peed on Jerry's new sofa?",
answers: [
    {text: 'Newman', correct: false},
    {text: 'Kramer', correct: false},
    {text: 'Poppie', correct: true}
]},
{question: "Kramer's friend, Bob Cobb wants to be called what?",
answers: [
    {text: 'Doc', correct: false},
    {text: 'Maestro', correct: true},
    {text: 'Judge', correct: false}
]
}]


let questionNumber = 0

//questionContainer.innerText = questions[0];
let questionText = document.querySelector('#question')
questionText.innerHTML = questions[questionNumber].question;
questions[0].answers.forEach(function(answer){
   let answerButton = document.createElement('button')
   answerButton.innerHTML = answer.text;
   answerButton.dataset.correct = answer.correct
   document.querySelector('#answer-buttons').appendChild(answerButton)
})