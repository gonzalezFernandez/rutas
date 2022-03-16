import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente5',
  templateUrl: './componente5.component.html',
})
export class Componente5Component implements OnInit {

  @Input() presupuesto:number = NaN;
  @Output() resultado:string  =  "";

  constructor() { }

  public calcularPresupuesto():void
	{
    let pediatria:number = (this.presupuesto*0.42)
    let urgencias:number = (this.presupuesto*0.37)
    let traumatologia:number = (this.presupuesto*0.21)

		this.resultado = ("Pediatría: "+pediatria+"€, \n\rUrgencias: "+urgencias+"€, \n\rTraumatología: "+traumatologia+"€");
	}

  ngOnInit(): void {
  }

}
