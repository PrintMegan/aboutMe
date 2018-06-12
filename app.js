'use strict'; 

//as a developer, I want to ask interactive questions, so that the program is personalized

alert('Am I a princess?');

var userName = prompt('Welcome, what is your name?');
alert('Hi ' + userName);
console.log('What is your name? ' + userName); 

//WINGS
var wings = prompt('Do you think I have wings?');
wings = wings.toLowerCase();
if (wings === 'yes' || wings === 'y'){
  alert('I do NOT have wings.');
} else if ( wings === 'no' || wings === 'n'){
  alert('You\'re right, I DON\'T have wings! ');
} else { 
  alert('Please respond yes or no');
}
console.log(' Do you think I have wings? ' + wings);

//CROWN
var crown = prompt('Do you think I have a crown?');
crown = crown.toLowerCase();
if (crown === 'yes' || crown === 'y' ){
  alert('You\'re right! I do wear a crown!');
} else if (crown === 'no' || crown === 'n'){
  alert('Wrong! I DO wear a crown!');
} else { 
  alert('Please respond yes or no');
}
console.log('Do you think I wear a crown? ' + crown);

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



