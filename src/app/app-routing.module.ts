import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DetailComponent } from './components/detail/detail.component';
import { CreatePokemonComponent } from './components/create-pokemon/create-pokemon.component';
import { MyPokemonsComponent } from './components/my-pokemons/my-pokemons.component';
import { CollectionComponent } from './components/collection/collection.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: AboutComponent,
    path: 'about'
  },
  {
    component: DetailComponent,
    path: 'detail/:name'
  },
  {
    component: CreatePokemonComponent,
    path: 'create'
  },
  {
    component: MyPokemonsComponent,
    path: 'my-pokemons'
  },
  {component: CollectionComponent,
  path: 'collection'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
