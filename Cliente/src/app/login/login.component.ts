import { Component } from '@angular/core';
import { AuthService } from '../../service/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent {
  usuario: string = '';
  clave: string = '';
  showPassword: boolean = false; // Variable para controlar la visibilidad de la contraseña

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  ingresar() {
    this.auth.login(this.usuario, this.clave);
  }

  // Método para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
