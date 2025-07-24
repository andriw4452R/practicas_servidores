import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Donante } from 'src/donante/entities/donante.entity';
import { Producto } from 'src/producto/entities/producto.entity';

@Entity()
export class Donacion {
  @PrimaryGeneratedColumn()
  id_donacion: number;

  @Column()
  descripcion: string;

  @Column()
  cantidad: number;

  @Column()
  fecha: Date;

  @ManyToOne(() => Donante, (donante) => donante.donaciones, { eager: true })
  donante: Donante;

  @ManyToMany(() => Producto, (producto) => producto.donaciones)
  @JoinTable()
  productos: Producto[];
}
