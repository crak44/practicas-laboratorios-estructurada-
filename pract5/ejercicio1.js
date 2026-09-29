1. // Un estudiante ahorra la misma cantidad de dinero cada día durante 5 días. Elabore un programa que solicite cuánto ahorra por día. Utilice un bucle for y una variable acumuladora para calcular cuánto habrá ahorrado al finalizar los 5 días. Muestre el total con dos cifras decimales.

let totalAhorrado = 0;

for (i=0; i<=4; i++) {
  // Bloque de intrucciones
  console.log(`${i}. bienvenido`);
};

console.log(`Total ahorrado: $${totalAhorrado.toFixed(2)}`);    