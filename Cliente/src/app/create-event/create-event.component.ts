import { Component } from '@angular/core';
import { Evento } from '../../models/evento.model';
import { AuthService } from '../../service/auth';
import { ApiService } from '../../service/apiService';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {
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
