module.exports = {
	valve: {
		open () {
			console.log('open valve')
		},

		close () {
			console.log('close valve')
		},
	},

	injector: {
		start () {
			console.log('start injector')
		},

		stop () {
			console.log('stop injector')
		},
	},

	ignite () {
		console.log('Ignite engine')
	}
}