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
  eventos: Evento[];
  editableRow: number | null = null;
  backupEvento: Evento = {} as Evento;

  constructor(private authService: AuthService, private cliente: ApiService) {}

  ngOnInit(): void {
    this.cliente.getEventos().subscribe(eventos => {
      this.eventos = eventos;
    });
  }

  // Método para cerrar sesión
  logout() {
    this.authService.logout();
  }

  // Habilitar modo de edición para una fila específica
  enableEdit(index: number) {
    this.editableRow = index;
    this.backupEvento = { ...this.eventos[index] };
  }

  // Guardar cambios y salir del modo de edición
  saveEdit(index: number) {
    this.editableRow = null;
    // Guarda los cambios en la base de datos usando el servicio API
    this.cliente.updateEvento(this.eventos[index]).subscribe(
      () => {
        console.log('Evento actualizado exitosamente');
      },
      (error: any) => {
        console.error('Error al actualizar el evento', error);
        this.eventos[index] = { ...this.backupEvento };
      }
    );
  }

  // Cancelar edición y restaurar los datos originales
  cancelEdit() {
    if (this.editableRow !== null) {
      this.eventos[this.editableRow] = { ...this.backupEvento };
    }
    this.editableRow = null;
    this.backupEvento = {} as Evento;
  }
}
