import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImagenesService {

  constructor(public http: HttpClient) { }
  
  public getListImagenesService() {//todo esto agregado
    return new Promise(resolve => {
      this.http.get('http://pereyraperforaciones.com/servidorperf/imagen').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
