const read = require('prompt-sync')();
const write = console.log
//!18.	“Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
//!El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100 pero menor o igual a 200, el costo es de $15.00.  Para más de 200 personas el costo por platillo es de $10.00.
//!Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar un evento, considerando que al total hay que agregarle el 15% del iva
// *analisis del requerimiento
// ENT: numpersonas=00(leer)
// PRO: Si numPersonas <= 100 Entonces
// costoPlatillo = 20.00
// Sino Si numPersonas > 100 Y numPersonas <= 200 Entonces
// costoPlatillo = 15.00
// Sino
// costoPlatillo = 10.00
// FinSi
// presupuestoSinIVA = numPersonas * costoPlatillo
// presupuestoConIVA = presupuestoSinIVA * 1.15
// Escribir "El presupuesto total con IVA para", numPersonas, "personas es:", presupuestoConIVA
// SAL: presupuestoConIva


//!Pseudocodigo

// Algoritmo PresupuestoBanquete
// Escribir "Ingrese el número de personas:"
// Leer numPersonas
// Si numPersonas <= 100 Entonces
// costoPlatillo = 20.00
// Sino Si numPersonas > 100 Y numPersonas <= 200 Entonces
// costoPlatillo = 15.00
// Sino
// costoPlatillo = 10.00
// FinSi
// presupuestoSinIVA = numPersonas * costoPlatillo
// presupuestoConIVA = presupuestoSinIVA * 1.15
// Escribir "El presupuesto total con IVA para", numPersonas, "personas es:", presupuestoConIVA
// FinAlgoritmo

//!JAVA SCRPT

function EJERCICIO18(){

let numPersonas 
let costoPlatillo, presupuestoSinIVA, presupuestoConIVA;
numPersonas = parseInt(read("Ingrese el número de personas:"));

if (numPersonas <= 100) {
    costoPlatillo = 20.00;
} else if (numPersonas > 100 && numPersonas <= 200) {
    costoPlatillo = 15.00;
} else {
    costoPlatillo = 10.00;
}

presupuestoSinIVA = numPersonas % costoPlatillo;
presupuestoConIVA = presupuestoSinIVA % 1.15;

write("El presupuesto total con IVA para", numPersonas, "personas es:", presupuestoConIVA);
}
EJERCICIO18()