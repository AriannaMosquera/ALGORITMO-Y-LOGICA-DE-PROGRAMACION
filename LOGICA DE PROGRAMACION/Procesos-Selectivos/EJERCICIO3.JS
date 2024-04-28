//!3.	Pedir al usuario un número y mostrar si es par o impar.
// analisis de requerimientos 
//variables de problema 
// entrada : numero=""(leer)
// los calculos o procesos que se hacen con las variables 
//proceso: Leer NUMERO
// Si NUMERO MOD 2 == 0 Entonces
//     Escribir "El número ingresado es par."
// SiNo
//     Escribir "El número ingresado es impar."
// FinSi
//la inf de las variables procesadas 
// salida: mostrare el mendaje si es par o impar 


const read = require('prompt-sync')();
const write = console.log

//!Pseudocodigo

// Algoritmo ParOImpar
// Definir NUMERO como entero
// Escribir "Ingrese un número:"
// Leer NUMERO
// Si NUMERO MOD 2 == 0 Entonces
//     Escribir "El número ingresado es par."
// SiNo
//     Escribir "El número ingresado es impar."
// FinSi
// FinAlgoritmo

//! JAVA SCRIPT
function ParOImpar(){
let NUMERO;

NUMERO = parseInt(read("Ingrese un número: "));

if (NUMERO % 2 === 0) {
    write("El número ingresado es par.");
} else {
    write("El número ingresado es impar.");
}
}
ParOImpar()
