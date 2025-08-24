// Ejercicios de eliminación - CRUD Delete

// 1. Eliminar el cliente que tenga el correo "juan@email.com"

db.clientes.deleteOne({"email": "juan@email.com"});

// 2. Eliminar todos los productos con stock menor a 5

db.productos.deleteMany({"stock": {$lt: 5}});