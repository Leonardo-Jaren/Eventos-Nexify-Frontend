import { Component } from '@angular/core';
import { AuthService } from '../../service/auth'; // Ajusta la ruta según la ubicación de tu servicio
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { ApiService } from '../../service/apiService'; // Ajusta la ruta según la ubicación de tu servicio

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class UsersComponent {

  constructor(private authService: AuthService, private apiService: ApiService) {}

  users: Usuario[] = []
  visible: boolean = true;
  nuevo: Usuario = new Usuario();

  ngOnInit() {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  logout() {
    this.authService.logout();
  }

  showDialog() {
    this.visible = true;
    this.nuevo = new Usuario();
  }

  guardarUsuario(user: Usuario) {
    this.apiService.insertUser(user).subscribe(data => {
      this.users.push(data);
    });
  }

  editUser(user: Usuario) {
    this.nuevo = user;
    this.visible = true;
  }

  deleteUser(user: Usuario) {
    this.apiService.deleteUser(user).subscribe(() => {
      this.users = this.users.filter(u => u.id !== user.id);
    });
  }
}
