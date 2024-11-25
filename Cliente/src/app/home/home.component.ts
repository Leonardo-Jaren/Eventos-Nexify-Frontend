import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/apiService'; // Importa el servicio
import { Evento } from '../../models/evento.model'; // Importa el modelo de Evento

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventosRecientes: Evento[] = []; // Lista para almacenar eventos recientes

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    // Cargar los eventos recientes al inicializar el componente
    this.cargarEventosRecientes();
  }

  // Método para cargar los eventos recientes desde el servicio
  private cargarEventosRecientes(): void {
    this.apiService.getEventosRecientes().subscribe(
      (data: any[]) => {
        // Transformar los datos para que coincidan con el modelo Evento
        this.eventosRecientes = data.map(eventoData => new Evento(eventoData));
      },
      (error) => {
        console.error('Error al cargar eventos recientes:', error);
      }
    );
  }

  // Métodos de navegación
  public navUsuarios(): void {
    this.router.navigate(['/usuarios']);
  }

  public navEventos(): void {
    this.router.navigate(['/eventos']);
  }

  navCalendario(): void {
    this.router.navigate(['/calendario']);
  }

  navInscripciones(): void {
    this.router.navigate(['/inscripciones']);
  }
}
