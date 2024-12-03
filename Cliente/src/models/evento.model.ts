import { Coordinador } from './coordinador.model';
import { Ponente } from './ponente.model';
import { Participante } from './participante.model';
import { CategoriaEvento } from './categoria_evento.model';

export class Evento {
  id?: number;
  nombre_evento: string;
  descripcion: string;
  fechaEvento: Date;
  categoriaEvento?: CategoriaEvento | null;
  tipo_evento: 'Virtual' | 'Presencial';
  ubicacion?: string | null;
  coordinador: Coordinador;
  ponente: Ponente;
  participantes?: Participante[]; // Lista de participantes
  imagen?: string | null;
  horaInicio: Date;
  horaFin: Date;
  estadoEvento?: 'Próximo' | 'En Vivo' | 'Culminado';

  constructor(data: Partial<Evento> = {}) {
    this.id = data.id;
    this.nombre_evento = data.nombre_evento || ''; // Valor por defecto si está vacío
    this.descripcion = data.descripcion || '';
    this.fechaEvento = data.fechaEvento ? new Date(data.fechaEvento) : new Date();
    this.categoriaEvento = data.categoriaEvento ? new CategoriaEvento() : null;
    this.tipo_evento = data.tipo_evento || 'Presencial';
    this.ubicacion = data.ubicacion || null;
    this.coordinador = new Coordinador(data.coordinador || {});
    this.ponente = new Ponente(data.ponente || {});
    this.participantes = (data.participantes || []).map((p) => new Participante(p));
    this.imagen = data.imagen || null;
    this.horaInicio = data.horaInicio ? new Date(data.horaInicio) : new Date();
    this.horaFin = data.horaFin ? new Date(data.horaFin) : new Date();
    this.estadoEvento = data.estadoEvento || 'Próximo';
  }

  // Método para verificar si el evento es presencial
  esPresencial(): boolean {
    return this.tipo_evento === 'Presencial';
  }

  // Validaciones en el cliente
  validar(): string[] {
    const errores: string[] = [];

    if (!this.nombre_evento) {
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

    return errores;
  }
}