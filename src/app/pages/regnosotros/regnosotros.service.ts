import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//agregado

@Injectable()
export class RegnosotrosService {

  constructor(public http: HttpClient) { }

  public postNosotrosService(nosotros : any) {//todo esto agregado
    return new Promise(resolve => {
      this.http.post('http://pereyraperforaciones.com/servidorperf/nosotros',nosotros).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
