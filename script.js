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
computerSelection and then return a string that declares the winner
 of the round like so: "You Lose! Paper beats Rock"*/


function playRound(playerSelection, a = computerSelection) {
    
    let b = playerSelection.toLowerCase();
    let refereeDecision = "";
        
    if (b == "rock" && a == "paper") {
        refereeDecision = "pc";
    } else if (b == "paper" && a == "rock") {
        refereeDecision = "user";
    }else if (b == "rock" && a == "scissors") {
        refereeDecision = "user";
    }else if (b == "scissors" && a == "rock") {
        refereeDecision = "pc";
    }else if (b == "paper" && a == "scissors") {
        refereeDecision = "pc";
    }else if (b == "scissors" && a == "paper") {
        refereeDecision = "user";
    }

    return refereeDecision;

}

/*
Write a NEW function called game(). Call the playRound function inside of this one to play a 5 
round game that keeps score and reports a winner or loser at the end.
*/


function game() {

    let user = 0;
    let pc = 0;
    let result = ``;
    let  checkScenerio = false;

    

    while (checkScenerio == false){

        let playerSelection = prompt("enter rock, paper or scissors;", );
        let computerSelection = getComputerChoice();
        let random = playRound(playerSelection,computerSelection);

        if (random == "user") {
            user++;
            console.log("you won!")
        } else if (random == "pc") {
            pc++;
            console.log("The pc won!")
        } else if (random = "draw") {
            console.log("There was a draw!")
        }

        /*
        if (user >= 5 && user > pc) {
            result = `you are the winner, check the scores: you:${user.toString()}, computer:${pc.toString()}`;
        } else if (pc >= 5 && pc > user){
            result = `the computer is the winner, check the scores: you:${user.toString()}, computer:${pc.toString()}`;
        } 
        */

        if (user >= 5 && user > pc) {
            result = `you are the winner, check the scores: you:${user}, computer:${pc}`;
        } else if (pc >= 5 && pc > user){
            result = `the computer is the winner, check the scores: you:${user}, computer:${pc}`;
        } 
        
        if ((user == 5) || (pc == 5)) {
            checkScenerio = true;
        }

    }

    return result;

}



const mainSelector = document.querySelector('main');
const btn = document.querySelector('#button');
const gameBox = document.querySelector('#game');
const screen = document.createElement('div');
screen.classList.add('screen');
const title1 = document.createElement('p');
const startBtn = document.createElement('button');
startBtn.textContent = "Start";
startBtn.classList.add('startBtn');


title1.textContent = 'You have 5 rounds to play. your score will show on this screen!';
const screenSubtitle = document.createElement('div');
screenSubtitle.classList.add('screenSubtitle');
const title2 = document.createElement('p');
title2.textContent = 'Choose your weapon!';
const screenBtns = document.querySelector('div[class="btnsList"]');
//buttons
const screenBtn1 = document.querySelector('button[class="screenBtns"]');
const screenBtn2 = document.querySelector('button[class="screenBtns"]');
const screenBtn3 = document.querySelector('button[class="screenBtns"]');

//Iterate through all the buttons
const btnList = document.querySelectorAll('button[class="screenBtns"]');
const btnListArr = Array.from(btnList);





function cleaningJob(){
    gameBox.removeChild(screenBtns);
}

cleaningJob();



function showGame(){

    mainSelector.removeChild(btn);
    gameBox.appendChild(screen);
    screen.appendChild(title1);
    gameBox.appendChild(screenSubtitle);
    gameBox.appendChild(startBtn);

}


function showGame2(){

    gameBox.removeChild(startBtn);
    screen.removeChild(title1);
    screenSubtitle.appendChild(title2);
    gameBox.appendChild(screenBtns);
    console.log(btnListArr);

}


function revelation(e){
    //console.log(typeof(e.target.innerText))
    console.log(e.target.innerText)
}


btn.addEventListener('click', showGame);
startBtn.addEventListener('click', showGame2);
btnListArr.forEach(btnListArr => btnListArr.addEventListener('click', revelation));