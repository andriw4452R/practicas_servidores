📌 Descripción del dominio
El sistema desarrollado permite gestionar las defensas de tesis en una institución universitaria. Cada defensa involucra un tema, una sala, un horario, un jurado conformado por un presidente y dos revisores, y uno o más estudiantes. Además, permite registrar el estado de la defensa y la documentación académica de cada estudiante.



🧩 Entidades y justificación

🧩Defensa
Representa el evento de defensa de tesis. Es el núcleo del sistema. Se le asigna una sala, un horario, un tema, un presidente del jurado y dos revisores. También se marca si está completada o pendiente.

Atributos clave:
- tema
- tipo (Pre-defensa / Defensa Final)
- sala
- horario
- estado (Pendiente / Completada)
- presidente
- revisor1
- revisor2
- estudiantes[]

🧩 Estudiante
Participante asignado a una defensa. Se registra su estado académico, notas, aprobación de revisores y si está listo para defender.

Atributos clave:
- nombreCompleto
- notaDocumento
- notaPropuesta
- documentacionCompleta
- aprobadoRevisor1
- aprobadoRevisor2
- listoParaDefensa

🧩 Sala
Lugar físico donde se realiza la defensa. Se identifica por nombre y ubicación.

Atributos clave:
- nombre
- ubicacion


🧩 Horario
Espacio de tiempo reservado para una defensa. Contiene hora de inicio y fin.

Atributos clave:
- horaInicio
- horaFin

🧩 Usuario (Jurados: presidente o revisores)
Son los encargados de evaluar la defensa. Cada uno puede tener un rol distinto en cada evento.

Atributos clave:
- nombreCompleto
- rol (Presidente / Revisor)



🧩 Relaciones
Una defensa tiene 1 sala, 1 horario, 1 presidente, 2 revisores y varios estudiantes.

Un estudiante pertenece a una defensa.

Una sala puede tener varias defensas en distintos horarios.

Un usuario puede estar asignado a múltiples defensas.

🧩 Capas del sistema
domain/entities: clases que representan el núcleo del modelo de dominio (Defensa, Estudiante, etc.).

domain/dtos: definiciones de los datos que se intercambian entre capas.

domain/repositories: interfaces abstractas para acceder a los datos.

infrastructure/datasource: implementaciones concretas de acceso a datos (en memoria, TypeORM, Prisma).

presentation/todos: controladores y rutas. Aquí se debe incluir la lógica para exponer las entidades y sus operaciones como API REST.