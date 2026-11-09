const notas = [8, 7, 9, 6, 10];

const sumaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
const promedio = sumaNotas / notas.length;

console.log(`Promedio de notas: ${promedio.toFixed(2)}`);