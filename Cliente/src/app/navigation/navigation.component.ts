import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  role: string = '';
  isDropdownOpen: boolean = false;
  showNavbar: boolean = true; // Controla la visibilidad del navbar
  showBackToHome: boolean = true; // Controla la visibilidad de "Volver al inicio"

  constructor(private authService: AuthService, private router: Router) {
    // Escuchar los cambios en la ruta
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Ocultar navbar en la página de login
        this.showNavbar = event.url !== '/login';

        // Mostrar u ocultar "Volver al inicio" según la ruta
        this.showBackToHome = event.url !== '/home';
      }
    });
  }

  ngOnInit(): void {
    this.role = this.authService.getUserRole(); // Obtener el rol del usuario
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  isAdmin(): boolean {
    return this.role === 'admin';
  }

  isUser(): boolean {
    return this.role === 'user';
  }

  // Navegación a rutas específicas
  navHome() {
    this.router.navigate(['/home']);
  }

  navCrearEvento() {
    this.router.navigate(['/crear-evento']);
  }

  navListaEventos(): void {
    this.router.navigate(['/eventos']);
  }

  navPerfil(): void {
    this.router.navigate(['/perfil']);
  }

  navGestionarPonente(): void {
    this.router.navigate(['/gestionar-ponente']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
