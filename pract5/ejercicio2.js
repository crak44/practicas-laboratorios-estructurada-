const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Ingrese el número A: ", (entradaA) => {

    rl.question("Ingrese el número B: ", (entradaB) => {

        rl.question("Ingrese el número C: ", (entradaC) => {

           
            const a = Number(entradaA);
            const b = Number(entradaB);
            const c = Number(entradaC);

           
            if (a == b && b == c) {
                console.log("Los tres números son iguales");
            }
            else if (a != b && a != c && b != c) {
                console.log("Los tres números son diferentes");
            }
            else if ((a == b && a != c) || 
                     (a == c && a != b) || 
                     (b == c && b != a)) {
                console.log("Hay dos números iguales");
            }

           
            if (a >= b && a >= c) {
                console.log("El número mayor es: " + a);
            }
            else if (b >= a && b >= c) {
                console.log("El número mayor es: " + b);
            }
            else {
                console.log("El número mayor es: " + c);
            }

            
            if (a <= b && a <= c) {
                console.log("El número menor es: " + a);
            }
            else if (b <= a && b <= c) {
                console.log("El número menor es: " + b);
            }
            else {
                console.log("El número menor es: " + c);
            }

           
            if (a < 0 || b < 0 || c < 0) {
                console.log("Hay números negativos");
            }

            rl.close();
        });
    });
});