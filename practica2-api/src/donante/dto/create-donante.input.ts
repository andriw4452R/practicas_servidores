import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateDonanteInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  tipo: string;

  @Field()
  @IsEmail()
  correo: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  telefono: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  direccion: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  fecha_registro: string;
}
