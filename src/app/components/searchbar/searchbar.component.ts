import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  searched: string = '';
  
  @Output() searchByName = new EventEmitter<string>();
  
  setSearchValue() {
    this.searchByName.emit(this.searched);
    this.searched = ""
  }
  constructor() {}

  ngOnInit(): void {}
}
