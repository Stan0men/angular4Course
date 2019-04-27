import {Component, OnInit} from '@angular/core';
import {templateRefExtractor} from '@angular/core/src/render3';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  canAddCar = false;

  constructor() {
    setTimeout(() => {
      this.canAddCar = true;
    }, 4000);
  }


}
