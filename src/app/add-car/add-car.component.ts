import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  carName = '';
  carYear = 2017;
  @Output() onAddCar = new EventEmitter<{ name: string, year: number }>();

  constructor() {
  }

  ngOnInit() {
  }

  addCar() {
    this.onAddCar.emit({
      name: this.carName,
      year: this.carYear
    });
    this.carName = '';
    this.carYear = 2017;

  }

}