const read = require('prompt-sync')();
const write = console.log

//!14.	Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos.// analisis del requerimiento
// ENT: nota=0(leer)
// PRO:  Escribir "NOTA DE EL EXAMEN"
// LEER nota
// SI nota > 60 Entonces
//     Escribir "EL ESTUDIANTE APROBO"
// SiNo
//     ESCRIBIR "EL ESTUDIANTE REPROBO"
// FinSi
// SAL: mostrar el mensaje

//! Pseudocodigo

// Algoritmo EXAMEN
// DEFINIR nota Como Entero
// Escribir "NOTA DE EL EXAMEN"
// LEER nota
// SI nota > 60 Entonces
//     Escribir "EL ESTUDIANTE APROBO"
// SiNo
//     ESCRIBIR "EL ESTUDIANTE REPROBO"
// FinSi
// FinAlgoritmo

//! JAVA script

function ejercicio14(){
let nota 
nota=read ("INGRESA LA NOTA: ")
if (nota > 60) {
    write("EL ESTUDIANTE APROBO")
} else {
    write("EL ESTUDIANTE REPROBO")
}
}
ejercicio14()