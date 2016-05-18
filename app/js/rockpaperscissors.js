////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Do you choose rock, paper, or scissors?");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
 

    if ((computerMove==="rock" && playerMove==="paper") || (computerMove==="paper" && playerMove==="scissors") || (computerMove==="scissors" && playerMove==="rock")) {
        winner="Human wins!";
    }
    
    else if ((computerMove==="rock" && playerMove==="scissors")|| (computerMove==="scissors" && playerMove==="paper") || (computerMove==="paper" && playerMove==="rock")) {
        winner="Computer wins!";
    }
    
    else if (playerMove==computerMove) {
        winner="It\'s a tie!";
    }
    
    else { 
        winner="Error";
    }
        return winner;
    
    }


var playToFive = function() {
    console.log('Let\'s play Rock Paper Scissors');
    var playerWins = 0;
    var computerWins = 0;

    while ((playerWins<5) && (computerWins<5)) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    
    console.log('Human played ' + playerMove + ' while computer played ' + computerMove+ '...');
    console.log(winner=getWinner(playerMove, computerMove));

    if (winner ==="Human wins!"){
        playerWins+=1;
    }
    
    else if (winner ==="Computer wins!"){
        computerWins+=1;
    }
    else {
    }
    
    console.log("Human has "+playerWins+" and computer has "+ computerWins+".");
    
    }
    console.log("Final score: Human has "+playerWins+" and computer has "+ computerWins+".");
    return [playerWins, computerWins];

};

var playTo = function(x) {
console.log('Let\'s play Rock Paper Scissors');
var playerWins = 0;
var computerWins = 0;

    while ((playerWins<x) && (computerWins<x)) {
        var playerMove = getInput();
        var computerMove = randomPlay();
        
        console.log('Human played ' + playerMove + ' while computer played ' + computerMove+ '...');
        console.log(winner=getWinner(playerMove, computerMove));

        if (winner ==="Human wins!"){
            playerWins+=1;
        }
        
        else if (winner ==="Computer wins!"){
            computerWins+=1;
        }
        else {

        }
        
        console.log("Human has "+playerWins+" and computer has "+ computerWins+".");
        
    }

console.log("Final score: Human has "+playerWins+" and computer has "+ computerWins+".");
    return [playerWins, computerWins];
};

//getPlayerMove();
//getComputerMove();
//getWinner('rock','scissors');
//playToFive();
//playTo(3);

