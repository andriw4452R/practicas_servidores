import "reflect-metadata";
import { DataSource } from "typeorm";
import { config } from "dotenv";
import { SolicitudAyuda } from "./entities/SolicitudAyuda";
import { Motivo } from "./entities/Motivo";
import { Ubicacion } from "./entities/Ubicacion";
import { BeneficiarioAprobado } from "./entities/BeneficiarioAprobado";

config(); // carga .env

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [SolicitudAyuda, Motivo, Ubicacion, BeneficiarioAprobado],
});
