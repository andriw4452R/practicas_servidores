import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { SolicitudAyuda } from "./SolicitudAyuda";

@Entity()
export class Ubicacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ciudad: string;

  @Column()
  provincia: string;

  @OneToMany(() => SolicitudAyuda, (s) => s.ubicacion)
  solicitudes: SolicitudAyuda[];
}
