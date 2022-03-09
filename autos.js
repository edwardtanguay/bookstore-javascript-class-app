class Car {
	constructor(make, color, year) {
		this.make = make;
		this.color = color;
		this.year = year;
	}

	display() {
		return `CAR MAKE: ${this.make}
COLOR: ${this.color}
YEAR: ${this.year}`;
	}
}

class Cars {
	constructor() {
		this.cars = [];
	}
}

const car = new Car('Mercedes', 'yellow', 2019);
console.log(car.display());