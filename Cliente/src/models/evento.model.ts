import { CategoriaEvento } from './categoria_evento.model';
import { Usuario } from './usuario.model';
// import { Participante } from './participante.model';

export class Evento {
  id?: number; // ID opcional, ya que no estará presente antes de que el evento se cree
  nombre_evento: string;
  descripcion: string;
  fecha_evento: string; // Se almacenará en formato ISO (YYYY-MM-DDTHH:MM:SS)
  tipo_evento: 'Virtual' | 'Presencial'; // Solo permite los valores especificados
  ubicacion?: string; // Opcional, solo requerido si el evento es presencial
  coordinador: number; // ID del coordinador
  ponente: number; // ID del ponente
  moderador_necesario: boolean;
  moderador?: number | null; // ID del moderador, opcional
  categoria_evento: string; // Added property
  participantes?: number[]; // IDs de los participantes opcionalmente
  imagen: string; // URL de la imagen opcional
  hora_inicio?: string; // Hora de inicio en formato HH:MM:SS
  hora_fin?: string; // Hora de fin en formato HH:MM:SS

  // Campos calculados en el backend, no se envían al backend pero pueden recibirse
  estado_evento?: 'Próximo' | 'En Vivo' | 'Culminado';
}
