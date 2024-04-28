//7.	Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.
//// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: Valor1=0.0(leer), valorT=0.0(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso: valorT=valor1
// La informacion de las variables procesadas 
// Salida:ValorT

//Pseudocodigo
// Algoritmo GRADOS
// definir Valor1,ValorT
// escribir "Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit."
// escribir "Ingresa los grados celcius (C°)"
// leer valor1
// valorT=valor1*1,8+32
// escribir "Grados fahrenheit (F°)"
// escribir vtotal
// FinalAlgoritmo

const read = require('prompt-sync')();
const write = console.log

//JAVA SCRIPT
 
function grados() {
    let valor1 = 0.0; valorT = 0.0;
    write("Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.");
    valor1 = read("Ingresa los grados Celsius (C°)");
    valor1 = parseFloat(valor1);
    if (!isNaN(valor1)) {
        valorT = valor1 * 1.8 + 32;
        write("Grados Fahrenheit (F°): " + valorT );
    } 
    else {
        write("Por favor, ingresa una temperatura válida en grados Celsius.");
    }
}

    grados();
