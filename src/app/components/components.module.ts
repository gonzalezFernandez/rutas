import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { CalculadoraService } from './componente1/services/calculadora.service';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';
import { Componente5Component } from './componente5/componente5.component';


@NgModule({
  declarations:[
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    Componente5Component,


  ],
  exports:[
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    Componente5Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],

})
export class ComponentesModule { }
