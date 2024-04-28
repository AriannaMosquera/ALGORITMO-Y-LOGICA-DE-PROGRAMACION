//!1.	Pedir al usuario un número y mostrar si es mayor o menor que 10.
// analisis de requerimientos 
//variables de problema 
// entrada : Numero""(leer)
// los calculos o procesos que se hacen con las variables 
//proceso: //SI Numero>10 Entonces
		//ESCRIBIR "EL NUMERO INGRESADO ES MAYOR QUE 10"
	 // SiNo
			//ESCRIBIR "EL NUMERO INGRESADO NO ES MAYOR QUE 10"
		//FinSi
//la inf de las variables procesadas 
// salida: PRESENTAR EL MENSAJE SI ES MAYOR O MENOR DE Numero

const read = require('prompt-sync')();
const write = console.log

//!Pseudocodigo
//Algoritmo MAYORDENumero
	//DEFINIR  Numero COMO ENTERO
	//ESCRIBIR "INGRESAR UN NUMERO"
	//LEER Numero
	//SI Numero>10 Entonces
		//ESCRIBIR "EL NUMERO INGRESADO ES MAYOR QUE 10"
	 // SiNo
			//ESCRIBIR "EL NUMERO INGRESADO NO ES MAYOR QUE 10"
		//FinSi
		
//FinAlgoritmo

//! JAVA SCRIPT3
function Ejercicio1() {
    let Numero=0;
        write("INGRESAR UN NUMERO");
              Numero = read("EL NUMERO ES: ");
        if (Numero > 10) {
          write("EL NUMERO INGRESADO ES MAYOR QUE 10");
        } 
        else {
          write("EL NUMERO INGRESADO NO ES MAYOR QUE 10");
        }
      }
Ejercicio1();

