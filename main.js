const core = require('./modules')

core.lander(1000, 70, 90).then((alt) => {
	console.log(alt)
}).catch((err) => {
	console.log(err)
})

core.igniter.start()