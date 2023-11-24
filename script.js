'use strict';

const check = document.querySelector('.check');
const body = document.querySelector('body');
const score = document.querySelector('.score')
const number = document.querySelector('.number')

let secretNumber = Math.trunc(Math.random() * 25) + 1;
let newScore = 20;
let highscore = 0;

const displayMessage = function(message) {
   document.querySelector('.message').textContent = message
}


check.addEventListener('click', () => {
   const guess = Number(document.querySelector('.guess').value);
  

   if(!guess || guess < 1 || guess > 25) {
      displayMessage("⛔ Between 1 to 25!");
      newScore--
      score.textContent = newScore
   } //When player doesnt input nothing or < or > than expected input
  
   else if(guess === secretNumber){
      displayMessage("🎉 Correct Number")
      number.textContent = secretNumber;
      body.style.background = '#60b347';
      number.style.width = '30rem';

      if(newScore > highscore) {
         highscore = newScore;
         document.querySelector('.highscore').textContent = highscore;
      }
   }
    //When player wins

    //When player loses
    else if(guess !== secretNumber){
      if(newScore > 1) {
         displayMessage(guess > secretNumber ? "Too High, Guess Again 😂" : "Too Low, Keep Guessing. 😢");
         newScore--
         score.textContent = newScore
      }
      else{
         displayMessage("You Lost The Game. 😢");
         score.textContent = 0;
      }
      }
});



//When player wants to play again.

const reset = document.querySelector('.again');

reset.addEventListener('click', () => {
   newScore = 20;
   score.textContent = newScore
   displayMessage('Start guessing...');
   number.textContent = '?';
   secretNumber = Math.trunc(Math.random() * 25) + 1;
   document.querySelector('.guess').value = '';
   body.style.backgroundColor = '#222'
   number.style.width = '15rem'
})