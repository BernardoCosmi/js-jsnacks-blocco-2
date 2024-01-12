/*
snack 2
genera un numero casuale tra 1 e 100 e poi chiedi all'utente di 
indovinare il numero. Il programma poi deve far comparire un messaggio
"il numero è troppo alto" oppure "il numero è troppo basso" nel momento 
in cui il numero detto dall'utente non è perfettamente uguale al numero 
estratto in modo casuale*/ 


const numeroCasuale = parseInt(Math.floor(Math.random() * 100) + 1);
const result = document.querySelector('h2')
let N

console.log(numeroCasuale)
N = prompt("Inserisci un numero e premi invio")
console.log(N)

do{
    if(N < numeroCasuale){
        N = prompt("Inserisci un numero maggiore e premi invio")
        console.log(N)
    }else if(N > numeroCasuale){
        N = prompt("Inserisci un numero minore e premi invio")
        console.log(N)
    }
}while(N != numeroCasuale)
console.log('complimenti, hai azzeccato, il numero era: ' + N)

result.innerHTML = 'Complimenti, hai azzeccato, il numero era: ' + N