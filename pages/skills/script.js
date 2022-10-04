const backEnd = document.querySelector('.back-end');
const frontEnd = document.querySelector('.front-end');
const stackList = document.querySelector('.stack-list');
const backList = ['Node.Js', 'Express', 'SQL', 'Python'];
const frontList = ['HTML', 'CSS', 'JavaScript', 'React.js'];
const next = document.querySelector('.next-arrow');
const previous = document.querySelector('.previous-arrow');
let count = 0;
let listName = 'back';

stackList.textContent = backList[0];

backEnd.addEventListener('click', function () {
    backEnd.classList.remove('non-selected-stack');
    backEnd.classList.add('selected-stack');
    frontEnd.classList.remove('selected-stack');
    frontEnd.classList.add('non-selected-stack');
    stackList.textContent = backList[0];
    count = 0;
    listName = 'back';
});

frontEnd.addEventListener('click', function () {
    frontEnd.classList.remove('non-selected-stack');
    frontEnd.classList.add('selected-stack');
    backEnd.classList.remove('selected-stack');
    backEnd.classList.add('non-selected-stack');
    stackList.textContent = frontList[0];
    count = 0;
    listName = 'front';
});

next.addEventListener('click', function () {
    count = count + 1;
    if (count >= backList.length || count >= frontEnd.length) {
        count = backList.length - 1;
    }
    if (listName === 'back') {
        stackList.textContent = backList[count];
    } else {
        stackList.textContent = frontList[count];
    }
});

previous.addEventListener('click', function () {
    count -= 1;
    if (count < 0) {
        count = 0;
    }
    if (listName === 'back') {
        stackList.textContent = backList[count];
    } else {
        stackList.textContent = frontList[count];
    }
});