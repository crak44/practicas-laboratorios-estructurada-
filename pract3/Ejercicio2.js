//Solicite al usuario dos calificaciones (0-100). Compare cuál es la más alta. Si son iguales, indíquelo. Muestre un mensaje descriptivo con el resultado.

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 rl.question("Ingrese la primera calificación (0-100): ", (respuesta1) => {

    rl.question("Ingrese la segunda calificación (0-100): ", (respuesta2) => {

        let calificacion1 = Number(respuesta1);
        let calificacion2 = Number(respuesta2);

        if (calificacion1 > calificacion2) {
            console.log("La primera calificación es más alta: " + calificacion1);
        }
        else if (calificacion2 > calificacion1) {
            console.log("La segunda calificación es más alta: " + calificacion2);
        }
        else {
            console.log("Las dos calificaciones son iguales: " + calificacion1);
        }

        rl.close();
    });
});

