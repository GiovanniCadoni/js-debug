/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}


// ESERCIZIO 2
function addIfEven(num) {
    //Sbagliato il simbolo
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}


// ESERCIZIO 3
function loopToFive() {
    //Sbagliati i punti e virgola
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    //Errori di scrittura vari e assegnazioni sbagliate
    for (let i = 0; i <= numbers.length - 1; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
const result = displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
console.log(result);