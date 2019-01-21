const giroscope = require('./giroscope')
const wings = require('./wings')

giroscope.on('left', (value) => {
	wings.goRight(value)
})

giroscope.on('right', (value) => {
	wings.goLeft(value)
})

giroscope.on('forward', (value) => {
	wings.goForward(value)
})

giroscope.on('backward', (value) => {
	wings.goBackward(value)
})