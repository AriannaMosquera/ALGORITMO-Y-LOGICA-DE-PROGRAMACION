//!5.	Pedir al usuario dos números y mostrar si son iguales o diferentes.
// analisis de requerimientos 
//variables de problema 
// entrada : num1=""(leer), num2:""(leer)
// los calculos o procesos que se hacen con las variables 
//proceso: / Escribir "ingresar 2 numeros y mostrar si son iguales"
// Escribir "NUMERO1"
// Leer num1
// Escribir "NUMERO 2"
// Leer num2
// Si num1=num2 Entonces
//     Escribir "son iguales"
// Sino 
//     Escribir "no son iguales"
// FinSi
//la inf de las variables procesadas 
// salida: mostrar el mensaje si son iguales o diferentes los numeros


 //! pseudocodigo

 // Algoritmo iguales
// Definir num1,num2 Como Entero
// Escribir "ingresar 2 numeros y mostrar si son iguales"
// Escribir "NUMERO1"
// Leer num1
// Escribir "NUMERO 2"
// Leer num2
// Si num1=num2 Entonces
//     Escribir "son iguales"
// Sino 
//     Escribir "no son iguales"
// FinSi
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

//! JAVA SCRIPT

function ejercicio5(){

let num1 = 0, num2 = 0;

write("ingresar 2 numeros y mostrar si son iguales");
write("NUMERO1");

num1 = read("ingrese el primer numero: ");

write("NUMERO 2");

num2 = read("ingrese el segundo numero: ");

if (num1 == num2) {
  write("son iguales");
}
else {
  write("no son iguales");
}
}
ejercicio5()