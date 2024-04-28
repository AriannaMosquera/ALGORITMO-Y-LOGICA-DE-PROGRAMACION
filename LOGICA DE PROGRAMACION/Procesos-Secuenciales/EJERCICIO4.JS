//4.	Pedir al usuario un número y mostrar su doble.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: numero=""(leer),doble=""(calcular)
// Los calculos o procesos que se hacen con las variables
// Proceso: doble=numero*2
// La informacion de las variables procesadas
// Salida:doble
//Pseudocodigo
// Algoritmo doble
//  definir v1,vt
//  escribir "EL DOBLE DE UN NUMERO"
//  escrbir "ingresa un numero"
//  leer numero
//  doble=numero*2
//  Escribir doble
//  FinalAlgoritmo

const read = require('prompt-sync')();
const write = console.log

// JAVA SCRIPT
function Doble() {
    let numero = read ("Por favor, ingresa un número:");
    if (!isNaN(numero)) {
        numero = parseFloat(numero);
        let doble = numero * 2;
        write("El doble de " + numero + " es: " + doble);
    } else {
        write("Por favor, ingresa un número válido.");
    }
 }
 Doble();
 
