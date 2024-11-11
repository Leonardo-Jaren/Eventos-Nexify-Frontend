import { Usuario } from './usuario.model';

export class Coordinador extends Usuario {
    constructor() {
        super();
        this.rol = this.roleChoices["Coordinador"];
    }
}