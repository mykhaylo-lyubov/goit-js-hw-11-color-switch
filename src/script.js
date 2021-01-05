const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  body: document.body,
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.btnStart.addEventListener('click', startClickHandler);

refs.btnStop.addEventListener('click', stopClickHandler);

let isActiveBtnStart = false;
let timerId = null;

function startClickHandler() {
  if (isActiveBtnStart) {
    return;
  }
  isActiveBtnStart = true;
  timerId = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
}

function stopClickHandler() {
  isActiveBtnStart = false;
  clearInterval(timerId);
}
