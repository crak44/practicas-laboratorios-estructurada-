const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function esPrimo(numero) {
  if (numero < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

rl.question("Ingrese un número: ", (entrada) => {
  const numero = parseInt(entrada);

  if (isNaN(numero)) {
    console.log("Debe ingresar un número válido.");
    rl.close();
    return;
  }

  console.log(`¿Es par?: ${esPar(numero) ? "Sí" : "No"}`);
  console.log(`¿Es primo?: ${esPrimo(numero) ? "Sí" : "No"}`);

  rl.close();
});