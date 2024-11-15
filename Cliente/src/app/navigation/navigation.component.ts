// navigation.component.ts
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
  showNavbar: boolean = true; // Define showNavbar aquí para controlar su visibilidad

  constructor(private authService: AuthService, private router: Router) {
    // Escuchar los cambios en la ruta
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Muestra u oculta el navbar según la ruta
        this.showNavbar = event.url !== '/login';
      }
    });
  }

  ngOnInit(): void {
    this.role = this.authService.getUserRole();
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

  navHome() {
    this.router.navigate(['/home']);
  }

  navCrearEvento() {
    this.router.navigate(['/crear-evento']);
  }
}
