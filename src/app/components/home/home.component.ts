import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { PokeapiResponse } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pokemons: any = [];
  Allpokemons: any = [];
  isLoading: boolean = true;

  constructor(private PokemonsService: PokemonsService) {}

  getPokemons(){
    this.PokemonsService.getAllPokemons(0,50).subscribe((res: PokeapiResponse) => {
      res.results.map((pokemon) => {
        this.PokemonsService.getPokemon(pokemon.name).subscribe((res) => {
          setTimeout(() => {
            this.Allpokemons.push(res);
            this.pokemons = this.Allpokemons
            console.log(this.pokemons)
            this.isLoading = false;
          }, 4000)
        });
      });
    });
  }

  ngOnInit(): void {
    this.getPokemons();
  }


  filterByType(type: string){
    if(type === "all"){
      this.pokemons = this.Allpokemons;
    }else{
      this.pokemons = this.Allpokemons.filter((pokemon: any) => pokemon.types.find((t:any) => t === type))
    }
  }
  searchByName(name:string){
    this.pokemons = this.Allpokemons.filter((pokemon: any) => pokemon.name.includes(name))
  }

  resetFilters(){
    this.pokemons = this.Allpokemons;
  }
}
