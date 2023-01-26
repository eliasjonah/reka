const ticker = () => {
  const tickerLeft = document.querySelectorAll('.ticker-left');
  const tickerRight = document.querySelector('.ticker-right');
  const cursor = document.querySelector('.cursor');
  const wrapper = document.querySelector('.ticker__wrapper');
  const ticker = document.querySelector('.ticker__item');
  let list2;

  const speed = 1;

  const width = ticker.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = ticker.cloneNode(true);
    wrapper.appendChild(list2);
    list2.style.transform = `translateX(${width}px)`;
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

    if (list2.offsetWidth >= Math.abs(x2)) {
      list2.style.transform = `translateX(${x2}px)`;
    } else {
      x2 = width;
    }
  }

  // ss

  // function scroll() {
  //   window.addEventListener("scroll", () => {
  //     clearInterval(a);
  //     clearInterval(b);
  //     let pos = window.scrollY - 100;
  //     ticker.style.left = `${pos}px`;
  //     list2.style.left = `${pos}px`;
  //   });
    // window.onscroll = () => {
    //   clearInterval(a);
    //   clearInterval(b);
    //   let pos = window.scrollY - 100;
    //   ticker.style.left = `${pos}px`;
    //   list2.style.left = `${pos}px`;
    // };
  // }


  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  clone();
  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);
  // scroll();
};


export {ticker};