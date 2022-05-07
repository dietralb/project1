

const startButton = document.getElementById('start-btn')
// const nextButton = document.getElementById('next-btn')

// const questionContainer = document.getElementById('question-container')

let player = 0, quiz, test_status, question, answer, answers, an1, an2, an3, correct = 0;

//startButton.addEventListener('click', startGame)

//  function startGame() {
 
  //console.log('Started')
//  startButton.classList.add('hide')
//   window.addEventListener("load", renderQuestion);







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

},
{question: "George tells Jerry the Chinese have discovered the cure for ___",
a: 'Insomnia',
b: 'Baldness',
c: 'Ulcers',
answer: 'b'

},
{question: "What instrument does Elaine's boyfriend John Germaine play?",
a: 'Saxophone',
b: 'Flute',
c: 'Guitar',
answer: 'a'

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
 PlaySound = function () {
    let audio = new Audio('https://www.myinstants.com/media/sounds/seinfeld-theme_1.mp3');
  audio.loop = false;
    audio.play();
}



function get(x){
    return document.getElementById(x);
  }
  
  function renderQuestion(){
    quiz = get("quiz");
    if(player >= questions.length){
      quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
      get("test_status").innerHTML = "Serenity Now!!!";
      
      player = 0;
      correct = 0;
      
      return false;
    }
    get("test_status").innerHTML = "Question "+(player+1)+" of "+questions.length;
    
    question = questions[player].question;
    an1 = questions[player].a;
    an2= questions[player].b;
    an3 = questions[player].c;
    
    quiz.innerHTML = "<h3>"+question+"</h3>";

    
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='a'> "+an1+"</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='b'> "+an2+"</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='c'> "+an3+"</label><br><br>";
    quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  }
  function checkAnswer(){
    
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    
    if(choice == questions[player].answer){
      
      correct++;
      console.log('Correct Answer');
    }else {
        console.log('Wrong Answer')
    }
    function test_status(element, correct) {
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
     
    
    
    player++;
    
    renderQuestion();
  }
  
  window.addEventListener("load", renderQuestion);



   document.getElementById('resetButton')
   startGame.addEventListener('click',startGame());
  startGame()
 








//credit:https://www.myinstants.com/media/sounds/seinfeld-theme_1.mp3
//credit:https://www.codegrepper.com/code-examples/html/how+to+add+sound+javascript