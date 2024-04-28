const read = require('prompt-sync')();
const write = console.log
//!16.	Pedir al usuario su sueldo mensual y determinar su sueldo anual. Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual.
// ENT: sueldoMensual=0(leer), sueldoAnual=0(leer), excedente=0(calcular), impuesto=0(calcular), sueldoNetoAnual=0(calcular)
// PRO: sueldoAnual <- sueldoMensual * 12
//     Si sueldoAnual > 30000 Entonces
//         excedente <- sueldoAnual - 30000
//         impuesto <- excedente * 0.15
//         sueldoNetoAnual <- sueldoAnual - impuesto
//     Sino
//         sueldoNetoAnual <- sueldoAnual
// SAL: sueldoanual

//!PSEUDOCODIGO

// Algoritmo CalcularSueldoAnual
//     Definir sueldoMensual, sueldoAnual, excedente, impuesto, sueldoNetoAnual Como Real
//     Escribir "Ingrese su sueldo mensual: "
//     Leer sueldoMensual
//     sueldoAnual <- sueldoMensual * 12
//     Si sueldoAnual > 30000 Entonces
//         excedente <- sueldoAnual - 30000
//         impuesto <- excedente * 0.15
//         sueldoNetoAnual <- sueldoAnual - impuesto
//     Sino
//         sueldoNetoAnual <- sueldoAnual
// FinAlgoritmo

//! JAVA SCRIP

function EJERCICIO16() {
    let sueldoMensual = parseFloat(read("Ingrese su sueldo mensual:"));
    let sueldoAnual = sueldoMensual * 12;
    let sueldoNetoAnual;

    if (sueldoAnual > 30000) {
        let excedente = sueldoAnual - 30000;
        let impuesto = excedente * 0.15;
        sueldoNetoAnual = sueldoAnual - impuesto;
    } else {
        sueldoNetoAnual = sueldoAnual;
    }

    write("Su sueldo neto anual es:", sueldoNetoAnual);
}

EJERCICIO16();
