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
    this.usuario.rol = 'Participante'; // Asignar rol por defecto
  
    if (!this.usuario.username || !this.usuario.password || !this.usuario.email) {
      this.errorMessage = 'Todos los campos son obligatorios.';
      return;
    }
  
    this.apiService.registerUser(this.usuario).subscribe(
      (response) => {
        this.successMessage = 'Usuario registrado con éxito.';
        this.errorMessage = '';
  
        // Redirigir a /home después de registrarse
        localStorage.setItem('role', 'Participante');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      },
      (error) => {
        this.errorMessage = error.error?.error || 'Ha ocurrido un error inesperado.';
        this.successMessage = '';
      }
    );
  }

  //Una función que me rediriga a la pagina de login
  onLogin(): void {
    this.router.navigate(['/login']);
  }
  
}
