'use strict';
function myGame(){

  alert('Time for a guessing game!');

  var ready = prompt('Are you ready? Y/N').toLowerCase();
  console.log('Ready?:', ready);

  var sure = prompt('Are you sure? Y/N').toLowerCase();
  console.log('Sure?:', sure);

  if ((ready === 'y' || ready === 'yes') && (sure === 'y' || sure === 'yes')){
    alert('Confidence. I like it! Okay, here we go!');
  }
  if ((ready === 'n' || ready === 'no') || (sure === 'n' || sure === 'no')){
    alert('Well, I\'m starting anyway.');
  }

  var answer1 = prompt('Question 1: Are you bigger than a bread box? Y/N').toLowerCase();
  console.log('Answer 1:', answer1);

  var answer2 = prompt('Question 2: Are you alive? Y/N').toLowerCase();
  console.log('Answer 2:', answer2);

  var answer3 = prompt('Question 3: Do you mostly come out at night, mostly? Y/N').toLowerCase();
  console.log('Answer 3:', answer3);

  var answer4 = prompt('Question 4: Are you vulnerable to fire? Y/N').toLowerCase();
  console.log('Answer 4:', answer4);

  var answer5 = prompt('Question 5: Can you read minds? Y/N').toLowerCase();
  console.log('Answer 5:', answer5);

  alert('Okay, I got this. Thinking... thinking...');
  alert('You are a...');

  if(answer1 === 'n' || answer1 === 'no'){
    alert('Teeny tiny...');
  }
  if(answer2 === 'n' || answer2 === 'no'){
    alert('Undead...');
  }
  if(answer3 === 'y' || answer3 === 'yes'){
    alert('Nocturnal...');
  }
  if(answer4 === 'n' || answer4 === 'no'){
      alert('Fireproof...');
  }
  if(answer5 === 'y' || answer5 === 'yes'){
    alert('Telepathic...');
  }

  alert('...Potato?');
  var result = prompt('Am I right? Y/N').toLowerCase();

  if(result === 'n' || result === 'no'){
    alert('You cheated!');
  } else {
    alert('Huzzah!');
  }

  alert('Let\'s play another game. Okay, riddle me this...');

  var guess;
  var lowes = Math.floor(Math.random()*20) + 1;
  var tries = 4;
  console.log('Psst. The answer is...', lowes);

  while(tries > 0){
    console.log('Last guess:', guess);
    console.log('Tries left:', tries);

    if (tries > 1){
      guess = parseInt(prompt('How many Lowe\'s could Rob Lowe rob if Rob Lowe could rob Lowe\'s? You have ' + tries + ' tries left.'));
    } else {
      guess = parseInt(prompt('Last chance. How many?'));
    }
    if (guess < lowes){
      alert('You underestimate Mr. Lowe.');
      tries--;
    } else if (guess > 20) {
      alert('Way, way too high. Rob Lowe is by all accounts a mere mortal after all.');
      tries--;
    } else if (guess > lowes) {
      alert('Whoa there. Too much.');
      tries--;
    } else if (isNaN(guess) || guess === null) {
      alert('Hey, that\'s not a number. Try again.');
    } else if (guess === lowes){
      alert('Exactly right!');
      break;
    }
  }
  if (guess != lowes){
    alert('Bzzzt! Game over! Now you\'ll never know the exact extent of Robe Lowe\'s robbery prowess!');
  }
  alert('Time to get serious now.');
  alert('As you may have guessed, I am an entity that exists beyond your limited comprehension.');
  alert('As such, in order to interact with your kind, I have manifested in no fewer than four of your so-called "united" states of being.');
  alert('Besides Washington, name one of the three other states in which I have lived. No abbrevs please. And, yes, spelling counts. You get 6 chances to give a correct answer.');

  var flag;
  var lived = ['california', 'georgia', 'illinois'];
  var counter = 6;
  var points = 0;

  while(counter > 0){
    console.log("Tries left:", counter);
    var state = prompt('Where have I lived? You have ' + counter + ' guesses.').toLowerCase();
  /* I want certain answers to make the user guess again without counting as a try.
    if (state.length < 3 || state === 'washington'){
      alert('No, no, no. Try that again.');
    }
  */

  // flag needs to be reset to false at the start of each loop.
    flag = false;
    for(var i = 0; i < lived.length; i++){
      console.log('Current State:', lived[i]);
      if(state === lived[i]){
        alert('Correct!');
        lived.splice(i, 1);
        flag = true;
        break;
      }
    }
    if(flag){
      points++;
    } else {
      alert('Nope!');
      counter--;
    }
    if(points === 3){
      break;
    }
  }

  if(points < 1){
    alert('You lose!');
  } else {
    alert('You win! You got ' + points + ' out of 3 right!');

  }
}
