import { Request, Response } from 'express';
import { DefensaMemoryDatasource } from '../../../infrastructure/datasource/defensa.memory.datasource.impl';
import { GetDefensas } from '../../../domain/use-cases/defensa/get-defensas';

const datasource = new DefensaMemoryDatasource();
const getDefensas = new GetDefensas(datasource);

export class DefensaControllerMemory {
  static async getAll(req: Request, res: Response) {
    const defensas = await getDefensas.execute();
    res.json(defensas);
  }
}
