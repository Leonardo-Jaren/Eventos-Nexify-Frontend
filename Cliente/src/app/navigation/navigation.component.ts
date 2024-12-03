import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  menuRoutes: { label: string; path: string; icon: string }[] = [];
  role: string = '';
  showNavbar: boolean = true; // Controla si el navbar debe mostrarse
  isDropdownOpen: boolean = false; // Controla el estado del menú desplegable

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Obtener el rol del usuario autenticado
    this.role = this.authService.getUserRole() ?? '';
    this.configureRoutesByRole();
  }

  // Configuración de rutas basada en el rol
  private configureRoutesByRole(): void {
    switch (this.role) {
      case 'Coordinador':
        this.menuRoutes = [
          { label: 'Inicio', path: '/home', icon: 'fas fa-home' },
          { label: 'Gestionar Ponente', path: '/gestionar-ponente', icon: 'fas fa-user-tie' },
          { label: 'Lista de Eventos', path: '/eventos', icon: 'fas fa-calendar-alt' },
          { label: 'Crear Evento', path: '/crear-evento', icon: 'fas fa-plus' },
        ];
        break;

      case 'Participante':
        this.menuRoutes = [
          { label: 'Mis Eventos', path: '/mis-eventos', icon: 'fas fa-user-check' },
          { label: 'Lista de eventos', path: '/eventos', icon: 'fas fa-calendar-alt' },
        ];
        break;

      case 'Ponente':
        this.menuRoutes = [
          { label: 'Proponer Evento', path: '/proponer-evento', icon: 'fas fa-lightbulb' },
          { label: 'Mis Conferencias', path: '/mis-conferencias', icon: 'fas fa-microphone' },
        ];
        break;

      default:
        this.menuRoutes = [{ label: 'Inicio', path: '/home', icon: 'fas fa-home' }];
        break;
    }
  }

  // Método para alternar el estado del menú desplegable
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Método para navegar
  navigateTo(path: string): void {
    this.router.navigate([path]);
    this.isDropdownOpen = false; // Cierra el menú desplegable si estaba abierto
  }

  // Método para cerrar sesión
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.isDropdownOpen = false; // Cierra el menú desplegable
  }

  // Método para ir al perfil
  navPerfil(): void {
    this.router.navigate(['/perfil']);
    this.isDropdownOpen = false; // Cierra el menú desplegable
  }
}
