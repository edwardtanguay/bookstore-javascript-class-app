class Car {
	// constructor(make, color = '(unknown)', year = 2022) {
	constructor({ make, color, year }) {
		this.make = make ?? '(make unknown)';
		this.color = color;
		this.year = year;
	}

	display() {
		return `CAR MAKE: ${this.make}
COLOR: ${this.color}
YEAR: ${this.year}`;
	}

	exportAsHtml() {
		return `
	<tr>
		<td>${this.make}</td>
		<td>${this.color}</td>
		<td>${this.year}</td>
	</tr>`;
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

	exportAsHtml() {
		return `
<table>
	<tr>
		<th>Make</th>
		<th>Color</th>
		<th>Year</th>
	</tr>${this.cars.map(car => car.exportAsHtml()).join('')}
</table>`;
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

const car1 = new Car({ color: 'yellow', year: 2019, make: 'Mercedes' });
const car2 = new Car({ make: 'BMW', color: 'blue', year: 2017 });
const car3 = new Car({ make: 'BMW', color: 'red', year: 2018 });
// const cars = new Cars([car1, car2]);
const cars = Cars.instantiateCarsWithCarsObjectArray([car1, car2, car3]);
// console.log(cars.listCars());
// console.log(car1.display());
// console.log(car2.display());
console.log(cars.exportAsHtml());

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


