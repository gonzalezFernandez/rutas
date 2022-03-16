import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { ComponentesModule } from './components/components.module';

import {HttpClientModule} from '@angular/common/http';
import { CalculadoraService } from './components/componente1/services/calculadora.service';
import { Componente1Component } from './components/componente1/componente1.component';


@NgModule({
  declarations: [
    AppComponent,
    



  ],
  imports: [
    BrowserModule,
    ComponentesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
