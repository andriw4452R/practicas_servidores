import { SolicitudAyuda } from "./interfaces";

// Función para crear una nueva solicitud
export function crearSolicitud(id: number, nombre: string, apellido: string, id_motivo: number): SolicitudAyuda {
  return {
    id,
    nombre,
    apellido,
    cedula: "0000000000",
    telefono: "0000000000",
    correo: `${nombre.toLowerCase()}@example.com`,
    fecha_solicitud: new Date().toISOString().split("T")[0],
    estado: "pendiente",
    id_motivo,
  };
}

// Función para mostrar datos
export function mostrarSolicitud(solicitud: SolicitudAyuda): void {
  console.log(`${solicitud.nombre} ${solicitud.apellido} solicitó ayuda por el motivo ${solicitud.id_motivo}`);
}

// Spread: clonar arreglo
export function clonarSolicitudes(solicitudes: SolicitudAyuda[]): SolicitudAyuda[] {
  return [...solicitudes];
}

// Rest: aceptar múltiples solicitudes
export function registrarSolicitudes(...sols: SolicitudAyuda[]) {
  sols.forEach(s => console.log(`Registrada solicitud de ${s.nombre}`));
}

// Callback
export function procesarSolicitud(solicitud: SolicitudAyuda, callback: (s: SolicitudAyuda) => void) {
  callback(solicitud);
}

// Promise
export function guardarSolicitud(solicitud: SolicitudAyuda): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Solicitud de ${solicitud.nombre} guardada correctamente.`);
    }, 1000);
  });
}

// Async/Await
export async function mainAsync() {
  const nueva = crearSolicitud(2, "Luisa", "Gómez", 1);
  const mensaje = await guardarSolicitud(nueva);
  console.log(mensaje);
}
