const engine = require('./engine')

module.exports = {

	start () {
		engine.valve.open()
		engine.injector.start()
		engine.ignite()
	},

	stop () {
		engine.injector.stop()
		engine.valve.close()
	}

}