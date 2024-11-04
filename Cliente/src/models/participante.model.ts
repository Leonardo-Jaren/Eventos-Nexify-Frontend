import { Usuario } from './usuario.model';

export class Participante extends Usuario {
    constructor() {
        super();
        this.rol = this.roleChoices["Participante"];
    }
    
}