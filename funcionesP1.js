//declaracion de una funcion
function multiplica( primerOperando,segundoOperando ){
    var resultado=primerOperando*segundoOperando;
    console.log("El resultado es "+resultado)
}
multiplica(25,2);

function multiplicaN3(){
    var resultado2 = 12*12;
    console.log("El resultado es "+ parseInt(resultado2));
}
//multiplicaN3();

//funcion como expresion

var resultado = function multiplicaN2( primerOperando ){
    return 2 * primerOperando; 
}
//console.log("RES 2 " +resultado(25));

//Funcion Flecha
//Funcion que saluda a una persona
const saludaPersona = (nombre="ALAN" ) => console.log("Hola "+nombre);
saludaPersona("ALEX");

const suma = (numero ) => console.log(numero*2);
suma(12);


//Ejercicio #1
//Escribir un programa que tenga una funcion a la que 
//se le pase como parametro un numero y devuelve como 
//resultado un texto que indica si el numero es par o impar

function determinaNumero( numero ){
    if( (numero % 2) == 1 ){
        console.log(" El numero es impar "+numero);
    }
    else if((numero%2) == 0){
        console.log("El numero es par "+numero);
    }

}
determinaNumero(24);

//Ejercicio #2
//Definir una funcion que muestre la informacion de un texto
//Que se introduce como argumento y determinar si el texto
//contiene mayusculas , minusculas o ambas
function determinaTexto(texto){
    if(texto == texto.toUpperCase() ){
        console.log("El texto esta en mayuscula "+texto)
    }
    else if(texto == texto.toLowerCase()){
        console.log("El texto esta en + minusculas "+texto);
    }
        else if(texto!=texto.toUpperCase() ){
            console.log("El texto esta combinado")
        } 
    }
determinaTexto("Hola")

