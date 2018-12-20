import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//agregado

/*
en nosotros.module.ts agregar las siguientes importaciones:
import { HttpClientModule } from '@angular/common/http';
import { NosotrosService } from './nosotros.service';
imports:[HttpClientModule],
providers: [NosotrosService],
en nosotros.component.ts
import { NosotrosService } from './nosotros.service';
en constructor constructor(public nosotrosService: NosotrosService) { }
*/
@Injectable()
export class NosotrosService {

  constructor(public http: HttpClient) { }//agregado public http: HttpClient

  public getListNosotrosService() {//todo esto agregado
    return new Promise(resolve => {
      this.http.get('http://pereyraperforaciones.com/servidorperf/nosotros').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
