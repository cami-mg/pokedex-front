import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  isLoading: boolean = true;
  pokemons: any = [];

  constructor(private PokemonsService: PokemonsService) { }

  getPokemons(){
    this.PokemonsService.getOwnedPokemons().subscribe((res: any) => {
      res.map((poke: any) =>{
        setTimeout(() => {
          this.pokemons.push(poke);
          console.log(this.pokemons)
          this.isLoading = false;
        }, 3000)
      })
    })
  }

  ngOnInit(): void {
    this.getPokemons();
  }

}
