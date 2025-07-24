import { Defensa } from '../entities/defensa.entity';

export abstract class DefensaRepository {
  abstract getAll(): Promise<Defensa[]>;
}
