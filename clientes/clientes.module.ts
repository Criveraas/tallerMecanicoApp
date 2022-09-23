import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { AgendadoComponent } from './components/agendado/agendado.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { CitasComponent } from './pages/citas/citas.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgendadoComponent,
    ConfirmarComponent,
    AgregarComponent,
    BuscarComponent,
    CitasComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ClientesModule { }
