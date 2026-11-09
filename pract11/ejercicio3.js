const productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 60 },
  { nombre: "Monitor", precio: 200 },
  { nombre: "Audífonos", precio: 45 }
];

console.log("Lista de productos:");
productos.forEach((producto) => {
  console.log(`  - ${producto.nombre}: $${producto.precio}`);
});

const productosCaros = productos.filter((producto) => producto.precio > 100);

console.log("Productos con precio mayor a $100:");
console.log(productosCaros);