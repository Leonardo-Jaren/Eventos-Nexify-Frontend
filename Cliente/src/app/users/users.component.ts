import { Component } from '@angular/core';
import { AuthService } from '../../service/auth'; // Ajusta la ruta según la ubicación de tu servicio

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class UsersComponent {

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  
}
