import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import * as moment from 'moment';
import { NgClass, NgStyle } from '@angular/common';


@Component({
  selector: 'date-cmp',
  providers: [],
  directives: [
    NgClass, NgStyle
  ],
  pipes: [
  ],
  styleUrls: [
  ],
  template: `<span>{{formattedDate}}</span>`
})

export class DateComponent {
  formattedDate: string;
  @Input() data: any;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.formattedDate = this.data.format ? moment(this.data.content).format(this.data.format) : moment(this.data.content).format('DD/MM/YYYY');
  }
  
  handleClick(event) {
    this.onClick.emit(event);
  }
}
