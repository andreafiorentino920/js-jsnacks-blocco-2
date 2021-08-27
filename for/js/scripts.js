// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

var numeri = [];
var numero;
var somma = 0;
for (var i = 0; i < 5; i++){
    numero = parseInt(prompt('Inserisci un numero')); 
    numeri.push(numero);
    console.log(numero);
    somma += numeri[i];
    
}

console.log("La somma è", somma);