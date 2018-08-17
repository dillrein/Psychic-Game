// Variables
//--------------------------------------------
var letters =["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var gameboard = [];
var wrongletters = [];
var letterChosen = [];

var winsNum = [];
var lossesNum = [];
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

    //checking if code works
    console.log(letterChosen);
    console.log(winsNum);
    console.log(lossesNum);
    console.log(attemptsLeft);   
}
function compareLetters(userInput){

    //if userguess is random letter
    if (userInput == letterChosen){
        winsNum++;
        alert("Correct Guess!");

        //update win score
        document.getElementById("wins").innerHTML = winsNum;

        
        console.log(winsNum +" wins")
        start();
    }
    //if userguess is wrong
    else if (userInput !== letterChosen){
        (--attemptsLeft);
        wrongletters = event.key.toLowerCase;  
        
        //display wrong letter
        document.getElementById("attempts").innerHTML = attemptsLeft ;

                
        console.log(wrongletters +" wrong letters")
        start();
    }
    //if user runs out of attempts
    else if (attemptsLeft === 0){
        lossesNum++;
        alert("You lost!")

        //up lose score
        document.getElementById("loses").innerHTML = lossesNum;

        

        console.log(lossesNum +" loses")
    }
}
//Main Process
//----------------------------------------------
start();

//user input
document.onkeyup=function(event){
    var userInput = event.key.toLowerCase();
    console.log(userInput);
    
    compareLetters();
}
    
  

