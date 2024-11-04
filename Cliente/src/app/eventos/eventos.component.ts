import { Component } from '@angular/core';
import { ApiService } from '../../service/apiService';
import { Evento } from '../../models/evento.model';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  constructor(private cliente: ApiService) {}
  eventos: Evento[];
  ngOnInit(): void {
    this.cliente.getEventos().subscribe(eventos => {
      this.eventos = eventos;
    });
    }
}
