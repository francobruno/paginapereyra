import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import { HttpClientModule } from '@angular/common/http';//agregado
import { ContactoService } from './contacto.service';//agregado

@NgModule({
  imports: [
    CommonModule,
    ContactoRoutingModule,
    HttpClientModule
  ],
  providers: [ContactoService],
  declarations: [ContactoComponent]
})
export class ContactoModule { }
