//2.	Pedir dos palabras y presentarlas concatenadas
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: palabra1=""(leer), palabra2=""(leer),concatenar(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso: concatenar=palabra1+palabra1
// La informacion de las variables procesadas
// Salida: concatenar
// Seupdocodigo:
// Algoritmo EJERCICIO2.JS
//   declarar palabra1="",palabra2="",concatenar=""
//   Escribir ("Ingrese la primera palabra:")
//   Leer palabra1
//   Escribir ("Ingrese la segunda palabra")
//   Leer palabra2
//   concatenar=palabra1+palabra1
//   Escribir concatenar
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
// JAVA SCRIPT

function ejercicio2() {
    let palabra1 = read("Ingrese la primera palabra:");
    let palabra2 = read("Ingrese la segunda palabra:");
    let concatenar = palabra1 + palabra2;
    write(concatenar);
}

ejercicio2()
