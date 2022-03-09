import { Car } from './car.js';
import { Cars } from './cars.js';

const car1 = new Car({ color: 'yellow', year: 2019, make: 'Mercedes' });
const car2 = new Car({ make: 'BMW', color: 'blue', year: 2017 });
const car3 = new Car({ make: 'BMW', color: 'red', year: 2018 });
const cars = Cars.instantiateCarsWithCarsObjectArray([car1, car2, car3]);