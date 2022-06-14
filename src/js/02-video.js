import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'videoplayer - current - time';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

console.log();

function onPlay({ seconds }) {
  if (!JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))) {
    localStorage.setItem(LOCALSTORAGE_KEY, 0);
  } else {
    localStorage.setItem(LOCALSTORAGE_KEY, seconds);
  }
}

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
