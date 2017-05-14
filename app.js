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

  alert('I bet I can guess what you are in five perfectly chosen questions.');

  var qArr = ['Question 1: Are you bigger than a bread box? Y/N',
              'Question 2: Are you alive? Y/N',
              'Question 3: Do you mostly come out at night, mostly? Y/N',
              'Question 4: Are you vulnerable to fire? Y/N',
              'Question 5: Can you read minds? Y/N',
              ];

  function askQuestion(qNumber) {
    var currentAnswer = prompt(qArr[qNumber]).toLowerCase();
    console.log('Answer for question ' + qNumber + ' is ' + currentAnswer);
    return currentAnswer;
  }

  for (var i = 0; i < qArr.length; i++){
      var currentAnswer = askQuestion(i);
      if (currentAnswer === 'yes' || currentAnswer === 'y'){
        console.log('choice' + i + ' is true');
        this['choice' + i] = true;
      } else if (currentAnswer === 'no' || currentAnswer === 'n'){
        console.log('choice' + i + ' is false');
        this['choice' + i] = false;
      } else {
        alert('I said Y/N!');
        i--;
      }
  }

  alert('Okay, I got this. Thinking... thinking...');
  alert('You are a...');

  if(!choice0){
    alert('Teeny tiny...');
  }
  if(!choice1){
    alert('Undead...');
  }
  if(choice2){
    alert('Nocturnal...');
  }
  if(!choice3){
      alert('Fireproof...');
  }
  if(choice4){
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

  if (guess != lowes)
    alert('Bzzzt! Game over! Now you\'ll never know the exact extent of Robe Lowe\'s robbery prowess!');

  alert('Time to get serious now.');
  alert('As you may have guessed, I am an entity that exists beyond your limited comprehension.');
  alert('As such, in order to interact with your kind, I have manifested in no fewer than four of your so-called "united" states of being.');
  alert('Besides Washington, name one of the three other states in which I have existed. No abbrevs please. And, yes, spelling counts. 3 wrong answers and it\'s game over. Get at least 1 right and you win! Got it? Okay...');

  var correct;
  var doOver;
  var lived = ['california', 'georgia', 'illinois'];
  var counter = 3;
  var points = 0;

  while(counter > 0){
    console.log('Tries left:', counter);
    console.log('Points: ', points);

// reset the correct and doOver flags at the start of each loop
    correct = false;
    doOver = false;

    var state = prompt('Where have I lived? You have ' + counter + ' tries left.').toLowerCase();
    if (state.length < 3 || state === 'washington'){
      alert('No, no, no. Follow the rules!');
      doOver = true;
    }

    for(var i = 0; i < lived.length; i++){
      console.log('Current State:', lived[i]);
      if(state === lived[i]){
        alert('Correct!');
        lived.splice(i, 1);
        correct = true;
        break;
      }
    }
    if(doOver){
      console.log('Do over!');
    } else if(correct){
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
