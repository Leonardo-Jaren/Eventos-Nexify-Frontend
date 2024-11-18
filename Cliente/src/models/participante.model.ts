import { Usuario } from './usuario.model';

export class Participante extends Usuario {
  constructor(init?: Partial<Participante>) {
    super(init);
  }

  override toString(): string {
    return `Participante: ${this.username}`;
  }
}
