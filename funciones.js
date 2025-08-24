// Ejercicios de funciones definidas en system.js

// 1. Definir una función calcularDescuento(precio, porcentaje)

db.system.js.insertOne({ 
  _id: "calcularDescuento", 
  value: new Code("function(precio, porcentaje) { return precio - (precio * porcentaje / 100); }") 
});

// Uso de la función calcularDescuento
const f1 = db.system.js.findOne({ _id: "calcularDescuento" });
const calcularDescuento = new Function('return ' + f1.value.code)();

// Probar la función
const producto1 = db.productos.findOne({ nombre: "Helado de borojó" });
calcularDescuento(producto1.precio, 15);

// 2. Definir una función clienteActivo(idCliente)

db.system.js.insertOne({ 
  _id: "clienteActivo", 
  value: new Code("function(cliente) { return cliente.compras.length > 3; }") 
});

// Uso de la función clienteActivo
const f2 = db.system.js.findOne({ _id: "clienteActivo" });
const clienteActivo = new Function('return ' + f2.value.code)();

// Probar la función
const cliente1 = db.clientes.findOne({ nombre: "Sofía Gómez" });
clienteActivo(cliente1);

// 3. Definir una función verificarStock(productoId, cantidadDeseada)

db.system.js.insertOne({ 
  _id: "verificarStock", 
  value: new Code("function(stock, cantidad) { return stock >= cantidad; }") 
});

// Uso de la función verificarStock
const f3 = db.system.js.findOne({ _id: "verificarStock" });
const verificarStock = new Function('return ' + f3.value.code)();

// Probar la función
const producto2 = db.productos.findOne({ nombre: "Jugo de borojó" });
verificarStock(producto2.stock, 20);