import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  // ! Método para redirigir a la página de usuarios
  public navUsuarios(): void {
    this.router.navigate(['/usuarios']);
  }

  // ! Método para redirigir a la página de eventos
  public navEventos(): void {
    this.router.navigate(['/eventos']);
  }

  // ! Método para redirigir a la página de calendario
  navCalendario() {
    this.router.navigate(['/calendario']);
  }

  // ! Método para redirigir a la página de inscripciones
  navInscripciones() {
    this.router.navigate(['/inscripciones']);
  }
}
