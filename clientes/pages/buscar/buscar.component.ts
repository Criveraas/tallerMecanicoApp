import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../services/citas.service';
import { Agenda } from '../../interfaces/agenda.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [

  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  agendas: Agenda[] = [];
  citaSeleccionada!: Agenda | undefined;

  constructor(private citasService: CitasService) { }

  ngOnInit(): void {
  }


  buscando() {
    this.citasService.getSugerencias(this.termino.trim())
    .subscribe(agendas => this.agendas = agendas)
  }



  opcionSeleccionada(event: MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.citaSeleccionada = undefined;
      return;
    }

    const agenda: Agenda = event.option.value;
    this.termino = agenda.nombreCliente;
    
    this.citasService.getCitaPorId( agenda.id! )
    .subscribe( agenda => this.citaSeleccionada = agenda);
  }

}
