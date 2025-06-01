import { AppDataSource } from "../data-source";
import { Ubicacion } from "../entities/Ubicacion";

const repo = AppDataSource.getRepository(Ubicacion);

export async function crearUbicacion(ciudad: string, provincia: string) {
  const ubicacion = repo.create({ ciudad, provincia });
  await repo.save(ubicacion);
  return ubicacion;
}

export async function listarUbicaciones() {
  return await repo.find();
}
