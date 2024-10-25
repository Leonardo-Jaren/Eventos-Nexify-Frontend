import { Component } from '@angular/core';
import { ApiService } from '../../service/apiService';
import { Evento } from '../../models/evento.model';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css',
  providers: [ApiService]
})
export class PruebaComponent {
  eventos:Evento[];
  constructor(private conexionAPI: ApiService) {}
  ngonInit() {
    this.conexionAPI.getEventos().subscribe(res => {
      this.eventos = res;
      console.log(this.eventos);
    });
  }
}
