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
    // Cargar lista de coordinadores
    this.cliente.getCoordinadores().subscribe({
      next: (coordinadores) => {
        this.coordinadores = coordinadores;
      },
      error: (err) => {
        console.error('Error al cargar coordinadores:', err);
      }
    });

    // Cargar lista de ponentes
    this.cliente.getPonentes().subscribe({
      next: (ponentes) => {
        this.ponentes = ponentes;
      },
      error: (err) => {
        console.error('Error al cargar ponentes:', err);
      }
    });

    // Cargar lista de moderadores
    this.cliente.getModeradores().subscribe({
      next: (moderadores) => {
        this.moderadores = moderadores;
      },
      error: (err) => {
        console.error('Error al cargar moderadores:', err);
      }
    });

    this.usuarioActCod =localStorage.getItem('userid');
    this.cliente.getUser(this.usuarioActCod).subscribe({ 
      next: (usuario) => {
        this.usuarioAct = usuario;
      },
      error: (err) => {
        console.error('Error al cargar usuario:', err);
      }}
    );
  }



  navHome() {
    this.router.navigate(['/home']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
