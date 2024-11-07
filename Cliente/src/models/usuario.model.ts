export class Usuario {
    roleChoices: { [key: string]: string } = {
        Coordinador: 'Coordinador',
        Participante: 'Participante',
        Ponente: 'Ponente',
        Moderador_Solicitud: 'Moderador_Solicitud',
    };
    id: number;
    username: string;
    telefono: string;
    urlLinkedin: string;
    rol: string;
    rango: number = 1;
    eventosAsistidos: number = 0;
    password: string;
}