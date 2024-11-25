import { Component } from '@angular/core';
import { AuthService } from '../../service/auth';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: string = '';
  clave: string = '';
  errorMessage: string = '';  // Variable para mostrar el mensaje de error
  showPassword: boolean = false; // Variable para alternar la visibilidad de la contraseña

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {}

  ingresar() {
    this.auth.login(this.usuario, this.clave).subscribe(
      () => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/home';
        this.router.navigateByUrl(returnUrl);
      },
      error => {
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
