import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
})
export class Componente2Component implements OnInit {

  @Input() base:number = NaN;
  @Input() altura:number = NaN;
  @Output() resultado:number = 0;

  constructor() { }

  public area():void
	{
		this.resultado = (this.base*this.altura)/2;
	}

  ngOnInit(): void {
  }

}
