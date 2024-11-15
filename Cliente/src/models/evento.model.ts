import { CategoriaEvento } from './categoria_evento.model';
import { Usuario } from './usuario.model';
import { Participante } from './participante.model';

export class Evento {
    id: number; // Agrega esta propiedad para identificar cada evento
    nombre_evento: string;
    descripcion: string;
    fecha_evento: Date;
    categoria_evento: CategoriaEvento = { nombre: '' }; // Inicializa como objeto vacío
    tipo_evento: 'Virtual' | 'Presencial';

    ubicacion?: string;
    coordinador?: Usuario; // Asumiendo que tienes una clase Usuario
    ponente?: Usuario; // Asumiendo que tienes una clase Usuario
    moderador_necesario: boolean;
    moderador?: Usuario; // Asumiendo que tienes una clase Usuario
    participantes: Participante[] = []; // Asumiendo que tienes una clase Participante
}
