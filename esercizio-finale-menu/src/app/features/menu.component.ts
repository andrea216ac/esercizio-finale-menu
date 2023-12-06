import { Component } from '@angular/core';
import { Pizza } from '../models/pizza_model';

@Component({
  selector: 'app-menu',
  template: `
    <app-button-carrello></app-button-carrello>
    <app-card-menu></app-card-menu>
  `,
  styles: [],
})
export class MenuComponent {
  arrayOfPizzas: Pizza[] = [];
}
