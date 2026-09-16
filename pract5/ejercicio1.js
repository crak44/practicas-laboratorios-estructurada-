
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Ingrese el tipo de tarjeta (1=Débito, 2=Crédito, 3=Premium): ", (tipoTarjeta) => {

    
    rl.question("Ingrese el monto a retirar: $", (montoIngresado) => {

       
        tipoTarjeta = Number(tipoTarjeta);
        const monto = Number(montoIngresado);

        let limiteRetiro;

        
        switch (tipoTarjeta) {
            case 1:
                limiteRetiro = 500;
                break;

            case 2:
                limiteRetiro = 1000;
                break;

            case 3:
                limiteRetiro = 2000;
                break;

            default:
                console.log("Tarjeta no válida");
                rl.close();
                return;
        }

        
        if (monto > limiteRetiro) {
            console.log("Límite excedido");
        }
        
        else if (monto % 10 != 0) {
            console.log("El monto debe ser múltiplo de 10");
        }
        
        else if (monto <= limiteRetiro && monto % 10 == 0) {
            console.log("Retiro exitoso");
        }

        rl.close();
    });
});