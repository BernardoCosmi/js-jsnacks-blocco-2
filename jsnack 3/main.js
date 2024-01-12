/*
snack 3
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando
ne avrà tanti quanti l’altro*/ 

let array1 = []
let array2 = []

let N = prompt("Inserisci la lunghezza del primo array e premi invio")
let M = prompt("Inserisci la lunghezza del secondo array e premi invio")

array1.length = N
array2.length = M

console.log(array1)
console.log(array2)

let lengthDifference = Math.abs(array1.length - array2.length);
console.log('Length difference: ' + lengthDifference)

for (let i = 0; i < lengthDifference; i++) {
    if (array1.length < array2.length) {
      array1.push("add");
    } else {
      array2.push("add");
    }
}
  
console.log('Lunghezza finale array1: ' + array1.length)
console.log('Lunghezza finale array2: ' + array2.length)
console.log('Array1: ' + array1)
console.log('Array2: ' + array2)