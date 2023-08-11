import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() pokemon: Pokemon | undefined;
  @Input() home: boolean = true;

  url = env.BACK_URL;

  constructor() { }

  ngOnInit(): void {
  }

}
