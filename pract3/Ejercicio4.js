//Solicite nombre, edad y años de experiencia. Valide que la edad sea mayor a 18 Y que la experiencia sea mayor a 0. Si cumple ambas condiciones, muestre "Candidato válido". Si no cumple, muestre "No cumple con los requisitos".

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 rl.question("Ingrese el nombre del candidato: ", (nombre) => {

    rl.question("Ingrese la edad: ", (respuestaEdad) => {

        rl.question("Ingrese los años de experiencia: ", (respuestaExperiencia) => {

            let edad = Number(respuestaEdad);
            let experiencia = Number(respuestaExperiencia);

            if (edad > 18 && experiencia > 0) {
                console.log("\nCandidato: " + nombre);
                console.log("Candidato válido");
            }
            else {
                console.log("\nCandidato: " + nombre);
                console.log("No cumple con los requisitos");
            }

            rl.close();
        });
    });
});
