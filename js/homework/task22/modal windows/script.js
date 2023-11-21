'use strict';
const showModal = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');

if (showModal) {
    showModal.addEventListener('click', () => {
        modal.classList.toggle('hidden');
    })
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        closeModal();
    })
}

document.addEventListener('click', (event)=>{
    if(event.target != modal && !modal.contains(event.target) && event.target!=showModal){
        closeModal();
    }
})
function closeModal(){
    if(!modal.classList.contains('hidden')){
        modal.classList.add('hidden');
    }
}