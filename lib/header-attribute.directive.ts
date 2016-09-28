import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[mpHeader]'
})

export class HeaderDirective {

  @Input()
  set mpHeader(value) {
    this.el.nativeElement.setAttribute('data-headerName', value);
  };

  constructor(private el: ElementRef) { }
}
