import { Usuario } from './usuario.model';

export class Ponente extends Usuario {
  constructor(init?: Partial<Ponente>) {
    super(init);
  }

  override toString(): string {
    return `Ponente: ${this.username}`;
  }
}
