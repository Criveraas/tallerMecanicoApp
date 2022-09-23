import { Component, Input } from '@angular/core';
import { Agenda } from '../../interfaces/agenda.interface';

@Component({
  selector: 'app-agendado',
  templateUrl: './agendado.component.html',
  styles: [

  ]
})
export class AgendadoComponent  {

  @Input() agenda! : Agenda


}
