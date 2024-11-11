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

  ngOnInit() {
    
  }

  constructor(private auth: AuthService) {}
  
  ingresar() {
    this.auth.login(this.usuario, this.clave);
  }
}
