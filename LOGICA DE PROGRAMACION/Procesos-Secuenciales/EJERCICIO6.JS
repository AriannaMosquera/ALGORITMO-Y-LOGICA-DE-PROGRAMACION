//6.	Pedir al usuario dos números y mostrar el resultado de multiplicarlos.
//// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: v4=""(leer), v5=""(leer), vtotal=""(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso: vtotal=v4+v5
// La informacion de las variables procesadas 
// Salida:Vtotal

//Pseudocodigo
// Algoritmo multiplica
// definir v4,v5,vtotal
// escribir "Pedir al usuario dos números y mostrar el resultado de multiplicarlos."
// escribir "ingrese el primer numero"
// leer v4
// escribir "ingrese el segundo numero"
// leer v5
// vtotal=v4*v5
// escribir "el resultado de la multiplicacion es:"
// escribir vtotal
// FinalAlgoritmo

const read = require('prompt-sync')();
const write = console.log

// JAVA SCRIPT

function multiplica() {
    let v4=0; v5=0; vtotal=0
    write ("Pedir al usuario dos números y mostrar el resultado de multiplicarlos.");
    v4 = read("Por favor, ingrese el primer número:");
    v5 = read("Por favor, ingrese el segundo número:");
    v4 = parseInt(v4);
    v5 = parseInt(v5);
    if (!isNaN(v4) && !isNaN(v5)){
        vtotal = v4 * v5
        write("El resultado es: " + vtotal);
        }    
        else{
            write("Por favor, ingrese números válidos."); 
        }
    }

multiplica();
