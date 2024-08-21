// array of objects, each object contains a question and an array of answers
const qustions = [
    {qustion: "What is 2 + 2?",
    answers: [
        {text: '4', correct: true},
        {text: '22', correct: false},
        {text: '5', correct: false},
        {text: '10', correct: false}
    ]},
    {qustion: "What is 5 * 5?",
    answers: [
        {text: '25', correct: true},
        {text: '30', correct: false},
        {text: '20', correct: false},
        {text: '15', correct: false}
    ]},
    {qustion: "What is 10 / 2?",
    answers: [
        {text: '5', correct: true},
        {text: '10', correct: false},
        {text: '2', correct: false},
        {text: '1', correct: false}
    ]},
    {qustion: "What is 10 - 5?",
    answers: [
        {text: '5', correct: true},
        {text: '10', correct: false},
        {text: '2', correct: false},
        {text: '1', correct: false}
    ]}
]

// get the DOM elements from HTML 
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
// seting the initial values of the constants 
let currentQuestionIndex = 0;
let score = 0;

// startQuiz() function is called when the page is loaded
function startQuiz() {
    // set the currentQuestionIndex to 0 and the score to 0
    currentQuestionIndex = 0;
    score = 0;
    // set the text of the nextButton to 'Next'
    nextButton.innerHTML = 'Next';
    // call setNextQuestion() function
    setNextQuestion();
}

// setNextQuestion() function is called when the nextButton is clicked
function setNextQuestion() {
    // call resetState() function to reset the state of the buttons
    resetState();
    // get the current question from the questions array
    let currentQuestion = qustions[currentQuestionIndex];
    // increment the currentQuestionIndex by 1
    let questionNo = currentQuestionIndex + 1;
    // set the text of the questionElement to the current question
    questionElement.innerText = questionNo + '. ' + currentQuestion.qustion;

    // loop through the answers of the current question
    currentQuestion.answers.forEach(answer => {
        // create a button element
        const button = document.createElement('button');
        // set the text of the button to the answer
        button.innerText = answer.text;
        // add the 'btn' class to the button element to take the styles from the CSS file
        button.classList.add('btn');
        // append the button to the answerButtons div
        answerButtons.appendChild(button);

        if(answer.correct){
        // if the answer is correct, set the 'data-correct' attribute of the button to 'true'
        button.dataset.correct = answer.correct;
        }
        // add an event listener to the button element, when the button is clicked, call the selectAnswer() function
        button.addEventListener('click', selectAnswer);
    });
}

// resetState() function is called when the next question is set
function resetState(){
    // set the display of the nextButton to 'none' hide the nextButton
    nextButton.style.display = 'none';
    // while there are child elements in the answerButtons div, remove the child elements
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// selectAnswer() function is called when an answer button is clicked
function selectAnswer(e){
    // get the selected button
    const selectedButton = e.target;
    // check if the selected button is data-correct attribute is true
    const isCorrect  = selectedButton.dataset.correct === 'true';
    if(isCorrect){
        // if the selected button is correct, add the 'correct' class to the button and increment the score by 1
        selectedButton.classList.add('correct');
        score++;
    }
    else{
        // if the selected button is incorrect, add the 'incorrect' class to the button
        selectedButton.classList.add('incorrect');
    }

    // create an array from the child elements of the answerButtons div
    Array.from(answerButtons.children).forEach(button => {
        // if the button is correct, add the 'correct' class to the button
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        // disable the buttons after an answer is selected
        button.disabled = true;
    });
    // set the display of the nextButton to 'block' to show the nextButton
    nextButton.style.display = 'block';
    console.log(Array.from(answerButtons.children));

}

function showResult(){
    // reset the state of the buttons and clear the answerButtons div
    resetState();
    // set the text of the questionElement to the score of the user
    questionElement.innerText = 'Your Score: ' + score + '/' + qustions.length;
    // set the text of the nextButton to 'Restart' and show the nextButton
    nextButton.innerHTML = 'Restart';
    nextButton.style.display = 'block';
}
// hundelNext() function is called when the nextButton is clicked
function hundelNext(){
    // increment the currentQuestionIndex by 1
    currentQuestionIndex++;
    // if the currentQuestionIndex is less than the length of the questions array, call setNextQuestion() function
    if(currentQuestionIndex < qustions.length){
        setNextQuestion();
    }
    else{
        // otherwise, call the showResult() function
        showResult();
    }
}

// add an event listener to the nextButton, when the nextButton is clicked, call the hundelNext() function
nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < qustions.length){
        hundelNext();
    }
    else{
        startQuiz();
    }
}
);

startQuiz();