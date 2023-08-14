import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './components/detail/detail.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from './order-by.pipe';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { CreatePokemonComponent } from './components/create-pokemon/create-pokemon.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MyPokemonsComponent } from './components/my-pokemons/my-pokemons.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DetailComponent,
    FilterComponent,
    OrderByPipe,
    SearchbarComponent,
    CardComponent,
    ButtonComponent,
    CreatePokemonComponent,
    MyPokemonsComponent,
    SpinnerComponent,
    CollectionComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
