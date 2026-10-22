const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarVocales(cadena, indice = 0) {
    if (indice >= cadena.length) {
        return 0;
    }

    const caracter = cadena[indice]
        .toLowerCase()
        .normalize("NFD")
        .charAt(0);

    const esVocal =
        caracter === "a" ||
        caracter === "e" ||
        caracter === "i" ||
        caracter === "o" ||
        caracter === "u";

    return (esVocal ? 1 : 0) + contarVocales(cadena, indice + 1);
}

function invertirCadena(cadena) {
    if (cadena.length <= 1) {
        return cadena;
    }

    return (
        cadena.charAt(cadena.length - 1) +
        invertirCadena(cadena.slice(0, -1))
    );
}

function esPalindromo(cadena) {
    if (cadena.length <= 1) {
        return true;
    }

    if (cadena.charAt(0) !== cadena.charAt(cadena.length - 1)) {
        return false;
    }

    return esPalindromo(cadena.slice(1, -1));
}

function normalizarTexto(texto) {
    const textoMinusculas = texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    let resultado = "";

    for (let i = 0; i < textoMinusculas.length; i++) {
        const caracter = textoMinusculas[i];

        if (
            (caracter >= "a" && caracter <= "z") ||
            (caracter >= "0" && caracter <= "9")
        ) {
            resultado += caracter;
        }
    }

    return resultado;
}

function ejecutarTarea3() {
    console.log("==========================================");
    console.log("TAREA 3: MANEJO DE CADENAS CON RECURSIVIDAD");
    console.log("==========================================");

    const texto = prompt("Tarea 3: ingrese una palabra o frase:") || "";
    const textoNormalizado = normalizarTexto(texto);

    console.log(`Texto ingresado: "${texto}"`);
    console.log(`Cantidad de vocales: ${contarVocales(texto)}`);
    console.log(`Cadena invertida: "${invertirCadena(texto)}"`);
    console.log(
        `¿Es palíndromo?: ${esPalindromo(textoNormalizado) ? "Sí" : "No"}`
    );
}

ejecutarTarea3();