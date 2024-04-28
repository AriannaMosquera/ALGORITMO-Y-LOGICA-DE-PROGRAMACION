const read = require('prompt-sync')();
const write = console.log

//! 10.	Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.
// analisis del requerimiento
// ENT:numero=0(leer)
// PRO: // Si numero > 100 Entonces
//     Escribir "El número ingresado es mayor que 100."
// SiNo
//     Si numero < 100 Entonces
//         Escribir "El número ingresado es menor que 100."
//     SiNo
//         Escribir "El número ingresado es igual a 100."
//     FinSi
// FinSi
// SAL: mostrar el mensaje

//!Pseudocodigo
// Algoritmo CompararNumero
// Definir numero Como Entero

// Escribir "Ingrese un número:"
// Leer numero

// Si numero > 100 Entonces
//     Escribir "El número ingresado es mayor que 100."
// SiNo
//     Si numero < 100 Entonces
//         Escribir "El número ingresado es menor que 100."
//     SiNo
//         Escribir "El número ingresado es igual a 100."
//     FinSi
// FinSi
// FinAlgoritmo

//! JAVA SCRIPT
function ejercicio10(){
let numero = parseInt(read("Ingrese un número:"));
if (numero > 100) {
  write("El número ingresado es mayor que 100.");
} else {
  if (numero < 100) {
    write("El número ingresado es menor que 100.");
  } else {
    write("El número ingresado es igual a 100.");
  }
}
}
ejercicio10()