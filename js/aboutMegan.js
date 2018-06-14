'use strict';

//as a developer, I want to ask interactive questions, so that the program is personalized

// var userName = prompt('What is your name?');
// alert('Hi ' + userName);

// alert('Welcome to my site, let\'s play a game');

// alert('these are yes and no questions,you must answer with either (Y) or (N)');

// //Do you know me?
// var doYouKnowMe = prompt('Do you know anything about me already?');
// doYouKnowMe = doYouKnowMe.toLowerCase();
// if (doYouKnowMe === 'yes' || doYouKnowMe === 'y') {
//   alert('So now you\'re a Megan expert?');
// } else if (doYouKnowMe === 'no' || doYouKnowMe === 'n') {
//   alert('How have you not already heard about me? ');
// } else {
//   alert('Please respond yes or no');
// }

// //Am I a dog person?
// var dogPerson = prompt('Do you think I\'m a dog person?');
// dogPerson = dogPerson.toLowerCase();
// if (dogPerson === 'yes' || dogPerson === 'y') {
//   alert('I can\'t stand slobbery dogs!');
// } else if (dogPerson === 'no' || dogPerson === 'n') {
//   alert('You\'re right, cats are where it\'s at!');
// } else {
//   alert('Please respond yes or no');
// }

// //Do you think I can hop on one foot while rubbing my belly 
// var hop = prompt('Do you think I can hop on one foot while rubbing my belly?');
// hop = hop.toLowerCase();
// if (hop === 'yes' || hop === 'y') {
//   alert('Heck yes I can!!');
// } else if (hop === 'no' || hop === 'n') {
//   alert('Do you think I\'m uncoordinated?');
// } else {
//   alert('Please respond yes or no');
// }

// //Do you think I'm a bad ass already
// var badass = prompt('Do you think i\'m a badass yet?');
// badass = badass.toLowerCase();
// if (badass === 'yes' || badass === 'y') {
//   alert('Heck fricking yea I\'m a badass!');
// } else if (badass === 'no' || badass === 'n') {
//   alert('WOW. You underestimate me Sir!');
// } else {
//   alert('Please respond with yes or no');
// }
// console.log('Do you think I am a badass ' + badass);

// //extra 2 questions

alert('let\'s play a guessing game. You\'ll have 4 tries');

//How many
var howManyKids = prompt('How many kids do I have? ');
var kidsCounter;

for (kidsCounter = 0; kidsCounter < 3; kidsCounter++) {
  if (howManyKids > 2) {
    //TOO HIGH GUESS
    howManyKids = prompt('Sorry, too high. Try again');
  }
  else if (howManyKids < 2) {
    //TOO LOW GUESS
    howManyKids = prompt('Sorry, too low. Try again');
  }
  //RIGHT GUESS
  else if (howManyKids == 2) {
    alert('You\'re right!!');
    break;
  }
  if (kidsCounter === 2) {
    //RAN OUT OF GUESSES
    alert('You\'re all out of tries');
  }
}
//states I lived in.
alert('Can you guess a state I\'ve lived in? You\'ll have 6 tries ');

var statesLivedIn = ['california', 'oregon', 'pennsylvania', 'north carolina'];
var numOfGuesses = 0;
var state;
var correctAnswer = false;







for (numOfGuesses = 0; numOfGuesses < 6; numOfGuesses++) {
  state = prompt();



  for (var i = 0; i < statesLivedIn.length; i++) {
    console.log(state, statesLivedIn[i], i);
    if (state === statesLivedIn[i]) {
      alert('success!');
      correctAnswer = true;
      break;
    }
    else {
      correctAnswer = false;

    }

  }
  if (correctAnswer === true) {
    break;
  } else {
    alert('sorry your are all out of guesses');

  }

}



alert('The states are ' + statesLivedIn);


