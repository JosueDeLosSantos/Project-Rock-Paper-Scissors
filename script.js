



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
/*
screenBtns.appendChild(screenBtn1);
screenBtns.appendChild(screenBtn2);
screenBtns.appendChild(screenBtn3);
*/
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


btn.addEventListener('click', showGame);
startBtn.addEventListener('click', showGame2);




