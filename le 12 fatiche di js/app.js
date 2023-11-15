const input = document.querySelector('input');
//Dichiarazione di un array sbagliata
let array = {};

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == '') return;

    array.push(input.value);

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.text = input.value;
    //Modificata l'assegnazione della classe e del valore
    let listaNomi = document.querySelector('ul');
    listaNomi += li;

    let counter = '';
    //Passare tutto l'array
    let item    = array;
    const max   = 1;
    const elems = [];

    //Assegnare la lunghezza dell'array
    for (let i = 0; i < array.length; i++) {
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; i++) {
            if (array[i] == array[j]) {
                counter++;
                if (max < counter)
                max  = counter;
                item = array[i];
            }
        }

        counter = 0;
    }

    //Valore passato per l'id e non per il nome della classe
    const alert = document.getElementById("alert");

    alert.classList.remove("d-none");
    alert.classList.add("d-flex");

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log("${item} trovato ${max} volte");
});