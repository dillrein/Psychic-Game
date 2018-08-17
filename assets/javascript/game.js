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
//--------------------------------------------------
function start () {
    //rng to pick a letter based off number of letter array
    letterChosen = letters[Math.floor(Math.random() * letters.length)];
    
    //game board reset
    

    //insert game score.. wins loses and letters guessed.
    document.getElementById("wrongGuess").innerHTML = wrongletters;

    document.getElementById("wins").innerHTML = winsNum;
    document.getElementById("loses").innerHTML = lossesNum;
    document.getElementById("attempts").innerHTML = attemptsLeft;

    //checking if code works
    // console.log(letterChosen);
    // console.log(winsNum);
    // console.log(lossesNum);
    // console.log(attemptsLeft);   
}
function compareLetters(userInput){
    // console.log("inside compare letters")
    // console.log(userInput);
    
    // console.log(letterChosen);
       
    if (userInput == letterChosen){
        winsNum++;
        alert("Correct Guess!");

        //update win score
        document.getElementById("wins").innerHTML = winsNum;

        
        // console.log(winsNum +" wins")
        start();
    }
    //if userguess is wrong
    else if (userInput !== letterChosen){
        attemptsLeft--;
        console.log(attemptsLeft)
       
        wrongletters = userInput;  
        console.log(wrongletters +" wrong letters")
        
        //display wrong letter
        document.getElementById("attempts").innerHTML = attemptsLeft;

                
       
        start();
    }

}

//Main Process
//----------------------------------------------
start();

//user input
document.onkeyup=function(event){
    var userInput = event.key.toLowerCase();
    if (attemptsLeft === 0){
        console.log("gameover")
        lossesNum++;

        document.getElementById("loses").innerHTML = lossesNum;
        return false;
    }

    compareLetters(userInput);
}
    
  

