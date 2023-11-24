'use strict';
const message = document.querySelector('.message');
const check = document.querySelector('.check');
const body = document.querySelector('body');
const score = document.querySelector('.score')
const number = document.querySelector('.number')

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let newScore = 20;
let highscore = 0;


function greaterThan() {
   if(newScore > 1) {
      message.textContent =  "Too High, Guess Again 😂"
   newScore--
   score.textContent = newScore
   }
   else {
      message.textContent = "You Lost The Game. 😢"
      score.textContent = 0;
   }
}

function lessThan() {
   if(newScore > 1) {
      message.textContent = "Too Low.😂"
   newScore-- 
   score.textContent = newScore
   }
   else {
      message.textContent = "You Lost The Game. 😢"
      score.textContent = 0;
   }
}


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
   } //When player wins
   else if(guess > secretNumber){
      greaterThan()
      //When player picks a number greater than secretnumber
      
   }
   else if(guess < secretNumber) {
   
      lessThan()
      //When player picks a number lesser than secretnumber
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