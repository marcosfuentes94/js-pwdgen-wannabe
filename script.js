// NOME UTENTE
let nome = prompt("Inserisci il tuo nome:");

// COGNOME UTENTE
let cognome = prompt("Inserisci il tuo cognome:");

// COLORE PREFERITO 
let colorePreferito = prompt("Inserisci il tuo colore preferito:");

// GENERA PASSWORD
let password = nome + cognome + colorePreferito + "101";

// SCRIVI LA PASSWORD SULLA PAGINA HTML
document.write(password);
