'use strict';

// Everything is wrapped in a function so I can use a button on the page to run all of it.
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

// Mult-dimensional array containing all the questions for two guessing games.
  var qArr = [
// Silly potato guessing game questions
    ['Are you bigger than a bread box? Y/N',
      'Are you alive? Y/N',
      'Do you mostly come out at night, mostly? Y/N',
      'Are you vulnerable to fire? Y/N',
      'Can you read minds? Y/N',],
// About Me guessing game questions
    ['Question 1: Do I play a musical instrument?',
      'Question 2: Have I ever traveled to another country?',
      'Question 3: Was I born in the United States?',
      'Question 4: Do I like to read?',
      'Question 5: Am I enjoying this class so far?'
    ]
  ];

// Function to prompt user with the text of the current question. Parameters determine which of the two games we're playing and which question we're currently on. This function is called inside a for loop in the questionGame function
  function askQuestion(game, qNumber) {
    var currentAnswer = prompt(qArr[game][qNumber]).toLowerCase();
    console.log('Answer for question ' + qNumber + ' is ' + currentAnswer);
    return currentAnswer;
  }

// This function uses a for loop to go through the array of questions and calls the askQuestion function for each.
  function questionGame(game){
    for (var i = 0; i < qArr[0].length; i++){
      var currentAnswer = askQuestion(game,i);
// if else checks whether the user answers yes or no and creates a numbered choice variable set to either true or false.
      if (currentAnswer === 'yes' || currentAnswer === 'y'){
        console.log('choice' + i + ' is true');
// I initially used this['choice' + i], which worked fine in IE, but not in Chrome. Not sure why, but window does work.
        window['choice' + i] = true;
      } else if (currentAnswer === 'no' || currentAnswer === 'n'){
        console.log('choice' + i + ' is false');
        window['choice'+ i] = false;
// If the user enters anything else, i is decremented so the same question can be asked again.
      } else {
        alert('I said Y/N!');
        i--;
      }
    }
  }

// Run the silly potato guessing game.
  questionGame(0);
  alert('Okay. I got this. Thinking... thinking...');
  alert('You are a...');

// Checks the variables choice0 - choice 4 for the five questions and displays text depending on the answer.
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

// Declare variable for the user's Total Score. This will be used for the rest of the app and the user can get up to 7 points.
  var totalPoints = 0;
// Run the About Me guessing game, which uses the second array of five questions in qArr.
  questionGame(1);

  alert('Okay, that\'s all of the questions. Let\'s tally up how you did.');

// Checks each variable choice0 - 1, displays messages and increments totalPoints depending on the user's answers.
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

  alert('3: I was born in the Philipines.');
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
  } else {
    alert('Why would you say no to that?? Anyway..');
  }

// Display totalPoints so the user can see their score after the first 5 questions.
  alert('Your score is now ' + totalPoints + ' out of a possible 5 points thus far.');
  alert('Onto the next game. Okay, riddle me this...');

// Declare variables for number guessing game. var guess will store the user's input for the prompt.
  var guess;
// var lowes is set to a random number between 1 and 20.
  var lowes = Math.floor(Math.random()*20) + 1;
// User begins with 4 tries, which will be decremented with each guess.
  var tries = 4;

// Display the random number in the console for testing purposes
  console.log('Psst. The answer is...', lowes);

// While loop runs until tries is decremented to 0 or the user guesses the correct number
  while(tries > 0){
    console.log('Last guess:', guess);
    console.log('Tries left:', tries);

// Prompt the user to type in a number.
    if (tries > 1){
      guess = parseInt(prompt('How many Lowe\'s could Rob Lowe rob if Rob Lowe could rob Lowe\'s? You have ' + tries + ' tries left.'));
// Unique message for when the user is on their final guess. I just didn't want it to say 'You have 1 tries left'
    } else {
      guess = parseInt(prompt('Last chance. How many?'));
    }

// check the user's guess against the lowes variable.
// if the guess is lower, display a message telling the user and decrement tries
    if (guess < lowes){
      alert('You underestimate Mr. Lowe.');
      tries--;
// if the guess is over 20, display a message with a hint and decrement tries. I could probably move tries-- after these since they all use it.
    } else if (guess > 20) {
      alert('Way, way too high. Rob Lowe is by all accounts a mere mortal after all. (HINT: It\'s between 1 and 20)');
      tries--;
// same as above. Guess is higher than lowes but within the 1-20 range. Message and decrement.
    } else if (guess > lowes) {
      alert('Whoa there. Too much.');
      tries--;
// If the user doesn't input a number, display a message but don't decrement tries so they can try again.
    } else if (isNaN(guess) || guess === null) {
      alert('Hey, that\'s not a number. Try again.');
// User's guess matches lowes. Increment totalPoints and break from the loop.
    } else if (guess === lowes){
      alert('Exactly right! You get a point!');
      totalPoints++;
      break;
    }
  }

// If the while loop ends and the final guess does not match lowes, display a message and do not increment totalPoints.
  if (guess != lowes)
    alert('Bzzzt! Game over! Now you\'ll never know the exact extent of Robe Lowe\'s robbery prowess!');

// Show the user their score out of 6.
  alert('You have ' + totalPoints + ' out of 6 points now. Time to get serious.');
  alert('As you may have guessed, I am an entity that exists beyond your limited comprehension. As such, in order to interact with your kind, I have manifested in no fewer than four of your so-called "united" states of being.');
  alert('Besides Washington, name one of the three other states in which I have existed. No abbrevs please. And, yes, spelling counts. 3 wrong answers and it\'s game over. Get at least 1 right and I\'ll count it as a win for you! Got it? Okay...');

// Declare variable for the state guessing game.
// var correct is a flag set to true when the user gets a correct answer.
  var correct;
// var doOver is another flag used to skip over parts of the while loop so the user can be prompted again without losing a turn
  var doOver;
// An array containing the correct answers
  var lived = ['california', 'georgia', 'illinois'];
// var counter is the same as tries in the previous question. Decremented for incorrect answers until it reaches zero and the while loop stops.
  var counter = 3;
// var statePoints is incremented for each correct answer the user gives in the state guessing game, up to 3.
  var statePoints = 0;

// While loop runs until counter is decremented to 0
  while(counter > 0){
    console.log('Tries left:', counter);
    console.log('States Guessed: ', statePoints);

// Reset the correct and doOver flags at the start of each loop
    correct = false;
    doOver = false;

    var state = prompt('Where have I lived? You have ' + counter + ' tries left.').toLowerCase();
// An invalid response will set the doOver flag to true, skipping everything else and starting back from the prompt.
    if (state.length < 3 || state === 'washington'){
      alert('No, no, no. Follow the rules!');
      doOver = true;
    }

// For loop goes through the lived array.
    for(var i = 0; i < lived.length; i++){
      console.log('Current State:', lived[i]);
// If the user's input matches the string at the current index in the loop
      if(state === lived[i]){
// display a message for the user
        alert('Correct!');
// remove the current string from the array so it can't be accepted as a correct answer again.
        lived.splice(i, 1);
// set the correct flag to true
        correct = true;
// and end the for loop
        break;
      }
    }
// if the doOver flag is set to true, don't run anything else and start over the while loop
    if(doOver){
      console.log('Do over!');
    } else if(correct){
// if the correct flag is set to true, increment statePoints
      statePoints++;
    } else {
// otherwise just display a message for the user and decrement counter.
      alert('Nope!');
      counter--;
    }

// If the user has gotten all three correct answers, break the while loop and move on.
    if(statePoints === 3){
      break;
    }
  }

// after the while loop check statePoints
  if(statePoints < 1){
// if the user didn't get at least one correct answer, just display a message and don't increment totalPoints
    alert('You lose! No point for you!');
  } else {
// if they did get at least one right, show how many and increment totalPoints.
    alert('You win! You got ' + statePoints + ' out of 3 right!');
    totalPoints++;

  }
//I have a complicated idea for what I want to do with this. Capitalize the first letters in the state names and concatenate a string to include ', and ' between states and a '.' at the end. So if you missed them all it should say 'You missed California, Georgia, and Illinois.' I'll have to use a loop and splicing, splitting, and toUpperCase probably.
  if(lived.length > 0){
// if there are any correct answers left in the lived array, display a message showing the user what those answers are
    alert('You missed: ' + lived);
  }

  console.log('Total Score: ', totalPoints);
// Display a final score message for the user.
  alert('Your final score is ' + totalPoints + ' out of 7 points!');

// Finally, end the entire myGame function
}
