//!2.	Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
//*analisis de requerimientos 
//variables de problema 
// entrada : EDAD="(LER)
// los calculos o procesos que se hacen con las variables 
//proceso: //si EDAD>17 Entonces
		//Escribir "ES MAYOR DE EDAD"
	//SiNo
		//Escribir "ES MENOR DE EDAD"
	//FinSi
//la inf de las variables procesadas 
// salida: MENSAJE SI ES O NO MAYOR DE EDAD


const read = require('prompt-sync')();
const write = console.log

//!PSEUDOCODIGO

//Algoritmo adultoSL
	//Definir EDAD como entero
	//Escribir "INGRESA TU EDAD PARA SABER SI ERES MAYOR O MENOR DE EDAD"
	//Escribir "INGRESA TU EDAD"
	//Leer EDAD
		//si EDAD>17 Entonces
		//Escribir "ES MAYOR DE EDAD"
	//SiNo
		//Escribir "ES MENOR DE EDAD"
	//FinSi
//FinAlgoritmo


//! JAVA SCRIPT

function adulto() {
    let edad = 0;
    write("INGRESA TU EDAD PARA SABER SI ERES MAYOR O MENOR DE EDAD");
    edad = read("INGRESA TU EDAD: ");
    if (edad > 17) {
      write("ES MAYOR DE EDAD");
    } else {
      write("ES MENOR DE EDAD");
    }
  }
    adulto();
