import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegtrabajoComponent } from './regtrabajo.component';

const routes: Routes = [
  {
    path:"",
    component:RegtrabajoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegtrabajoRoutingModule { }
