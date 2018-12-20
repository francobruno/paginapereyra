import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  urlac: string = "";

  constructor() { }

  ngOnInit() {
  }

  getActiveHome(){
    this.urlac = window.location.pathname.split('/')[1];
      if(this.urlac == "")
           return "active";
      else
           return "not";
  }

  getActiveNosotros(){
    this.urlac = window.location.pathname.split('/')[1];
      if(this.urlac == "nosotros")
           return "active";
      else
           return "not";
  }

  getActiveFotos(){
    this.urlac = window.location.pathname.split('/')[1];
      if(this.urlac == "imagenes")
           return "active";
      else
           return "not";
  }

  getActiveVideos(){
    this.urlac = window.location.pathname.split('/')[1];
      if(this.urlac == "videos")
           return "active";
      else
           return "not";
  }
  getActiveContacto(){
    this.urlac = window.location.pathname.split('/')[1];
      if(this.urlac == "contacto")
           return "active";
      else
           return "not";
  }
}
