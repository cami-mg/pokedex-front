import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { PokeapiResponse } from 'src/app/models';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { Pokemon } from '../../models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filters:any = [];
  selectedType = 'All';
  orderBy: "asc" | "desc" = "asc";
  
  @Output() filterByType = new EventEmitter<string>();
  @ViewChild('filter') filter!: ElementRef;

  filteredType():void{
    this.selectedType = this.filter.nativeElement.value;
    this.filterByType.emit(this.selectedType)
	}
  
  constructor(private PokemonsService: PokemonsService) { }
  
  ngOnInit(): void {
    this.PokemonsService.getTypes().subscribe((res:any) => {
      res.results.map((type:any) =>{
        this.filters.push(type.name)
      })
      console.log(this.filters)});
    }

}
