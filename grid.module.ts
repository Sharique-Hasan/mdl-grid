import { NgModule } from '@angular/core';
import { CoreModule} from 'core';
import { MPGridComponent, COMPONENT_TYPES } from "./index";
import { HeaderDirective } from './lib/header-attribute.directive';
import {
  PaginationService
} from 'ng2-pagination';

@NgModule({
  declarations: [
    MPGridComponent,
    HeaderDirective,
    ...COMPONENT_TYPES
  ],
  imports: [
    CoreModule
  ],
  exports: [
    MPGridComponent
  ],
  providers: [
    PaginationService
  ]
})

export class GridModule {

}
