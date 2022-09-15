'use strict';

console.log('whats up?');

let score = 0;

let visitorname = prompt('What is your name?');

alert(`Welcome to my site ${visitorname}! So glad you are here! Please answer this quiz the best you can!`);


let question1 = prompt('Do I live in Chicago?').toLowerCase();

if (question1 === 'y' || question1 === 'yes') {
  alert('CORRECTOMUNDO!'); score ++;
} else if (question1 === 'n' || question1 === 'no') {
  alert('WRONG!');
} else {
  alert('Not a valid answer');
}


let question2 = prompt('Do I have a mustache?').toLowerCase();

if (question2 === 'y' || question2 === 'yes') {
  alert('CORRECTOMUNDO!'); score ++;
} else if (question2 === 'n' || question2 === 'no') {
  alert('WRONG!');
} else {
  alert('Not a valid answer');
}


let question3 = prompt('Is my favorite color green?').toLowerCase();

if (question3 === 'y' || question3 === 'yes') {
  alert('CORRECTOMUNDO!'); score ++;
} else if (question3 === 'n' || question3 === 'no') {
  alert('WRONG!');
} else {
  alert('Not a valid answer');
}

let question4 = prompt('I have no pets').toLowerCase();

if (question4 === 'n' || question4 === 'no') {
  alert('CORRECTOMUNDO!'); score ++;
} else if (question4 === 'y' || question4 === 'yes') {
  alert('WRONG!');
} else {
  alert('Not a valid answer');
}


let question5 = prompt('I have never left the country').toLowerCase();

if (question5 === 'n' || question5 === 'no') {
  alert('CORRECTOMUNDO!'); score ++;
} else if (question5 === 'y' || question5 === 'yes') {
  alert('WRONG!');
} else {
  alert('Not a valid answer');
}

const year = 1982;

let guess = 4;
let question6 = 0;

while (question6 !== year && guess > 0) {
  question6 = parseInt(prompt('Guess What Year The Chart Topping Album Thriller by Michael Jackson was Released, you only have 4 chances'));
  if (question6 > year) {
    alert('Too high please try again'); guess --;
  } else if (question6 < year){
    alert('Too low please try again'); guess --;
  } else if (question6 === year) {
    alert('CORRECT'); score ++;
  }
}

if (guess < 1) {
  alert('You ran out of guesses, the correct answer was 1982!');
}


// Denis helped me figure out this last question.

const band = ['daft punk', 'phoenix', 'billy strings', 'smashing pumpkins', 'prince', 'phoebe bridgers', 'my bloody valentine', 'tycho', 'grateful dead', 'harry styles'];




let numTrys = 0;
let correct = false;

while (numTrys < 6 && correct === false) {
  let question7 = prompt('Name a favorite musical arists of mine that isnt my boy Michael Jackson, beware you have six chances!').toLowerCase();
  for (let i = 0; i < band.length; i++) {
    if (band[i] === question7) {
      alert(`Yay thats one! Heres my whole list: ${band}.`);
      correct = true;
      score++;
      break;
    }
  }
  numTrys++;
  if (correct === false) {
    alert('Sorry, that was not one of them');
  }
}
if (correct === false) {
  alert(`Sorry friend maybe next time, heres my list ${band}.`);
}


alert(`Thanks for taking my quiz, ${visitorname}. Your score was ${score} out of 7`);
