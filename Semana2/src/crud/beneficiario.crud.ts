import { AppDataSource } from "../data-source";
import { BeneficiarioAprobado } from "../entities/BeneficiarioAprobado";

const repo = AppDataSource.getRepository(BeneficiarioAprobado);

export async function crearBeneficiario(nombre: string, cedula: string, ayudaOtorgada: string) {
  const beneficiario = repo.create({ nombre, cédula: cedula, ayudaOtorgada });
  await repo.save(beneficiario);
  return beneficiario;
}

export async function listarBeneficiarios() {
  return await repo.find();
}
