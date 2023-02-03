import {setScrollWidth} from './utils/scroll-width';
import {iosVhFix} from './utils/ios-vh-fix';
import {powersSlider} from './modules/powers-slider';
import {ticker} from './modules/ticker';


window.addEventListener('DOMContentLoaded', () => {
  setScrollWidth();
  iosVhFix();
});

// в load следует добавить скрипты, не участвующие в работе первого экрана
window.addEventListener('load', () => {
  powersSlider();
  ticker();
});
