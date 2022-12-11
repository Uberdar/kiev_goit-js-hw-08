import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);
const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});
player.on('play', function () {
  console.log('played the video!');
});
player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);
if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
} else player.setCurrentTime(1);
