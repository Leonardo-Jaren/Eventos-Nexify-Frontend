import { Component } from '@angular/core';
import { ApiService } from '../../service/apiService';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  usuario: Usuario = new Usuario();
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  onRegister(): void {
    if (!this.usuario.username || !this.usuario.password || !this.usuario.email || !this.usuario.rol) {
      this.errorMessage = "Todos los campos son obligatorios.";
      return;
    }

    this.apiService.registerUser(this.usuario).subscribe(
      response => {
        this.successMessage = "Usuario registrado con éxito.";
        this.errorMessage = '';
        
        // Redirigir a la ruta home después del registro exitoso
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000); // Opcional: 1 segundo de espera para mostrar el mensaje
      },
      error => {
        if (error.error && typeof error.error === 'object') {
          this.errorMessage = Object.values(error.error).join(', ');
        } else if (typeof error.error === 'string') {
          this.errorMessage = error.error;
        } else {
          this.errorMessage = "Ha ocurrido un error inesperado.";
        }
        this.successMessage = '';
      }
    );
  }
}
