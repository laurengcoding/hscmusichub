const tvScreen = document.querySelector('#tv-screen')
const channelUp = document.querySelector('#channel-up')
const channelDown = document.querySelector('#channel-down')

function changeChannelUp() {
  const currentSrc = tvScreen.getAttribute('src')
  if (currentSrc === 'img/colour-bars.png' || currentSrc === 'img/good-will-hunting.jpg') {
    tvScreen.src = 'img/blue-planet.jpg'
  } else if (currentSrc === 'img/blue-planet.jpg') {
    tvScreen.src = 'img/deadpool.jpg'
  } else if (currentSrc === 'img/deadpool.jpg') {
    tvScreen.src = 'img/gravity.jpg'
  } else {
    tvScreen.src = 'img/good-will-hunting.jpg'
  }
}

function changeChannelDown() {
  const currentSrc = tvScreen.getAttribute('src')
  if (currentSrc === 'img/colour-bars.png' || currentSrc === 'img/blue-planet.jpg') {
    tvScreen.src = 'img/good-will-hunting.jpg'
  } else if (currentSrc === 'img/good-will-hunting.jpg') {
    tvScreen.src = 'img/gravity.jpg'
  } else if (currentSrc === 'img/gravity.jpg') {
    tvScreen.src = 'img/deadpool.jpg'
  } else {
    tvScreen.src = 'img/blue-planet.jpg'
  }
}

channelUp.addEventListener('click', changeChannelUp)
channelDown.addEventListener('click', changeChannelDown)
