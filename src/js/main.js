import {setScrollWidth} from './utils/scroll-width';
import {iosVhFix} from './utils/ios-vh-fix';
import {powersSlider} from './modules/powers-slider';
import {ticker1} from './modules/ticker-1';
import {ticker2} from './modules/ticker-2';
import {ticker3} from './modules/ticker-3';
import {modal} from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {
  setScrollWidth();
  iosVhFix();
});

// в load следует добавить скрипты, не участвующие в работе первого экрана
window.addEventListener('load', () => {
  powersSlider();
  ticker1();
  ticker2();
  ticker3();
  modal();
});
