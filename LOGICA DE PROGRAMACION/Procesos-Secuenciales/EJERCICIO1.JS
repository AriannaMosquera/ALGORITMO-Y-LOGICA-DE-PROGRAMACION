//1.	Pedir al usuario su nombre y saludarlo.
// analisis de requerimientos 
//variables de problema 
// entrada : Nombre=""(leer)
// los calculos o procesos que se hacen con las variables 
//proceso: saludo="Hola+ nombre + que tal"
//la inf de las variables procesadas 
// salida:=saludo


//PSEUDOCODIGO
// Algoritmo ejercicio1
//       Definir nombre=""
//       Escribir "Hola! ¿Cuál es tu nombre?"
//       Leer nombre
//       Escribir "¡Hola, " + nombre + ", bienvenido!"
//FinalAlgoritmo

const read = require('prompt-sync')();
const write = console.log

// JAVA SCRIPT
 function ejercicio1(){
    let nombre=""
    nombre= read ("Hola, ingrese su nombre:   ")
    write ("¡Hola " + nombre + ", bienvenido!");
 }
 ejercicio1()

