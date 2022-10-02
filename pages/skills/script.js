const backEnd = document.querySelector('.back-end');
const frontEnd = document.querySelector('.front-end');
const next = document.querySelector('.next-arrow');
const previous = document.querySelector('.previous-arrow');

backEnd.addEventListener('click', function () {
    console.log('Stack: back-end');
});

frontEnd.addEventListener('click', function () {
    frontEnd.classList.remove('non-selected-stack');
    frontEnd.classList.add('selected-stack');
    backEnd.classList.remove('selected-stack');
    backEnd.classList.add('non-selected-stack');
});

next.addEventListener('click', function () {
    console.log('próximo');
});

previous.addEventListener('click', function () {
    console.log('anterior');
});