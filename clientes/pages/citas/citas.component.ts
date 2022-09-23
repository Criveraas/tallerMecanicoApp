import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CitasService } from '../../services/citas.service';
import { Agenda } from '../../interfaces/agenda.interface';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styles: [

  ]
})
export class CitasComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private citasService: CitasService,
    private router: Router
  ) {}

  agenda!: Agenda;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.citasService.getCitaPorId(id)))
      .subscribe((agenda) => (this.agenda = agenda));
  }

  regresar() {
    this.router.navigate(['/clientes/listado']);
  }

}