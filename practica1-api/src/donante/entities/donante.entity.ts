import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Donante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  tipo: string;

  @Column()
  correo: string;

  @Column()
  telefono: string;

  @Column()
  direccion: string;

  @Column()
  fecha_registro: string;
}
