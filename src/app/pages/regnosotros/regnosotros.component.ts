import { Component, OnInit } from '@angular/core';
import { RegnosotrosService } from './regnosotros.service';

export class Nosotros{
  titulonosotros : string;
  comentarionosotros: string
}

@Component({
  selector: 'app-regnosotros',
  templateUrl: './regnosotros.component.html',
  styleUrls: ['./regnosotros.component.css']
})
export class RegnosotrosComponent implements OnInit {

  nosotros: Nosotros = new Nosotros();
  res : any;

  constructor(public regnosotros : RegnosotrosService) { }

  ngOnInit() {
    this.nosotros.titulonosotros='';
    this.nosotros.comentarionosotros='';
  }

  public guardarNosotros(){
    this.regnosotros.postNosotrosService(this.nosotros);
    this.nosotros.titulonosotros='';
    this.nosotros.comentarionosotros='';
  }
}
