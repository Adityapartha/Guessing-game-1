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
var user = prompt('what is your name');
console.log(user);

alert("Hi there I'm going to ask you few question");

var dogs = prompt('Do you have any dogs ' + user + ' please answer with yes or no');

if (dogs.toUpperCase() === 'YES' || 'Y'){
    alert('you were right');
}else {
    alert('sorry wrong answer');
}

var water = prompt ('Do you like drinking water' + user );
if (water.toUpperCase() === 'NO'){
    alert('right answer');
}else {
    alert('sorry wrong answer');
}


var running = prompt('Is running your favorite?');
if (running.toLowerCase() === 'yes'){
    alert('that is the right answer');
}else{
    alert('sorry wrong answer');
}

var coding = prompt('Do like coding?' + user );

if(coding.toLowerCase() === 'yes'){
    alert('right answer');
}else{
    alert('wrong answer');
}


var walking = prompt(user +  'do you walk every day to work?');
if (walking.toLowerCase() === 'YES'){
    alert('nice that is the right answer');
}else{ 
    alert('sorry wrong answer better luck next time');
}
