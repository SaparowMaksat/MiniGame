const board = document.querySelector('#board')
const colors = ['#e74c6d', '#2e44ad', '#52f8db', '#f2de27', '#fecd73']
const SQUARES_NUMBER = 15

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.className = 'square'

	const audio = document.createElement('audio')
	audio.src = './01.wav'

	square.addEventListener('mouseover', () => setColor(square))
	square.addEventListener('mouseleave', () => removeColor(square))

	square.append(audio)
	board.append(square)
}

const setColor = element => {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}, 0 0 12px ${color}`
}

const removeColor = element => {
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = '0 0 2px #1d1d1d'
}

const getRandomColor = () => {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}
