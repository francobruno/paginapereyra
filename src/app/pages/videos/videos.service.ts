import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VideosService {

  constructor(public http: HttpClient) { }

  public getListVideosService() {//todo esto agregado
    return new Promise(resolve => {
      this.http.get('http://pereyraperforaciones.com/servidorperf/video').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
