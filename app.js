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

  var qArr = [
              ['Are you bigger than a bread box? Y/N',
              'Are you alive? Y/N',
              'Do you mostly come out at night, mostly? Y/N',
              'Are you vulnerable to fire? Y/N',
              'Can you read minds? Y/N',],

              ['Question 1: Do I play a musical instrument?',
              'Question 2: Have I ever traveled to another country?',
              'Question 3: Was I born in the United States?',
              'Question 4: Do I like to read?',
              'Question 5: Am I enjoying this class so far?'
              ]
            ];

  function askQuestion(game, qNumber) {
    var currentAnswer = prompt(qArr[game][qNumber]).toLowerCase();
    console.log('Answer for question ' + qNumber + ' is ' + currentAnswer);
    return currentAnswer;
  }

  function questionGame(game){
    for (var i = 0; i < qArr[0].length; i++){
        var currentAnswer = askQuestion(game,i);
        if (currentAnswer === 'yes' || currentAnswer === 'y'){
          console.log('choice' + i + ' is true');
  // I initially used this['choice' + i], which worked fine in IE, but not in Chrome. Not sure why, but window does work.
          window['choice' + i] = true;
        } else if (currentAnswer === 'no' || currentAnswer === 'n'){
          console.log('choice' + i + ' is false');
          window['choice'+ i] = false;
        } else {
          alert('I said Y/N!');
          i--;
        }
    }
  }

  questionGame(0);
  alert('Okay. I got this. Thinking... thinking...');
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
  } else if (result === 'y' || result === 'yes'){
    alert('Huzzah!');
  } else {
    alert('I don\'t speak potato. Moving on!');
  }

  alert('Now it\'s time for you to guess some things about me. From here on out I\'ll be keeping score. Get ready!');

  var totalPoints = 0;
  questionGame(1);

  alert('Okay, that\'s all of the questions. Let\'s tally up how you did.');
  alert('1: I don\'t play any instruments. Yet. That I know of.');
  if(choice0){
    alert('You got that one wrong.');
    } else {
    alert('You were right. 1 point for you!');
    totalPoints++;
  }

  alert('2: I have been out of the country, but I\'d like to travel more!');
  if(choice1){
    alert('Bingo!');
    totalPoints++;
  } else {
    alert('You got that one wrong.');
  }

  alert('3: I was born in the Philipines.')
  if(choice2){
    alert('You were wrong!');
  } else {
    alert('That\'s a point to you.');
    totalPoints++;
  }
  alert('4: I do like to read!');
  if(choice3){
    alert('Add a point to your score!');
    totalPoints++;
  } else {
    alert('You guessed incorrectly!');
  }
  alert('5: And finally... I am enjoying the class!');
  if(choice4){
    alert('Point!');
    totalPoints++;
  }
  alert('Your score is now ' + totalPoints + ' out of a possible 5 points thus far.');
  alert('Onto the next game. Okay, riddle me this...');

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
      alert('Exactly right! You get a point!');
      totalPoints++;
      break;
    }
  }

  if (guess != lowes)
    alert('Bzzzt! Game over! Now you\'ll never know the exact extent of Robe Lowe\'s robbery prowess!');

  alert('You have ' + totalPoints + ' out of 6 points now. Time to get serious.');
  alert('As you may have guessed, I am an entity that exists beyond your limited comprehension. As such, in order to interact with your kind, I have manifested in no fewer than four of your so-called "united" states of being.');
  alert('Besides Washington, name one of the three other states in which I have existed. No abbrevs please. And, yes, spelling counts. 3 wrong answers and it\'s game over. Get at least 1 right and I\'ll count it as a win for you! Got it? Okay...');

  var correct;
  var doOver;
  var lived = ['california', 'georgia', 'illinois'];
  var counter = 3;
  var statePoints = 0;

  while(counter > 0){
    console.log('Tries left:', counter);
    console.log('States Guessed: ', statePoints);

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
      statePoints++;
    } else {
      alert('Nope!');
      counter--;
    }

    if(statePoints === 3){
      break;
    }
  }

  if(statePoints < 1){
    alert('You lose! No point for you!');
  } else {
    alert('You win! You got ' + statePoints + ' out of 3 right!');
    totalPoints++;
    console.log('Total Score: ', totalPoints);
  }
  alert('Your final score is ' + totalPoints + ' out of 7 points!');
}
