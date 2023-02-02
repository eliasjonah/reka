import {setScrollWidth} from './utils/scroll-width';
import {iosVhFix} from './utils/ios-vh-fix';
import {ticker} from './modules/ticker';
import {ticker2} from './modules/ticker2';
import {ticker3} from './modules/ticker3';
import {powersSlider} from './modules/powers-slider';


window.addEventListener('DOMContentLoaded', () => {
  setScrollWidth();
  iosVhFix();
});

// в load следует добавить скрипты, не участвующие в работе первого экрана
window.addEventListener('load', () => {
  // ticker();
  // ticker2();
  // ticker3();
  powersSlider();
});
