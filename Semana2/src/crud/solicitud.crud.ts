import { AppDataSource } from "../data-source";
import { SolicitudAyuda } from "../entities/SolicitudAyuda";
import { Motivo } from "../entities/Motivo";
import { Ubicacion } from "../entities/Ubicacion";

const repo = AppDataSource.getRepository(SolicitudAyuda);

export async function crearSolicitud(
  nombreSolicitante: string,
  correo: string,
  fechaSolicitud: string,
  motivoId: number,
  ubicacionId: number
) {
  const motivo = await AppDataSource.getRepository(Motivo).findOneBy({ id: motivoId });
  const ubicacion = await AppDataSource.getRepository(Ubicacion).findOneBy({ id: ubicacionId });

  if (!motivo || !ubicacion) throw new Error("Motivo o Ubicación no encontrados");

  const solicitud = repo.create({
    nombreSolicitante,
    correo,
    fechaSolicitud,
    motivo,
    ubicacion,
  });

  await repo.save(solicitud);
  return solicitud;
}

export async function listarSolicitudes() {
  return await repo.find({
    relations: ["motivo", "ubicacion"],
  });
}
