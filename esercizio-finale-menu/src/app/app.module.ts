import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './core/navbar.component';
import { HomeComponent } from './features/home.component';
import { MenuComponent } from './features/menu.component';
import { CardComponent } from './shared/card.component';
import { ButtonCarrelloComponent } from './core/button-carrello.component';
import { CardMenuComponent } from './shared/card-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MenuComponent,
    CardComponent,
    ButtonCarrelloComponent,
    CardMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
