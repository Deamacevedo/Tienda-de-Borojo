// Ejercicios de actualización - CRUD Update

// 1. Aumentar en 10 unidades el stock del producto "Borojó deshidratado"

db.productos.updateOne(
    { "nombre": "Borojó deshidratado" },
    { $inc: { "stock": 10 } }
);

// 2. Añadir el tag "bajo azúcar" a todos los productos de la categoría "Bebida"

db.productos.updateMany(
    { "categoria": "Bebida" },
    { $addToSet: { "tags": "bajo azúcar" } }
);

