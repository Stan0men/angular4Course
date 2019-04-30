import {Component, OnInit} from '@angular/core';
import {templateRefExtractor} from '@angular/core/src/render3';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bentley'];
  items = [
    new Date(2015, 3, 4),
    new Date(2011, 2, 7),
    new Date(2017, 4, 6),
    new Date(2000, 6, 8)


  ];

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

}
