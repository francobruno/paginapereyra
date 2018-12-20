import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//agregado

@Injectable()
export class ContactoService {

  constructor(public http: HttpClient) { }

  public postContactoService(contacto : any) {//todo esto agregado
    return new Promise(resolve => {
      this.http.post('http://pereyraperforaciones.com/servidorperf/contacto',contacto).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
