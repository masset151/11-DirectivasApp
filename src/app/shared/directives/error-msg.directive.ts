import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMSGDirective implements OnInit,OnChanges {

  private _color:string = 'red'
  private _mensaje:string ="Este campo es requerido"
  htmlElement:ElementRef<HTMLElement>
  @Input() set color(valor:string){
    this._color = valor;
    this.setColor()

  }
  @Input() set mensaje(valor:string){
    
    this._mensaje = valor;
    this.setMensaje();
    
  }

  constructor(private el:ElementRef<HTMLElement>) { 
    console.log('constructor directive')
    console.log(el)
   

    this.htmlElement = el
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
  

   this.setClase()
   this.setColor()
   this.setMensaje()
  
  }

  setClase(){
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor():void{
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje():void{
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }


}
