import { Usuario } from './usuario.model';

export class ModeradorSolicitud extends Usuario {
  moderador_necesario: boolean;

  constructor(init?: Partial<ModeradorSolicitud>) {
    super(init);
    this.moderador_necesario = init?.moderador_necesario || false;
  }

  override toString(): string {
    return `Moderador Solicitud: ${this.username}`;
  }
}
