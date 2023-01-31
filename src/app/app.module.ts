import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { MovieCardsComponent } from './shared/components/movie-cards/movie-cards.component';
import { FrontCardComponent } from './shared/components/front-card/front-card.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    DashboardComponent,
    MovieCardsComponent,
    FrontCardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
