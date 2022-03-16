import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
})
export class Componente3Component implements OnInit {

  @Input() lado1:number = NaN;
  @Input() lado2:number = NaN;
  @Output() resultado:number = 0;

  constructor() { }

  public perimetro():void
	{
		this.resultado = (2*this.lado1+2*this.lado2);
	}

  ngOnInit(): void {
  }

}
