// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari
var numeri = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var somma = 0;
for (var i=0; i <= numeri.length; i= i+2) {
    somma = somma + numeri[i];
}
console.log("Il risultato della somma dei numeri in posizione dispari dell'array è ", somma);
