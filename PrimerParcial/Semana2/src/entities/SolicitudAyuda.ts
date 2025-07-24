import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Motivo } from "./Motivo";
import { Ubicacion } from "./Ubicacion";

@Entity()
export class SolicitudAyuda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreSolicitante: string;

  @Column()
  correo: string;

  @Column()
  fechaSolicitud: Date;

  @ManyToOne(() => Motivo, { eager: true })
  motivo: Motivo;

  @ManyToOne(() => Ubicacion, { eager: true })
  ubicacion: Ubicacion;
}
