// Ejercicios de lectura - CRUD Read

// 1. Consultar todos los productos que tengan stock mayor a 20 unidades

db.productos.find({"stock": {$gt: 20}});

// 2. Encontrar los clientes que no han comprado aún ningún producto

db.clientes.find({"compras": {$size: 0}});