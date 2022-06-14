import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'videoplayer - current - time';

const iframe = document.querySelector('iframe');

if (!JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))) {
  player.setCurrentTime(0);
}

const player = new Vimeo(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
