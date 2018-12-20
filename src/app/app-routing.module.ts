import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
const routes: Routes = [
  {   
    path: "",
    component: HomeComponent
  },
  {
    path:"nosotros",
    loadChildren:"./pages/nosotros/nosotros.module#NosotrosModule"
  },
  {
    path:"imagenes",
    loadChildren:"./pages/imagenes/imagenes.module#ImagenesModule"
  },
  {
    path:"videos",
    loadChildren:"./pages/videos/videos.module#VideosModule"
  },
  {
    path:"contacto",
    loadChildren:"./pages/contacto/contacto.module#ContactoModule"
  },
  {
    path:"regnosotros",
    loadChildren:"./pages/regnosotros/regnosotros.module#RegnosotrosModule"
  },
  {
    path:"regtrabajo",
    loadChildren:"./pages/regtrabajo/regtrabajo.module#RegtrabajoModule"
  },
  {
    path:"login",
    loadChildren:"./pages/login/login.module#LoginModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
