// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo
var numero = parseInt(prompt("Inserisci un numero"));
if (numero%2 ==0){
    console.log("Il numero inserito è", numero);
}else{
    console.log("Il numero è", (numero+1));
}
