const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function celsiusAFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

console.log("1. Celsius a Fahrenheit");
console.log("2. Fahrenheit a Celsius");

rl.question("Seleccione el tipo de conversión (1-2): ", (opcion) => {
  rl.question("Ingrese la temperatura: ", (temp) => {
    const temperatura = parseFloat(temp);
    let resultado;

    switch (opcion) {
      case "1":
        resultado = celsiusAFahrenheit(temperatura);
        console.log(`${temperatura}°C = ${resultado.toFixed(2)}°F`);
        break;
      case "2":
        resultado = fahrenheitACelsius(temperatura);
        console.log(`${temperatura}°F = ${resultado.toFixed(2)}°C`);
        break;
      default:
        console.log("Opción no válida.");
    }

    rl.close();
  });
});