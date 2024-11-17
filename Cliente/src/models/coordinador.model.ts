import { Usuario } from './usuario.model';

export class Coordinador extends Usuario {
  constructor(init?: Partial<Coordinador>) {
    super(init);
  }

  override toString(): string {
    return `Coordinador: ${this.username}`;
  }
}