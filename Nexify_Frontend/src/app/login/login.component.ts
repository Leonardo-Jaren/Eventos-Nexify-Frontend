import { Component } from '@angular/core';
import { AuthService } from '../../service/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService]
})
export class LoginComponent {
  constructor (private auth: AuthService) {}
  ngOnInit() {
    this.auth.login('prueba@gmail.com','123456789');
  }
}
