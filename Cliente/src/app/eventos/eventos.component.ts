//import { Component, OnInit } from '@angular/core';
import { Component } from "@angular/core";
import { Evento } from "../../models/evento.model";
import { ApiService } from "../../service/apiService";
import { AuthService } from "../../service/auth";



@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  eventos: Evento[];
  constructor(private authService: AuthService, private cliente: ApiService) { }

  ngOnInit(): void {
    this.cliente.getEventos().subscribe(eventos => {
      this.eventos = eventos;
    });
  }

  logout() {
    this.authService.logout();
  }

}
