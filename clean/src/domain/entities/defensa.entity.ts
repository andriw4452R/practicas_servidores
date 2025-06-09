import { Sala } from './sala.entity';
import { Horario } from './horario.entity';
import { Usuario } from './usuario.entity';
import { Estudiante } from './estudiante.entity';

export class Defensa {
  constructor(
    public id: string,
    public tema: string,
    public tipo: 'Pre-defensa' | 'Defensa Final',
    public sala: Sala,                 // 🔁 Relación 1 a 1 con Sala
    public horario: Horario,           // 🔁 Relación 1 a 1 con Horario
    public estado: 'Pendiente' | 'Completada',
    public presidente: Usuario,        // 🔁 Relación 1 a 1 con Usuario (Presidente)
    public revisor1: Usuario,          // 🔁 Relación 1 a 1 con Usuario (Revisor 1)
    public revisor2: Usuario,          // 🔁 Relación 1 a 1 con Usuario (Revisor 2)
    public estudiantes: Estudiante[],  // 🔁 Relación 1 a muchos con Estudiante
    public fecha: string
  ) {}
}
