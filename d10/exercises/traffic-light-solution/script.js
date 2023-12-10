const stopBtn = document.querySelector('#stop-button');
const slowBtn = document.querySelector('#slow-button');
const goBtn = document.querySelector('#go-button');
const stopBulb = document.querySelector('#stop-light');
const slowBulb = document.querySelector('#slow-light');
const goBulb = document.querySelector('#go-light');

function stopLight() {
  stopBulb.classList.add('on');
  slowBulb.classList.remove('on');
  goBulb.classList.remove('on');
}

function slowLight() {
  slowBulb.classList.add('on');
  stopBulb.classList.remove('on');
  goBulb.classList.remove('on');
}

function goLight() {
  goBulb.classList.add('on');
  slowBulb.classList.remove('on');
  stopBulb.classList.remove('on');
}

stopBtn.addEventListener('click', stopLight);
slowBtn.addEventListener('click', slowLight);
goBtn.addEventListener('click', goLight);
