//9.	Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: I=0.0;N=0.0;P=0.0
// Los calculos o procesos que se hacen con las variables
// Proceso: Para i desde 1 hasta 10 hacer
     // producto = n * i
     //Escribir n, " x ", i, " = ", p
// La informacion de las variables procesadas 
// Salida:P

//Algoritmo TABLA
	//definir i, n, p 
    // Escribir "Por favor, ingrese un número:"
    // Leer N
    // Escribir "Tabla de multiplicar de ", n, ":"
     //Para i desde 1 hasta 10 hacer
     // producto = n * i
     //Escribir n, " x ", i, " = ", p
    //finpara
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

//Java script
function ejercicio9(){
let i, n, p;
write("Por favor, ingrese un número:");
n = parseInt(read("Número:"));
write("Tabla de multiplicar de " + n + ":");
for (i = 1; i <= 10; i++) {
    p = n * i;
    write(n + " x " + i + " = " + p);
}
}
ejercicio9()