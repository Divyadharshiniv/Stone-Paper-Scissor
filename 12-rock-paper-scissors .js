const score = JSON.parse(localStorage.getItem('score'))||{
    Wins:0,
    Losses:0,
    Ties:0
}
updateScore();

function pickComputerMove(){

const randomNumber=Math.random();
let computerMove='';

if(randomNumber >=0 &&randomNumber< 1/3){
computerMove='rock';
}
else if(randomNumber >= 1/3 && randomNumber < 2/3){
computerMove='paper';
}
else{
computerMove='scissors';
}
return computerMove;
}
let isAutoPlaying=false;
let intervalId;
function autoplay(){
    if(!isAutoPlaying){
        intervalId=setInterval(()=>{
            const playermove=pickComputerMove();
           playGame(playermove);
        },1000);
        isAutoPlaying=true;
    }
    else{
      clearInterval(intervalId);
      isAutoPlaying=false;
    }

    
}
document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click',()=>{
    playGame('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click',()=>{
    playGame('scissors');
});

function resetScore(){
    score.Wins=0;
    score.Losses=0;
    score.Ties=0;
    localStorage.removeItem('score');
    updateScore();
}
document.querySelector('.js-reset-button').addEventListener('click',()=>{
    resetScore();
})

document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r'){
        playGame('rock');
    }
    else if(event.key==='p'){
        playGame('paper');
    }
    else if(event.key==='s'){
        playGame('scissors');
    }
});

function playGame(playerMove){
const computerMove=pickComputerMove();
let result='';
if(playerMove==='scissors'){

if(computerMove==='rock'){
result='You lose';
}
else if(computerMove==='paper'){
result='You win';
}
else if(computerMove==='scissors'){
result='Tie';
} 
}
else if(playerMove==='rock'){

if(computerMove==='rock'){
result='Tie';
}
else if(computerMove==='paper'){
result='You lose';
}
else if(computerMove==='scissors'){
result='You win';
} 
}
else if(playerMove==='paper'){

if(computerMove==='rock'){
result='You win';
}
else if(computerMove==='paper'){
result='Tie';
}
else if(computerMove==='scissors'){
result='You lose';
} 
}
if(result==='You win'){
score.Wins+=1;
}
else if(result==='You Lose'){
score.Losses+=1;
}
else{
score.Ties+=1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScore();

document.querySelector('.js-result').innerHTML=result;
document.querySelector('.js-moves').innerHTML=
`You
<img src="${playerMove}-emoji.png" class="move-icon">
<img src="${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScore(){
document.querySelector('.js-score')
.innerHTML=`Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}





