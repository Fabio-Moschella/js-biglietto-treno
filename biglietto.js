// Ottengo dall'utente la sua età e li converto in intero
const etautente = parseInt(prompt("Quanti anni hai?"));

// Ottengo dall'utente i km che deve percorrere e li converto in intero
const kmPercorsi = parseInt(prompt("Quanti chilometri devi percorrere?"));

const prezzoKm = kmPercorsi * 0.21;
const scontoDel20 = (prezzoKm * 20) / 100;
const scontoDel40 = (prezzoKm * 40) / 100;
const prezzoUnder18 = prezzoKm - scontoDel20;
const prezzoOver65 = prezzoKm - scontoDel40;
let outputText = "Non puoi usare lettere, solo numeri";

console.log(etautente, "etautente");
console.log(prezzoKm, "prezzokm");
console.log(prezzoUnder18, "prezzounder18");
console.log(prezzoOver65, "prezzoover65");

// Se l'utente è < 18
if (etautente < 18) {
  //   Stampa il prezzo per gli under18
  console.log(prezzoUnder18, "prezzounder18");
  // Se invece l'utente è > 65
} else if (etautente > 65) {
  //   Stampa il prezzo per gli over65
  console.log(prezzoOver65, "prezzoover65");
  // Altrimenti
} else {
  //   Stampa il prezzo standard
  console.log(prezzoKm, "prezzostandard");
}

// ULTERIORE SCONTO IN CASO DI UNA DISTANZA SUPERIORE AI 10 KM..

// se i km sono piu di 10 e l eta e minore di 18
if (kmPercorsi > 10 && etautente < 18) {
  // stampa il prezzo con ulteriore sconto del 10%
  console.log((prezzoUnder18 * 10) / 100);
  // se invece hanno piu di 65 anni a fanno piu di 10km
} else if (kmPercorsi > 10 && etautente > 65) {
  //stampa il prezzo con ulteriore sconto del 20%
  console.log((prezzoOver65 * 20) / 100);
  // se ivece hanno un eta compresa tra i 18 e i 65
} else if (kmPercorsi > 10 && etautente) {
  // stampa il prezzo con uno sconto del 5%
  console.log((prezzoKm * 5) / 100);
}

// Validita controllo input ETA e KM..
if (isNaN(etautente) && isNaN(kmPercorsi)) {
  alert(outputText);
}
