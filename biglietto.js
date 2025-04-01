// Ottengo dall'utente la sua età e li converto in intero
const etautente = parseInt(prompt("Quanti anni hai?"));

// Ottengo dall'utente i km che deve percorrere e li converto in intero
const kmPercorsi = parseInt(prompt("Quanti chilometri devi percorrere?"));

const prezzoKm = kmPercorsi * 0.21;
const scontoDel20 = (prezzoKm * 20) / 100;
const scontoDel40 = (prezzoKm * 40) / 100;
const prezzoUnder18 = prezzoKm - scontoDel20;
const prezzoOver65 = prezzoKm - scontoDel40;

console.log(etautente);
console.log(prezzoKm);
console.log(scontoDel20);

if (etautente < 18)
  if (etautente < 18) {
    // Se l'utente è < 18 e maggiore di 14
    //   Stampa il prezzo per gli under18
    console.log("");
  } else if (etautente > 65) {
    // Se invece l'utente è > 65
    //   Stampa il prezzo per gli over65
    console.log("");
  } else {
    // Altrimenti
    //   Stampa il prezzo standard
    console.log("");
  }
