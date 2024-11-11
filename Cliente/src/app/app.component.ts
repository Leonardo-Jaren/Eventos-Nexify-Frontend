import { Component } from '@angular/core';
import { ApiService } from '../service/apiService';
import { Usuario } from '../models/usuario.model';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from '../service/interceptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    ApiService,
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}
  ]
})
export class AppComponent {
  title = 'Cliente';

  usuarios: Usuario[];

  constructor(private apiService: ApiService) { }

  ngOninit() {
    this.apiService.getUsers().subscribe(data => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }

}
