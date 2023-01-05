const firstCard = document.querySelector('#first');
const modalContainer = document.querySelector('.modal-container');
const firstModal = document.querySelector('#first-modal');
const btnClose = document.querySelector('.btn-close');

firstCard.addEventListener('click', function () {
    firstModal.style.display = 'flex';
})

btnClose.addEventListener('click', function () {
    modalContainer.style.display = 'none';
})