import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';//agregado
import { ImagenesComponent } from './imagenes.component';//agregado
import { ImagenesService } from './imagenes.service';//agregado
import { ImagenesRoutingModule } from './imagenes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ImagenesRoutingModule,
    HttpClientModule],//agregado HttpClientModule
    providers: [ImagenesService],//agregado
  declarations: [ImagenesComponent]//modificado
})
export class ImagenesModule { }
