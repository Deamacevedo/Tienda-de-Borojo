// Ejercicios de indexación para optimización de consultas

// 1. Crear un índice en el campo 'nombre' de 'productos' para mejorar búsquedas por nombre
db.productos.createIndex({nombre: 1});

// 2. Crear un índice compuesto sobre 'categoria' y 'precio' para facilitar búsquedas filtradas por ambas condiciones
db.productos.createIndex({categoria: 1, precio: -1});

// 3. Crear un índice en el campo 'email' de 'clientes' para validaciones rápidas de duplicados
db.clientes.createIndex({email: 1}, {unique: true});

// 4. Usar explain() en una consulta para mostrar si el índice de 'nombre' está siendo utilizado

// Consulta SIN explain (consulta normal)
db.productos.find({nombre: "Jugo de borojó"});

// Consulta CON explain para ver el plan de ejecución
db.productos.find({nombre: "Jugo de borojó"}).explain();