import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { PokeapiResponse, Pokemon } from '../models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { 
  }

  getAllPokemons(offset:number, limit:number){
    return this.http.get<PokeapiResponse>(`${env.BASE_URL}pokemon?limit=${limit}&offset=${offset}`)
  }

  getPokemon(name:string){
    return this.http.get<PokeapiResponse>(`${env.BASE_URL}pokemon/${name}`).
    pipe(
       map((pokemon:any) => {
         return {
          id: pokemon.id,
          name: pokemon.name,
          types: pokemon.types.map((t:any) => t.type.name),
          weight: pokemon.weight,
          height: pokemon.height,
          experience: pokemon.experience,
          gif_front: pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default,
          gif_back: pokemon.sprites.versions["generation-v"]["black-white"].animated.back_default,
         };
       })
    )
}

getMyPokemon(id:number){
  return this.http.get<PokeapiResponse>(`${env.BACK_URL}getMyPokemonById.php?id=${id}`)
}

getOwnedPokemons(){
  return this.http.get(`${env.BACK_URL}getOwned.php`);
}

getTypes(){
  return this.http.get<PokeapiResponse>(`${env.BASE_URL}type`)
}

getMyTypes(){
  return this.http.get(`${env.BACK_URL}getTypes.php`)
}

createPokemon(Body:any){
return this.http.post(`${env.BACK_URL}createPokemon.php`, Body);
}

catchPokemon(Body:any){
  return this.http.post(`${env.BACK_URL}catchPokemon.php`, Body);
  }

getMyPokemons(){
  return this.http.get(`${env.BACK_URL}getPokemons.php`)
}
  
}
