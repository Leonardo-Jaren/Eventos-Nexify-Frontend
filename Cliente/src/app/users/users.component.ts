import { Component } from '@angular/core';
import { AuthService } from '../../service/auth'; // Ajusta la ruta según la ubicación de tu servicio
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { ApiService } from '../../service/apiService'; // Ajusta la ruta según la ubicación de tu servicio
import { ConfirmationService, MessageService } from 'primeng/api'; // Importa los servicios de PrimeNG

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'], // Corrige 'styleUrl' a 'styleUrls'
  providers: [ApiService, AuthService, ConfirmationService, MessageService] // Agrega los servicios de PrimeNG
})
export class UsersComponent {

  constructor(private authService: AuthService, private apiService: ApiService, private conf: ConfirmationService, private sms: MessageService) {}

  users: Usuario[] = []
  visible: boolean = true;
  nuevo: Usuario = new Usuario();
  edicion: boolean = false;
  tituloDialogo: string = '';

  ngOnInit() {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  logout() {
    this.authService.logout();
  }

  cargarUsers() {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  showDialog() {
    this.visible = true;
    this.nuevo = new Usuario();
    this.edicion = false;
    this.tituloDialogo = '';
  }

  guardarUsuario(user: Usuario) {
    this.tituloDialogo = 'Crear usuario';
    this.conf.confirm({
      message: 'Deseas continuar con la creación de ' + user.username + '?',
      header: 'Confirmar creación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (this.edicion) {
          this.apiService.updateUser(this.nuevo).subscribe(data => {
            this.cargarUsers();
            this.visible = false;     
          });
        } else {
          this.apiService.insertUser(user).subscribe(data => {
            this.cargarUsers();
            this.visible = false;
          });
        }
      },
    });
  }

  editUser(user: Usuario) {
    this.nuevo = user;
    this.visible = true;
    this.tituloDialogo = 'Editar usuario'; 
  }

  deleteUser(user: Usuario) {
    this.conf.confirm({
      message: 'Deseas continuar con la eliminación de' + user.username + '?',
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      accept: () => {
        this.apiService.deleteUser(user).subscribe(() => {
          this.cargarUsers
        });
      },
    });
    this.apiService.deleteUser(user).subscribe(() => {
      this.cargarUsers();
    });
  }
}
