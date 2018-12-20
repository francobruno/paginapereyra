import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegtrabajoRoutingModule } from './regtrabajo-routing.module';
import { RegtrabajoComponent } from './regtrabajo.component';
import { RegtrabajoService } from './regtrabajo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RegtrabajoRoutingModule,
    HttpClientModule
  ],
  providers: [RegtrabajoService],
  declarations: [RegtrabajoComponent
  ]
})
export class RegtrabajoModule { }
