import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosComponent } from './nosotros.component';//agregado
import { HttpClientModule } from '@angular/common/http';//agregado
import { NosotrosService } from './nosotros.service';//agregado



@NgModule({
  imports: [
    CommonModule, 
    NosotrosRoutingModule,
    HttpClientModule],//agregado HttpClientModule
    providers: [NosotrosService],//agregado
  declarations: [NosotrosComponent]//modificado
})
export class NosotrosModule { }
