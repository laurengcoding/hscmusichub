const greyBtn = document.querySelector('#grey-button');
const whiteBtn = document.querySelector("#white-button");
const redBtn = document.querySelector("#red-button");
const yellowBtn = document.querySelector("#yellow-button");

function switchGrey() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = '#333';
}

function switchRed() {
  document.body.style.backgroundColor = '#e76f51';
  document.body.style.color = 'white';
}

function switchYellow() {
  document.body.style.backgroundColor = '#e9c46a';
  document.body.style.color = '#333';
}

greyBtn.addEventListener('click', switchGrey);
whiteBtn.addEventListener('click', switchWhite);
redBtn.addEventListener('click', switchRed);
yellowBtn.addEventListener('click', switchYellow);
