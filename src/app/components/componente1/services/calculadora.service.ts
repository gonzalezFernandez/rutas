import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class CalculadoraService {

  public _resultado:number=0;

  get resultado():number{
    return this._resultado;
  }

  set resultado(resultado:number){
    this._resultado = resultado;
  }

  public suma(valor1:number, valor2:number):void
	{

		this.resultado = valor1 + valor2;
	}

	public Multiplicacion(valor1:number, valor2:number):void
	{
		this.resultado = valor1 * valor2;
	}

	public Resta(valor1:number, valor2:number):void
	{
		this.resultado = valor1 - valor2;
	}

	public Division(valor1:number, valor2:number):void
	{
		this.resultado = valor1 / valor2;
	}

  public limpiaResultado():void{
    this.resultado = 0;
  }

  constructor() { }
}
