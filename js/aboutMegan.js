'use strict';

//as a developer, I want to ask interactive questions, so that the program is personalized

// alert('Welcome to my site, let\'s play a game');
// alert('these are yes and no questions,you must answer with either (Y) or (N)');
// var userName = prompt('What is your name?');
// alert('Hi ' + userName);
// console.log('What is your name? ' + userName);

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
// console.log(' Do you know about me ' + doYouKnowMe);

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
// console.log('Do you think I\'m a dog person' + dogPerson);

// //Do you think I can hop on one foot while rubbing my belly 
// var hop = prompt('Do you think I can hop on one foot while rubbing my belly?');
// hop = hop.toLowerCase();

// if (hop === 'yes' || hop === 'y') {
//   alert('Heck yes I can!!');
// } else if (hop === 'no' || chop === 'n') {
//   alert('Do you think I\'m uncoordinated?');
// } else {
//   alert('Please respond yes or no');
// }
// console.log('Do you think I can hop on one foot while rubbing my belly? ' + hop);

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


//extra 2 questions

//How many kids do you think I have?

alert('let\'s play a guessing game. You\'ll have 4 tries');
var howManyKids = prompt('How many kids do I have? ');
var kidsCounter;

for (kidsCounter = 0; kidsCounter < 3; kidsCounter++) {
  console.log(kidsCounter);

  if (howManyKids > 2) {

    console.log('greater than 2');
    howManyKids = prompt('Sorry, too high. Try again');
  }
  else if (howManyKids < 2) {
    console.log('less than 2');

    howManyKids = prompt('Sorry, too low. Try again');
  }
  else if (howManyKids == 2) {
    console.log('equal to 2');
    alert('You\'re right!!');
    break;
  }
  if ( kidsCounter === 2 ){
    alert('You\'re all out of tries');
  }
}




