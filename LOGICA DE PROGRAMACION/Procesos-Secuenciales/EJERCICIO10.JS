//10.	Pedir al usuario dos números y mostrar el mayor.
//  Analisis de requerimentos:
// los datos o variables del problema
// Entrada: a=0.0(Leer); b=0.0(Leer)
// Los calculos o procesos que se hacen con las variables
// Proceso: si a>b Entonces
//		escribir "el primer numero es mayor"
//		Escribir a
// La informacion de las variables procesadas 
// Salida:A

//Algoritmo mayor
//	Definir a,b como enteros
//	Escribir "ingrese el primer numero"
//	Leer a
//	Escribir "ingrese el segundo numero"
//	leer b
//	si a>b Entonces
//		escribir "el primer numero es mayor"
//		Escribir a
//	FinSi
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function ejercicio(){

let a, b;

write("Ingrese el primer número:");
a = parseInt(read("Número 1:"));

write("Ingrese el segundo número:");
b = parseInt(read("Número 2:"));

if (a > b) {
    write("El primer número es mayor:");
    write(a);
} else if (b > a) {
    write("El segundo número es mayor:");
   write(b);
} else {
    write("Ambos números son iguales.");
}
}
ejercicio()

