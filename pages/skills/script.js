const backEnd = document.querySelector('.back-end');
const frontEnd = document.querySelector('.front-end');
const stackList = document.querySelector('.stack-list');
const backList = ['Node.Js', 'Express', 'SQL'];
const frontList = ['HTML', 'CSS', 'JavaScript', 'React.js'];
const next = document.querySelector('.next-arrow');
const previous = document.querySelector('.previous-arrow');

stackList.textContent = backList[0];

backEnd.addEventListener('click', function () {
    backEnd.classList.remove('non-selected-stack');
    backEnd.classList.add('selected-stack');
    frontEnd.classList.remove('selected-stack');
    frontEnd.classList.add('non-selected-stack');
    stackList.textContent = backList[1];
});

frontEnd.addEventListener('click', function () {
    frontEnd.classList.remove('non-selected-stack');
    frontEnd.classList.add('selected-stack');
    backEnd.classList.remove('selected-stack');
    backEnd.classList.add('non-selected-stack');
    stackList.textContent = frontList[1];
});

next.addEventListener('click', function () {
    console.log('próximo');
});

previous.addEventListener('click', function () {
    console.log('anterior');
});