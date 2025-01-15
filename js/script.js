// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// creare 5 numeri random da 1 a 50
let numeriRandom = [];

for (let i = 0; i < 5; i++) {
    let numero = Math.floor(Math.random() * 50) + 1;
    if (numeriRandom.includes(numero)) {
        i--;
    }
    else {
        numeriRandom.push(numero);
}

}

console.log(numeriRandom);
// mostrare a schermo i 5 numeri random
// crea dei li all'interno dell'ul con numeriRandom e mostrala a schermo

let numeriASchermmo = document.getElementById('numbers-list');
for (let i = 0; i < numeriRandom.length; i++) {
    numeriASchermmo.innerHTML += "<li>" + numeriRandom[i] + "</li>";
}


// far sparire i numeri dopo 30 secondi


const count = document.getElementById("countdown");
let timer = 10;

// mostra i numeriASchermmo per 30 secondi
const interBologna = setInterval(function() {
    if (timer === 0) {
        clearInterval(interBologna);
        numeriASchermmo.innerHTML = '';
        document.getElementById('answers-form').classList.remove('d-none');
    }
    count.innerHTML = timer;
    timer--;
},1000);

// far inserire i numeri all'utente
// creare un form con 5 input
// creare un bottone per inviare i numeri
// creare un array con i numeri inseriti dall'utente
// confrontare i numeri inseriti con i numeri random
// mostrare quanti e quali numeri sono stati indovinati

const num1 = document.getElementById('numero1');
const num2 = document.getElementById('numero2');
const num3 = document.getElementById('numero3');
const num4 = document.getElementById('numero4');
const num5 = document.getElementById('numero5');





