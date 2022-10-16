/*Rock, Paper, Scissors*/

/*GAME*/

/*
I'm going to play against the computer, so I begin with a function 
called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
I'll use this function in the game to make the computer’s play.
*/

function getComputerChoice () {

    let x = Math.floor((Math.random() * 3) + 1);
    let ComputerDecision = "";
    
    if (x == 1) {
        ComputerDecision = "Rock";
    } else if (x == 2) {
        ComputerDecision = "Paper";
    } else if (x == 3) {
        ComputerDecision = "Scissors";
    }

    return ComputerDecision;
}


//This function will compare my selection with the computer's.

function playRound(playerSelection, a = computerSelection) {
    
    let b = playerSelection;
    let refereeDecision = "";
        
    if (b == "Rock" && a == "Paper") {
        refereeDecision = "pc";
    } else if (b == "Paper" && a == "Rock") {
        refereeDecision = "user";
    }else if (b == "Rock" && a == "Scissors") {
        refereeDecision = "user";
    }else if (b == "Scissors" && a == "Rock") {
        refereeDecision = "pc";
    }else if (b == "Paper" && a == "Scissors") {
        refereeDecision = "pc";
    }else if (b == "Scissors" && a == "Paper") {
        refereeDecision = "user";
    }

    return refereeDecision;

}

//The function below will decide who is going to be the winner.




const mainSelector = document.querySelector('main');
const btn = document.querySelector('#button');
const gameBox = document.querySelector('#game');
const screen = document.createElement('div');
screen.classList.add('screen');
const title1 = document.createElement('p');
title1.textContent = 'You have 5 rounds to play. your score will show on this screen!';
const startBtn = document.createElement('button');
startBtn.textContent = "Start";
startBtn.classList.add('startBtn');



const screenSubtitle = document.createElement('div');
screenSubtitle.classList.add('screenSubtitle');
const title2 = document.createElement('p');
title2.textContent = 'Choose your weapon!';
const screenBtns = document.querySelector('div[class="btnsList"]');
//buttons
const screenBtn1 = document.querySelector('button[id="screenBtn1"]');
const screenBtn2 = document.querySelector('button[id="screenBtn2"]');
const screenBtn3 = document.querySelector('button[id="screenBtn3"]');

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

}


    let user = 0;
    let pc = 0;
    let playerSelection = "";

//This function compares the user selection and the computer selection
function revelation(e){

    let computerSelection = getComputerChoice();

    //console.log(e.target.innerText);
    if(e.target.innerText == "Rock" && computerSelection == "Paper"){
        pc++;
        console.log("pc");
    } else if(e.target.innerText == "Paper" && computerSelection == "Rock"){
        user++;
        console.log("user");
    } else if(e.target.innerText == "Rock" && computerSelection == "Scissors"){
        user++;
        console.log("user");
    } else if(e.target.innerText == "Paper" && computerSelection == "Scissors"){
        pc++;
        console.log("pc");
    }else if(e.target.innerText == "Scissors" && computerSelection == "Paper"){
        user++;
        console.log("user");
    }else if(e.target.innerText == "Scissors" && computerSelection == "Rock"){
        pc++;
        console.log("pc");
    }else if(e.target.innerText == computerSelection){
        console.log('There is a draw!');
    }
    //Once one of the players get 5 points the buttons disappear
    if (user == 5) {
        console.log("You won!");
        gameBox.removeChild(screenBtns);
    }if (pc == 5) {
        console.log("The PC won!");
        gameBox.removeChild(screenBtns);
    }
    
    //e.stopPropagation()

}







btn.addEventListener('click', showGame);
startBtn.addEventListener('click', showGame2);
screenBtn1.addEventListener('click', revelation);
screenBtn2.addEventListener('click', revelation);
screenBtn3.addEventListener('click', revelation);


