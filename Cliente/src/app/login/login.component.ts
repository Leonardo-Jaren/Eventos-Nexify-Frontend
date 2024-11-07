import { Component } from '@angular/core';
import { AuthService } from '../../service/auth';
import { Router } from '@angular/router';

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

  constructor(private auth: AuthService, private router: Router) {}
  
  ingresar() {
    this.auth.login(this.usuario, this.clave);
  }

  onUser() {
    this.router.navigate(['/users']);
  }
}
