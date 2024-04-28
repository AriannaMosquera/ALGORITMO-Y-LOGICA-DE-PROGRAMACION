const read = require('prompt-sync')();
const write = console.log

//!13.	Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento.
// analisis del requerimiento
// ENT: precio=0(leer), descuento=0.0(leer), precioFinal=0(calcular)
// PRO: Escribir "Ingrese el precio del producto:"
// Leer precio
// Escribir "Ingrese el porcentaje de descuento aplicado:"
// Leer descuento
// precioFinal = precio - (precio * (descuento / 100))
// Escribir "El precio final luego de aplicar el descuento es:", precioFinal
// SAL: preciofinal

//! Pseudocodigo
// algoritmo EJERCICIO13
//     Definir precio, descuento, precioFinal Como Real
//     Escribir "Ingrese el precio del producto:"
//     Leer precio
//     Escribir "Ingrese el porcentaje de descuento aplicado:"
//     Leer descuento
//     precioFinal = precio - (precio * (descuento / 100))
//     Escribir "El precio final luego de aplicar el descuento es:", precioFinal
// Finalgoritmo

//!JAVA SCRIPT

function EJERCICIO13(){

    let precio = parseFloat(read("Ingrese el precio del producto:")),
    descuento = parseFloat(read("Ingrese el porcentaje de descuento aplicado:")),
    precioFinal = precio - (precio * (descuento / 100));
write("El precio final luego de aplicar el descuento es:", precioFinal);
}
EJERCICIO13()

