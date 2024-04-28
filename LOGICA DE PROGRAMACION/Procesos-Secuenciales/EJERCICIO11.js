//11.	Solicitar al usuario una distancia en metros y mostrarla en centímetros.
//  Analisis de requerimentos:
// los datos o variables del problema
// Entrada: c=0.0(leer),d=0.0(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso:c <- d*1000
// La informacion de las variables procesadas 
// Salida: d

// Pseudocodigo
//Algoritmo cm
//	Definir c, d Como Entero
//	Escribir 'ingresa la distancia en metros y muestrala en centimetros'
//	Escribir 'ingresa la distancia en metros'
//	Leer c
//	c <- d*1000
//	Escribir 'distancia en centimetros'
//	Escribir d, 'cm'
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

//JAVA SCRIPT
function ejercicio9(){
let c, d;

write("Ingresa la distancia en metros y muéstrala en centímetros");

write("Ingresa la distancia en metros:");

d = parseInt(read("Distancia en metros:"));

c = d * 100;

write("Distancia en centímetros:");

write(d + " metros son " + c + " centímetros.");
}
ejercicio9()
