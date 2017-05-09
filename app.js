'use strict';
alert('Time for a guessing game!');

var ready = prompt('Are you ready? Y/N');
ready = ready.toLowerCase();
console.log('Ready?:', ready);

var sure = prompt('Are you sure? Y/N');
sure = sure.toLowerCase();
console.log('Sure?:', sure);

if ((ready === 'y' || ready === 'yes') && (sure === 'y' || sure === 'yes')){
  alert('Confidence. I like it! Okay, here we go!');
}
if ((ready === 'n' || ready === 'no') || (sure === 'n' || sure === 'no')){
  alert('Well, I\'m starting anyway.');
}

var answer1 = prompt('Question 1: Are you bigger than a bread box? Y/N');
answer1 = answer1.toLowerCase();
console.log('Answer 1:', answer1);

var answer2 = prompt('Question 2: Are you alive? Y/N');
answer2 = answer2.toLowerCase();
console.log('Answer 2:', answer2);

var answer3 = prompt('Question 3: Do you mostly come out at night, mostly? Y/N');
answer3 = answer3.toLowerCase();
console.log('Answer 3:', answer3);

var answer4 = prompt('Question 4: Are you vulnerable to fire? Y/N');
answer4 = answer4.toLowerCase();
console.log('Answer 4:', answer4);

var answer5 = prompt('Question 5: Can you read minds? Y/N');
answer5 = answer5.toLowerCase();
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
var result = prompt('Am I right? Y/N');
result = result.toLowerCase();

if(result === 'n' || result === 'no'){
  alert('You cheated!');
} else {
  alert('Huzzah!');
}
