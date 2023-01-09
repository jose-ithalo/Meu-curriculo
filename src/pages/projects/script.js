const firstCard = document.querySelector('#first');
const secondCard = document.querySelector('#second');
const tirdCard = document.querySelector('#tird');
const firstModal = document.querySelector('#first-modal');
const secondModal = document.querySelector('#second-modal');
const tirdModal = document.querySelector('#tird-modal');
const btnClose = document.querySelectorAll('.btn-close');

firstCard.addEventListener('click', function () {
    firstModal.style.display = 'flex';
})

secondCard.addEventListener('click', function () {
    secondModal.style.display = 'flex';
})

tirdCard.addEventListener('click', function () {
    tirdModal.style.display = 'flex';
})

btnClose.forEach(function (close) {
    close.addEventListener('click', function () {
        firstModal.style.display = 'none';
        secondModal.style.display = 'none';
        tirdModal.style.display = 'none';
    });
})