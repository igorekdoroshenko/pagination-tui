export default function getRefs() {
  return {
    rating: document.querySelectorAll('.rating'),
    wrapper: document.querySelector('.article__list'),
  };
}

const refs = {
  body: document.querySelector('body'),
  closeModalBtn: document.querySelector('.modal__close-btn'),
  modal: document.querySelector('.modal'),
  backdrop: document.querySelector('.backdrop'),
  footerLink: document.querySelector('.team__modal-open'),
  footerBackdrop: document.querySelector('[data-action="deleted-class"]'),
  modalCloseBtn: document.querySelector('.footer-modal__close-btn'),
  watchedBtn: document.querySelector('button[name=watched]'),
};
