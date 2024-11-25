import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../../models/evento.model';
import { AuthService } from '../../service/auth';
import { ApiService } from '../../service/apiService';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  evento: Evento = new Evento();
  coordinadores: Usuario[] = [];
  ponentes: Usuario[] = [];
  moderadores: Usuario[] = [];
  selectedFile: File | null = null;

  constructor(
    private authService: AuthService,
    private cliente: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Cargar lista de coordinadores
    this.cliente.getCoordinadores().subscribe({
      next: (coordinadores) => {
        this.coordinadores = coordinadores;
      },
      error: (err) => {
        console.error('Error al cargar coordinadores:', err);
      }
    });

    // Cargar lista de ponentes
    this.cliente.getPonentes().subscribe({
      next: (ponentes) => {
        this.ponentes = ponentes;
      },
      error: (err) => {
        console.error('Error al cargar ponentes:', err);
      }
    });

    // Cargar lista de moderadores
    this.cliente.getModeradores().subscribe({
      next: (moderadores) => {
        this.moderadores = moderadores;
      },
      error: (err) => {
        console.error('Error al cargar moderadores:', err);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput?.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0]; // Guardar el archivo seleccionado
    }
  }

  onCreateEvent(): void {
    const formData = new FormData();
  
    formData.append('nombre_evento', this.evento.nombreEvento);
    formData.append('descripcion', this.evento.descripcion);
    formData.append('fecha_evento', new Date(this.evento.fechaEvento).toISOString());
    formData.append('tipo_evento', this.evento.tipoEvento);
  
    if (this.evento.tipoEvento === 'Presencial' && this.evento.ubicacion) {
      formData.append('ubicacion', this.evento.ubicacion);
    }
  
    formData.append('coordinador', this.evento.coordinador.toString());
    formData.append('ponente', this.evento.ponente.toString());
    formData.append('moderador_necesario', this.evento.moderadorNecesario.toString());
  
    if (this.evento.moderadorNecesario && this.evento.moderador) {
      formData.append('moderador', this.evento.moderador.toString());
    }
  
    if (this.selectedFile) {
      formData.append('imagen', this.selectedFile, this.selectedFile.name);
    }
  
  
    this.cliente.insertEvento(formData).subscribe({
      next: (response) => {
        console.log('Evento creado con éxito:', response);
      },
      error: (error) => {
        console.error('Error al crear el evento:', error);
      },
    });
  }
  
  

  onCancel(): void {
    this.router.navigate(['/home']);
  }
}
