import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'videoplayer - current - time';

const iframe = document.querySelector('iframe');

const player = new Vimeo(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  // if (!localStorage.getItem(LOCALSTORAGE_KEY)) {
  //   player.setCurrentTime(0);
  // }
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}

// player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
player
  .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
    seconds = localStorage.getItem(LOCALSTORAGE_KEY);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        console.log(
          'the time was less than 0 or greater than the video’s duration'
        );
        break;

      default:
        // some other error occurred
        console.log('some other error occurred');
        break;
    }
  });
