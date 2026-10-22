const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function solicitarEnteroPositivo(mensaje) {
    let entrada;
    let numero;

    do {
        entrada = prompt(mensaje);
        numero = Number(entrada);
    } while (
        entrada === null ||
        entrada.trim() === "" ||
        !Number.isInteger(numero) ||
        numero < 0
    );

    return numero;
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }

    return base * potencia(base, exponente - 1);
}

function sumaHasta(n) {
    if (n <= 0) {
        return 0;
    }

    return n + sumaHasta(n - 1);
}

function ejecutarTarea1() {
    console.log("==========================================");
    console.log("TAREA 1: CÁLCULOS MATEMÁTICOS RECURSIVOS");
    console.log("==========================================");

    const numero = solicitarEnteroPositivo(
        "Tarea 1: ingrese un número entero positivo o cero:"
    );

    console.log(`Número ingresado: ${numero}`);
    console.log(`Factorial de ${numero}: ${factorial(numero)}`);
    console.log(
        `${numero} elevado a ${numero}: ${potencia(numero, numero)}`
    );
    console.log(`Suma desde 1 hasta ${numero}: ${sumaHasta(numero)}`);
}

ejecutarTarea1();