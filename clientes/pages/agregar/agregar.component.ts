import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { Agenda } from '../../interfaces/agenda.interface';
import { CitasService } from '../../services/citas.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [

  ]
})
export class AgregarComponent implements OnInit {

  agenda: Agenda = {
    id: '',
    nombreCliente: '',
    nombreAuto: '',
    fecha: '',
    hora: '',
    motivoConsulta: '',
    direccion: ''
  }
    

constructor(
  private citasService: CitasService,
  private activatedRoute: ActivatedRoute,
  private router: Router,
  private snackBAr: MatSnackBar,
  public dialog: MatDialog,
  
) {}

ngOnInit(): void {
  if (!this.router.url.includes('editar')) {
    return;
  }

  this.activatedRoute.params
    .pipe(switchMap(({ id }) => this.citasService.getCitaPorId(id)))
    .subscribe((agenda) => (this.agenda = agenda));
}

guardar() {
  if (this.agenda.nombreCliente.trim().length === 0) {
    return;
  }

  if (this.agenda.id) {
    this.citasService
      .actualizarCita(this.agenda)
      .subscribe((agenda) =>{ this.mostrarSnackBar('Registro actualizado')
      this.router.navigate(['/clientes/listado']);});
  } else {
    this.citasService.agregarCita(this.agenda).subscribe((agenda) => {
      this.router.navigate(['/clientes/listado']);
    });
  }
}

borrarCita() {
  const dialog = this.dialog.open(ConfirmarComponent, {
    width: '250px',
    data: this.agenda,
  });

  dialog.afterClosed().subscribe((result) => {
    if (result) {
      this.citasService.borrarCita(this.agenda.id!)
      .subscribe(resp => {
        this.router.navigate(['/clientes']);
       
      });
    }
  });
}

mostrarSnackBar(mensaje: string) {
  this.snackBAr.open(mensaje, 'ok!', {
    duration: 2000,
  });
}

}
