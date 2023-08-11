import { FormControl } from '@angular/forms';
export interface Pokemon{
    name: string,
url:string
}

export interface PokeapiResponse{
    results: Array<Pokemon>
}

export interface Pokemon{
    id_pokemon?: string,
    id?: string,
    name:string,
    types: Array<string>,
    weight: string,
    height: string,
    experience: string,
    gif_front: string,
    gif_back: string
}