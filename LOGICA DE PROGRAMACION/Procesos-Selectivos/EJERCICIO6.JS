//!6.	Solicitar al usuario un carácter y mostrar si es una vocal o consonante.
// analisis de requerimientos 
//variables de problema 
// entrada : letra=""(leer)
// los calculos o procesos que se hacen con las variables 
//proceso: Escribir "INGRESA UNA LETRA Y MUESTRA SI ES VOCAL O CONSONANTE"
// Escribir "INGRESA LA LETRA"
// Leer letra
// Si letra = "A" o letra = "E" o letra = "I" o letra = "O" o letra = "U" Entonces
//     Escribir "LA LETRA INGRESADA ES UNA VOCAL"
// Sino
//     Escribir "LA LETRA INGRESADA ES UNA CONSONANTE"
// FinSi
//la inf de las variables procesadas 
// salida: mostrar el mensaje si es una vocal o una consonante


//! Pseudocodigo

// Algoritmo cosonanteSL
// DEFINIR letra Como Caracter
// Escribir "INGRESA UNA LETRA Y MUESTRA SI ES VOCAL O CONSONANTE"
// Escribir "INGRESA LA LETRA"
// Leer letra
// Si letra = "A" o letra = "E" o letra = "I" o letra = "O" o letra = "U" Entonces
//     Escribir "LA LETRA INGRESADA ES UNA VOCAL"
// Sino
//     Escribir "LA LETRA INGRESADA ES UNA CONSONANTE"
// FinSi
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

//!JAVA SCRIPT
function EJERCICIO6(){
write("INGRESA UNA LETRA Y MUESTRA SI ES VOCAL O CONSONANTE");
let letra = read("INGRESA UNA LETRA: ");
if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
  write("LA LETRA INGRESADA ES UNA VOCAL");
}
else {
  write("LA LETRA INGRESADA ES UNA CONSONANTE");
}
}
EJERCICIO6()