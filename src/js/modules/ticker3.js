const ticker3 = () => {
  const wrapper3 = document.querySelector('#wrapper_3');
  const ticker3 = document.querySelector('#ticker_3');
  let list3;

  const speed = 1;

  const width = ticker3.offsetWidth;
  let x = 0;
  let x2 = width;

  // ticker_1

  function clone() {
    list3 = ticker3.cloneNode(true);
    wrapper3.appendChild(list3);
    list3.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;
    if (width >= Math.abs(x)) {
      ticker3.style.left = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;
    if (list3.offsetWidth >= Math.abs(x2)) {
      list3.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }

  clone();
  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);
};


export {ticker3};
