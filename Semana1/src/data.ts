import { SolicitudAyuda, Motivo, BeneficiarioAprobado } from "./interfaces";

// Variables básicas
export const appName: string = "Módulo de Solicitudes";
export let totalSolicitudes: number = 0;

// Objetos y arreglos
export const solicitud1: SolicitudAyuda = {
  id: 1,
  nombre: "Juan",
  apellido: "Pérez",
  cedula: "0102030405",
  telefono: "0987654321",
  correo: "juan@example.com",
  fecha_solicitud: "2025-06-01",
  estado: "pendiente",
  id_motivo: 1,
};

export const motivo1: Motivo = {
  id: 1,
  descripcion: "Emergencia médica",
  id_solicitud: 1,
};

export const beneficiario1: BeneficiarioAprobado = {
  id: 1,
  id_solicitud: 1,
  fecha_aprobacion: "2025-06-02",
};

// Arreglos de objetos
export const solicitudes: SolicitudAyuda[] = [solicitud1];
export const motivos: Motivo[] = [motivo1];
export const beneficiarios: BeneficiarioAprobado[] = [beneficiario1];
