import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { SolicitudAyuda } from "./SolicitudAyuda";

@Entity()
export class Motivo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @OneToMany(() => SolicitudAyuda, (s) => s.motivo)
  solicitudes: SolicitudAyuda[];
}
