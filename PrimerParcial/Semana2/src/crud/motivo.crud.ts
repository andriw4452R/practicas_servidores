import { AppDataSource } from "../data-source";
import { Motivo } from "../entities/Motivo";

const repo = AppDataSource.getRepository(Motivo);

export async function crearMotivo(descripcion: string) {
  const motivo = repo.create({ descripcion });
  await repo.save(motivo);
  return motivo;
}

export async function listarMotivos() {
  return await repo.find();
}
