import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-my-pokemons',
  templateUrl: './my-pokemons.component.html',
  styleUrls: ['./my-pokemons.component.scss']
})
export class MyPokemonsComponent implements OnInit {

  pokemons: any = [];
  isLoading: boolean = true;

  constructor(private PokemonsService: PokemonsService) {}

  getPokemons(){
    this.PokemonsService.getMyPokemons().subscribe((res) => {
      this.pokemons = res;
      this.isLoading = false;
      console.log(res)
    });
  }

  ngOnInit(): void {
    this.getPokemons();
  }


}
