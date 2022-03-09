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

const car1 = new Car('Mercedes', 'yellow', 2019);
const car2 = new Car('BMW', 'blue', 2017);
console.log(car1.display());
console.log(car2.display());