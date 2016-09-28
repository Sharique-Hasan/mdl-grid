import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NgClass, NgStyle } from '@angular/common';


@Component({
  selector: 'div-cmp',
  providers: [],
  directives: [
    ROUTER_DIRECTIVES, NgClass, NgStyle
  ],
  pipes: [

  ],
  styleUrls: [

  ],
  template: `<div class='{{styleClass}}'>{{content}}</div>`
})

export class DivComponent {
  style: any;
  content: string;
  styleClass: string;

  @Input() data: any;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.style = this.data.style || '';
    this.content = this.data.content || '';
    this.styleClass = this.data.styleClass || '';
  }
  
  handleClick(event){
    this.onClick.emit(event);
  }


}
