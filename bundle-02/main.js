/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

//Esercizio 1: Questo codice ha una funzione con una logica corretta, soltanto che andando ad aggiungere il console log a checkAge(); avremo un errore perchè stiamo cercando di assegnare un valore a una costante per poi modificarlo dentro l'if, per questo dobbiamo correggere il codice dichiarando message con let, facendo il console lo però riceveremo un undefined, perchè la nostra funziona non ha un return, in questo caso dovremo aggiungere un return di message.

function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    return message;
}
console.log(checkAge());

 // ESERCIZIO 2
//  function printColorsNumber() {
//      const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//      console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
//  }
//  printColorsNumber();

 //Esercizio 2: Questo codice stiamo svolgendo una funzione dichiarando un array di colori, nel console lo stampiano la lunghezza dei colori, il codice era corretto nella logica ma ci stava un errore di scrittura su colors.lenght che in realtà si scrive colors.length

  function printColorsNumber() {
     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
     console.log(`Nella mia palette ci sono ${colors.length} colori!`);
 }
 printColorsNumber();


 // ESERCIZIO 3
//  function addNumbers() {
//      const userNumber = prompt('Inserisci un numero');
//      const total = userNumber + 12;

//      console.log(`Il risultato finale è ${total}`);
//  }
//  addNumbers();

 //Esercizio 3: Codice che prenseta una funzione dove questa funzione chiede un numero tramite prompt e a questo numero andremo a sommare 12. Usando un prompt il prompt ci restituirà sempre una stringa, quindi dovremo trasformare il prompt in un numero, ci sono più modi per farlo, si può aggiungere un + davanti a userNumber nell'addizione, oppure mettere un Number prima del prompt

 function addNumbers() {
     const userNumber = prompt('Inserisci un numero');
     const total = +userNumber + 12;
     console.log(userNumber);

     console.log(`Il risultato finale è ${total}`);
 }
 addNumbers();


 // ESERCIZIO 4
//  function checkAccess() {
//      const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//      const userEmail = prompt('Inserisci il tuo indirizzo email');

//      let grantAccess = 'false';

//      if (addresses.includes(userEmail)) {
//          grantAccess = 'true';
//      }
//      if (grantAccess === true) {
//          console.log('Accesso consentito!');
//      } else {
//          console.log('Accesso negato!');
//      }
//  }
//  checkAccess();

//Esercizio 4: Questo codice presenta una funzione con all'interno un array di email, tramite un prompt chiediamo l'email all'utente, creiamo una variabile con un valore booleano che si scrive senza virgolette, non come in questo codice che è scritto tra virgolette e risulta come una stringa. Diciamo nella nostra condizione che se l'email chiesta all'utente è presente nell'array di email il valore grent access diventera true, quindi se grant access è uguale a true in console stamperemo accesso consentito, altrimento nella console avremo accesso negato.


 function checkAccess() {
     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
     const userEmail = prompt('Inserisci il tuo indirizzo email');

     let grantAccess = false;

     if (addresses.includes(userEmail)) {
         grantAccess = true;
     }
     if (grantAccess === true) {
         console.log('Accesso consentito!');
     } else {
         console.log('Accesso negato!');
     }
 }
 checkAccess();


// // ESERCIZIO 5 (suggerimento: c'è un solo errore)
//  function checkAccessImproved() {
//      const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//      const userEmail = prompt('Inserisci il tuo indirizzo email');
//      let grantAccess = 'false';

//      for (let i = 0; i < addresses.length; i++) {
//          const email = addresses[i];

//          if (userEmail.length > 5) {

//              if (email === userEmail) {
//                  grantAccess = 'true';

//              }

//          }

//          if (grantAccess) {
//              console.log('Accesso consentito!');
//          } else {
//              console.log('Accesso negato!');
//          }
//      }
//      checkAccessImproved();


//Esercizio 5: In questo codice stiamo creando una funzione dove ci sono in realtà più di un errore, manca la chiusura della graffa della funzione, chiudiamo il ciclo for prima della condizione in modo da non stamparlo più volte.

function checkAccessImproved() {
     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

     const userEmail = prompt('Inserisci il tuo indirizzo email');
     let grantAccess = false;

     for (let i = 0; i < addresses.length; i++) {
         const email = addresses[i];

         if (userEmail.length > 5) {

             if (email === userEmail) {
                 grantAccess = true;

             }

         }
     }

         if (grantAccess) {
             console.log('Accesso consentito!');
         } else {
             console.log('Accesso negato!');
         
     }}
     checkAccessImproved();
























