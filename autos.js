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

	addCar(car) {
		this.cars.push(car);
	}

	listCars() {
		return this.cars.map(car => car.display()).join('\n\n');
	}
}

const car1 = new Car('Mercedes', 'yellow', 2019);
const car2 = new Car('BMW', 'blue', 2017);
const car3 = new Car('BMW', 'grey', 2018);
// console.log(car1.display());
// console.log(car2.display());

const cars = new Cars();
cars.addCar(car1);
cars.addCar(car2);
cars.addCar(car3);
console.log(cars.listCars());