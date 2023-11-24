'use strict';
const message = document.querySelector('.message');
const check = document.querySelector('.check');
const body = document.querySelector('body');
const score = document.querySelector('.score')
const number = document.querySelector('.number')

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let newScore = 20;
let highscore = 0;

check.addEventListener('click', () => {
   const guess = Number(document.querySelector('.guess').value);

   if(!guess) {
      message.textContent = "⛔ No number!"
   } //When player doesnt input nothing
  
   else if(guess === secretNumber){
      message.textContent = '🎉 Great Guessing!'
      number.textContent = secretNumber;
      body.style.background = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if(newScore > highscore) {
         highscore = newScore;
         document.querySelector('.highscore').textContent = highscore;
      }
   }
    //When player wins
    
    //When player loses
    else if(guess !== secretNumber){
      message.textContent = guess > secretNumber ? "Too High, Guess Again 😂" : "You Lost The Game. 😢";
      newScore--
      score.textContent = newScore
      }
      else {
         message.textContent = "You Lost The Game. 😢"
         score.textContent = 0;
      }
});



//When player wants to play again.

const reset = document.querySelector('.again');

reset.addEventListener('click', () => {
   newScore = 20;
   score.textContent = newScore
   message.textContent = 'Start guessing...'
   number.textContent = '?';
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   document.querySelector('.guess').value = '';
   body.style.backgroundColor = '#222'
   number.style.width = '15rem'
})