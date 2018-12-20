import { Component, OnInit } from '@angular/core';
import { NosotrosService } from './nosotros.service';//agregado

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  nosotros: any;

  constructor(public nosotrosService: NosotrosService) { }

  ngOnInit() {
    this.getnosotrosService();
  }
  
  getnosotrosService() {
    this.nosotrosService.getListNosotrosService()
    .then(data => {
      this.nosotros = data;
      console.log(this.nosotros);
    });
  }
}
