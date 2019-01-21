const lander = require('./utils')

const config = require('./config.json')
const planets = require('./planets.json')

const getPlanet = (name) => {
	for (i in planets) {
		if (planets[i].name === name) {
			return planets[i]
		}
	}
}

module.exports = (height, mass, power) => {
	return new Promise((resolve, reject) => {

		const speedInMs = lander.getRocketMaxSpeedInMs(height, getPlanet('earth').gravity)
		const maxWeight = lander.getRocketMaxWeight(speedInMs, mass)
		const altitude = lander.getAltitudeToStartEngine(maxWeight, power)

		if (altitude > height) {
			reject('Mass of srocket is to expansive')
		} else {
			resolve(altitude)
		}

	})
}