// Ejercicios con Aggregation Framework con Pipelines

// 1. Mostrar un listado de los productos más vendidos (suma total de unidades vendidas por producto)

db.ventas.aggregate([
  // Desenrollar el array de productos
  {$unwind: "$productos"},
  
  // Agrupar por productoId y sumar cantidades
  {$group: {
    _id: "$productos.productoId",
    totalVendido: {$sum: "$productos.cantidad"}
  }},
  
  // Ordenar por cantidad vendida descendente
  {$sort: {totalVendido: -1}}
]); 

// 2. Agrupar clientes por cantidad de compras realizadas

db.clientes.aggregate([
  // Proyectar el número de compras
  {$project: {
    nombre: 1,
    numeroCompras: {$size: "$compras"}
  }},
  
  // Agrupar por número de compras
  {$group: {
    _id: "$numeroCompras",
    clientes: {$push: "$nombre"},
    totalClientes: {$sum: 1}
  }},
  
  // Ordenar por número de compras
  {$sort: {_id: 1}}
]);

// 3. Mostrar el total de ventas por mes (usa $group y $month)

db.ventas.aggregate([
  // Agrupar por mes de la fecha
  {$group: {
    _id: {$month: "$fecha"},
    totalVentas: {$sum: "$total"},
    numeroTransacciones: {$sum: 1}
  }},
  
  // Ordenar por mes
  {$sort: {"_id": 1}}
]);

// 4. Calcular el promedio de precios por categoría de producto

db.productos.aggregate([
  // Agrupar por categoría
  {$group: {
    _id: "$categoria",
    precioPromedio: {$avg: "$precio"},
    numeroProductos: {$sum: 1}
  }},
  
  // Ordenar por precio promedio descendente
  {$sort: {precioPromedio: -1}}
]);

// 5. Mostrar los 3 productos con mayor stock (orden descendente con $sort y $limit)

db.productos.aggregate([
  // Ordenar por stock descendente
  {$sort: {stock: -1}},
  
  // Limitar a los primeros 3
  {$limit: 3},
  
  // Proyectar información útil
  {$project: {
    nombre: 1,
    categoria: 1,
    stock: 1,
    precio: 1
  }}
]);