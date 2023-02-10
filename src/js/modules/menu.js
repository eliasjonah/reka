const menu = () => {

  const menu = document.querySelector('.menu');
  const menuClose = document.querySelector('.menu__close');
  const menuOpen = document.querySelectorAll('.menu__open');
  const menuItems = document.querySelectorAll('.menu__item');
  const html = document.querySelector("html");


  menuOpen.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.add('open');
      html.classList.add('open');
    });
  });

  menuClose.addEventListener('click', () => {
    menu.classList.remove('open');
    html.classList.remove('open');
  });

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      item.children[1].classList.toggle("open");
    });
  });
}

export {menu};
