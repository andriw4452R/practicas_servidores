import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Donacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_donante: number;

  @Column()
  nombre: string;

  @Column()
  cantidad: number;

  @Column()
  unidad: string;

  @Column()
  tipo: string;
}
