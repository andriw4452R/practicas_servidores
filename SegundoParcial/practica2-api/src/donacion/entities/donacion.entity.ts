import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class Donacion {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  id_donante: number;

  @Field()
  @Column()
  nombre: string;

  @Field(() => Int)
  @Column()
  cantidad: number;

  @Field()
  @Column()
  unidad: string;

  @Field()
  @Column()
  tipo: string;
}
