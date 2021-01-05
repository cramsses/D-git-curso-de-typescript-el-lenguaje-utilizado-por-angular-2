function holaMundo(nombre){
    return "Hola Mundo!! Soy "+nombre;
}

var nombre = "Ramssés";
var resultado = holaMundo(nombre)

var etiqueta = <HTMLElement> document.getElementById("container");
etiqueta.innerHTML = resultado;
alert("Hola");

//Variables y tipaos
var nombre_dos:string = "Edgar";
var edad:number = 37;

etiqueta.innerHTML = nombre_dos+" - "+edad;

//let vs var

var a=7;
var b=12

if(a===7){
    let a = 4;
    var b = 1;
    console.log("Dentro de IF: "+a+" - "+b);
}
console.log("Fuera de IF: "+a+" - "+b);


//funciones y tipado
function devuelveNumero(num:number):string{
    return "Numero devuleto: "+num;
}

function devuelveString(texto:string):number{

    if(texto = "hola"){
        var num=66;
    }else{
        var num = 90;
    }
    return num;
}


alert(devuelveNumero(21));
alert(devuelveString("hola"));
