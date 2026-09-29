const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número N: ", (respuesta) => {
    const numero = parseInt(respuesta);
    let divisores = 0;

    // Verificar si N es primo
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++;
        }
    }

    if (divisores === 2) {
        console.log(numero + " es primo.");
    } else {
        console.log(numero + " no es primo.");
    }

    console.log("Números primos del 1 al " + numero + ":");

    // los números primos del 1 al N
    for (let i = 2; i <= numero; i++) {
        let cantidad = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                cantidad++;
            }
        }
        if (cantidad === 2) {
            console.log(i);
        }
    }
    rl.close();
});

