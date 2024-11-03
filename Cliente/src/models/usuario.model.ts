
export class Usuario {
    roleChoices: { [key: string]: string } = {
        Coordinador: 'Coordinador',
        Participante: 'Participante',
        Ponente: 'Ponente',
        Moderador_Solicitud: 'Moderador_Solicitud',
    };
    telefono: string;
    urlLinkedin: string;
    rol: string;
    rango: number = 1;
    eventosAsistidos: number = 0;
}