/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

// chiedere all'utente di scegliere tra pari e dispari
const puntataUser = prompt("Scegli tra pari e dispari")
console.log("puntata user: ", puntataUser);

// chiedere all'utente un numero da 1 a 5
const numeroUser = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("numero user: ", numeroUser);

let result;

// richiamo le funzioni
let numPc = numeroCasualePc();
console.log("numero pc: ", numPc);

sommaNumeriUserPc();
console.log(sommaNumeriUserPc());



// FUNZIONI
// Creare una funzione che generi un numero random da 1 a 5 per il computer
function numeroCasualePc() {
    let numPc = Math.floor(Math.random() * 5 + 1);
    return numPc;
}


// Creare una funzione che sommi i due numeri e stabilire se questa è pari o dispari, quindi dichiarare la vincita
function sommaNumeriUserPc(){
    let sommaNumeri = numeroUser + numPc;

    if(sommaNumeri % 2 === 0){
        result = "pari";
    } else{
        result = "dispari";
    }

    if(result === puntataUser){
        return "hai vinto";
    }else{
        return "hai perso"
    }
}
