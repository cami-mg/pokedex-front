import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import {FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.scss']
})
export class CreatePokemonComponent implements OnInit {

  response: Object = {};
  types:any = [];

  constructor(private PokemonsService: PokemonsService, private router: Router) { }
  ngOnInit(): void {
    this.PokemonsService.getMyTypes().subscribe((res:any) => {
      res.forEach((type: any) => {
        this.types.push(type)
      });
     });
  }

  createPokemonForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    weight: new FormControl('', [Validators.required]),
    height: new FormControl('', [Validators.required]),
    experience: new FormControl('', [Validators.required]),
  })

  formData = new FormData();
  
  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    event.target.name == 'gif_front' ?
    this.formData.append('gif_front', selectedFile)
    : this.formData.append('gif_back', selectedFile);
    
  }

  onTypeSelected(event: any){
    const selectedType = event.target.value;
    this.formData.append('type', selectedType)
  }
  
  createPokemon(){
    
    this.formData.append('name', this.createPokemonForm.get('name')?.value ?? '');
    this.formData.append('weight', this.createPokemonForm.get('weight')?.value ?? '');
    this.formData.append('height', this.createPokemonForm.get('height')?.value ?? '');
    this.formData.append('experience', this.createPokemonForm.get('experience')?.value ?? '');
   
    this.PokemonsService.createPokemon(this.formData)
      .subscribe(res => {
        // this.response = res;
        console.log("created")
        this.router.navigate(['my-pokemons'])
      });
  }
}
