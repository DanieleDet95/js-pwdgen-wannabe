// Richiesta nome
var nome = prompt('Inserisci nome:');
console.log(nome);

// Richiesta cognome
var cognome = prompt('Inserisci cognome:');
console.log(cognome);

// Richiesta colore preferito
var colore = prompt('Inserisci colore preferito:');
console.log(colore);

// Creazione password
var password = nome + cognome + colore + '19';
var messaggio ='La tua password é: '
document.getElementById('password').innerHTML = messaggio + password;
