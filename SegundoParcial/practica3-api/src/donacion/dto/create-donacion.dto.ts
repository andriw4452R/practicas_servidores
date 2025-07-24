export class CreateDonacionDto {
  descripcion: string;
  cantidad: number;
  fecha: Date;
  donante: number; // Solo se envía el ID
}
