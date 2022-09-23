import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agenda } from '../interfaces/agenda.interface';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCitas(): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(`${this.baseUrl}/clientes`);
  }

  getCitaPorId(id: string): Observable<Agenda> {
    return this.http.get<Agenda>(`${this.baseUrl}/clientes/${id}`);
  }

  getSugerencias(termino: string): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(
      `${this.baseUrl}/clientes?q=${termino}&_limit=6`
    );
  }

  agregarCita(agenda: Agenda): Observable<Agenda> {
    return this.http.post<Agenda>(`${this.baseUrl}/clientes`, agenda);
  }

  actualizarCita(agenda: Agenda): Observable<Agenda> {
    return this.http.put<Agenda>(`${this.baseUrl}/clientes/${agenda.id}`, agenda);
  }

  
  borrarCita(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/clientes/${id}`);
  }
}
