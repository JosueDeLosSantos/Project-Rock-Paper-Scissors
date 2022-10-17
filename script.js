/*Rock, Paper, Scissors*/

/*GAME*/

const mainSelector = document.querySelector('main');
const btn = document.querySelector('#button');
const gameBox = document.querySelector('#game');
const startBtn = document.createElement('button');
startBtn.textContent = "Start";
startBtn.classList.add('startBtn');

//screen
const screen = document.createElement('div');
screen.classList.add('screen');
const title1 = document.createElement('p');
title1.textContent = 'You have 5 rounds to play. your score will show on this screen!';
const screenSubtitle = document.createElement('div');
screenSubtitle.classList.add('screenSubtitle');
const title2 = document.createElement('p');
title2.textContent = 'Choose your weapon!';
const screenTitle = document.createElement('p');
const separator = document.createElement('br');
const scoreboard = document.createElement('p');


//buttons

const screenBtns = document.querySelector('div[class="btnsList"]');
//Select all buttons and returns a nodelist
const btnList = document.querySelectorAll('button[class="screenBtns"]');
//Nodelists must be converted to arrays for us to be able to add events to them
const btnListArr = Array.from(btnList);
//replay button creation
const replayButton = document.createElement('button')
replayButton.innerText = "Replay";
replayButton.classList.add('replayBtn')


//the function below removes the game buttons temporarily from the HTML document.
function cleaningJob(){
    gameBox.removeChild(screenBtns);
}

cleaningJob();


//The function below remove the play button and append the screen, screen subtitle and start button
function showGame(){

    mainSelector.removeChild(btn);
    gameBox.appendChild(screen);
    screen.appendChild(title1);
    gameBox.appendChild(screenSubtitle);
    gameBox.appendChild(startBtn);

}

//The function below remove the start button and changes the screen's massage.
function showGame2(){

    gameBox.removeChild(startBtn);
    screen.removeChild(title1);
    screenSubtitle.appendChild(title2);
    gameBox.appendChild(screenBtns);

}

//The function below generates a random choice for the computer's play
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



let user = 0;
let pc = 0;
let draws = 0;
let playerSelection = "";

//This function compares the user selection and the computer selection
function revelation(e){
    
    //The condition below cleans the screen on every click
    if(user == 0 && pc == 0 && draws == 0){
        screen.appendChild(screenTitle);
        screen.appendChild(separator);
        screen.appendChild(scoreboard);
    }if(user > 0 || pc > 0 || draws > 0){
        screenTitle.innerText = "";
    }

    let computerSelection = getComputerChoice();


    if(e.target.innerText == "Rock" && computerSelection == "Paper"){
        pc++;
        
        screenTitle.innerText = "The PC won!";
           
    } else if(e.target.innerText == "Paper" && computerSelection == "Rock"){
        user++;
       
        screenTitle.innerText = "You won!";

    } else if(e.target.innerText == "Rock" && computerSelection == "Scissors"){
        user++;

        screenTitle.innerText = "You won!";

    } else if(e.target.innerText == "Paper" && computerSelection == "Scissors"){
        pc++;

        screenTitle.innerText = "The PC won!";

    }else if(e.target.innerText == "Scissors" && computerSelection == "Paper"){
        user++;

        screenTitle.innerText = "You won!";
        
    }else if(e.target.innerText == "Scissors" && computerSelection == "Rock"){
        pc++;

        screenTitle.innerText = "The PC won!";

    }else if(e.target.innerText == computerSelection){
        draws++;

        screenTitle.innerText = "There is a draw!";

    }
    //Once one of the players get 5 points the buttons disappear
    if (user == 5) {

        screenTitle.innerText = "";
        screenTitle.innerText = "You are the winner, look at the scoreboard:";
        scoreboard.innerText = "You: "+ user +" PC: "+ pc;
        gameBox.removeChild(screenBtns);
        gameBox.removeChild(screenSubtitle);
        //Replay button
        gameBox.appendChild(replayButton);

    }if (pc == 5) {

        screenTitle.innerText = "";
        screenTitle.innerText = "The PC is the winner, look at the scoreboard:";
        scoreboard.innerText = "You: "+ user +" PC: "+ pc;
        gameBox.removeChild(screenBtns);
        gameBox.removeChild(screenSubtitle);
        //Replay button
        gameBox.appendChild(replayButton);
    }

}

//refreshes the the page 
function refreshBtn (){
    location.reload();
    /*If you are refreshing after an onclick then you'll need to return false directly after
    https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript
    */
    return false;
}



btn.addEventListener('click', showGame);
startBtn.addEventListener('click', showGame2);
btnListArr.forEach(btn => btn.addEventListener('click', revelation))
replayButton.addEventListener('click', refreshBtn)








