import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Donante {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  nombre: string;

  @Field()
  @Column()
  tipo: string;

  @Field()
  @Column()
  correo: string;

  @Field()
  @Column()
  telefono: string;

  @Field()
  @Column()
  direccion: string;

  @Field()
  @Column()
  fecha_registro: string;
}
