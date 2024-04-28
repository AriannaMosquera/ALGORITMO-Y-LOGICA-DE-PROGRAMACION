const read = require('prompt-sync')();
const write = console.log

// !9.	Solicitar al usuario un número y mostrar si es divisible por 2.
// analisis del requerimiento
// ENT:numero=0(leer),reciduo=0(calcular)
// PRO: recidio = numero % 2
//      si reciduo==0 entonces
//         escribir "El numero es divisible para 2"
//      sino
//         escribir "El numero no es divisible para 2"
//      finsi
//      escribir "gracias por su visita..."
// SAL: mostrar el mensaje
// !Algoritmo
// Algoritmo divisible
//   declarar numero = 0, reciduo = 0
//   escribir "Ingrese numero"
//   leer numero
//   recidio = numero % 2
//   si reciduo==0 entonces
//     escribir "El numero es divisible para 2"
//   sino
//     escribir "El numero no es divisible para 2"
//   finsi
//   escribir "gracias por su visita..."
// finAlgoritimo
// !lenjuage javascript
function multiplo2(){
  let numero = 0, reciduo = 0
  numero = read("Ingrese numero: ") 
  numero = parseInt(numero)
  reciduo = numero % 2
  if (reciduo == 0) {
    write(numero," es divisble 2")
  }  
  else{
    write(numero," no es divisble 2")
  }
  write("gracias por su visita...")
}
multiplo2()