import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMSGDirective implements OnInit {

  constructor() { 
    console.log('constructor directive')
  }
  ngOnInit(): void {
   console.log('OnInit Directive')
  }

}
