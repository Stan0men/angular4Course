import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  carName = '';
  carYear = 2017;
  @Output() onAddCar = new EventEmitter<{ name: string, year: number }>();

  @ViewChild('carYearInput') carYearInput: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  addCar(carNameEl: HTMLInputElement) {

    this.onAddCar.emit({
      name: this.carName,
      year: +this.carYearInput.nativeElement.value
    });
    carNameEl.value = '';
    this.carYearInput.nativeElement.value = 2017;
  }

}
