const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("===== CALCULADORA =====");

rl.question("Ingrese el primer número: ", (numero1) => {

    rl.question("Ingrese el segundo número: ", (numero2) => {

        rl.question("Ingrese el operador (+, -, *, /): ", (operador) => {

            numero1 = parseFloat(numero1);
            numero2 = parseFloat(numero2);

            switch (operador) {

                case "+":
                    console.log("Resultado:", numero1 + numero2);
                    break;

                case "-":
                    console.log("Resultado:", numero1 - numero2);
                    break;

                case "*":
                    console.log("Resultado:", numero1 * numero2);
                    break;

                case "/":
                    if (numero2 !== 0) {
                        console.log("Resultado:", numero1 / numero2);
                    } else {
                        console.log("Error: No se puede dividir entre cero.");
                    }
                    break;

                default:
                    console.log("Error: Operador no válido.");
            }

            rl.close();
        });
    });
});