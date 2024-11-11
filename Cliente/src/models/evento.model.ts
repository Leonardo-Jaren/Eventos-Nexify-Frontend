import { CategoriaEvento } from './categoria_evento.model';
import { Usuario } from './usuario.model';
// import { Participante } from './participante.model';

export class Evento {
    nombre_evento: string;
    descripcion: string;
    fecha_evento: Date;
    tipo_evento: string;
    categoria_evento: CategoriaEvento[];
    ubicacion: string;
    coordinador: string;
    ponente: string;
    moderador: string;
    moderador_necesario: boolean;
    participantes: number; // Asegúrate de que la propiedad esté aquí con el tipo correcto
    // Agrega otras propiedades si es necesario
  }
