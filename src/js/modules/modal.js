const modal = () => {

  const modal = document.querySelector('.modal');
  const modalClose = document.querySelector('.modal__close');
  const modalOpen = document.querySelectorAll('.modal__open');
  const html = document.querySelector("html");


  modalOpen.forEach(item => {
    item.addEventListener('click', () => {
      modal.classList.add('open');
      html.classList.add('open');
    });
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('open');
    html.classList.remove('open');
  });

}

export {modal};
