const modal = () => {

  const modal = document.querySelector('.modal');
  const modalClose = document.querySelector('.modal__close');
  const modalOpen = document.querySelectorAll('.modal__open');
  const body = document.querySelector("body");


  modalOpen.forEach(item => {
    item.addEventListener('click', () => {
      modal.classList.add('open');
      body.classList.add('open');
    });
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('open');
    body.classList.remove('open');
  });

}

export {modal};
