import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  fromHome:any;
  pokemon: any = [];
  isLoading: boolean = true;
  url = env.BACK_URL;
  messages: any = [
    "Pokemon has escaped!",
    "Your pokemon lost! You have to train harder.",
    "Pokemon captured!",
    "New pokemon added to your collection!"
  ]

  constructor(private route:Router, private activatedRoute: ActivatedRoute, private PokemonsService: PokemonsService) { 
    this.fromHome = this.route.getCurrentNavigation()?.extras.state?.['home'];
  }

  ngOnInit(): void {
    console.log(this.fromHome)
     this.activatedRoute.params.subscribe(params => {
      if(this.fromHome){
         this.activatedRoute.params.subscribe(params => {
      this.PokemonsService.getPokemon(params['name']).subscribe((res) => {
        setTimeout(() => {
          this.pokemon.push(res);
          this.isLoading = false;
          console.log(this.pokemon)
        }, 2000)
      });
    })
      }else{
            this.activatedRoute.params.subscribe(params => {
      this.PokemonsService.getMyPokemon(params['name']).subscribe((res:any) => {
        setTimeout(() => {
          this.pokemon.push(res[0]);
          this.isLoading = false;
          console.log(this.pokemon)
        }, 2000)
      });
    })
      }
    })
  }

 public catchPokemon() {
  let random = Math.floor(this.messages.length * Math.random());
  if(random == 2 || random == 3){
    const formData = new FormData();
    formData.append('id', this.pokemon[0].id);
    formData.append('name', this.pokemon[0].name);
    formData.append('gif_front', this.pokemon[0].gif_front);
    this.PokemonsService.catchPokemon(formData)
    .subscribe(res => {
      console.log("caught")
    });
  }else{
    console.log(this.messages[random]);
  }
  }

}
