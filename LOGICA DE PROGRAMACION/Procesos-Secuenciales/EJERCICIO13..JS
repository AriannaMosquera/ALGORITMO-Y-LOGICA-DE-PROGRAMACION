//!13.	Dado un arreglo de 5 nombres presentarlos todos
// */  Analisis de requerimentos:
// *los datos o variables del problema
// Entrada: nombres=""
// *Los calculos o procesos que se hacen con las variables
// Proceso:  
// Asignar valores a los elementos del arreglo
   // nombres[1] <- ""
   // nombres[2] <- ""
   // nombres[3] <- ""
   // nombres[4] <- ""
   // nombres[5] <- ""
   // Escribir "Los nombres son:"
   // Para i <- 1 Hasta 5
     //   Escribir nombres[i]
   // FinPara
// *La informacion de las variables procesadas 
// Salida: Escribir nombres[i]


//*Algoritmo presentar_nombres
   // Dimension nombres[5] // Declarar un arreglo de 5 elementos
	
    // Asignar valores a los elementos del arreglo
   // nombres[1] <- ""
   // nombres[2] <- ""
   // nombres[3] <- ""
   // nombres[4] <- ""
   // nombres[5] <- ""
   // Escribir "Los nombres son:"
   // Para i <- 1 Hasta 5
     //   Escribir nombres[i]
   // FinPara
	
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

//TODO: JAVASCRIPT

function ejercicio13(){

let nombres = [];
nombres[1] = ("Ronny");
nombres[0] = ("Mauricio");
nombres[2] = ("Brithany");
nombres[3] = ("Sandra");
nombres[4] = ("Julieth");

write("Los nombres son:");
for (let i = 0; i < 5; i++) {
    write(nombres[i]);
}
}
ejercicio13()