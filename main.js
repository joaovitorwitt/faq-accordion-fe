const toggleAnswer = document.querySelectorAll('.faq-single');
const arrow = document.querySelectorAll('.arrow');
const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');

function rotateArrow () {
    arrow.forEach((arr) => arr.classList.toggle('active'))
}

function changeQuestionColor () {
    question.forEach((item) => item.classList.toggle('active'))
}


toggleAnswer.forEach((answer) => answer.addEventListener('click', (e) => {
    answer.classList.toggle('active');
    changeQuestionColor()
    rotateArrow()
    
    
}))
