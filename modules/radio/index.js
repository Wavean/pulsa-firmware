const message = require('./message')
const utils = require('./utils')

message.emit('ROCKET_MONITORING', {
	height: utils.getHeight(),
	speed: utils.getSpeed(),
	perssur: utils.getExternPresure()
})