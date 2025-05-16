// src/app/home/home-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home/home.component'; // Asegúrate que la ruta sea correcta

const routes: Routes = [
  { path: '', component: HomeComponent } // Ruta vacía porque será '/home' desde AppRouting
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }