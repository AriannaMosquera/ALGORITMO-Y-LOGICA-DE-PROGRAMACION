// !12.	Pedir 5 números y asignarlos en un arreglo
// */  Analisis de requerimentos:
// *los datos o variables del problema
// Entrada: Arreglo=""(leer)
// *Los calculos o procesos que se hacen con las variables
// Proceso:   
//   arreglo[1] <- 5
 //   arreglo[2] <- 10
 //   arreglo[3] <- 15
 //   arreglo[4] <- 20
 //   arreglo[5] <- 25
	
 //   Escribir "Pedir 5 números:"
 //   Para i <- 1 Hasta 5
 //       Escribir arreglo[i]
 //   FinPara
  // *salida:los numeros ingresados en el


//!Algoritmo intercambiar
 //   Dimension arreglo[5]
	
 //   arreglo[1] <- 5
 //   arreglo[2] <- 10
 //   arreglo[3] <- 15
 //   arreglo[4] <- 20
 //   arreglo[5] <- 25
	
 //   Escribir "Arreglo antes del intercambio:"
 //   Para i <- 1 Hasta 5
 //       Escribir arreglo[i]
 //   FinPara
	
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

//! JAVA SCRIPT

// Declarar un arreglo con 5 elementos
let arreglo = [];

// Asignar valores a los elementos del arreglo
function ejercicio12(){
arreglo[0] = 5;
arreglo[1] = 10;
arreglo[2] = 15;
arreglo[3] = 20;
arreglo[4] = 25;

write("Pedir 5 números:");
for (let i = 0; i < 5; i++) {
    write(arreglo[i]);
}
}
ejercicio12()
