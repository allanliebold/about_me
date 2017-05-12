'use strict';
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
function question1() {
  var answer1 = prompt('Question 1: Are you bigger than a bread box? Y/N').toLowerCase();
  console.log('Answer 1:', answer1);
  return answer1;
}

function question2() {
  var answer2 = prompt('Question 2: Are you alive? Y/N').toLowerCase();
  console.log('Answer 2:', answer2);
  return answer2;
}

function question3() {
  var answer3 = prompt('Question 3: Do you mostly come out at night, mostly? Y/N').toLowerCase();
  console.log('Answer 3:', answer3);
  return answer3;
}

function question4() {
  var answer4 = prompt('Question 4: Are you vulnerable to fire? Y/N').toLowerCase();
  console.log('Answer 4:', answer4);
  return answer4;
}

function question5() {
  var answer5 = prompt('Question 5: Can you read minds? Y/N').toLowerCase();
  console.log('Answer 5:', answer5);
  return answer5;
}

var answerQ1 = question1();
var answerQ2 = question2();
var answerQ3 = question3();
var answerQ4 = question4();
var answerQ5 = question5();

alert('Okay, I got this. Thinking... thinking...');
alert('You are a...');

if(answerQ1 === 'n' || answerQ1 === 'no'){
  alert('Teeny tiny...');
}
if(answerQ2 === 'n' || answerQ2 === 'no'){
  alert('Undead...');
}
if(answerQ3 === 'y' || answerQ3 === 'yes'){
  alert('Nocturnal...');
}
if(answerQ4 === 'n' || answerQ4 === 'no'){
    alert('Fireproof...');
}
if(answerQ5 === 'y' || answerQ5 === 'yes'){
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

function numberGame() {

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
}
numberGame();

alert('Time to get serious now.');
alert('As you may have guessed, I am an entity that exists beyond your limited comprehension.');
alert('As such, in order to interact with your kind, I have manifested in no fewer than four of your so-called "united" states of being.');
alert('Besides Washington, name one of the three other states in which I have lived. No abbrevs please. And, yes, spelling counts. You get 6 chances to give a correct answer.');

var flag;
var lived = ['california', 'georgia', 'illinois'];
var counter = 6;

function stateGame() {
while(counter > 0){
  console.log("Tries left:", counter);
  var state = prompt('Where have I lived? You have ' + counter + ' guesses.').toLowerCase();
/* I want certain answers to make the user guess again without counting as a try.
  if (state.length < 3 || state === 'washington'){
    alert('No, no, no. Try that again.');
  }
*/
  for(var i = 0; i < lived.length; i++){
    console.log('Current State:', lived[i]);
    if(state === lived[i]){
      alert('Correct!');
      flag = true;
      break;
    }
  }
  if(flag){
    break;
  } else {
    alert('Nope!');
    counter--;
  }
}

if(!flag){
  alert('You lose!');
} else {
  alert('You win!');
  }
}
stateGame();
