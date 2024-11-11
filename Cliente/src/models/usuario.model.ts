export class Usuario {
    roleChoices: { [key: string]: string } = {
        Coordinador: 'Coordinador',
        Participante: 'Participante',
        Ponente: 'Ponente',
        Moderador_Solicitud: 'Moderador_Solicitud',
    };
    username: string;
    telefono: string;
    url_linkedin: string;
    rol: string;
    rango: number;
    eventos_asistidos: number;

    constructor(rol: string) {
        this.rol = this.roleChoices[rol] || 'Participante';
    }
}

// Ejemplo de creación
const ponente = new Usuario('Ponente');
const coordinador = new Usuario('Coordinador');
