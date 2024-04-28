const read = require('prompt-sync')();
const write = console.log
//!20.	Dado un arreglo de 5 elementos indicar si el primero elemento es par y el último elemento es impar.
// analisis del requerimiento
// ENT: arreglo=0(leer)
// PRO:   Leer arreglo[1]
// Leer arreglo[2]
// Leer arreglo[3]
// Leer arreglo[4]
// Leer arreglo[5]
// primero = arreglo[1]
// ultimo = arreglo[5]
// Si primero MOD 2 = 0 Entonces
// Escribir "El primer elemento es par."
// Sino
// Escribir "El primer elemento no es par."
// FinSi
// Si ultimo MOD 2 ≠ 0 Entonces
// Escribir "El último elemento es impar."
// Sino
// Escribir "El último elemento no es impar."
// SAL: mostrar si es par o impar el primer y ultimo elemento

//!Pseudocodigo

// Algoritmo ParImpar
// Definir arreglo[5] como entero
// Definir primero, ultimo como entero

// Escribir "Ingrese los 5 elementos del arreglo:"
// Leer arreglo[1]
// Leer arreglo[2]
// Leer arreglo[3]
// Leer arreglo[4]
// Leer arreglo[5]
// primero = arreglo[1]
// ultimo = arreglo[5]
// Si primero MOD 2 = 0 Entonces
// Escribir "El primer elemento es par."
// Sino
// Escribir "El primer elemento no es par."
// FinSi
// Si ultimo MOD 2 ≠ 0 Entonces
// Escribir "El último elemento es impar."
// Sino
// Escribir "El último elemento no es impar."
// FinSi
// FinAlgoritmo

//!JAVA SCRIPT

//!JAVA SCRIPT
function ParImpar(){
    let arreglo = [];
    write("Ingrese los 5 elementos del arreglo:");
    for(let i = 0; i < 5; i++){
        arreglo[i] = parseInt(read(`Ingrese el elemento ${i + 1}:`));
    }
    let primero = arreglo[0];
    let ultimo = arreglo[4];
    if(primero % 2 === 0){
        write("El primer elemento es par.");
    } else {
        write("El primer elemento no es par.");
    }
    if(ultimo % 2 !== 0){
        write("El último elemento es impar.");
    } else {
        write("El último elemento no es impar.");
    }
}
ParImpar();



