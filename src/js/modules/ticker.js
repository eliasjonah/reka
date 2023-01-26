const ticker = () => {
  const cursor = document.querySelector('.cursor');
  const wrapper1 = document.querySelector('#wrapper_1');
  const ticker1 = document.querySelector('#ticker_1');
  let list1;

  const speed = 1;

  const width = ticker1.offsetWidth;
  let x = 0;
  let x2 = width;

  // ticker_1

  function clone() {
    list1 = ticker1.cloneNode(true);
    wrapper1.appendChild(list1);
    list1.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;
    if (width >= Math.abs(x)) {
      ticker1.style.left = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;
    if (list1.offsetWidth >= Math.abs(x2)) {
      list1.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }

  // ss

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  clone();
  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);
};


export {ticker};
