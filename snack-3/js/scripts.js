// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
var nomi = ["Andrea", "Francesco", "Mario", "Pierpaolo", "Gianfranco", "Luca", "Michele"];
var cognomi = ["Fiorentino", "Rossi", "Rizzo", "De Lorenzis", "Capasa", "Biondi", "Neri"];
var invitati =  [];
for(var i = 0; i <= 3; i++){
    var indiceNomi = Math.floor(Math.random() * nomi.length);
    var indiceCognomi = Math.floor(Math.random() * cognomi.length);
    var nomeCompleto = nomi[indiceNomi] + " " + cognomi[indiceCognomi];
    invitati.push(nomeCompleto);
}   
console.log(invitati);
