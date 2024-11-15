import { Component } from '@angular/core';
import { ApiService } from '../../service/apiService';
import { Evento } from '../../models/evento.model';
import { AuthService } from '../../service/auth';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  eventos: Evento[];
  constructor(private authService: AuthService, private cliente: ApiService) {}

  isModalOpen: boolean = false;

  ngOnInit(): void {
    this.cliente.getEventos().subscribe(eventos => {
      this.eventos = eventos;
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  // Método para cerrar el modal
  closeModal() {
    this.isModalOpen = false;
  }

  logout() {
    this.authService.logout();
  }
  
}

