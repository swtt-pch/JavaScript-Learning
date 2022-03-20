'use strict';

const hidden = document.querySelectorAll('.hidden');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const closeModal = function (element) {
  element.classList.remove('hidden');
};

const showModal = function (element) {
  element.classList.add('hidden');
};

btnShowModal.forEach(button => {
  button.addEventListener('click', function () {
    hidden.forEach(element => {
      closeModal(element);
    });
  });
});

btnCloseModal.addEventListener('click', function () {
  hidden.forEach(element => {
    showModal(element);
  });
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    hidden.forEach(element => {
      if (!element.classList.contains('hidden')) {
        showModal(element);
      }
    });
  }
});
