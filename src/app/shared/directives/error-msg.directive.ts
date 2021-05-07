import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMSGDirective implements OnInit {

  htmlElement:ElementRef<HTMLElement>
  @Input() color:string = 'red';
  @Input()mensaje:string = 'campo requerido'

  constructor(private el:ElementRef<HTMLElement>) { 
    console.log('constructor directive')
    console.log(el)

    this.htmlElement = el
  }
  ngOnInit(): void {
   this.setColor()
   this.setMensaje()
  }

  setColor(){
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text')
  }

  setMensaje(){
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

}
