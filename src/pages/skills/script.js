const backEnd = document.querySelector('.back-end');
const frontEnd = document.querySelector('.front-end');
const stackImage = document.querySelector('.stack-img');
const stackName = document.querySelector('.modal-badges h2')

const backList = [
    { image: '../../assets/stacks/nodejs.png', name: 'Node.Js' },
    { image: '../../assets/stacks/express.png', name: 'Express' },
    { image: '../../assets/stacks/sql.png', name: 'SQL' },
    { image: '../../assets/stacks/python.png', name: 'Python' }
];

const frontList = [
    { image: '../../assets/stacks/html.svg', name: 'HTML' },
    { image: '../../assets/stacks/css3.svg', name: 'CSS3' },
    { image: '../../assets/stacks/javaScript.svg', name: 'JavaScript' },
    { image: '../../assets/stacks/react.png', name: 'React.js' }
];

const next = document.querySelector('.next-arrow');
const previous = document.querySelector('.previous-arrow');
let count = 0;
let listName = 'back';

stackImage.src = backList[0].image;
stackName.textContent = backList[0].name;


backEnd.addEventListener('click', function () {
    backEnd.classList.remove('non-selected-stack');
    backEnd.classList.add('selected-stack');
    frontEnd.classList.remove('selected-stack');
    frontEnd.classList.add('non-selected-stack');
    stackImage.src = backList[0].image;
    stackName.textContent = backList[0].name;
    count = 0;
    listName = 'back';
});

frontEnd.addEventListener('click', function () {
    frontEnd.classList.remove('non-selected-stack');
    frontEnd.classList.add('selected-stack');
    backEnd.classList.remove('selected-stack');
    backEnd.classList.add('non-selected-stack');
    stackImage.src = frontList[0].image;
    stackName.textContent = frontList[0].name;
    count = 0;
    listName = 'front';
});

next.addEventListener('click', function () {
    count = count + 1;
    if (count >= backList.length || count >= frontEnd.length) {
        count = backList.length - 1;
    }
    if (listName === 'back') {
        stackImage.src = backList[count].image;
        stackName.textContent = backList[count].name;
    } else {
        stackImage.src = frontList[count].image;
        stackName.textContent = frontList[count].name;
    }
});

previous.addEventListener('click', function () {
    count -= 1;
    if (count < 0) {
        count = 0;
    }
    if (listName === 'back') {
        stackImage.src = backList[count].image;
        stackName.textContent = backList[count].name;
    } else {
        stackImage.src = frontList[count].image;
        stackName.textContent = frontList[count].name;
    }
});