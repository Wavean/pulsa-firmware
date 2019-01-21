module.exports = {

	// We get rocket max speed
	getRocketMaxSpeedInMs (height, gravity) {
		return Math.sqrt(2 * height * gravity)
	},

	getRocketMaxSpeedInKmh(height, gravity) {
		return this.getRocketMaxSpeedInMs(height, gravity) / 1000 * 3600
	},

	getEnergy(mass, gravity, height) {
		return mass * gravity * height
	},

	// We get rocket weight on fall
	getRocketMaxWeight (speed, mass) {
		return Math.floor(speed * mass)
	},

	// get altitude to start engine
	getAltitudeToStartEngine (weight, power) {
		return weight / power
	}

}