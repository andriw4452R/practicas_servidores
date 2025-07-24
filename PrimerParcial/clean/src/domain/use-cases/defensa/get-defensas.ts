import { Defensa } from '../../entities/defensa.entity';
import { DefensaRepository } from '../../repositories/defensa.repository';

export class GetDefensas {
  constructor(private readonly defensaRepository: DefensaRepository) {}

  execute(): Promise<Defensa[]> {
    return this.defensaRepository.getAll();
  }
}
