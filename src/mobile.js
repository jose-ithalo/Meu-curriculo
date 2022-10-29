const menu = document.querySelector('.menu-icon');
const closeButton = document.querySelector('.menu-close');
const optionScreen = document.querySelector('.menu-screen');

menu.addEventListener('click', function () {
    menu.style.display = 'none';
    closeButton.style.display = 'block';
    optionScreen.style.display = 'flex';
});

closeButton.addEventListener('click', function () {
    menu.style.display = 'block';
    closeButton.style.display = 'none';
    optionScreen.style.display = 'none';
});