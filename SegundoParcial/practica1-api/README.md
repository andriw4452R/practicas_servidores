Proyecto API REST - Donaciones de Víveres

Este proyecto es una API RESTful construida con NestJS, que gestiona el módulo de donaciones de víveres como parte de una plataforma de ayuda comunitaria. El sistema está compuesto por tres entidades principales:

- Donante: Personas u organizaciones que realizan donaciones.
- Donación: Registro de los productos donados.
- Producto: Tipos de productos disponibles para recibir o clasificar donaciones.

Tecnologías Usadas
- Node.js + NestJS
- TypeORM
- SQLite (Base de datos local)

Instalación
1. Clonar el repositorio: 
   git clone 
   cd proyecto-donaciones

Instalar dependencias:
- npm install

Ejecutar la API en modo desarrollo:
- npm run start:dev

La API correrá por defecto en: http://localhost:3001

🔸Endpoints Disponibles

Donantes
- POST /donantes – Crear un nuevo donante
- GET /donantes – Listar todos los donantes
- GET /donantes/:id – Obtener un donante por ID
- PUT /donantes/:id – Actualizar un donante por ID
- DELETE /donantes/:id – Eliminar un donante por ID

Donaciones
- POST /donaciones – Registrar una nueva donación
- GET /donaciones – Listar todas las donaciones
- GET /donaciones/:id – Obtener una donación por ID
- PUT /donaciones/:id – Actualizar una donación por ID
- DELETE /donaciones/:id – Eliminar una donación por ID

Productos
- POST /productos – Crear un nuevo producto
- GET /productos – Listar todos los productos
- GET /productos/:id – Obtener un producto por ID
- PUT /productos/:id – Actualizar un producto por ID
- DELETE /productos/:id – Eliminar un producto por ID


Pruebas con Postman o curl

🔸 Donantes
➤ Crear un Donante
curl -X POST http://localhost:3001/donantes \
-H "Content-Type: application/json" \
-d '{
  "nombre": "Juan Pérez",
  "tipo": "Persona",
  "correo": "juan@example.com",
  "telefono": "0987654321",
  "direccion": "Quito, Ecuador",
  "fecha_registro": "2024-08-01"
}'

➤ Listar Todos los Donantes
- curl http://localhost:3001/donantes

➤ Obtener Donante por ID
- curl http://localhost:3001/donantes/1

➤ Actualizar Donante
- curl -X PUT http://localhost:3001/donantes/1 \
  -H "Content-Type: application/json" \
  -d '{
    "telefono": "0999999999"
  }'

➤ Eliminar Donante
- curl -X DELETE http://localhost:3001/donantes/1



🔸 Donaciones

➤ Crear Donación
curl -X POST http://localhost:3001/donaciones \
-H "Content-Type: application/json" \
-d '{
  "id_donante": 1,
  "nombre": "Arroz",
  "cantidad": 10,
  "unidad": "kg",
  "tipo": "Grano"
}'

➤ Listar Todas las Donaciones
- curl http://localhost:3001/donaciones

➤ Obtener Donación por ID
- curl http://localhost:3001/donaciones/1

➤ Actualizar Donación
curl -X PUT http://localhost:3001/donaciones/1 \
-H "Content-Type: application/json" \
-d '{
  "cantidad": 20
}'

➤ Eliminar Donación
curl -X DELETE http://localhost:3001/donaciones/1



🔸 Productos

➤ Crear Producto
curl -X POST http://localhost:3001/productos \
-H "Content-Type: application/json" \
-d '{
  "nombre": "Aceite",
  "tipo": "Líquido",
  "unidad": "L",
  "descripcion": "Botella de aceite comestible"
}'

➤ Listar Todos los Productos
- curl http://localhost:3001/productos

➤ Obtener Producto por ID
- curl http://localhost:3001/productos/1

➤ Actualizar Producto
curl -X PUT http://localhost:3001/productos/1 \
-H "Content-Type: application/json" \
-d '{
  "descripcion": "Aceite vegetal 1L"
}'

➤ Eliminar Producto
curl -X DELETE http://localhost:3001/productos/1
























➤ Crear una Donación
curl -X POST http://localhost:3000/donaciones \
-H "Content-Type: application/json" \
-d '{
  "id_donante": 1,
  "nombre": "Arroz",
  "cantidad": 10,
  "unidad": "kg",
  "tipo": "Grano"
}'

➤ Crear un Producto
curl -X POST http://localhost:3000/productos \
-H "Content-Type: application/json" \
-d '{
  "nombre": "Aceite",
  "tipo": "Líquido",
  "unidad": "L",
  "descripcion": "Botella de aceite comestible"
}'



