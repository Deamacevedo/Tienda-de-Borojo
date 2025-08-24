// Ejercicios de transacciones

// 1. Simular una venta (descontar stock + insertar venta)

const session1 = db.getMongo().startSession();
session1.startTransaction();

try {
  // Descontar stock del producto
  db.productos.updateOne(
    { _id: 2 }, // Jugo de borojó
    { $inc: { stock: -2 } },
    { session: session1 }
  );
  
  // Insertar la venta
  const ultimaVenta = db.ventas.findOne({}, { sort: { _id: -1 } });
  const nuevoId = ultimaVenta._id + 1;
  
  db.ventas.insertOne({
    _id: nuevoId,
    clienteId: 1, // Carlos Ramírez
    productos: [{ productoId: 2, cantidad: 2 }],
    fecha: new Date(),
    total: 14000 // 7000 * 2
  }, { session: session1 });
  
  session1.commitTransaction();
} catch (error) {
  session1.abortTransaction();
  print("Error en la venta: " + error);
} finally {
  session1.endSession();
}

// 2. Simular entrada de inventario (insertar inventario + aumentar stock)

const session2 = db.getMongo().startSession();
session2.startTransaction();

try {
  // Insertar en inventario
  const ultimoInventario = db.inventario.findOne({}, { sort: { _id: -1 } });
  const nuevoIdInventario = ultimoInventario._id + 1;
  
  db.inventario.insertOne({
    _id: nuevoIdInventario,
    productoId: 5, // Compota de borojó
    lote: "L012",
    cantidad: 30,
    entrada: new Date()
  }, { session: session2 });
  
  // Aumentar stock del producto
  db.productos.updateOne(
    { _id: 5 },
    { $inc: { stock: 30 } },
    { session: session2 }
  );
  
  session2.commitTransaction();
} catch (error) {
  session2.abortTransaction();
  print("Error en entrada de inventario: " + error);
} finally {
  session2.endSession();
}

// 3. Operación de devolución (aumentar stock + eliminar venta)

const session3 = db.getMongo().startSession();
session3.startTransaction();

try {
  // Buscar la venta a devolver
  const ventaDevolver = db.ventas.findOne({ _id: 5 }); // Venta de Luis Martínez
  
  if (ventaDevolver) {
    // Restaurar stock de todos los productos de la venta
    ventaDevolver.productos.forEach(function(item) {
      db.productos.updateOne(
        { _id: item.productoId },
        { $inc: { stock: item.cantidad } },
        { session: session3 }
      );
    });
    
    // Eliminar la venta
    db.ventas.deleteOne(
      { _id: 5 },
      { session: session3 }
    );
  }
  
  session3.commitTransaction();
} catch (error) {
  session3.abortTransaction();
  print("Error en devolución: " + error);
} finally {
  session3.endSession();
}