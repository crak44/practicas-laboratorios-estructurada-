const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("===== DÍA DE LA SEMANA =====");
console.log("1. Lunes");
console.log("2. Martes");
console.log("3. Miércoles");
console.log("4. Jueves");
console.log("5. Viernes");
console.log("6. Sábado");
console.log("7. Domingo");

rl.question("Ingrese un número del 1 al 7: ", (numero) => {

    numero = parseInt(numero);

    switch (numero) {
        case 1:
            console.log("El día es Lunes.");
            break;

        case 2:
            console.log("El día es Martes.");
            break;

        case 3:
            console.log("El día es Miércoles.");
            break;

        case 4:
            console.log("El día es Jueves.");
            break;

        case 5:
            console.log("El día es Viernes.");
            break;

        case 6:
            console.log("El día es Sábado.");
            break;

        case 7:
            console.log("El día es Domingo.");
            break;

        default:
            console.log("Día no válido.");
    }

    rl.close();
});