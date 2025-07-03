import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

@InputType()
export class CreateProductoInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  unidad: string;

  @Field(() => Int)
  @IsInt()
  stock: number;
}
