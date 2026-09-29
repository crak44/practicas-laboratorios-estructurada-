const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número entero positivo: ", (respuesta) => {
    const numero = parseInt(respuesta);
    let factorial = 1;

    if (numero > 0) {
        for (let i = 1; i <= numero; i++) {
            factorial = factorial * i;
        }
        console.log("El factorial de " + numero + " es: " + factorial);
    } else {
        console.log("Ingrese un número positivo.");
    }
    rl.close();
});

