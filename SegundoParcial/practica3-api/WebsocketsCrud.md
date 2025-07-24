## Cómo probar los eventos WebSocket con Postman

A continuación se detalla cómo conectarse al servidor WebSocket usando Postman y probar cada uno de los eventos para las tres entidades (**Donante**, **Donación** y **Producto**).

### Paso 1: Abrir conexión WebSocket

1. Abre Postman.
2. En la parte superior izquierda haz clic en **+ > WebSocket Request**.
3. En el campo de conexión, escribe:

```
ws://localhost:3000
```

4. Presiona el botón **Connect**.

---

### Paso 2: Eventos WebSocket por entidad

#### 📦 Producto

##### Crear producto

```json
{
  "event": "crearProducto",
  "data": {
    "nombre": "Aceite",
    "descripcion": "Aceite de cocina",
    "categoria": "Alimentos",
    "precio": 2.99,
    "stock": 50
  }
}
```

##### Listar productos

```json
{
  "event": "listarProductos",
  "data": {}
}
```

##### Actualizar producto

```json
{
  "event": "actualizarProducto",
  "data": {
    "id": 1,
    "dto": {
      "precio": 3.5,
      "stock": 60
    }
  }
}
```

##### Eliminar producto

```json
{
  "event": "eliminarProducto",
  "data": 1
}
```

---

#### 🧍 Donante

##### Crear donante

```json
{
  "event": "crearDonante",
  "data": {
    "nombre": "Juan Pérez",
    "tipo": "Individual",
    "correo": "juan@example.com",
    "telefono": "0999999999",
    "direccion": "Av. Siempre Viva",
    "fecha_registro": "2025-07-15"
  }
}
```

##### Listar donantes

```json
{
  "event": "listarDonantes",
  "data": {}
}
```

##### Actualizar donante

```json
{
  "event": "actualizarDonante",
  "data": {
    "id": 1,
    "dto": {
      "correo": "nuevo@example.com",
      "telefono": "0988888888"
    }
  }
}
```

##### Eliminar donante

```json
{
  "event": "eliminarDonante",
  "data": 1
}
```

---

#### 🎁 Donación

##### Crear donación

```json
{
  "event": "crearDonacion",
  "data": {
    "id_donante": 1,
    "id_producto": 1,
    "cantidad": 10,
    "fecha_donacion": "2025-07-15"
  }
}
```

##### Listar donaciones

```json
{
  "event": "listarDonaciones",
  "data": {}
}
```

##### Actualizar donación

```json
{
  "event": "actualizarDonacion",
  "data": {
    "id": 1,
    "dto": {
      "cantidad": 12
    }
  }
}
```

##### Eliminar donación

```json
{
  "event": "eliminarDonacion",
  "data": 1
}
```

---

### Respuestas esperadas

Cada evento emitirá una respuesta con el nombre correspondiente. Por ejemplo:

* `productoCreado`: se emite tras crear un producto.
* `donantesListados`: se emite tras listar donantes.
* `donacionActualizada`: se emite tras actualizar una donación.

Puede ver las respuestas en tiempo real en el panel derecho de Postman (Output).

---