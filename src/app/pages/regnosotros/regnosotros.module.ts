import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegnosotrosRoutingModule } from './regnosotros-routing.module';
import { RegnosotrosComponent } from './regnosotros.component';
import { HttpClientModule } from '@angular/common/http';//agregado
import { RegnosotrosService } from './regnosotros.service';//agregado

@NgModule({
  imports: [
    CommonModule,
    RegnosotrosRoutingModule,
    HttpClientModule
  ],
  providers: [RegnosotrosService],
  declarations: [RegnosotrosComponent]
})
export class RegnosotrosModule { }
