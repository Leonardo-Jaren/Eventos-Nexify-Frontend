import { Component } from '@angular/core';
import { Evento } from '../../../models/evento.model';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {
  eventoSeleccionado: Evento; // Evento seleccionado para mostrar en el modal
  modalAbierto: boolean = false; // Controla la visibilidad del modal
  usuarioRol: string = 'Participante'; // Rol del usuario autenticado

  // Método para abrir el modal con el evento seleccionado
  abrirModal(eventos: Evento): void {
    this.eventoSeleccionado = eventos;
    this.modalAbierto = true; // Abrir el modal
  }

  // Método para cerrar el modal solo si se hace clic fuera del contenido
  cerrarModal(event: MouseEvent): void {
    // Verificar si el clic fue fuera del modal
    if ((event.target as HTMLElement).classList.contains('fixed')) {
      this.modalAbierto = false; // Cerrar el modal
    }
  }

  // Método para inscribirse al evento
  inscribirse(evento: Evento): void {
    if (this.usuarioRol === 'Participante') {
      console.log(`El usuario se ha inscrito al evento: ${evento.nombre_evento}`);
      // Aquí puedes agregar la lógica para inscribir al participante
      // Ejemplo: llamar a un servicio de inscripción que actualice la base de datos
    } else {
      console.log('No tiene permisos para inscribirse');
    }
  }

}
