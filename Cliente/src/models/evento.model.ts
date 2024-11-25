import { Coordinador } from './coordinador.model';
import { Ponente } from './ponente.model';
import { Participante } from './participante.model';
import { ModeradorSolicitud } from './moderador_solicitud.model';
import { CategoriaEvento } from './categoria_evento.model';

export class Evento {
  id?: number;
  nombreEvento: string;
  descripcion: string;
  fechaEvento: Date | string;
  categoriaEvento?: CategoriaEvento | null;
  tipoEvento: 'Virtual' | 'Presencial';
  ubicacion?: string | null;
  coordinador: Coordinador;
  ponente: Ponente;
  moderadorNecesario: boolean;
  moderador?: ModeradorSolicitud | null;
  participantes?: Participante[]; // Lista de participantes
  imagen?: string | null;
  horaInicio?: string | null;
  horaFin?: string | null;
  estadoEvento?: 'Próximo' | 'En Vivo' | 'Culminado'; // Calculado en el backend

  constructor(data: Partial<Evento> = {}) {
    this.id = data.id;
    this.nombreEvento = data.nombreEvento || '';
    this.descripcion = data.descripcion || '';
    this.fechaEvento = data.fechaEvento ? new Date(data.fechaEvento) : new Date();
    this.categoriaEvento = data.categoriaEvento
      ? new CategoriaEvento()
      : null;
    this.tipoEvento = data.tipoEvento || 'Virtual';
    this.ubicacion = data.ubicacion || null;
    this.coordinador = new Coordinador(data.coordinador || {});
    this.ponente = new Ponente(data.ponente || {});
    this.moderadorNecesario = data.moderadorNecesario || false;
    this.moderador = data.moderador ? new ModeradorSolicitud(data.moderador) : null;
    this.participantes = (data.participantes || []).map((p) => new Participante(p));
    this.imagen = data.imagen || null;
    this.horaInicio = data.horaInicio || null;
    this.horaFin = data.horaFin || null;
    this.estadoEvento = data.estadoEvento || 'Próximo';
  }

  // Método para verificar si el evento es presencial
  esPresencial(): boolean {
    return this.tipoEvento === 'Presencial';
  }

  // Validaciones en el cliente
  validar(): string[] {
    const errores: string[] = [];

    if (!this.nombreEvento) {
      errores.push('El nombre del evento es obligatorio.');
    }

    if (!this.descripcion) {
      errores.push('La descripción es obligatoria.');
    }

    if (!this.fechaEvento) {
      errores.push('La fecha del evento es obligatoria.');
    }

    if (this.esPresencial() && !this.ubicacion) {
      errores.push('La ubicación es obligatoria para eventos presenciales.');
    }

    if (this.moderadorNecesario && !this.moderador) {
      errores.push('Debe asignar un moderador si es necesario.');
    }

    return errores;
  }
}
