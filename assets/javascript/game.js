// Variables
//--------------------------------------------
var letters =["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterChosen = "";
var gameboard = [];
var wrongletters = [];

var wins = 0;
var losses = 0;
var attemptsleft = 0;

//Functions
//----------------------------------------------
function start () {
    //rng to pick a letter based off number of letter array
    letterChosen = letters[Math.floor(Math.random() * letters.length)];

    //user input
    document.onkeypress=function(event){
        var userInput = event.key.toLowerCase();

        console.log(userInput);


    }
    
    
    
    
    
    
    
    
    
    
    console.log(letterChosen);
   
}


//Main Process
//----------------------------------------------
start();