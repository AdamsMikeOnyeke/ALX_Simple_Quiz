function checkAnswer() {
    const correctAnswer = '4';
    const checkedRadioButton = document.querySelector('input[name="quiz"]:checked')
    const userAnswer = checkedRadioButton.value;
    const para = document.querySelector('#feedback')
    if (userAnswer === correctAnswer) {
        para.textContent = "Correct! Well done.";
    } else {
        para.textContent= "That's incorrect. Try again!";
    }
}

const submitButton = document.getElementById("submit-answer");

submitButton.addEventListener('click', checkAnswer);