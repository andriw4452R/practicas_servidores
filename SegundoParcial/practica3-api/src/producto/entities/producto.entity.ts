import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Donacion } from 'src/donacion/entities/donacion.entity';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id_producto: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  categoria: string;

  @Column('float')
  precio: number;

  @Column()
  stock: number;

  // Solo si hay relación con donación, opcional
  @ManyToMany(() => Donacion, (donacion) => donacion.productos)
  donaciones: Donacion[];
}
