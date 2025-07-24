# Proyecto API GraphQL - Donaciones de Víveres

Este proyecto es una **API construida con NestJS y GraphQL**, que gestiona el módulo de donaciones de víveres como parte de una plataforma de ayuda comunitaria. El sistema está compuesto por tres entidades principales:

- **Donante**: Personas u organizaciones que realizan donaciones.
- **Donación**: Registro de los productos donados.
- **Producto**: Tipos de productos disponibles para recibir o clasificar donaciones.

---

## 🛠️ Tecnologías Usadas

- Node.js + NestJS
- GraphQL (Code First)
- TypeORM
- SQLite (Base de datos local)

---

## 📦 Instalación

1. Clonar el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
cd proyecto-donaciones-graphql
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar el proyecto:
```bash
npm run start:dev
```

Por defecto, la API estará disponible en:  
📍 **http://localhost:3001/graphql**

---

## 🚀 Cómo usar el Playground de GraphQL

Una vez ejecutado el proyecto, accede a:

➡️ http://localhost:3001/graphql

Desde ahí puedes probar queries y mutations de las tres entidades.

---

## 📋 Ejemplos de Queries y Mutations

### 🔸 Donantes

**Crear un Donante**
```graphql
mutation {
  createDonante(createDonanteInput: {
    nombre: "María Gómez",
    tipo: "Persona",
    correo: "maria@example.com",
    telefono: "0987001122",
    direccion: "Guayaquil, Ecuador",
    fecha_registro: "2025-07-01"
  }) {
    id
    nombre
  }
}
```

**Listar Todos**
```graphql
query {
  donantes {
    id
    nombre
    tipo
    correo
    telefono
    direccion
    fecha_registro
  }
}
```

**Obtener uno por ID**
```graphql
query {
  donante(id: 1) {
    id
    nombre
  }
}
```

**Actualizar Donante**
```graphql
mutation {
  updateDonante(updateDonanteInput: {
    id: 1,
    telefono: "0999999999"
  }) {
    id
    telefono
  }
}
```

**Eliminar Donante**
```graphql
mutation {
  removeDonante(id: 1)
}
```

---

### 🔸 Donaciones

**Crear una Donación**
```graphql
mutation {
  createDonacion(createDonacionInput: {
    id_donante: 1,
    nombre: "Leche",
    cantidad: 12,
    unidad: "L",
    tipo: "Lácteo"
  }) {
    id
    nombre
  }
}
```

**Listar Todas**
```graphql
query {
  donaciones {
    id
    nombre
    cantidad
    unidad
    tipo
    id_donante
  }
}
```

**Obtener una Donación por ID**
```graphql
query {
  donacion(id: 1) {
    id
    nombre
  }
}
```

**Actualizar una Donación**
```graphql
mutation {
  updateDonacion(updateDonacionInput: {
    id: 1,
    cantidad: 20
  }) {
    id
    cantidad
  }
}
```

**Eliminar una Donación**
```graphql
mutation {
  removeDonacion(id: 1)
}
```

---

### 🔸 Productos

**Crear un Producto**
```graphql
mutation {
  createProducto(createProductoInput: {
    nombre: "Arroz",
    descripcion: "Grano largo",
    unidad: "kg",
    stock: 50
  }) {
    id
    nombre
  }
}
```

**Listar Todos los Productos**
```graphql
query {
  productos {
    id
    nombre
    descripcion
    unidad
    stock
  }
}
```

**Obtener Producto por ID**
```graphql
query {
  producto(id: 1) {
    id
    nombre
  }
}
```

**Actualizar Producto**
```graphql
mutation {
  updateProducto(updateProductoInput: {
    id: 1,
    stock: 100
  }) {
    id
    stock
  }
}
```

**Eliminar Producto**
```graphql
mutation {
  removeProducto(id: 1)
}
```

---

## 📌 Notas

- Todas las entidades están conectadas con SQLite.
- El esquema de GraphQL se genera automáticamente (`src/schema.gql`).
- El proyecto está dividido por capas: Entity, DTO, Service y Resolver.

---

¡Listo para entregar o continuar extendiendo! 💪