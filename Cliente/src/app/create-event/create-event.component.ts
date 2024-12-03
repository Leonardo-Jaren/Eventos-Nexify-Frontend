import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../../models/evento.model';
import { AuthService } from '../../service/auth';
import { ApiService } from '../../service/apiService';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  evento: Evento = new Evento();
  coordinadores: Usuario[] = [];
  ponentes: Usuario[] = [];
  selectedFile: File | null = null;
  coordinador: Usuario = new Usuario();
  ponente: Usuario = new Usuario();

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUsersData();
  }

  private loadUsersData(): void {
    // Cargar datos de coordinadores, ponentes y moderadores de manera más eficiente
    const userRequests = [
      this.apiService.getCoordinadores().toPromise(),
      this.apiService.getPonentes().toPromise(),
    ];

    Promise.all(userRequests)
      .then(([coordinadores, ponentes]) => {
        this.coordinadores = coordinadores ?? [];
        this.ponentes = ponentes ?? [];
      })
      .catch(err => {
        console.error('Error al cargar los usuarios:', err);
      });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput?.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0]; // Guardar el archivo seleccionado
    }
  }

  onCreateEvent(): void {
    const formData = this.prepareFormData();
    formData.forEach((value, key) => {
      console.log(`Key: ${key}, Value:`, value);
    })
    this.apiService.postEvento2(formData).subscribe({
      next: (evento) => {
        console.log('Evento creado:', evento);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error al crear evento:', err);
      }
    });
  }

  onPonenteChange(event: Event): void {
    console.log('Seleccionado:', this.ponente);
  }

  private prepareFormData(): FormData {
    const formData = new FormData();
    formData.append('nombre_evento', this.evento.nombre_evento);
    formData.append('descripcion', this.evento.descripcion);
    formData.append('fecha_evento', new Date(this.evento.fechaEvento).toISOString());
    formData.append('tipo_evento', this.evento.tipo_evento);
    formData.append('tipo_evento', this.evento.tipo_evento);

    if (this.evento.tipo_evento === 'Presencial' && this.evento.ubicacion) {
    if (this.evento.tipo_evento === 'Presencial' && this.evento.ubicacion) {
      formData.append('ubicacion', this.evento.ubicacion);
    }

    formData.append('coordinador', this.coordinador.id.toString());
    console.log('Coordinador:', this.coordinador);
    formData.append('ponente', this.ponente.id.toString());
    console.log('Ponente:', this.ponente);

    if (this.selectedFile) {
      formData.append('imagen', this.selectedFile, this.selectedFile.name);
    }

    return formData;
  }

  onCancel(): void {
    this.router.navigate(['/home']);
  }

  @Input() showModal: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
  
}
