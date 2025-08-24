// Ejercicios con operadores en consultas sobre arrays


// 1. Buscar clientes que tengan "natural" en sus preferencias

db.clientes.find({ "preferencias": "natural" });

// 2. Encontrar productos que tengan al menos los tags "natural" y "orgánico" (usa $all)

db.productos.find({ "tags": { $all: ["natural", "orgánico"] } });

// 3. Listar productos que tienen más de un tag ($size)

db.productos.find({ $expr: { $gt: [{ $size: "$tags" }, 1] } });