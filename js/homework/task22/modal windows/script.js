'use strict';
const showModal = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

if (showModal) {
    showModal.addEventListener('click', () => {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        closeModal();
    });
}

if (overlay) {
    overlay.addEventListener('click', () => {
        closeModal();
    });
}

function closeModal(){
    if(!modal.classList.contains('hidden')){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
}