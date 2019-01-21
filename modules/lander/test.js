const lander = require('./utils')

const config = require('./config.json')
const planets = require('./planets.json')

const getPlanet = (name) => {
	for (i in planets) {
		if (planets[i].name === name) {
			return planets[i]
		}

		if (planets.length >= i) {
			return planets[0]
		}
		console.log(planets.length, i)
	}
}

const landOn = getPlanet(process.argv[2] || config.planet)

const speedInMs = lander.getRocketMaxSpeedInMs(config.height, landOn.gravity)
const speedInKmh = lander.getRocketMaxSpeedInKmh(config.height, landOn.gravity)
const energyInJoules = lander.getEnergy(config.rocket.mass, landOn.gravity, config.height)

const maxWeight = lander.getRocketMaxWeight(speedInMs, config.rocket.mass)
const altitude = lander.getAltitudeToStartEngine(maxWeight, config.rocket.power)

// si le résultat est égale a la hauteur de "retombée" on ne peut pas faire atterire la fusée
if (altitude > config.height) {
	console.log('[ERROR] > Mass of rocket is to expansive')
} else {
	console.log(`\n ========= ${landOn.name} ========= \n`)

	console.log(`Rocket mass : ${config.rocket.mass} kNewtons`)
	console.log(`Rocket engine power : ${config.rocket.power} kNewtons\n`)

	console.log(`Speed at impact : ${speedInKmh.toFixed(2)}km/h (${speedInMs.toFixed(2)}m/s)`)
	console.log(`Energy at impact : ${energyInJoules} Joules`)
	console.log(`Run engine at ${altitude.toFixed(2)} metters\n`)
}