import { RouterComponent } from './routerLink-component.ts';
import { AnchorComponent } from './anchor-component.ts';
import { DateComponent } from './date-component.ts';
import { DivComponent } from './div-component.ts';
import { CheckBoxComponent } from './checkbox-component.ts';
import { SpanComponent } from './span-component.ts';

export * from './routerLink-component.ts';
export * from './date-component.ts';
export * from './div-component.ts';
export * from './checkbox-component.ts';
export * from './span-component.ts';

export const COMPONENT_TYPES: any[] = [
  AnchorComponent,
  RouterComponent,
  DateComponent,
  DivComponent,
  CheckBoxComponent,
  SpanComponent
];
