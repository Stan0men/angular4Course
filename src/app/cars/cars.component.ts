import {Component, OnInit} from '@angular/core';
import {templateRefExtractor} from '@angular/core/src/render3';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  carName = '';
  carYear = 2017;
  cars = [{
    name: 'Ford',
    year: 2015
  }, {
    name: 'Mazda',
    year: 2010
  }, {
    name: 'Audi',
    year: 2017
  }];

  addCar() {
    this.cars.push({
      name: this.carName,
      year: this.carYear
    });
    this.carName = '';
    this.carYear = 2017;

  }

}
