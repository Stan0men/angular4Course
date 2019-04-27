import {Component, OnInit} from '@angular/core';
import {templateRefExtractor} from '@angular/core/src/render3';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  addCarStatus = '';
  inputText = '';


  addCar() {
    this.addCarStatus = 'car was add';
  }

  onKeyUp(value) {
    console.log(event);
    this.inputText = value;
  }
}
