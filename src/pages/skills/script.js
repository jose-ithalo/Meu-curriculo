const backEnd = document.querySelector('.back-end');
const frontEnd = document.querySelector('.front-end');
const stackImage = document.querySelector('.stack-img');
const stackName = document.querySelector('.modal-badges h2')

const backList = [
    { image: '../../assets/stacks/nodejs.png', name: 'Node.js' },
    { image: '../../assets/stacks/express.png', name: 'Express.js' },
    { image: '../../assets/stacks/api.png', name: 'API REST' },
    { image: '../../assets/stacks/sql.png', name: 'SQL' },
    { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript' },
    { image: 'https://nestjs.com/img/logo-small.svg', name: 'NestJS' }
];

const frontList = [
    { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML' },
    { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS3' },
    { image: '../../assets/stacks/javaScript.png', name: 'JavaScript' },
    { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript' },
    { image: '../../assets/stacks/react.png', name: 'React.js' },
    { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', name: 'Angular' }
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