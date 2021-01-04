function holaMundo(nombre) {
    return "Hola Mundo!! Soy " + nombre;
}
var nombre = "Ramssés";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
alert("Hola");
//Variables y tipaos
var nombre_dos = "Edgar";
var edad = 37;
etiqueta.innerHTML = nombre_dos + " - " + edad;
//let vs var
var a = 7;
var b = 12;
if (a === 7) {
    var a_1 = 4;
    var b = 1;
    console.log("Dentro de IF: " + a_1 + " - " + b);
}
console.log("Fuera de IF: " + a + " - " + b);
