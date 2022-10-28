const menu = document.querySelector('.menu-icon');
const closeButton = document.querySelector('.menu-close');

menu.addEventListener('click', function () {
    menu.style.display = 'none';
    closeButton.style.display = 'block';
});

closeButton.addEventListener('click', function () {
    menu.style.display = 'block';
    closeButton.style.display = 'none';
});