import { CategoriaEvento } from './categoria_evento.model';
import { Usuario } from './usuario.model';
import { Participante } from './participante.model';

export class Evento{
    nombre_evento: string;
    descripcion: string;
    fecha_evento: Date;
    categoria_evento?: CategoriaEvento; // Asumiendo que tienes una clase CategoriaEvento
    tipo_evento: 'Virtual' | 'Presencial' = 'Virtual';
    ubicacion?: string;
    //coordinador?: Usuario; // Asumiendo que tienes una clase Usuario
    //ponente?: Usuario; // Asumiendo que tienes una clase Usuario
    //moderador_necesario: boolean = false;
    moderador?: Usuario; // Asumiendo que tienes una clase Usuario
    //participantes: Participante[] = []; // Asumiendo que tienes una clase Participante

}