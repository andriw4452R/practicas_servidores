export interface SolicitudAyuda {
  id: number;
  nombre: string;
  apellido: string;
  cedula: string;
  telefono: string;
  correo: string;
  fecha_solicitud: string;
  estado: string;
  id_motivo: number;
}

export interface Motivo {
  id: number;
  descripcion: string;
  id_solicitud: number;
}

export interface BeneficiarioAprobado {
  id: number;
  id_solicitud: number;
  fecha_aprobacion: string;
}
