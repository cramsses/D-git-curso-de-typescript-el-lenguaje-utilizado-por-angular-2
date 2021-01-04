function holaMundo(nombre) {
    return "Hola Mundo!! Soy " + nombre;
}
var nombre = "Ramssés";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
alert("Hola");
