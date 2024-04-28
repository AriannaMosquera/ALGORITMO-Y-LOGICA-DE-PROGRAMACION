//!7.	Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo-
// *analisis de requerimientos 
//variables de problema 
// entrada : NOMBRE1=""(LEER); NOMBRE2=""(LEER)
// los calculos o procesos que se hacen con las variables 
//proceso: SI nombre1 = nombre2 Entonces
//     Escribir "SON IGUALES"
// SiNo
//     Escribir "NO SON IGUALES"
// FinSi
// SI nombre1 > nombre2 Entonces
//     ESCRIBIR "El primer nombre es mayor en orden alfabético que el segundo."
// SINO SI nombre1 < nombre2 Entonces
//     Escribir "El segundo nombre es mayor en orden alfabético que el primero."
// SiNo
//     Escribir "Los nombres son iguales en orden alfabético."
// FinSi
//la inf de las variables procesadas 
// salida: mostrar el mensaje si son iguales o no 

const read = require('prompt-sync')();
const write = console.log

//!Pseudocodigo

// Algoritmo nombresiguales
// Definir nombre1, nombre2 Como Caracter
// ESCRIBIR "INGRESA DOS NOMBRES E INDICAR SI SON IGUALES, SI EL PRIMER NOMBRE ES MAYOR QUE EL SEGUNDO"
// Escribir "PRIMER NOMBRE"
// LEER nombre1
// Escribir "SEGUNDO NOMBRE"
// LEER nombre2
// SI nombre1 = nombre2 Entonces
//     Escribir "SON IGUALES"
// SiNo
//     Escribir "NO SON IGUALES"
// FinSi
// SI nombre1 > nombre2 Entonces
//     ESCRIBIR "El primer nombre es mayor en orden alfabético que el segundo."
// SINO SI nombre1 < nombre2 Entonces
//     Escribir "El segundo nombre es mayor en orden alfabético que el primero."
// SiNo
//     Escribir "Los nombres son iguales en orden alfabético."
// FinSi
// FinAlgoritmo


//!JAVA SCRIPT

function ejercicio7(){
let nombre1, nombre2;

write("INGRESA DOS NOMBRES E INDICAR SI SON IGUALES, SI EL PRIMER NOMBRE ES MAYOR QUE EL SEGUNDO");

write("PRIMER NOMBRE:");
nombre1 = read();
write("SEGUNDO NOMBRE:");
nombre2 = read();

if (nombre1 > nombre2) {
    write("El primer nombre es mayor en orden alfabético que el segundo.");
} else if (nombre1 < nombre2) {
    write("El segundo nombre es mayor en orden alfabético que el primero.");
} else {
    write("Los nombres son iguales en orden alfabético.");
}
}
ejercicio7()

