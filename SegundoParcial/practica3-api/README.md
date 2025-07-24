# Proyecto NestJS - CRUD en Tiempo Real con WebSockets

Este proyecto es una aplicación desarrollada con **NestJS**, **TypeORM** y **SQLite**, que implementa un CRUD completo (Crear, Leer, Actualizar y Eliminar) en **tiempo real** utilizando **WebSockets** para tres entidades: **Donante**, **Donación** y **Producto**.

---

## Requisitos

* Node.js v18 o superior
* npm v9 o superior
* Git

---

## Instalación

1. Clona el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd Practica3
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor:

```bash
npm run start
```

Por defecto, la aplicación corre en `http://localhost:3000`.

---

## Tecnologías usadas

* NestJS
* WebSockets (Socket.IO)
* TypeORM
* SQLite

---

## Base de datos

La base de datos se genera automáticamente en el archivo `donacion.db` gracias a la opción `synchronize: true` de TypeORM.