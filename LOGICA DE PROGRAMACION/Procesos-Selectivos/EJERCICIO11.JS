const read = require('prompt-sync')();
const write = console.log

//!11.	Solicitar al usuario un número y mostrar si es un número de un solo dígito.
// analisis del requerimiento
// ENT: NUMERO=""(LEER)
// PRO: Escribir "solicitar un numero y mostras si es de 2 digitos"
// Leer NUMERO
// Si NUMERO > 10 Entonces
//     Escribir "el numero que ingreso es de 2 digitos"
// SiNo
//     Escribir "el numero que ingreso es de 1 digito"
// FinSi
// SAL: mostrar el mensaje

//! PSEUDOCODIGO

// Algoritmo DIGITO
// DEFINIR NUMERO Como Entero
// Escribir "solicitar un numero y mostras si es de 2 digitos"
// Leer NUMERO
// Si NUMERO > 10 Entonces
//     Escribir "el numero que ingreso es de 2 digitos"
// SiNo
//     Escribir "el numero que ingreso es de 1 digito"
// FinSi
// FinAlgoritmo

//!JAVA SCRIPT

function EJERCICIO11(){
let numero = parseInt(read("solicitar un numero y mostras si es de 2 digitos: "));
if (numero > 10) {
  write("el numero que ingreso es de 2 digitos");
} else {
  write("el numero que ingreso es de 1 digito");
}
}
EJERCICIO11()