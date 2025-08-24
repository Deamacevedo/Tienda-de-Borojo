// Ejercicios de inserción - CRUD Create

// 1. Insertar un nuevo producto llamado "Chocolatina de borojó"

db.productos.insertOne({
    "_id": 11,
    "nombre": "Chocolatina de borojó",
    "categoria": "Snack",
    "precio": 4000,
    "stock": 35,
    "tags": ["dulce", "energía"]
});

// 2. Insertar un nuevo cliente que se llama "Mario Mendoza"

db.clientes.insertOne({
    "_id": 11,
    "nombre": "Mario Mendoza",
    "email": "mario@email.com",
    "compras": [],
    "preferencias": ["energético", "natural"]
});