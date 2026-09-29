const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question(" cuanro dinneo harrosa cada dia?: ", (respuesta) => {
    const ahorroDiario = Number(respuesta);   

    let ahorradoTotal = 0;
    for (let i = 1; i <= 5; i++) {
        ahorradoTotal = ahorroDiario+ ahorradoTotal;
        console.log(`Dia ${dia}: ahorrado $${ahorradoTotal.toFixed(2)}`);
    }

    console.log(`Total ahorrado: $${ahorradoTotal.toFixed(2)}`);
    rl.close();
});