import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMSGDirective implements OnInit,OnChanges {

  htmlElement:ElementRef<HTMLElement>
  @Input() color:string = 'red';
  @Input()mensaje:string = 'campo requerido'

  constructor(private el:ElementRef<HTMLElement>) { 
    console.log('constructor directive')
    console.log(el)

    this.htmlElement = el
  }
  ngOnChanges(changes: SimpleChanges): void {
   
  if(changes.mensaje){
  const mensaje = changes.mensaje.currentValue
  this.setMensaje();
  }

  if(changes.color){
    const color = changes.color.currentValue
    this.setColor()
    console.log(changes)
  }
  
  
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
