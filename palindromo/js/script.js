/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// chiedere all'utente di inserire una parola
const userWord = prompt("Inserisci una parola");
console.log(userWord);

let wordDivided = userWord.split('');
console.log(wordDivided);

let wordReverse = wordDivided.reverse();
console.log(wordReverse);

let wordReverseResult = wordReverse.join('');
console.log(wordReverseResult);

parolaPalindomaCheck();
console.log(parolaPalindomaCheck());


// Creare una funzione per capire se la parola inserita è palindroma
function parolaPalindomaCheck(){
    if(userWord === wordReverseResult){
        return "è palindroma";
    } else{
        return "non è palindroma";
    } 
}

