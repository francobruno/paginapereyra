import { Component, OnInit } from '@angular/core';
import { ImagenesService } from './imagenes.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  imagenes : any;

  constructor(public imagenesServices : ImagenesService) { }

  ngOnInit() {
    this.getImagenesService(); 
  }

  getImagenesService() {
    this.imagenesServices.getListImagenesService()
    .then(data => {
      this.imagenes = data;
      console.log(this.imagenes);
    });
  }

}
