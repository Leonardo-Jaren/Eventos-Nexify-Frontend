import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../../models/evento.model';
import { AuthService } from '../../service/auth';
import { ApiService } from '../../service/apiService';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  usuarioActCod: string;
  usuarioAct: Usuario;
  evento: Evento = new Evento();
  coordinadores: Usuario[] = [];
  ponentes: Usuario[] = [];
  moderadores: Usuario[] = [];
  selectedFile: File | null = null;

  constructor(
    private authService: AuthService,
    private cliente: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userid = localStorage.getItem('userid');
    if (userid) {
      this.usuarioActCod = userid;
      this.cliente.getUser(this.usuarioActCod).subscribe({
        next: (usuario) => {
          this.usuarioAct = usuario;
        },
        error: (err) => {
          console.error('Error al cargar usuario:', err);
        }
      });
    } else {
      console.error('No se encontró un userid en el localStorage');
    }
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
