const score = document.querySelector('.score'),
  startBtn = document.querySelector('.game__start'),
  gameArea = document.querySelector('.gamearea'),
  car = document.createElement('div'),
  diffBtn = document.querySelectorAll('.difficulty__button'),
  diffSelected = document.querySelector('.difficulty-selected'),
  screens = document.querySelectorAll('.screen'),
  startMenu = document.querySelector('.start__menu');

const enemyStyles = ['enemy1', 'enemy2', 'enemy3', 'enemy4', 'enemy5'];

car.classList.add('car');

document.addEventListener('keydown', startGame);
document.addEventListener('keyup', stopGame);
