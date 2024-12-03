// src/app/inscripcion/inscripcion.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/apiService';
import { Evento } from '../../models/evento.model';
import { Inscripcion } from '../../models/inscripcion.model';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {
  eventos: Evento[] = [];
  eventoSeleccionado: Evento | null = null;
  usuarioId: number = 1; // Este ID debe ser dinámico según el usuario logueado
  fechaInscripcion: string = new Date().toISOString();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Obtener los eventos disponibles
    this.apiService.getEventos().subscribe(
      (eventos) => {
        this.eventos = eventos;
      },
      (error) => {
        console.error('Error al obtener eventos', error);
      }
    );
  }

  // Método para inscribir al estudiante
  inscribir(): void {
    if (this.eventoSeleccionado) {
      const inscripcion: Inscripcion = {
        eventoId: this.eventoSeleccionado.id || 0,
        usuarioId: this.usuarioId,
        fechaInscripcion: this.fechaInscripcion
      };

      this.apiService.inscribirEstudiante(inscripcion).subscribe({
        next: (inscripcion) => {
          alert('Inscripción exitosa');
          // Aquí podrías redirigir a otro lugar o actualizar la vista
        },
        error: (error) => {
          alert('Error al inscribirse');
          console.error('Error al inscribir estudiante:', error);
        }
      });
    }
  }
}
