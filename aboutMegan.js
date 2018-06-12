'use strict'; 

//as a developer, I want to ask interactive questions, so that the program is personalized

alert('A little about Megan');

var userName = prompt('Welcome, what is your name?');
alert('Hi ' + userName);
console.log('What is your name? ' + userName); 

//Do you know me?
var doYouKnowMe = prompt('Do you know anything about me already?');
doYouKnowMe = doYouKnowMe.toLowerCase();
if (doYouKnowMe === 'yes' || doYouKnowMe === 'y'){
  alert('So now you\'re a Megan expert?');
} else if ( doYouKnowMe === 'no' || doYouKnowMe === 'n'){
  alert('How have you not already heard about me? ');
} else { 
  alert('Please respond yes or no');
}
console.log(' Do you know about me ' + doYouKnowMe);

//Am I a dog person?
var dogPerson = prompt('Do you think I\'m a dog person?');
dogPerson = dogPerson.toLowerCase();
if (dogPerson === 'yes' || dogPerson === 'y' ){
  alert('I can\'t stand slobbery dogs!' );
} else if (dogPerson === 'no' || dogPerson === 'n'){
  alert('You\'re right, cats are where its at!');
} else { 
  alert('Please respond yes or no');
}
console.log('Do you think I\'m a dog person' + dogPerson);

//CASTLE
var castle = prompt('Do you think I live in a castle?');
castle = castle.toLowerCase();
if (castle === 'yes' || castle === 'y'){
  alert('You\'re right! I DO live in a castle!');
} else if (castle === 'no' || castle === 'n') {
  alert('Wrong, I DO live in a castle!');
} else {
  alert('Please respond yes or no');
}
console.log('Do you think I live in a castle? ' + castle);

//PRINCESS
var princess = prompt('Do you think i\'m a princess?');
princess = princess.toLowerCase();
if(princess === 'yes' || princess === 'y'){
  alert ('You\'re right! I AM a princess. My name is Cinderella!');
} else if (princess === 'no' || princess === 'n'){
  alert('Sorry! I AM a princess! My name is Cinderella');
} else {
  alert('Please respond with yes or no');
}
console.log('Do you think I am a princess? ' + princess);



