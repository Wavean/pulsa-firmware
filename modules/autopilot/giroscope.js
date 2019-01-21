module.exports = {
	on (event, callback) {
		switch(event) {
			case 'left':
				callback(5)
				break
			case 'right':
				callback(-5)
				break
			case 'backward':
				callback(5)
				break
			case 'forward':
				callback(-5)
				break
			default:
				callback('Error')
		}
	}
}