const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuántas calificaciones desea ingresar?: ", (respuesta) => {
    const cantidad = parseInt(respuesta);
    let suma = 0;
    let mayor = 0;
    let menor = 100;

    function ingresar(i) {
        if (i <= cantidad) {
            rl.question("Ingrese la calificación " + i + ": ", (respuesta) => {
                const nota = parseFloat(respuesta);
                suma = suma + nota;

                if (nota > mayor) {
                    mayor = nota;
                }
                if (nota < menor) {
                    menor = nota;
                }
                ingresar(i + 1);
            });
        } else {
            let promedio = suma / cantidad;
            console.log("Promedio: " + promedio.toFixed(2));
            console.log("Calificación más alta: " + mayor);
            console.log("Calificación más baja: " + menor);
            rl.close();
        }
    }
    ingresar(1);
});

