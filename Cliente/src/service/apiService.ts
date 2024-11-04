import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario.model";
import { Evento } from "../models/evento.model";


@Injectable({
  providedIn: "root"
})

export class ApiService {
    private ApiUrl = "http://127.0.0.1:8000/api/"; // URL to web api
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };
    constructor(private http: HttpClient) {
    }

    //GET all users
    getUsers(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.ApiUrl + 'usuario');
    }

    getEventos(): Observable<Evento[]> {
      const token = localStorage.getItem('token');
      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}` // Asegúrate de que tu backend espera el token en este formato
          })
      };
      return this.http.get<Evento[]>(this.ApiUrl + 'eventos/', httpOptions);
  }


}