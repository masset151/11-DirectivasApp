import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMSGDirective } from './directives/error-msg.directive';



@NgModule({
  declarations: [
    ErrorMSGDirective
  ],
  exports: [
    ErrorMSGDirective
  ]
})
export class SharedModule { }
