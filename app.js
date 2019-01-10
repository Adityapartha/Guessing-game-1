// var user = prompt('what is your name');
// console.log(user);

// alert('Hi there I\m going to ask you few question');

// var dogs = prompt('Do you have any dogs' + user + 'please answer with yes or no');
//  var user=prompt('what is your name')
// if (toUpperCase(dogs) === 'YES'){
// }else {
//     alert('dogs are the coolest animal');
// }

// var running = prompt('Is running your favorite?');
// if (toLowercase(running) === 'yes')


// var water = prompt ('Do you like drinking water'+ user );
// if (toUpperCase(water) === 'NO'){
// }else {
//     alert('Its is healthly for you');
// }
// var coding = prompt('Do like coding?'+ user );
// if(toUpperCase(coding) === 'yes')

// var walking = prompt(user + 'do you walk every day to work?');
// if (toLowercase(walking) === 'YES');
var score = 0
var states = ['california' , 'florida', 'arizona', 'texas', 'nevada']
var randowNumber = Math.floor(Math.random() * 21 );

var user = prompt('what is your name');
console.log(user);

alert("Hi there I'm going to ask you few question");

function questionTwo() {
var dogs = prompt('Do you have any dogs ' + user + ' please answer with yes or no');

if (dogs.toUpperCase() === 'YES' || 'Y'){
    alert('you were right');
    score++
} else{
    alert('sorry wrong answer');
}
console.log(dogs);
}

function questionThree() {
var water = prompt ('Do you like drinking water '  + user );
if (water.toUpperCase() === 'NO'){
    alert('right answer');
    score++
} else{
    alert('sorry wrong answer');
}
console.log(water);
}

function questionFour() {
var running = prompt('Is running your favorite?');
if (running.toLowerCase() === 'yes'){
    alert('that is the right answer');
    score++
} else{
    alert('sorry wrong answer');
}
console.log(running);
}

function questionFive() {
var coding = prompt('Do like coding ' + user + '?');
if(coding.toLowerCase() === 'yes'){
    alert('right answer');
    score++
} else{
    alert('wrong answer');
}
console.log(coding);
}

function questionSix() {
var walking = prompt(user + ' do you walk every day to work?');
if (walking.toLowerCase() === 'yes'){
    alert('nice that is the right answer');
    score++
} else{ 
    alert('sorry wrong answer');
}
}

function questionSeven() {
 console.log('randowNumber is equal to ', randowNumber)

for (var i= 6; i > 0; i--) {
var number = parseInt(prompt(user +  ' what is my favorite number'));

if (randowNumber < number){
    alert(user + ' guessed the number to high')
} else if (randowNumber > number){
    alert(user + ' gussed the number to low')
} else if (randowNumber === number){
    alert('wow you got the right answer');
    score++
    var i= 0
}
}
console.log('what is my favorite number', randowNumber);
}

function questionEight() {
console.log('states is equal to', states)

for (var i= 6; i > 0; i--){
    var states = prompt(user + ' can you guess the state that i spend my time durning summer');
    
if (states.toLowerCase() === 'california' || states.toLowerCase() === 'nevada'){
    alert(user + ' that is the right answer')
    score++
    break
} else {
    alert(user + ' you guess wrong')
}
}
}

questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
questionEight();

alert('you got ' + score + ' out of 7 question correct, ' + user + ' better luck next time' );
console.log(score);

