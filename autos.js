class Car {
	// constructor(make, color = '(unknown)', year = 2022) {
	constructor({make, color, year}) {
		this.make = make ?? '(make unknown)';
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
		return this.cars.map(car => car.display()).join('\r\n\r\n');
	}

	static instantiateCarsWithJavaScriptObjectArray(javaScriptObjectArray) {
		const cars = new Cars();
		// CHALLENGE: complete :-)
	}

	static instantiateCarsWithCarsObjectArray(carsObjectArray) {
		const cars = new Cars();
		carsObjectArray.forEach(car => cars.addCar(car));
		return cars;
	}
}

const car1 = new Car({ color: 'yellow', year: 2019 });
// const car2 = new Car('BMW', 'blue', 2017);
// const car3 = new Car('BMW','', 2018);
// const car4 = new Car('BMW', 'grey');
// const cars = new Cars([car1, car2]);
const cars = Cars.instantiateCarsWithCarsObjectArray([car1]);
console.log(cars.listCars());
// console.log(car1.display());
// console.log(car2.display());

const carsFromApi = [
	{
		make: 'Audi',
		color: 'green',
		year: 2008
	},
	{
		make: 'Audi',
		color: 'red',
		year: 2008
	},
	{
		make: 'Audi',
		color: 'blue',
		year: 2008
	}
];
// const cars = new Cars(carsFromApi);

// cars.addCar(car1);
// cars.addCar(car2);
// cars.addCar(car3);
// console.log(cars.listCars());


