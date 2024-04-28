const read = require('prompt-sync')();
const write = console.log
//!21.	Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor
// analisis del requerimiento
// ENT: VALOR=0(LEER);VALORT=0(CALCULAR)
// PRO:  Escribir "porcentaje de iva"
// Leer valort
// valort = valor * (1 + valort/100)
// Escribir "SU MONTO A PAGAR ES DE:"
// ESCRIBIR valort
// SAL: 

//!Pseudocodigo

// Algoritmo MayorElemento
//     Definir arreglo[3] como entero
//     Definir mayor como entero
//     Escribir "Ingrese los 3 elementos del arreglo:"
//     Leer arreglo[1]
//     Leer arreglo[2]
//     Leer arreglo[3]
//     mayor = arreglo[1]
//     Si arreglo[2] > mayor Entonces
//         mayor = arreglo[2]
//     FinSi
//     Si arreglo[3] > mayor Entonces
//         mayor = arreglo[3]
//     FinSi
//     Escribir "El mayor elemento del arreglo es:", mayor
// FinAlgoritmo

//!JAVA SCRIPT
function ejercicio21(){
        let arreglo = [];
        let mayor;
    
        write("Ingrese los 3 elementos del arreglo:");
        arreglo[0] = parseFloat(read("Elemento 1:"));
        arreglo[1] = parseFloat(read("Elemento 2:"));
        arreglo[2] = parseFloat(read("Elemento 3:"));
    
        mayor = arreglo[0];
    
        if (arreglo[1] > mayor) {
            mayor = arreglo[1];
        }
    
        if (arreglo[2] > mayor) {
            mayor = arreglo[2];
        }
    
        write("El mayor elemento del arreglo es:", mayor);
    }    
ejercicio21()