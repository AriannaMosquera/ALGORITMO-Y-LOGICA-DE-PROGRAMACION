//!14.	Dado un arreglo de 5 elementos, presentar el primero, el del medio y el ultimo
// */  Analisis de requerimentos:
// *los datos o variables del problema
// Entrada: arr=("leer")
// *Los calculos o procesos que se hacen con las variables
// Proceso: //Dimension arre[5]

    //arr[1] <- 5
   // arr[2] <- 10
    //arr3] <- 15
    //arr[4] <- 20
    //arr[5] <- 25
    
    //Escribir "Primer elemento del arreglo:", arr[1]
    //Escribir "Elemento del medio del arreglo:", arr[3]
    //Escribir "Último elemento del arreglo:", arr[5]
// *La informacion de las variables procesadas 
// Salida: muestra kis arreglos


//!Pseudocodigo
//Algoritmo mostrar
//Dimension arreglo[5]

    //arr[1] <- 5
   // arr[2] <- 10
    //arr[3] <- 15
    //arr[4] <- 20
    //arr[5] <- 25
    
    //Escribir "Primer elemento del arreglo:", arreglo[1]
    //Escribir "Elemento del medio del arreglo:", arreglo[3]
    //Escribir "Último elemento del arreglo:", arreglo[5]
//FinAlgoritmo

const write = console.log
//! JAVA SCRIPT

function Ejercicio14() {
  let arr = [];

  arr[0] = 5;
  arr[1] = 10;
  arr[2] = 15;
  arr[3] = 20;
  arr[4] = 25;

  write("Primer elemento del arreglo:", arr[0]);
  write("Elemento del medio del arreglo:", arr[2]);
  write("Último elemento del arreglo:", arr[4]);
}

Ejercicio14(); 

