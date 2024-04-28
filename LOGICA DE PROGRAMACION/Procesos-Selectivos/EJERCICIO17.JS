const read = require('prompt-sync')();
const write = console.log
//! 17.	La asociación de vinicultores tiene como política fijar un precio inicial al kilo de banano, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por el banano que entrega en un embarque, considerando lo siguiente:
//!Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2.
//!Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2. Realice un algoritmo para determinar la ganancia obtenida.
//* analisis del requerimiento
// ENT: tipo=""(LEER), tamaño=00(LEER)
// PRO:  Escribir "INGRESA EL TIPO DEL BANANO (A O B)"
// Leer TIPO 
// Escribir "INGRESA EL TAMAÑO DEL BANANO (1 O 2)"
// LEER TAMAÑO
// Escribir "INGRESA EL PRECIO "
// Leer Pinicial
// SI TIPO = "A" Entonces
//     Pfinal = Pinicial + 2
// SINO 
//     SI TIPO = "B" Entonces
//         Pfinal = Pinicial + 3
//     FinSi
// FinSi
// SI TAMAÑO = "1" Entonces
//     PFINAL = Pinicial - 3
// Sino 
//     SI tamaño = "2" Entonces
//         PFINAL = Pinicial - 5
//     FinSi
// Escribir "PRECIO FINAL DEL BANANO ES:"
// ESCRIBIR PFINAL "$"
// SAL: PFINAL

//!PSEUDOCODIGO
// Algoritmo babano
// Definir tipo, tamaño Como Caracter
// Definir Pinicial, Pfinal Como Real
// Escribir "INGRESA EL TIPO DEL BANANO (A O B)"
// Leer TIPO 
// Escribir "INGRESA EL TAMAÑO DEL BANANO (1 O 2)"
// LEER TAMAÑO
// Escribir "INGRESA EL PRECIO "
// Leer Pinicial
// SI TIPO = "A" Entonces
//     Pfinal = Pinicial + 2
// SINO 
//     SI TIPO = "B" Entonces
//         Pfinal = Pinicial + 3
//     FinSi
// FinSi
// SI TAMAÑO = "1" Entonces
//     PFINAL = Pinicial - 3
// Sino 
//     SI tamaño = "2" Entonces
//         PFINAL = Pinicial - 5
//     FinSi
// Escribir "PRECIO FINAL DEL BANANO ES:"
// ESCRIBIR PFINAL "$"
// FinAlgoritmo

//!JAVA SCRIPT

function EJERCICIO17(){
   
        let tipo = read("INGRESA EL TIPO DEL BANANO (A O B)"),
        tamano = read("INGRESA EL TAMAÑO DEL BANANO (1 O 2)"),
        pinicial = read("INGRESA EL PRECIO "),
        pfinal;
    
        if (tipo == "A") {
            pfinal = pinicial + 2;
        } else if (tipo == "B") {
            pfinal = pinicial + 3;
        }
    
        if (tamano == "1") {
            pfinal -= 3;
        } else if (tamano == "2") {
            pfinal -= 5;
        }
    
        write("PRECIO FINAL DEL BANANO ES: $" + pfinal);
    }
EJERCICIO17()
