import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() text: string | undefined;
  @Output() function = new EventEmitter();

  callfunction():void{
    this.function.emit()
	}

  ngOnInit(): void {
  }

}
