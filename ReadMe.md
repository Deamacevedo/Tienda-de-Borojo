# La tienda del borojó

## Descripción del proyecto y del escenario

La tienda del borojó es un negocio especializado en productos derivados del borojó, una fruta tropical típica del Pacífico colombiano. El proyecto implementa una base de datos MongoDB para gestionar el inventario, clientes, ventas, proveedores y productos de la tienda.

### Colecciones de la base de datos:
- **productos**: Información de los productos disponibles con stock, precios y categorías
- **clientes**: Datos de los clientes, sus preferencias y historial de compras
- **ventas**: Registro completo de todas las transacciones realizadas
- **proveedores**: Información de proveedores y productos que suministran
- **inventario**: Control de stock, lotes y fechas de entrada

## Instrucciones para ejecutar los scripts

1. **Configurar MongoDB**: Asegúrate de tener MongoDB instalado y ejecutándose
2. **Conectar a la base de datos**: 
   ```bash
   mongo
   use tienda_borojo
   ```
3. **Cargar datos iniciales**: Ejecutar el archivo `insercion_datos.js` primero
4. **Ejecutar ejercicios**: Los scripts deben ejecutarse en el siguiente orden:
   - `insercion_datos.js` → `insercion.js` → `lectura.js` → `actualizacion.js` → `eliminacion.js` → `expresiones_regulares.js` → `operadores_arrays.js` → `aggregation.js` → `funciones.js` → `transacciones.js` → `indexacion.js`
5. **Tomar capturas**: Ejecutar cada script y capturar los resultados

## Listado de ejercicios desarrollados

### Inserción de datos (`insercion_datos.js`)
- Creación e inserción de datos en todas las colecciones (productos, clientes, ventas, proveedores, inventario)
- Verificación de inserción correcta

### Inserción - CRUD Create (`insercion.js`)
- Insertar nuevo producto "Chocolatina de borojó"
- Insertar nuevo cliente "Mario Mendoza"
- Verificaciones de inserción exitosa

### Lectura - CRUD Read (`lectura.js`)
- Consultar productos con stock mayor a 20 unidades
- Encontrar clientes sin compras realizadas
- Mostrar estadísticas de consultas

### Actualización - CRUD Update (`actualizacion.js`)
- Aumentar stock de "Borojó deshidratado" en 10 unidades
- Añadir tag "bajo azúcar" a productos de categoría "Bebida"
- Verificaciones antes y después de actualización

### Eliminación - CRUD Delete (`eliminacion.js`)
- Eliminar cliente con email "juan@email.com"
- Eliminar productos con stock menor a 5 unidades
- Estadísticas finales después de eliminaciones

### Expresiones Regulares (`expresiones_regulares.js`)
- Productos que empiecen por "Boro"
- Productos que contengan la palabra "con"
- Clientes con letra "z" en el nombre (insensible a mayúsculas)
- Ejercicios adicionales con diferentes patrones regex

### Operadores de Arrays (`operadores_arrays.js`)
- Clientes con preferencia "natural"
- Productos con tags "natural" y "orgánico" usando $all
- Productos con más de un tag usando $size
- Ejercicios adicionales con $in, $nin, $exists

### Aggregation Framework (`aggregation.js`)
- Productos más vendidos usando $unwind y $group
- Clientes agrupados por cantidad de compras
- Total de ventas por mes usando $month
- Promedio de precios por categoría
- Top 3 productos con mayor stock usando $sort y $limit
- Ejercicios adicionales con $match, $max, $min

### Funciones definidas en system.js (`funciones.js`)
- **calcularDescuento(precio, porcentaje)** - Calcula precio con descuento
- **clienteActivo(cliente)** - Verifica si cliente tiene más de 3 compras
- **verificarStock(stock, cantidad)** - Verifica disponibilidad de stock
- **calcularPrecioConIVA(precio)** - Calcula precio con IVA del 19%
- **esProductoCaro(precio)** - Verifica si producto cuesta más de $10,000
- Ejemplos de uso siguiendo patrón de clase con new Code()

### Transacciones (`transacciones.js`)
- **Transacción venta**: Descontar stock + insertar venta
- **Transacción inventario**: Insertar en inventario + aumentar stock
- **Transacción devolución**: Aumentar stock + eliminar venta
- **Transacciones adicionales**: Transferencia de stock y actualizaciones múltiples
- Manejo completo de errores con try-catch-finally

### Indexación (`indexacion.js`) - *22 de agosto de 2025*
- Índice simple en campo 'nombre' para búsquedas rápidas
- Índice compuesto en 'categoria' + 'precio' para filtros combinados
- Índice único en 'email' para prevenir duplicados
- Uso de explain() para verificar utilización de índices
- Índices adicionales en 'tags' y para colección 'ventas'

## Estructura del repositorio

```
tienda-borojo/
├── README.md
├── insercion_datos.js
├── insercion.js
├── lectura.js
├── actualizacion.js
├── eliminacion.js
├── expresiones_regulares.js
├── operadores_arrays.js
├── aggregation.js
├── funciones.js
├── transacciones.js
└── indexacion.js
```

## Índices creados para optimización

### Colección `productos`:
- **Índice simple**: `{nombre: 1}` para búsquedas por nombre
- **Índice compuesto**: `{categoria: 1, precio: -1}` para filtros combinados
- **Índice en arrays**: `{tags: 1}` para búsquedas por etiquetas

### Colección `clientes`:
- **Índice único**: `{email: 1}` para prevenir duplicados

### Colección `ventas`:
- **Índice compuesto**: `{clienteId: 1, fecha: -1}` para consultas de historial

## Tecnologías utilizadas

- **MongoDB** - Base de datos NoSQL
- **JavaScript** - Lenguaje para scripts y funciones
- **Aggregation Framework** - Para consultas complejas y análisis
- **Transacciones ACID** - Para operaciones críticas
- **Indexación** - Para optimización de rendimiento

## Conceptos de MongoDB implementados

- ✅ **CRUD completo** (Create, Read, Update, Delete)
- ✅ **Expresiones regulares** para búsquedas de texto
- ✅ **Operadores de arrays** ($all, $size, $in, $nin)
- ✅ **Aggregation pipelines** ($match, $group, $project, $sort, $limit)
- ✅ **Funciones personalizadas** almacenadas en system.js
- ✅ **Transacciones** para operaciones atómicas
- ✅ **Indexación** para optimización de consultas

## Datos del proyecto

El proyecto utiliza datos realistas basados en productos derivados del borojó:
- **10 productos** en diferentes categorías (Fruta, Bebida, Snack, Cosmético, etc.)
- **10 clientes** con preferencias y historial de compras
- **10 ventas** con productos múltiples y fechas
- **7 proveedores** especializados por tipo de producto
- **10 registros de inventario** con lotes y fechas de entrada

## Realizado por

-Dylan Acevedo - Jeferson Lopez - Davison Roman