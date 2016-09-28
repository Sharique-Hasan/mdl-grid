import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'routerLink-cmp',
  providers: [],
  directives: [
    ROUTER_DIRECTIVES, NgClass, NgStyle
  ],
  pipes: [

  ],
  styleUrls: [

  ],
  template: `<a (click)='handleClick($event)' [queryParams]="queryString" [routerLink]="[href]" [innerHtml]='content'></a>`
})

export class RouterComponent {
  queryString: Object;
  href: string[];
  style: any;
  content: string;
  styleClass: string;

  @Output() onClick = new EventEmitter();
  @Input() data: any;

  constructor() { }

  ngOnInit() {
    this.href = this.data.href || '';
    this.queryString = this.data.queryString || '';
    this.style = this.data.style || '';
    this.content = this.data.content || '';
    this.styleClass = this.data.styleClass || '';
  }

  handleClick(event) {
    this.onClick.emit(event);
  }


}
