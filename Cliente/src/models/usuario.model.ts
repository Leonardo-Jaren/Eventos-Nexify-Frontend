export class Usuario {
    id?: number; // ID opcional, se generará en el backend
    username: string;
    email: string;
    password: string;
    telefono?: string; // Opcional
    rol: 'Coordinador' | 'Participante' | 'Ponente' | 'Moderador_Solicitud';
  
    constructor(init?: Partial<Usuario>) {
      Object.assign(this, init);
    }
  }