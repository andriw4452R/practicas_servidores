import { solicitudes } from "./data";
import { crearSolicitud, mostrarSolicitud, clonarSolicitudes, registrarSolicitudes, procesarSolicitud, mainAsync } from "./funciones";

// Mostrar solicitudes existentes
solicitudes.forEach(mostrarSolicitud);

// Clonar y registrar nuevas
const copiaSolicitudes = clonarSolicitudes(solicitudes);
const nuevaSolicitud = crearSolicitud(3, "Carlos", "Mena", 1);
registrarSolicitudes(...copiaSolicitudes, nuevaSolicitud);

// Callback
procesarSolicitud(nuevaSolicitud, mostrarSolicitud);

// Async/Await
mainAsync();
