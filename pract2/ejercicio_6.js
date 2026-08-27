let nombre = "Juan";
let apellido = "Pérez";
let años = 2005;
let promedio = 7.512;

console.log("u nombre y apellido es" +nombre.toUpperCase() + " " + apellido.toUpperCase()+ promedio.toFixed(2))`,`
console.log("las primeras 3 letras de su apelllido son: " + apellido.slice(0, 3))
console.log("Los 2 digitos del años son : " + años.toString().slice(2, 4));
console.log ("Su promedio con 2 decimales es: " + promedio.toFixed(2));