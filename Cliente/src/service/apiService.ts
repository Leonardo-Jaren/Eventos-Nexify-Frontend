import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario.model";
import { Evento } from "../models/evento.model";

@Injectable({
  providedIn: "root"
})
export class ApiService {
    private ApiUrl = "http://127.0.0.1:8000/api/"; // URL de la API

    constructor(private http: HttpClient) {}

    // ! Configura los encabezados de autenticación si el token está presente
    private getHttpOptions(): { headers: HttpHeaders } {
        const token = localStorage.getItem('token');
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                ...(token ? { 'Authorization': `token ${token}` } : {})
            })
        };
    }

// * Metodos para usuarios

    // ! Método para registrar un usuario
    public registerUser(usuario: Usuario): Observable<Usuario> {
        const body = JSON.stringify(usuario);
        return this.http.post<Usuario>(`${this.ApiUrl}register/`, body, this.getHttpOptions());
    }

    // ! Método para obtener los usuarios
    public getUsers(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${this.ApiUrl}usuario/`, this.getHttpOptions());
    }

    // ! Método para insertar un usuario
    public insertUser(usuario: Usuario): Observable<Usuario> {
        const body = JSON.stringify(usuario);
        return this.http.post<Usuario>(`${this.ApiUrl}usuario/`, body, this.getHttpOptions());
    }

    // ! Metodo para elminar usuario
    public deleteUser(usuario: Usuario): Observable<void> {
        return this.http.delete<void>(`${this.ApiUrl}usuario/${usuario.id}/`, this.getHttpOptions());
    }

    // ! Actualizar Usuario
    public updateUser(usuario: Usuario): Observable<Usuario> {
        let cuerpo = JSON.stringify(usuario);
        return this.http.put<Usuario>(`${this.ApiUrl}usuario/${usuario.id}/`, cuerpo, this.getHttpOptions());
    }   

// * Metodos para eventos

    // ! Método para obtener los eventos
    public getEventos(): Observable<Evento[]> {
        return this.http.get<Evento[]>(`${this.ApiUrl}eventos/`, this.getHttpOptions());
    }

    // ! Post para añadir nuevos eventos
    public postEvento(evento: Evento): Observable<Evento> {
        const body = JSON.stringify(evento);
        return this.http.post<Evento>(`${this.ApiUrl}eventos/`, body, this.getHttpOptions());
    }

    // ! Post2 para añadir nuevos eventos
    public postEvento2(formData: FormData): Observable<Evento> {
        return this.http.post<Evento>(`${this.ApiUrl}eventos/`, formData);
    }

    // ! Put para actualizar eventos
    public putEvento(evento: Evento): Observable<Evento> {
        const body = JSON.stringify(evento);
        return this.http.put<Evento>(`${this.ApiUrl}eventos/${evento.id}/`, body, this.getHttpOptions());
    }

    // ! Put2 para actualizar eventos
    public putEvento2(formData: FormData, id: number): Observable<Evento> {
        return this.http.put<Evento>(`${this.ApiUrl}eventos/${id}/`, formData);
    }

    // ! Eventos recientes
    public getEventosRecientes(): Observable<Evento[]> {
        return this.http.get<Evento[]>(`${this.ApiUrl}eventos/?ordering=-fecha_evento`, this.getHttpOptions());
    }

// * Metodos para roles

    // ! Coordinadores
    public getCoordinadores(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${this.ApiUrl}coordinadores/`);
    }

    // ! Ponentes
    public getPonentes(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${this.ApiUrl}ponentes/`);
    }
}
