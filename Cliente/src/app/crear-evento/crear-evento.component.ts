import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/apiService';
import { Evento } from '../../models/evento.model';


@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
})
export class CrearEventoComponent {
  evento: Evento[];

  constructor(private apiservice: ApiService, private router: Router) {}

  // Método para crear un evento
  crearEvento() {
    this.apiservice.insertEvento(this.evento[0]).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/eventos']);
      },
      (error) => {
        console.log(error);
      }
    );
  } 
}
