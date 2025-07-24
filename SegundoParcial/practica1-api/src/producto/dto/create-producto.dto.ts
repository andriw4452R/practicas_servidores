import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductoDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsNumber()
  cantidad: number;

  @IsNotEmpty()
  @IsString()
  unidad: string;

  @IsNotEmpty()
  @IsString()
  tipo: string;
}
