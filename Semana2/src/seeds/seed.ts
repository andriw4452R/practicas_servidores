import { AppDataSource } from "../data-source";
import { Motivo } from "../entities/Motivo";
import { Ubicacion } from "../entities/Ubicacion";
import { BeneficiarioAprobado } from "../entities/BeneficiarioAprobado";
import { SolicitudAyuda } from "../entities/SolicitudAyuda";

async function seed() {
  await AppDataSource.initialize();

  const motivoRepo = AppDataSource.getRepository(Motivo);
  const ubicacionRepo = AppDataSource.getRepository(Ubicacion);
  const beneficiarioRepo = AppDataSource.getRepository(BeneficiarioAprobado);
  const solicitudRepo = AppDataSource.getRepository(SolicitudAyuda);

  // Crear 5 motivos
  const motivos = await motivoRepo.save([
    { descripcion: "Emergencia médica" },
    { descripcion: "Pérdida de empleo" },
    { descripcion: "Desastre natural" },
    { descripcion: "Gastos funerarios" },
    { descripcion: "Otro" },
  ]);

  // Crear 5 ubicaciones
  const ubicaciones = await ubicacionRepo.save([
    { ciudad: "Quito", provincia: "Pichincha" },
    { ciudad: "Guayaquil", provincia: "Guayas" },
    { ciudad: "Cuenca", provincia: "Azuay" },
    { ciudad: "Manta", provincia: "Manabí" },
    { ciudad: "Loja", provincia: "Loja" },
  ]);

  // Crear 5 beneficiarios
  const beneficiarios = await beneficiarioRepo.save([
    {
      nombre: "Carlos Mena",
      cédula: "1234567890",
      ayudaOtorgada: "Medicamentos",
    },
    {
      nombre: "Laura Vélez",
      cédula: "0987654321",
      ayudaOtorgada: "Canasta básica",
    },
    {
      nombre: "Jorge Pérez",
      cédula: "1122334455",
      ayudaOtorgada: "Asistencia médica",
    },
    {
      nombre: "Andrea Ríos",
      cédula: "2233445566",
      ayudaOtorgada: "Pago de alquiler",
    },
    {
      nombre: "Luis Torres",
      cédula: "3344556677",
      ayudaOtorgada: "Ayuda alimentaria",
    },
  ]);

  // Crear 5 solicitudes
  const solicitudes = await solicitudRepo.save([
    {
      nombreSolicitante: "María Paredes",
      correo: "maria@example.com",
      fechaSolicitud: new Date("2025-06-01"),
      motivo: motivos[0],
      ubicacion: ubicaciones[0],
    },
    {
      nombreSolicitante: "Pedro Álvarez",
      correo: "pedro@example.com",
      fechaSolicitud: new Date("2025-06-02"),
      motivo: motivos[1],
      ubicacion: ubicaciones[1],
    },
    {
      nombreSolicitante: "Sofía Jaramillo",
      correo: "sofia@example.com",
      fechaSolicitud: new Date("2025-06-03"),
      motivo: motivos[2],
      ubicacion: ubicaciones[2],
    },
    {
      nombreSolicitante: "José Martínez",
      correo: "jose@example.com",
      fechaSolicitud: new Date("2025-06-04"),
      motivo: motivos[3],
      ubicacion: ubicaciones[3],
    },
    {
      nombreSolicitante: "Lucía Ramírez",
      correo: "lucia@example.com",
      fechaSolicitud: new Date("2025-06-05"),
      motivo: motivos[4],
      ubicacion: ubicaciones[4],
    },
  ]);

  console.log("✔ Datos de prueba insertados correctamente:");
  console.log("Motivos:", motivos);
  console.log("Ubicaciones:", ubicaciones);
  console.log("Beneficiarios:", beneficiarios);
  console.log("Solicitudes:", solicitudes);

  process.exit(0);
}

seed().catch((e) => {
  console.error("❌ Error al insertar los datos:", e);
  process.exit(1);
});
