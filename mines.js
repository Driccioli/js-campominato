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

function isInArray(element, array){
    for(i=0; i<array.length -1; i++){
        if(element === array[i]){
            return true;
        }
    }
    return false;
}

var generatedNumbers = [];

// Computer-generated numbers 
for(var k=1; k<=16; k++){
    var generatedNum=getRandomNumber(1,100);
    if(isInArray(generatedNum, generatedNumbers)){
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

for(var z=1; z<=(100-16); z++){
    var input = parseInt(prompt("Inserisci un numero tra 1 e 100."));
    while(input < 1 || input > 100){
        input = parseInt(prompt("Numero non valido. Inserisci un numero tra 1 e 100."));
    }
    while(isInArray(input, insertedNumbers)){
        input= parseInt(prompt("Numero già inserito. Inserisci un altro numero tra 1 e 100."));
    }
    if(isInArray(input,generatedNumbers)){
        output.innerHTML += "GAME OVER <br> Score: " + score;
        break;
    }   else{
        score++;
    }

    if(z == (100-16)){
        output.innerHTML += "YOU WON! <br> Score: " + score;
    }
}