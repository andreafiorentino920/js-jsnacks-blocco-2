// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo
var numero = (prompt("Inserisci un numero"));
if (numero%2 ==0){
    console.log("Il numero inserito è", numero);
}else{
    var numero = (prompt("L'ultimo numero inserito è dispari, inserisci un altro numero"));
    console.log("L'ultimo numero inserito è", numero);
}
