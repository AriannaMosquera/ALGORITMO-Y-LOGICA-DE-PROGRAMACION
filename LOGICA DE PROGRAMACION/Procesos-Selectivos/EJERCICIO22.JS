const read = require('prompt-sync')();
const write = console.log
//!22.	Dado un arreglo de 5 elementos presentar la suma de dichos elementos
// analisis del requerimiento
// ENT: suma=0""(leer)
// PRO:  Escribir "Ingrese los 5 elementos del arreglo:"
//     Leer arreglo[1]
//     Leer arreglo[2]
//     Leer arreglo[3]
//     Leer arreglo[4]
//     Leer arreglo[5]
//     suma = arreglo[1] + arreglo[2] + arreglo[3] + arreglo[4] + arreglo[5]
// SAL: Suma
//! PSEUDOCODIGO
// Algoritmo SumaElementos
//     Definir arreglo[5] como entero
//     Definir suma como entero
//     Escribir "Ingrese los 5 elementos del arreglo:"
//     Leer arreglo[1]
//     Leer arreglo[2]
//     Leer arreglo[3]
//     Leer arreglo[4]
//     Leer arreglo[5]
//     suma = arreglo[1] + arreglo[2] + arreglo[3] + arreglo[4] + arreglo[5]
//     Escribir "La suma de los elementos del arreglo es:", suma
// FinAlgoritmo

//!JAVA SCRIPT

function EJERCICIO22() {
    let arreglo = [];
    let suma = 0;

    write("Ingrese los 5 elementos del arreglo:");
    for (let i = 0; i < 5; i++) {
        arreglo[i] = parseFloat(read(`Elemento ${i + 1}: `));
        suma += arreglo[i];
    }

    write("La suma de los elementos del arreglo es:", suma);
}

EJERCICIO22();
