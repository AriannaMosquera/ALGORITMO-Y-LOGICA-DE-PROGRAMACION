//!4.	Solicitar al usuario un número y mostrar si es positivo o negativo.
// analisis de requerimientos 
//variables de problema 
// entrada : valor=""()
// los calculos o procesos que se hacen con las variables 
//proceso: "inserta un numero y mostrar si es positivo o negativo"
// Leer valor
// Si valor >= 0 Entonces
//     Escribir "es positivo"
// Sino 
//     Escribir "es negativo"
// FinSi
//la inf de las variables procesadas 
// salida: mostrar el mensaje si es positivo o negativo


const read = require('prompt-sync')();
const write = console.log

//!Pseudocodigo

// Algoritmo positivosl
// Definir valor Como Entero
// Escribir "inserta un numero y mostrar si es positivo o negativo"
// Leer valor
// Si valor >= 0 Entonces
//     Escribir "es positivo"
// Sino 
//     Escribir "es negativo"
// FinSi
// FinAlgoritmo

//! JAVA SCRIPT

function ejercicio4() {
    let valor = 0;
    write("inserta un numero y mostrar si es positivo o negativo");
        valor=read("Ingrese el numero: ");
    if (valor >= 0) {
      write("es positivo");
    } else {
      write("es negativo");
    }
  }
  ejercicio4();
