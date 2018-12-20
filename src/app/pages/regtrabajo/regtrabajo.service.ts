import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//agregado

@Injectable()
export class RegtrabajoService {

  file: any;
  
  constructor(public http: HttpClient) { }

  public onArchivoSeleccionado($event): string {
    if ($event.target.files.length === 1) {
        this.file=$event.target.files[0];
        return this.file.name;
    }
  }

  public postImagenService() {//todo esto agregado
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('name', this.file.name);
    formData.append('tmp_name',this.file.tmp_name);
    return new Promise(resolve => {
      this.http.post('http://pereyraperforaciones.com/servidorperf/subidaimagen',formData).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public postTrabajoService(trabajo : any) {//todo esto agregado
    return new Promise(resolve => {
      this.http.post('http://pereyraperforaciones.com/servidorperf/trabajos',trabajo).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
