/*Rock, Paper, Scissors*/

/*GAME*/

/*
My game is going to play against the computer, so I begin with a function 
called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
I'll use this function in the game to make the computer’s play.
*/

function getComputerChoice () {

    let x = Math.floor((Math.random() * 3) + 1);
    let ComputerDecision = "";
    
    if (x == 1) {
        ComputerDecision = "rock";
    } else if (x == 2) {
        ComputerDecision = "paper";
    } else if (x == 3) {
        ComputerDecision = "scissors";
    }

    return ComputerDecision;
}

/*
Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and 
computerSelection
*/


/*and then return a string that declares the winner
 of the round like so: "You Lose! Paper beats Rock"*/


  




function playRound(playerSelection, a = computerSelection) {
    
    let b = playerSelection.toLowerCase();
    let refereeDecision = "";
        
    if (b == "rock" && a == "paper") {
        refereeDecision = "pc";
    } else if (b == "paper" && a == "rock") {
        refereeDecision = "user";
    } else if (b == "rock" && a == "rock") {
        refereeDecision = "draw";
    }else if (b == "rock" && a == "scissors") {
        refereeDecision = "user";
    }else if (b == "scissors" && a == "rock") {
        refereeDecision = "pc";
    }else if (b == "scissors" && a == "scissors") {
        refereeDecision = "draw";
    }else if (b == "paper" && a == "scissors") {
        refereeDecision = "pc";
    }else if (b == "scissors" && a == "paper") {
        refereeDecision = "user";
    }else if (b == "paper" && a == "paper") {
        refereeDecision = "draw";
    }

    return refereeDecision;

}
/*
let computerSelection = getComputerChoice();
let playerSelection = prompt("enter rock, paper or scissors;", );
console.log(playRound(playerSelection,computerSelection));
*/
/*
Write a NEW function called game(). Call the playRound function inside of this one to play a 5 
round game that keeps score and reports a winner or loser at the end.
*/


function game() {

    let user = 0;
    let pc = 0;
    let draws = 0;
    let result = ``;
/*
    for (let i = 0; i < 5; i++) {
    
        let playerSelection = prompt("enter rock, paper or scissors;", );
        let computerSelection = getComputerChoice();
        let random = playRound(playerSelection,computerSelection);

        if (random == "user") {
            user++;
        } else if (random == "pc") {
            pc++;
        } else if (random = "draw") {
            draws++;
        }

     }

     */
/*
     if (user >= 2 && user > pc) {
        result = `you are the winner, check the scores: you:${user.toString()}, computer:${pc.toString()}, draws:${draws.toString()}`;
     } else if (pc >= 2 && pc > user){
        result = `the computer is the winner, check the scores: you:${user.toString()}, computer:${pc.toString()}, draws:${draws.toString()}`;
     } else  {
        result = `there is a draw, check the scores: you:${user.toString()}, computer:${pc.toString()}, draws:${draws.toString()}`;
     }
*/
    
if (user >= 2 && user > pc) {
    result = `you are the winner, check the scores: you:${user}, computer:${pc}, draws:${draws}`;
 } else if (pc >= 2 && pc > user){
    result = `the computer is the winner, check the scores: you:${user}, computer:${pc}, draws:${draws}`;
 } else  {
    result = `there is a draw, check the scores: you:${user}, computer:${pc}, draws:${draws}`;
 }


    return result;

}


const gameBox = document.querySelector('#game');
const screen = document.createElement('div');
screen.classList.add('screen');
const title1 = document.createElement('p');
title1.textContent = 'You have 5 rounds to play!';
const screenSubtitle = document.createElement('div');
screenSubtitle.classList.add('screenSubtitle');
const title2 = document.createElement('p');
title2.textContent = 'Choose your weapon!';
const screenBtns = document.createElement('div');
screenBtns.classList.add('screenBtns');
//buttons
const screenBtn1 = document.createElement('button');
screenBtn1.textContent = "Rock";
const screenBtn2 = document.createElement('button');
screenBtn1.textContent = "Paper";
const screenBtn3 = document.createElement('button');
screenBtn1.textContent = "Scissors";




function showGame(){

    gameBox.appendChild(screen);
    screen.appendChild(title1);
    gameBox.appendChild(screenSubtitle);
    screenSubtitle.appendChild(title2);
    gameBox.appendChild(screenBtns);

}

const btn = document.querySelector('#button');
btn.addEventListener('click', showGame);


