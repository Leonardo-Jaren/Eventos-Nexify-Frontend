import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/apiService';
import { Evento } from '../../models/evento.model';
import { AuthService } from '../../service/auth';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: Evento[] = []; // Lista de eventos cargados
  errorMessage: string = ''; // Mensaje de error si ocurre

  constructor(private cliente: ApiService,private auth:AuthService) {}

  ngOnInit(): void {
    this.cliente.getEventos().subscribe(eventos => {
      this.eventos  = eventos;
    });
  }

  logout() {
    this.auth.logout();
  }

}

