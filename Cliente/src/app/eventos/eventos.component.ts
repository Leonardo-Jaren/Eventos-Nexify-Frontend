import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/apiService';
import { Evento } from '../../models/evento.model';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: Evento[] = []; // Lista de eventos cargados
  errorMessage: string = ''; // Mensaje de error si ocurre
  modalAbierto: boolean = false; // Controla la visibilidad del modal
  eventoSeleccionado: Evento; // El evento seleccionado para mostrar en el modal
  usuarioRol: string = 'Participante'; // Ejemplo de rol de usuario, este valor debe venir del backend o de la autenticación
  coordinadores: Usuario[] = [];
  ponentes: Usuario[] = [];
  selectedFile: File | null = null;

  constructor(private cliente: ApiService) {}

  ngOnInit(): void {
    this.cliente.getEventos().subscribe({
      next: (eventos) => {
        // Agrega un log aquí para ver toda la estructura de los eventos
        console.log('Datos de eventos:', eventos);
        
        // Verifica si los datos de ponente están presentes antes de asignarlos
        eventos.forEach(evento => {
          console.log('Evento:', evento); // Asegúrate de ver si la propiedad ponente está disponible
          if (evento.ponente) {
            console.log('Ponente:', evento.ponente);  // Verifica si el ponente está presente
          }
        });
  
        // Asigna los eventos si los datos son correctos
        this.eventos = eventos.map((data: any) => new Evento(data));
        console.log('Eventos cargados:', this.eventos);
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar eventos';
        console.error(error);
      }
    });
  }
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
