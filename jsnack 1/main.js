/*
snack 1:
Crea un array vuoto e chiedi all’utente un numero da inserire 
nell’array. Continua a chiedere i numeri all’utente e a inserirli 
nell’array fino a quando la somma degli elementi è minore di 50*/

let array = []
let N = 0
let sum = 0

while(sum < 50){
    N = prompt("Inserisci un numero e premi invio")
    array.push(N)
    sum += +N;
    console.log(array)
    console.log('somma parziale: ' + sum)
}

console.log(array)
console.log('somma finale: ' + sum)


