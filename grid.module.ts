
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MPGridComponent, COMPONENT_TYPES } from "./index";
import { HeaderDirective } from './lib/header-attribute.directive';
import { Ng2PaginationModule, PaginationService } from 'ng2-pagination';

@NgModule({
  declarations: [
    MPGridComponent,
    HeaderDirective,
    ...COMPONENT_TYPES
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    Ng2PaginationModule
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