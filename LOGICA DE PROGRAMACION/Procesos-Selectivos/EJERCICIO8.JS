const read = require('prompt-sync')();
const write = console.log

//! 8.	Pedir al usuario un número y mostrar si es múltiplo de 3
// analisis del requerimiento
// ENT:numero=0(leer),reciduo=0(calcular)
// PRO: recidio = numero % 3
//      si reciduo==0 entonces
//         escribir "El numero es multiplo 3"
//      sino
//         escribir "El numero no es multiplo 3"
//      finsi
//      escribir "gracias por su visita..."
// SAL: mostrar el mensaje

// !Algoritmo
// Algoritmo mutiplo3
//   declarar numero = 0, reciduo = 0
//   escribir "Ingrese numero"
//   leer numero
//   recidio = numero % 3
//   si reciduo==0 entonces
//     escribir "El numero es multiplo 3"
//   sino
//     escribir "El numero no es multiplo 3"
//   finsi
//   escribir "gracias por su visita..."
// finAlgoritimo

//! JAVA SCRIPT

function Ejercicio8(){
  let numero = 0, reciduo = 0
  numero = read("Ingrese numero: ")
  numero = parseInt(numero)
  reciduo = numero % 3
  if (reciduo == 0) {
    write(numero," es multiplo 32")
  }  
  else{
    write(numero," no es multiplo 3")
  }
  write("gracias por su visita...")
}
Ejercicio8()