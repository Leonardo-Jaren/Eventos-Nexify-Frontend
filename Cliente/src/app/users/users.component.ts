import { Component } from '@angular/core';
import { AuthService } from '../../service/auth'; // Ajusta la ruta según la ubicación de tu servicio
import { ApiService } from '../../service/apiService';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class UsersComponent {

  usuarios: Usuario[];

  constructor(private authService: AuthService, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }

  logout() {
    this.authService.logout();
  }

}
