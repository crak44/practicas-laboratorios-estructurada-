//Solicite un número al usuario usando readline. Verifique si es positivo, negativo o cero. Muestre un mensaje que indique el resultado: "El número es positivo", "El número es negativo" o "El número es cero".


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 rl.question("Ingrese un número: ", (respuesta) => {

    
    let numero = Number(respuesta);

   
    if (numero > 0) {
        console.log("El número es positivo");
    }
    
    else if (numero < 0) {
        console.log("El número es negativo");
    }
    
    else {
        console.log("El número es cero");
    }

   
    rl.close();
});

