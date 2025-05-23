import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from '../acerca-de/acerca-de/acerca-de.component';

const routes: Routes = [
  {
    path: '',
    component: AcercaDeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcercaDeRoutingModule {}
