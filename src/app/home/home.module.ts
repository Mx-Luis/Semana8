// src/app/home/home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module'; // Importa el routing
import { HomeComponent } from '../home/home/home.component'; // Asegúrate que la ruta sea correcta

@NgModule({
  declarations: [
    HomeComponent // Declara el componente
  ],
  imports: [
    CommonModule,
    HomeRoutingModule // Importa el módulo de rutas
  ]
})
export class HomeModule { }