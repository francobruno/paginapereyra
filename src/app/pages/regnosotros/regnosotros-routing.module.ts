import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegnosotrosComponent } from './regnosotros.component';

const routes: Routes = [
  {
    path:"",
    component: RegnosotrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegnosotrosRoutingModule { }
