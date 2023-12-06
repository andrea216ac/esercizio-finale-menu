import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid bg-danger">
        <img src="../../assets/image/logo.jpeg" alt="Logo" width="30" height="24" />
        <a class="navbar-brand">Menu Pizza</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                routerLink="/home"
                routerLinkActive="active"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
              class="nav-link"
              routerLink="/menu"
              routerLinkActive="active"
                >Menu</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent {}
