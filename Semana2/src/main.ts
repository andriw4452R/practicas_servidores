import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("✅ Base de datos conectada correctamente.");
  })
  .catch((error) => console.error("❌ Error al conectar la base de datos:", error));
