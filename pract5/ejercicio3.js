const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 1000;

console.log("===== CAJERO AUTOMÁTICO =====");
console.log("1. Consultar saldo");
console.log("2. Retirar dinero");
console.log("3. Depositar dinero");
console.log("4. Salir");

rl.question("Seleccione una opción: ", (opcionIngresada) => {

    const opcion = Number(opcionIngresada);

    switch (opcion) {

        case 1:
            console.log("Su saldo actual es: $" + saldo);
            rl.close();
            break;

        case 2:
            rl.question("Ingrese el monto a retirar: $", (montoIngresado) => {

                const monto = Number(montoIngresado);

                if (monto <= 0) {
                    console.log("El monto debe ser mayor a 0");
                }
                else if (monto % 5 != 0) {
                    console.log("El monto debe ser múltiplo de 5");
                }
                else if (monto > saldo) {
                    console.log("Fondos insuficientes");
                }
                else if (monto > 0 && monto % 5 == 0 && monto <= saldo) {
                    saldo = saldo - monto;
                    console.log("Retiro realizado correctamente");
                    console.log("Su nuevo saldo es: $" + saldo);
                }

                rl.close();
            });
            break;

        case 3:
            rl.question("Ingrese el monto a depositar: $", (montoIngresado) => {

                const monto = Number(montoIngresado);

                if (monto <= 0) {
                    console.log("El monto debe ser mayor a 0");
                }
                else if (monto > 5000) {
                    console.log("El depósito no puede exceder $5000");
                }
                else if (monto > 0 && monto <= 5000) {
                    saldo = saldo + monto;
                    console.log("Depósito realizado correctamente");
                    console.log("Su nuevo saldo es: $" + saldo);
                }

                rl.close();
            });
            break;

        case 4:
            
            console.log("Gracias por usar el cajero");
            rl.close();
            break;

        default:
            
            console.log("Opción no válida");
            rl.close();
            break;
    }
});