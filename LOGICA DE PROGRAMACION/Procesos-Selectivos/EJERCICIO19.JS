const read = require('prompt-sync')();
const write = console.log
//!19.	Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento.
// analisis del requerimiento
// ENT: a=0, b=0, c=0, d=0, e=0, 
// PRO:  // Escribir "Primer elemento:"
// Leer a
// Escribir "Segundo elemento:"
// Leer b
// Escribir "Tercer elemento:"
// Leer c
// Escribir "Cuarto elemento:"
// Leer d
// Escribir "Quinto elemento:"
// Leer e
// P = a
// U = e
// Si P > U Entonces
// Escribir "El primer elemento es mayor que el último elemento."
// Sino
// Escribir "El primer elemento no es mayor que el último elemento."
// FinSi
// SAL: presentar el mensaje

//!Pseudocodigo
// Algoritmo CompararElementos
// Definir a, b, c, d, e como entero
// Definir p, u como entero
// Escribir "Primer elemento:"
// Leer a
// Escribir "Segundo elemento:"
// Leer b
// Escribir "Tercer elemento:"
// Leer c
// Escribir "Cuarto elemento:"
// Leer d
// Escribir "Quinto elemento:"
// Leer e
// P = a
// U = e
// Si P > U Entonces
// Escribir "El primer elemento es mayor que el último elemento."
// Sino
// Escribir "El primer elemento no es mayor que el último elemento."
// FinSi
// FinAlgoritmo

//!JAVA SCRIP

function EJERCICIO19(){
let a = read("Primer elemento:"),
    b = read("Segundo elemento:"),
    c = read("Tercer elemento:"),
    d = read("Cuarto elemento:"),
    e = read("Quinto elemento:"),
    p = a,
    u = e;

if (p > u) {
    write("El primer elemento es mayor que el último elemento.");
} else {
    write("El primer elemento no es mayor que el último elemento.");
}
}
EJERCICIO19()