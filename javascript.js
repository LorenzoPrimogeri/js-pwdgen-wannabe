const Nome = prompt("Ciao come ti chiami ?");
const Cognome = prompt("Ed il tuo cognome?");
const ColorePreferito = prompt("colore preferito??");
const Password = Nome + Cognome + ColorePreferito + '21'

console.log('ti chiami ' + Nome)
console.log('Il tuo cognome è ' + Cognome)
console.log('ed il tuo colore preferito è ' + ColorePreferito)

document.getElementById('Nome').innerHTML = 'Il tuo nome è: <span>' + Nome + '</span>';
document.getElementById('Cognome').innerHTML = 'Il tuo cognome è: <span>' + Cognome + '</span>';
document.getElementById('ColorePreferito').innerHTML = 'Il tuo colore preferito è: <span>' + ColorePreferito + '</span>';
document.getElementById('Password').innerHTML = 'La tua password è: <span>' + Password + '</span>';