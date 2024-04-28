const read = require('prompt-sync')();
const write = console.log

//!12.	Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
// analisis del requerimiento
// ENT: VALOR=0(LEER);VALORT=0(CALCULAR)
// PRO:  Escribir "porcentaje de iva"
// Leer valort
// valort = valor * (1 + valort/100)
// Escribir "SU MONTO A PAGAR ES DE:"
// ESCRIBIR valort
// SAL: VALORT

//!Pseudocodigo

// Algoritmo iva
// Definir valor,valort Como Real
// Escribir "ingresa el monto y el porcentaje de iva"
// Escribir "monto"
// Leer valor
// Escribir "porcentaje de iva"
// Leer valort
// valort = valor * (1 + valort/100)
// Escribir "SU MONTO A PAGAR ES DE:"
// ESCRIBIR valort
// FinAlgoritmo

//!JAVA SCRIPT
function EJERCICIO12(){
const valor = read("ingresa el monto y el porcentaje de iva monto: ");
const valort = read("ingresa el monto y el porcentaje de iva  porcentaje de iva: ");

const montoConIva = valor * (1 + valort/100);
write("SU MONTO A PAGAR ES DE: " + montoConIva);
}
EJERCICIO12()