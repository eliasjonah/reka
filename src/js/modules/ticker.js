const ticker = () => {
  const tickerLeft = document.querySelectorAll('.ticker-left');
  const tickerRight = document.querySelector('.ticker-right');
  const cursor = document.querySelector('.cursor');

  // Scroll
  window.onscroll = () => {
    let pos = window.scrollY - 800;
    tickerRight.style.right = `${pos}px`;

    tickerLeft.forEach((item) => {
      item.style.left = `${pos}px`;
    })
  };

  // Cursor
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
};

export {ticker};
