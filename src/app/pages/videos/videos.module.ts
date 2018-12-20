import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';//agregado
import { VideosService } from './videos.service';//agregado
import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';//agregado

@NgModule({
  imports: [
    CommonModule,
    VideosRoutingModule,
    HttpClientModule],//agregado HttpClientModule
    providers: [VideosService],//agregado
  declarations: [VideosComponent]//modificado
})
export class VideosModule { }
