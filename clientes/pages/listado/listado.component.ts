import { Component, OnInit } from '@angular/core';
import { Agenda } from '../../interfaces/agenda.interface';
import { CitasService } from '../../services/citas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [

  ]
})
export class ListadoComponent implements OnInit {

  agendas: Agenda[]= [];
  
  constructor(private citasService: CitasService) { }

  

  ngOnInit(): void {
    this.citasService.getCitas()
    .subscribe( agendas => this.agendas = agendas);
  }
}
