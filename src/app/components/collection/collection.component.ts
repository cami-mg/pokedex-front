import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  constructor(private PokemonsService: PokemonsService) { }

  getPokemons(){
    this.PokemonsService.getOwnedPokemons().subscribe((res: any) => console.log(res))
  }

  ngOnInit(): void {
    this.getPokemons();
  }

}
