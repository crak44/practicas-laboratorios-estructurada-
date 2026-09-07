//Solicite el monto de compra. Si es mayor a $100, aplique 15% de descuento. Si es mayor a $50, aplique 10%. En otro caso, no hay descuento. Muestre el monto original, el descuento aplicado y el total a pagar con 2 decimales.

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 rl.question("Ingrese el monto de la compra: $", (respuesta) => {

    let monto = Number(respuesta);

    let descuento = 0;
    let porcentajeDescuento = 0;

    if (monto > 100) {
        porcentajeDescuento = 15;
        descuento = monto * 0.15;
    }
    else if (monto > 50) {
        porcentajeDescuento = 10;
        descuento = monto * 0.10;
    }
    else {
        porcentajeDescuento = 0;
        descuento = 0;
    }

    let total = monto - descuento;

    console.log("\n--- RESUMEN DE COMPRA ---");
    console.log("Monto original: $" + monto.toFixed(2));
    console.log("Descuento aplicado: " + porcentajeDescuento + "%");
    console.log("Monto del descuento: $" + descuento.toFixed(2));
    console.log("Total a pagar: $" + total.toFixed(2));

    rl.close();
});
