'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');

// console.log(openModal);

const closeModals = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModals = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener('click', openModals);
}

closeModalBtn.addEventListener('click', closeModals);
overlay.addEventListener('click', closeModals);

document.addEventListener('keydown', function (key) {
  if (key.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModals();
  }
});
