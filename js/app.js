'use strict';

console.log('whats up?');

let visitorname = prompt('What is your name?');

alert(`Welcome to my site ${visitorname}! So glad you are here! Please answer these next few yes or no questions the best you can!`);


let question1 = prompt('Do I live in Chicago?').toLowerCase();

if (question1 === 'y' || question1 === 'yes') {
  alert('CORRECTOMUNDO!');
} else if (question1 === 'n' || question1 === 'no') {
  alert('WRONG!');
} else {
  alert('Not a valid answer');
}


let question2 = prompt('Do I have a mustache?').toLowerCase();

if (question2 === 'y' || question2 === 'yes') {
  alert('CORRECTOMUNDO!');
} else if (question2 === 'n' || question2 === 'no') {
  alert('WRONG!');
} else {
  alert('Not a valid answer');
}


let question3 = prompt('Is my favorite color green?').toLowerCase();

if (question3 === 'y' || question3 === 'yes') {
  alert('CORRECTOMUNDO!');
} else if (question3 === 'n' || question3 === 'no') {
  alert('WRONG!');
} else {
  alert('Not a valid answer');
}

let question4 = prompt('I have no pets').toLowerCase();

if (question4 === 'n' || question4 === 'no') {
  alert('CORRECTOMUNDO!');
} else if (question4 === 'y' || question4 === 'yes') {
  alert('WRONG!');
} else {
  alert('Not a valid answer');
}


let question5 = prompt('I have never left the country').toLowerCase();

if (question5 === 'n' || question5 === 'no') {
  alert('CORRECTOMUNDO!');
} else if (question5 === 'y' || question5 === 'yes') {
  alert('WRONG!');
} else {
  alert('Not a valid answer');
}

alert(`Thanks for playing ${visitorname}! Come back soon!`);



