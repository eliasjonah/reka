const ticker1 = () => {
  const page = document.querySelector('.page');
  const cursor = document.querySelector('.cursor');
  const tickerWrapper = document.querySelector('#wrapper_1');
  const ticker = document.querySelector('#ticker_1');
  let list;

  const speed = 1;

  const width = ticker.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list = ticker.cloneNode(true);
    tickerWrapper.appendChild(list);
    list.style.transform = `translateX(${width}px)`;
  }

  function moveFirst() {
    x -= speed;
    if (width >= Math.abs(x)) {
      ticker.style.transform = `translateX(${x}px)`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;
    if (list.offsetWidth >= Math.abs(x2)) {
      list.style.transform = `translateX(${x2}px)`;
    } else {
      x2 = width;
    }
  }

  document.addEventListener('wheel', () => {
    let pos = window.scrollY - page.scrollHeight;
    ticker.style.left = `${pos}px`;
    list.style.left = `${pos}px`;
  });


  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  clone();
  setInterval(moveFirst, 20);
  setInterval(moveSecond, 20);
};


export {ticker1};

