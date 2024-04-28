//5.	Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: V3=""(leer),VF=""(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso: VF=V3+1
// La informacion de las variables procesadas 
// Salida:VF
//Pseudocodigo
// Algoritmo PROXIMO AÑO
// DEFINIR V3,VF 
// ESCRIBIR ""
// ESCRBIR "INGRESA TU EDAD"
// Leer v3
// VF=V3+1
// Escribir vf
// FinalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
// JAVA SCRIPT
function ProximoAño() {
    let v3 = read("Ingresa tu edad: ");
    v3 = parseInt(v3); 
    
    if (!isNaN(v3)) {
        let vf = v3 + 1;
        write("Tendrás " + vf + " años en el próximo año.");
    } else {
        write("Por favor, ingresa una edad válida.");
    }
}

ProximoAño();