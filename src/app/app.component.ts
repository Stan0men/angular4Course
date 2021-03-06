import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="col-xs-8 col-xs-offset-2">
        <h2>{{name}}</h2>
        <h2>{{name | lowercase}}</h2>
        <h2>{{name | uppercase}}</h2>
        <h2>{{name | slice:0:3 }}</h2>
        <hr>
        <h2>{{pi | number}}</h2>
      </div>
    </div>

  `
})
export class AppComponent {
  name = 'WebForMyself';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested:
      {
        xyz: 3,
        numbers: [1, 2, 3]
      }
  };
}
