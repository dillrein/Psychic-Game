// Variables
//--------------------------------------------
var letters =["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterChosen = "";
var gameboard = [];
var wrongletters = [];

var winsNum = 0;
var lossesNum = 0;
var attemptsLeft = 9;

//Functions
//----------------------------------------------
function start () {
    //rng to pick a letter based off number of letter array
    letterChosen = letters[Math.floor(Math.random() * letters.length)];
    
    //game board reset
    attemptsLeft = 9;
    wrongletters =[];

    //insert game score.. wins loses and letters guessed.
    document.getElementById("wrongGuess").innerHTML = wrongletters;

    document.getElementById("wins").innerHTML = winsNum;
    document.getElementById("loses").innerHTML = lossesNum;
    document.getElementById("attempts").innerHTML = attemptsLeft;

    
    console.log(letterChosen);   
}

function compareLetters(letter){
    if( letter === letterChosen){
        wins++;
        alert("Correct Guess!");

        document.getElementById("wins").innerHTML = winsNum;

        start();

    }else if (letter !== letterChosen){
        attemptsLeft--;
                
        document.getElementById("attempts").innerHTML = attemptsLeft ;

    }

    console.log(wrongletters)

}

    



//Main Process
//----------------------------------------------
start();


//user inputs key
document.onkeyup=function(event){
    var userInput = String.fromCharCode(event.keyCode).toLowerCase();
    compareLetter(userInput);
    
    
    
    console.log(userInput);

}
