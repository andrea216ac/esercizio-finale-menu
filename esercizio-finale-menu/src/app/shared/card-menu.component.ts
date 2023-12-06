import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Pizza } from '../models/pizza_model';

@Component({
  selector: 'app-card-menu',
  template: `
    <div class="mt-5 row row-cols-1 row-cols-md-2 g-4">
      <div
        class="card me-5 ms-5 mt-5"
        style="width: 18rem;"
        *ngFor="let pizzas of arrayOfPizzas"
      >
        <img src="{{ pizzas.image }}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ pizzas.name }}</h5>
          <p class="card-text">
            {{ pizzas.description }}
          </p>
          <p class="card-text">{{ pizzas.price }}€</p>
          <p>0</p>
          <button>-</button>
          <button>Elimina</button>
          <button>+</button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class CardMenuComponent {
  arrayOfPizzas: Pizza[] = [];
  constructor(http: HttpClient) {
    http
      .get<Pizza[]>(
        'https://my-json-server.typicode.com/zoelounge/menupizza/cards'
      )
      .subscribe((res) => {
        console.log(res);
        this.arrayOfPizzas = res;
      });
  }
}
