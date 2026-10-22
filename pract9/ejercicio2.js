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

function sumaPares(n) {
    if (n === 0) {
        return 0;
    }

    return 2 * n + sumaPares(n - 1);
}

function sumaImpares(n) {
    if (n === 0) {
        return 0;
    }

    return 2 * n - 1 + sumaImpares(n - 1);
}

function fibonacci(n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function ejecutarTarea2() {
    console.log("==========================================");
    console.log("TAREA 2: MENÚ CON FUNCIONES RECURSIVAS");
    console.log("==========================================");

    let opcion;

    do {
        opcion = Number(
            prompt(
                "Tarea 2: elija una opción:\n" +
                "1. Suma de los primeros n números pares\n" +
                "2. Suma de los primeros n números impares\n" +
                "3. n-ésimo término de Fibonacci\n" +
                "0. Salir"
            )
        );

        switch (opcion) {
            case 1: {
                const n = solicitarEnteroPositivo(
                    "Ingrese n para sumar los primeros números pares:"
                );
                console.log(
                    `La suma de los primeros ${n} números pares es: ${sumaPares(n)}`
                );
                break;
            }

            case 2: {
                const n = solicitarEnteroPositivo(
                    "Ingrese n para sumar los primeros números impares:"
                );
                console.log(
                    `La suma de los primeros ${n} números impares es: ${sumaImpares(n)}`
                );
                break;
            }

            case 3: {
                const n = solicitarEnteroPositivo(
                    "Ingrese n para calcular el término de Fibonacci:"
                );
                console.log(
                    `El término ${n} de la serie de Fibonacci es: ${fibonacci(n)}`
                );
                break;
            }

            case 0:
                console.log("Saliendo del menú de la Tarea 2...");
                break;

            default:
                console.log("Opción no válida. Intente nuevamente.");
                break;
        }
    } while (opcion !== 0);
}

ejecutarTarea2();