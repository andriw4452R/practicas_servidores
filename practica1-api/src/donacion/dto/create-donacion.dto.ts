import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDonacionDto {
  @IsNumber()
  id_donante: number;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNumber()
  cantidad: number;

  @IsString()
  @IsNotEmpty()
  unidad: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;
}
