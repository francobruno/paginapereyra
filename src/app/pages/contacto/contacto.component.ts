import { Component, OnInit } from '@angular/core';
import { ContactoService } from './contacto.service';

export class Contacto{
  emisor: string;
  asunto: string;
  cuerpo: string
}
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contacto: Contacto = new Contacto();

  constructor(public contactoService : ContactoService) { }

  ngOnInit() {
    this.contacto.emisor = '';
    this.contacto.asunto = '';
    this.contacto.cuerpo = '';
  }

  public enviarContacto(){
    this.contactoService.postContactoService(this.contacto);
    this.contacto.emisor='';
    this.contacto.asunto='';
    this.contacto.cuerpo='';
  }
  
}
