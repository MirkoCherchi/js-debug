/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// Esercizio 1: In questo esercizio stiamo usando un ciclo for, stiamo dicendo che i è uguale a 0 e che ogni volta che i è maggiore di 0 lo implementiamo di 1. Ma in questo caso il codice non è corretto perchè i già in parteza non è maggiore di 5, perciò il ciclo non avverrà mai. Per avviare il ciclo for possiamo scriverlo in questo modo:

for (let i = 0; i < 5; i++) {
    console.log(i);
}


 // ESERCIZIO 2
//  function addIfEven(num) {
//      if (num % 2 = 0) {
//          return num + 5;
//      }
//      return num;
//  }

 // Esercizio 2: In questo codice stiamo creando una funzione con una condizione all'interno, ma in questa condizione c'è un errore perchè stiamo usando = che è un operatore di assegnazione, in questo caso a noi serve === che è un operatore di uguaglianza. in questo modo diciamo se num è divisibile per 2 con resto avremo num + 5, altrimenti avremo solo num

  function addIfEven(num) {
     if (num % 2 === 0) {
         return num + 5;
     }
     return num;
 }


// ESERCIZIO 3
//  function loopToFive() {
//      for (let i = 0, i < 5, i++) {
//      }
//  }

 // Esercizio 3: In questo codice abbiamo una funzione con all'interno un ciclo for, il ciclo fro in questo caso ci dice che i è uguale a 0, e ogni volta che i è minore di 5 incrementiamo 1 di 1, il ciclo è corretto nella formulazione ma ha un errore di punteggiature, dobbiamo usare i ';' nel ciclo for invece che la ','.

 function loopToFive() {
     for (let i = 0; i < 5; i++) {
     }
 }


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
//  function displayEvenNumbers() {
//      let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//      let evenNumbers = [];
//      for (let i = 0; i < numbers.length - 1; i++;) {
//          if (numbers % 2 = 0); {
//              evenNumbers.push(i);
//          }
//          return evenNumbers;
//      }
//  }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

 // Esercizio 3: In questo codice abbiamo 7 errori,
 // Errore 1: Non va il ; dopo i++
 // Errore 2: number % 2 === 0
 // Erorre 3: Il return dobbiamo spostarlo fuori dal ciclo for
 // Errore 4: Dopo if e la condizione non va ';'
 // Erorre 5: Quando usiamo il push dobbiamo pushare numbers nella posizione [i]
 // Erorre 6: Dobbiamo aggiungere il console log alla fine per visualizzare il risultato in console
 // Errore 7: Togliamo il - 1 dalla condizione del ciclo for 



 function displayEvenNumbers() {
     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
     let evenNumbers = [];
     for (let i = 0; i < numbers.length; i++) {
         if (numbers[i] % 2 === 0) {
             evenNumbers.push(numbers[i]);
         }
         
     }
     return evenNumbers;
 }
 console.log(displayEvenNumbers()); // dovrebbe restituire [2,4,6,8]

 