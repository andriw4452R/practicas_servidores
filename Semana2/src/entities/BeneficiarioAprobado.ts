import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class BeneficiarioAprobado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  cédula: string;

  @Column()
  ayudaOtorgada: string;
}
