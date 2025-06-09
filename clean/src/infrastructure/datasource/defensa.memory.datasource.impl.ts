import { Defensa } from '../../../domain/entities/defensa.entity';
import { DefensaRepository } from '../../../domain/repositories/defensa.repository'; // ✅ Corrección

export class DefensaMemoryDatasource implements DefensaRepository {
  private defensas: Defensa[] = [];

  constructor() {
    this.defensas.push(
      new Defensa(
        '1',
        'SISTEMA DE GESTIÓN DE TESIS',
        'Defensa Final',
        { id: '1', nombre: 'Aula 101', ubicacion: 'Laboratorio 101' },
        { id: '1', horaInicio: '09:00', horaFin: '10:00' },
        'Pendiente',
        { id: '1', nombreCompleto: 'Tutor A', rol: 'Presidente' },
        { id: '2', nombreCompleto: 'Revisor 1', rol: 'Revisor' },
        { id: '3', nombreCompleto: 'Revisor 2', rol: 'Revisor' },
        [],
        '2025-06-09'
      )
    );
  }

  async getAll(): Promise<Defensa[]> {
    return this.defensas;
  }
}

