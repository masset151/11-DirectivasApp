import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMSGDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    ErrorMSGDirective,
    CustomIfDirective
  ],
  exports: [
    ErrorMSGDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
