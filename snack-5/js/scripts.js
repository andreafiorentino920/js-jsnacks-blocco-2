// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.
var array1 = [13,1,5,9,6,7,22,15];
var array2 =[1,9,7,3];
console.log("L'array numero 1 ha in totale al suo interno ", array1.length, " numeri,", " che sono rispettivamente:", array1 );
console.log("L'array numero 2 ha in totale al suo interno ", array2.length, " numeri,", " che sono rispettivamente:", array2 );
while (array1.length > array2.length){
    array2.push(Math.floor(Math.random() *100));
}
console.log("I due array ora hanno lo stesso numero di elementi.");
console.log("L'array numero 1 ora è composto da:", array1 );
console.log("L'array numero 2 ora è composto da:", array2 );

