import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/apiService';
import { Evento } from '../../models/evento.model';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: Evento[] = []; // Lista de eventos cargados
  errorMessage: string = ''; // Mensaje de error si ocurre

  constructor(private cliente: ApiService) {}

  ngOnInit(): void {
    // Cargar la lista de eventos al inicializar el componente
    this.cliente.getEventos().subscribe({
      next: (eventos) => {
        this.eventos = eventos; // Guardar eventos obtenidos
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar eventos'; // Mensaje de error
        console.error(error);
      }
    });
  }
}
