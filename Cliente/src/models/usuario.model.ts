export class Usuario {
    id: number;
    username: string;
    email: string;
    password: string;
    telefono?: string; // Opcional
    rol: 'Coordinador' | 'Participante' | 'Ponente' | 'Moderador_Solicitud';
  
    constructor(init?: Partial<Usuario>) {
      Object.assign(this, init);
    }
  }