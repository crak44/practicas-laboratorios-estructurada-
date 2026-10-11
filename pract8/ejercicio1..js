const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: no se puede dividir entre 0";
  }
  return a / b;
}

rl.question("Ingrese el primer número: ", (n1) => {
  rl.question("Ingrese el segundo número: ", (n2) => {
    rl.question("Ingrese el operador (+, -, *, /): ", (op) => {
      const num1 = parseFloat(n1);
      const num2 = parseFloat(n2);
      let resultado;

      switch (op) {
        case "+":
          resultado = sumar(num1, num2);
          break;
        case "-":
          resultado = restar(num1, num2);
          break;
        case "*":
          resultado = multiplicar(num1, num2);
          break;
        case "/":
          resultado = dividir(num1, num2);
          break;
        default:
          resultado = "Operador no válido";
      }

      console.log(`Resultado: ${resultado}`);
      rl.close();
    });
  });
});