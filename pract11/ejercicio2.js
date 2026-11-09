function crearMultiplicador(factor) {
  return (numero) => numero * factor;
}

const duplicador = crearMultiplicador(2);
const triplicador = crearMultiplicador(3);

console.log(`Duplicador de 5: ${duplicador(5)}`);
console.log(`Triplicador de 5: ${triplicador(5)}`);