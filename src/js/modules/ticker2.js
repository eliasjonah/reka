const ticker2 = () => {
  const wrapper2 = document.querySelector('#wrapper_2');
  const ticker2 = document.querySelector('#ticker_2');
  let list2;

  const speed = 1;

  const width = ticker2.offsetWidth;
  let x = 0;
  let x2 = width;

  // ticker_1

  function clone() {
    list2 = ticker2.cloneNode(true);
    wrapper2.appendChild(list2);
    list2.style.right = `${width}px`;
  }

  function moveFirst() {
    x -= speed;
    if (width >= Math.abs(x)) {
      ticker2.style.right = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;
    if (list2.offsetWidth >= Math.abs(x2)) {
      list2.style.right = `${x2}px`;
    } else {
      x2 = width;
    }
  }

  clone();
  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);
};


export {ticker2};
