// Este ejercicio NO usa readline porque el arreglo se define directamente en el código

// Función que recibe un arreglo y retorna la suma de sus elementos
function sumarArreglo(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return suma;
}

function promedioArreglo(arreglo) {
  if (arreglo.length === 0) {
    return 0;
  }
  return sumarArreglo(arreglo) / arreglo.length;
}

function mayorArreglo(arreglo) {
  let mayor = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
      mayor = arreglo[i];
    }
  }
  return mayor;
}

const numeros = [12, 45, 7, 23, 89, 34];

console.log("Arreglo:", numeros);
console.log("Suma:", sumarArreglo(numeros));
console.log("Promedio:", promedioArreglo(numeros).toFixed(2));
console.log("Número mayor:", mayorArreglo(numeros));