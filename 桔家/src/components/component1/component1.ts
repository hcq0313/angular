import { Component } from '@angular/core';

/**
 * Generated class for the Component1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'component1',
  templateUrl: 'component1.html'
})
export class Component1Component {

  text: string;

  constructor() {
    console.log('Hello Component1Component Component');
    this.text = 'Hello World';
  }

}
