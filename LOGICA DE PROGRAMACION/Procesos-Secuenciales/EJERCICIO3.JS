//!3.	Solicitar al usuario dos números y mostrar su suma.
//* Analisis de requerimentos:
// los datos o variables del problema
// Entrada: NUMERO1=""(LEER),NUMERO2=(LEER), TOTAL=""(CALCULAR)
// Los calculos o procesos que se hacen con las variables
// Proceso: total=Numero1+Numero2
// La informacion de las variables procesadas
// Salida:TOTAL

//!Pseudocodigo
// Algoritmo ejercicio3
// Definir numero1,numero2,final 
// escribir "ingrese el primer numero"
// leer numero1
// escribir "ingrese el segundo numero"
// leer numero2
// total=Numero1+Numero2
// escribir total
//FinalAlgoritmo

const read = require('prompt-sync')();
const write = console.log


// !JAVA SCRIPT

function SUMA() {
    let numero1 = read("Ingresar el primer número:");
    numero1 = parseFloat(numero1);
    let numero2 = read("Ingresar el segundo número:");
    numero2 = parseFloat(numero2);
    let total = numero1 + numero2;
    write(total);
}

SUMA();


