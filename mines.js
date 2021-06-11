var output = document.getElementById("output");

// Metti gli elementi ottenuti in un array e fai un for/while per rerollare il numero generato se è già uscito
// (per l'input dell'utente chiederli di scegliere un altro numero)

function getRandomNumber(min, max) {
    if(max >= min){
        var randomNumber = Math.floor(Math.random() * (max - min + 1)+min);
        return randomNumber;
    }   else{
        console.log("Il massimo è minore del minimo, scambio i numeri");
        return getRandomNumber(max, min);
    }
    
}

// Funzione rindondante, esiste già .includes()
//
// function isInArray(element, array){
//     for(i=0; i<array.length; i++){
//         if(element === array[i]){
//             return true;
//         }
//     }
//     return false;
// }

var min=1;
var max=100;
var difficoltà=parseInt(prompt("Inserisci un livello di difficoltà da 0 (facile) a 2(difficile)"));
while(difficoltà < 0 || difficoltà > 2){
    var difficoltà=parseInt(prompt("Livello di difficoltà non esistente. <br>Inserisci un livello di difficoltà da 0 (facile) a 2(difficile)"));
}

switch (difficoltà) {
    case 0:
        max = 100;
        break;
    case 1:
        max = 80;
        break;
    case 2:
        max = 50;
        break;    
}

var generatedNumbers = [];

// Computer-generated numbers 
for(var k=1; k<=16; k++){
    var generatedNum=getRandomNumber(min,max);
    // if(isInArray(generatedNum, generatedNumbers)){
        if(generatedNumbers.includes(generatedNum)){
        console.log("NUMBER ALREADY ADDED. REROLLING...")
        k--;
        continue;
    }   else{
        generatedNumbers.push(generatedNum);
        console.log("Generated number "+ k + ":" + generatedNum);
    }

}

// Numbers inserted by the user 
var insertedNumbers = [];
var score= 0;

for(var z=1; z<=(max-16); z++){
    var input = parseInt(prompt("Inserisci un numero tra " + min +" e " + max));
    while(input < min || input > max){
        input = parseInt(prompt("Numero non valido. Inserisci un numero tra " + min +" e " + max));
    }
    // while(isInArray(input, insertedNumbers)){
        while(insertedNumbers.includes(input)){
        input= parseInt(prompt("Numero già inserito. Inserisci un altro numero tra " + min +" e " + max));
    }
    
    
    insertedNumbers.push(input);
    console.log("Current numbers input:" + insertedNumbers);

    // if(isInArray(input,generatedNumbers)){
        if(generatedNumbers.includes(input)){
        output.innerHTML += "GAME OVER <br> Score: " + score;
        break;
    }   else{
        score++;
    }

    if(z == (max-16)){
        output.innerHTML += "YOU WON! <br> Score: " + score;
    }
}