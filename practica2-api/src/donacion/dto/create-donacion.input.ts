import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

@InputType()
export class CreateDonacionInput {
  @Field(() => Int)
  @IsInt()
  id_donante: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @Field(() => Int)
  @IsInt()
  cantidad: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  unidad: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  tipo: string;
}
