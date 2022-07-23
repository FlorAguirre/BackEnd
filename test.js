const Contenedor = require("./Contenedor");

const contenedor = new Contenedor("productos.json");

const test = async () => {
  const id1 = await contenedor.save({ title: "Teclado Gamer", price: 15000 });
  const id2 = await contenedor.save({ title: "Audifonos", price: 12000 });
  const id3 = await contenedor.save({ title: "Laptop", price: 50000 });

  console.log(id1, id2, id3); // 1, 2, 3
 

  // Elimina el producto 2 por ID.
 /*  const object2 = await contenedor.getById(2);
  console.log(object2); 

  await contenedor.deleteById(2);   */

  const allCurrentObjects = await contenedor.getAll();
  console.log(allCurrentObjects);


;
};

test();