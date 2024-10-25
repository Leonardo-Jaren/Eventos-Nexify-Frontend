import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Evento } from "../models/evento.model";

@Injectable({
  providedIn: "root"
})

export class ApiService {
    private ApiUrl = "http://localhost:127.0.0.1:8000/api/"; // URL to web api
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };
    constructor(private http: HttpClient) {
    }

    //GET Eventos
    public getEventos(): Observable<Evento[]> {
      return this.http.get<Evento[]>(this.ApiUrl + 'eventos')
    }
    //POST Evento
    public postEvento(evento: Evento): Observable<Evento> {
      return this.http.post<Evento>(this.ApiUrl + 'eventos', evento, this.httpOptions)
    }
    //PUT Evento
    public putEvento(evento: Evento): Observable<Evento> {
      return this.http.put<Evento>(this.ApiUrl + 'eventos/' + evento.id, evento, this.httpOptions)
    }
    //DELETE Evento
    public deleteEvento(id: number): Observable<Evento> {
      return this.http.delete<Evento>(this.ApiUrl + 'eventos/' + id)
    }
    
}