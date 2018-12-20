import { Component, OnInit } from '@angular/core';
import { RegtrabajoService } from './regtrabajo.service';

export class Trabajo{
  titulo : string;
  comentario: string;
  dirimagen: string;
}

@Component({
  selector: 'app-regtrabajo',
  templateUrl: './regtrabajo.component.html',
  styleUrls: ['./regtrabajo.component.css']
})
export class RegtrabajoComponent implements OnInit {

  trabajo: Trabajo = new Trabajo();

  constructor(public regTrabajoService : RegtrabajoService) { }

  ngOnInit() {
    this.trabajo.titulo='';
    this.trabajo.comentario='';
    this.trabajo.dirimagen='';
  }
  
  public onArchivoSeleccionado($event){
    this.trabajo.dirimagen="http://pereyraperforaciones.com/servidorperf/subidas/?action=subidas/"+this.regTrabajoService.onArchivoSeleccionado($event);
    this.regTrabajoService.postImagenService();
  }

  public guardarTrabajos(){
    this.regTrabajoService.postTrabajoService(this.trabajo);     
  }

}
