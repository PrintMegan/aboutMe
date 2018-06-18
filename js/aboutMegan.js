'use strict';

var correctCounter = 0;
//as a developer, I want to ask interactive questions, so that the program is personalized

function welcome() {

  var userName = prompt('What is your name?');
  alert('Hi ' + userName);

  alert('Welcome to my site, let\'s play a game');

  alert('these are yes and no questions,you must answer with either (Y) or (N)');
};
welcome();

//Do you know me?
function knowMe() {
  var doYouKnowMe = prompt('Do you know anything about me already?');
  doYouKnowMe = doYouKnowMe.toLowerCase();
  if (doYouKnowMe === 'yes' || doYouKnowMe === 'y') {
    alert('So now you\'re a Megan expert?');
    correctCounter += 1;
  } else if (doYouKnowMe === 'no' || doYouKnowMe === 'n') {
    alert('How have you not already heard about me? ');
  } else {
    alert('Please respond yes or no');
  }
};

knowMe();

//Am I a dog person?
function dog() {

  var dogPerson = prompt('Do you think I\'m a dog person?');
  dogPerson = dogPerson.toLowerCase();
  if (dogPerson === 'yes' || dogPerson === 'y') {
    alert('I can\'t stand slobbery dogs!');
  } else if (dogPerson === 'no' || dogPerson === 'n') {
    alert('You\'re right, cats are where it\'s at!');
    correctCounter += 1;
  } else {
    alert('Please respond yes or no');
  }
};
dog();

//Do you think I can hop on one foot while rubbing my belly
function belly() {

  var hop = prompt('Do you think I can hop on one foot while rubbing my belly?');
  hop = hop.toLowerCase();
  if (hop === 'yes' || hop === 'y') {
    alert('Heck yes I can!!');
    correctCounter += 1;
  } else if (hop === 'no' || hop === 'n') {
    alert('Do you think I\'m uncoordinated?');
  } else {
    alert('Please respond yes or no');
  }
};
belly();

//Do you think I'm a bad ass already
function superBadass() {

  var badass = prompt('Do you think i\'m a badass yet?');
  badass = badass.toLowerCase();
  if (badass === 'yes' || badass === 'y') {
    alert('Heck fricking yea I\'m a badass!');
    correctCounter += 1;
  } else if (badass === 'no' || badass === 'n') {
    alert('WOW. You underestimate me Sir!');
  } else {
    alert('Please respond with yes or no');
  }
};
superBadass();

function sweets() {

  var cake;
  var cakeBool = true;

  do {
    cake = prompt('Do I looooooove cake');
    cake = cake.toLowerCase();

    if (cake === 'yes' || cake === 'y') {
      alert('Heck fricking yea I love cake');
      correctCounter += 1;
      cakeBool = false;
    } else if (cake === 'no' || cake === 'n') {
      alert('WOW. You uncultured swine!');
      cakeBool = false;
    } else {
      alert('Please respond with yes or no');
    }
  } while (cakeBool);
};
sweets();

//extra 2 questions

function kids() {

  alert('let\'s play a guessing game. You\'ll have 4 tries');

  //How many
  var howManyKids;
  var kidsCounter;
  var rightAnswer = false;

  for (kidsCounter = 0; kidsCounter < 4; kidsCounter++) {
    howManyKids = prompt('How many kids do I have? ');
    if (howManyKids > 2) {
      //TOO HIGH GUESS
      alert('Sorry, too high.');
    } else if (howManyKids < 2) {
      //TOO LOW GUESS
      alert('Sorry, too low.');
    } else if (howManyKids == 2) {
      //RIGHT GUESS
      alert('You\'re right!!');
      correctCounter += 1;
      rightAnswer = true;
      // break;
    }
    if (rightAnswer === true) {
      break;
    }
    if (kidsCounter === 3 && rightAnswer === false) {
      //RAN OUT OF GUESSES
      alert('You\'re all out of tries');
    }

  }
};
kids();


//states I lived in.
alert('Can you guess a state I\'ve lived in? You\'ll have 6 tries ');

var statesLivedIn = ['california', 'oregon', 'pennsylvania', 'north carolina'];
var numOfGuesses = 0;
var state;
var correctAnswer = false;


function stateGuess() {

  for (numOfGuesses = 0; numOfGuesses < 6; numOfGuesses++) {
    state = prompt();

    for (var i = 0; i < statesLivedIn.length; i++) {
      if (state === statesLivedIn[i]) {
        alert('success!');
        correctCounter += 1;
        correctAnswer = true;
        break;
      }
      else {
        correctAnswer = false;

      }

    }
    if (correctAnswer === true) {
      break;
    }

  }
  if (numOfGuesses === 6 && correctAnswer === false) {
    alert('sorry you are all out of guesses');
  }
};

stateGuess();


alert('The states are ' + statesLivedIn);
alert('You got ' + correctCounter + ' out of 7 right');


