function startGame() {

const startButton = document.getElementById('start-btn')
// const nextButton = document.getElementById('next-btn')

// const questionContainer = document.getElementById('question-container')

let player = 0, quiz, test_status, question, answer, answers, an1, an2, an3, correct = 0;

startButton.addEventListener('click', startGame)
// nextButton.addEventListener('click', () =>{
    
    
// })

 
 console.log('Started')
 startButton.classList.add('hide')


// }





const questions = [
{
question: "What gets stolen from Mr. Pitt's lobby?",

    a: "couch", 
    b: "umbrella", 
    c: "mail", 
    answer: 'a'
},
{question: "Who peed on Jerry's new sofa?",

    a: 'Newman', 
    b: 'Kramer', 
    c: 'Poppie', 
    answer: 'c'
},
{question: "Kramer's friend, Bob Cobb wants to be called what?",

    a: 'Doc', 
    b: 'Maestro', 
    c: 'Judge', 
    answer: 'b'
},
{question: "Who is Jerry's favorite superhero?",
    a: 'Batman',
    b: 'Ironman',
    c: 'Superman',
    answer: 'c'

}


]
// const SCORE_POINTS = 100
// const MAX_QUESTIONS = 3

// startGame = () => {
//     questionCounter = 0;
//     score = 0;
//     availableQuestions = [...questions]
//     getNewQuestion()
// }

// getNewQuestion = () => {
//     if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
//         localStorage.setItem('mostRecentScore', score)
//         return window.location.assign('/end.html')
//     }
// }


// let questionNumber = 0

//questionContainer.innerText = questions[0];
// let questionText = document.querySelector('#question')
// questionText.innerHTML = questions[questionNumber].question;
// questions[0].answers.forEach(function(answer){
//    let answerButton = document.createElement('button')
//    answerButton.innerHTML = answer.text;
//    answerButton.dataset.correct = answer.correct
//    document.querySelector('#answer-buttons').appendChild(answerButton)
// })


function get(x){
    return document.getElementById(x);
  }
  // this function renders a question for display on the page
  function renderQuestion(){
    quiz = get("quiz");
    if(player >= questions.length){
      quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
      get("test_status").innerHTML = "Game Over";
      // resets the variable to allow users to restart the test
      player = 0;
      correct = 0;
      // stops rest of renderQuestion function running when test is completed
      return false;
    }
    get("test_status").innerHTML = "Question "+(player+1)+" of "+questions.length;
    
    question = questions[player].question;
    an1 = questions[player].a;
    an2= questions[player].b;
    an3 = questions[player].c;
    // display the question
    quiz.innerHTML = "<h3>"+question+"</h3>";
    // display the answer options
    // the += appends to the data we started on the line above
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='a'> "+an1+"</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='b'> "+an2+"</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='c'> "+an3+"</label><br><br>";
    quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  }
  function checkAnswer(){
    // use getElementsByName because we have an array which it will loop through
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    // checks if answer matches the correct choice
    if(choice == questions[player].answer){
      //each time there is a correct answer this value increases
      correct++;
    }
    function setStatusClass(element, correct) {
        clearStatusClass(element)
        if (correct) {
            element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
     }
     function clearStatusClass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')
     }
     
    
    // changes position of which character user is on
    player++;
    // then the renderQuestion function runs again to go to next question
    renderQuestion();
  }
  // Add event listener to call renderQuestion on page load event
  window.addEventListener("load", renderQuestion);

  document.getElementById('resetButton').addEventListener('click',startGame);
}