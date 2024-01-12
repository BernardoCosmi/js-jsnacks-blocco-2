/*
snack 4
Inserisci un numero, se è pari stampa il numero, 
se è dispari stampa il numero successivo. */

let N = prompt("Inserisci un numero e premi invio")

for(let i=N; i<=N; i++)
    if(i % 2 === 0){
        console.log('Numero pari: ' + i)
    }else{
        console.log('Numero dispari, il numero successivo è: ' + (+i + 1))
}
