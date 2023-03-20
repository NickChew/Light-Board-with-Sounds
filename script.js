const container = document.getElementById('container')
const colors = ['#f90bab', '#17e364', '#ff0000', '#8a2be2', '#3399ff', '#ffff00']
const colorSounds = {'#f90bab': 'sound1.mp3', '#17e364': 'sound2.mp3', '#ff0000': 'sound3.mp3', '#8a2be2': 'sound4.mp3', '#3399ff': 'sound5.mp3', '#ffff00': 'sound6.mp3'}
const Squares = 36

for(let i = 0; i < Squares; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseout', () => removeColor(square))
  container.appendChild(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 20px ${color}`
  if (colorSounds[color]) {
    new Audio(colorSounds[color]).play()
  }
}

function removeColor(element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
   return colors[Math.floor(Math.random() * colors.length)]
}