const input = document.querySelector('input');
const array = []; //Sbagliata dichiarazione

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value == '') return; //sbagliata condizione

    array.push(input.value); //sbagliata operazione

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = input.value; //sbagliata grammatica
    document.querySelector('ul').append(li); //sbagliata funzione

    let counter = 0; //sbagliato valore
    let item    = array[0];
    let max   = 1; //sbagliato tipo di valore
    const elems = [];

    for (let i = 0; i < array; i++) {
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; j++) { //incrementa la j
            if (array[i] == array[j]) {
                counter++;
                if (max < counter) { //sbagliata grammatica
                max  = counter;
                item = array[i];
                }
            }
        }

        counter = 0;
    }

    const alert = document.getElementsByClassName('alert')[0];

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log(`${item} trovato ${max} volte`); //sbagliata grammatica
});