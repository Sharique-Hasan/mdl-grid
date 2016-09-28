import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import * as _ from 'lodash';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'checkbox-cmp',
  providers: [],
  directives: [
    ROUTER_DIRECTIVES, NgClass, NgStyle
  ],
  pipes: [

  ],
  styleUrls: [

  ],
  template: `<input (click)='handleClick($event)' [checked]='isChecked' [ngClass]='styleClass' type='checkbox' />`
})

export class CheckBoxComponent {
  attributes: any[];
  style: any;
  content: string;
  type: string;
  styleClass: string;
  @Input() data: any;
  @Output() onClick = new EventEmitter();
  private _isChecked: boolean;

  constructor() { }

  ngOnInit() {
    this.style = this.data.style || '';
    this.content = this.data.content || '';
    this.styleClass = this.data.styleClass || '';
    this.data.component = this;
    this._isChecked = this.data.isChecked || false;
  }

  handleClick(event) {
    this.isChecked = event.target.checked;
    this.onClick.emit({ event: event, data: this.data.customData });
  }

  get isChecked(): boolean{
    return this._isChecked || null;
  }

  set isChecked(checked: boolean){
    this._isChecked = checked;
  }

}
