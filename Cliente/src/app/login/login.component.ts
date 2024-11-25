import { Component } from '@angular/core';
import { AuthService } from '../../service/auth';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  clave: string = '';
  errorMessage: string = ''; // Variable para mostrar el mensaje de error
  showPassword: boolean = false; // Variable para alternar la visibilidad de la contraseña

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {}

  ingresar() {
    this.auth.login(this.email, this.clave).subscribe(
      () => {
        const rol = this.auth.getUserRole();
        if (rol === 'Coordinador') {
          this.router.navigate(['/home']);
        } else if (rol === 'Participante') {
          this.router.navigate(['/home']);
        } else if (rol === 'Ponente') {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/home']);
        }
      },
      (error) => {
        this.errorMessage = error.error.error || 'Error de autenticación';
      }
    );
  }

  // Método para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Método para navegar a la página de registro
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
