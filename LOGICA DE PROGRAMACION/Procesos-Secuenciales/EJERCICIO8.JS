//8.	Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
//// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: nombew=""(leer);n1=""(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso: noombre
// Para i<-1 Hasta 3 Con Paso 1 Hacer
// La informacion de las variables procesadas 
// Salida: Se repite nombre 3 veces

//Pseudocodigo
//Algoritmo repetirnombre
	//definir Nombre
	//escribir" ingresar un nombre y repetir 3 veces"
	//escribir "ingrese nombre"
	//leer nombre
	//Para i<-1 Hasta 3 Con Paso 1 Hacer
	//	escribir nombre
	//Fin Para
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

	 // JAVA SCRIPT

    function repetirnombre() {
write("Ingresar un nombre y repetirlo 3 veces");
let nombre = read("Ingrese nombre:");
for (let i = 0; i < 3; i++) {
    write(nombre);
}
    }
    repetirnombre();
