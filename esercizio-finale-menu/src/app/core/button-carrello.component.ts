import { Component } from '@angular/core';
import { Pizza } from '../models/pizza_model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-button-carrello',
  template: `
    <div class="position-absolute start-50 translate-middle-x mt-3">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Carrello
      </button>
    </div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Carrello</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              (click)="svuotaCarrello()"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ButtonCarrelloComponent {
  svuotaCarrello() {
    window.location.reload();
  }
  constructor(private http: HttpClient) {}
}
