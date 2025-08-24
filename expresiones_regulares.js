// Ejercicios con expresiones regulares

// 1. Buscar productos cuyo nombre empiece por "Boro"

db.productos.find({"nombre": /^Boro/});

// 2. Encontrar productos cuyo nombre contenga la palabra "con"

db.productos.find({"nombre": /con/i});

// 3. Encontrar clientes cuyo nombre tenga la letra "z" (insensible a mayúsculas/minúsculas)

db.clientes.find({"nombre": /z/i});