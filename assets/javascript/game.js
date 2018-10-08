$(document).ready(function() {
    
$("#gamename").html("Welcome to Crystal Counters!").fadeToggle(1000).fadeToggle(1000);

var arr = [0,1,2,3,4,5,6,7,8,9,10,11,12];
var userScore = 0;


function score (min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}

var scoreTarget = score(19, 120);
var crystal1 = arr[score(1,12)];
var crystal2 = arr[score(1,12)];
var crystal3 = arr[score(1,12)];
var crystal4 = arr[score(1,12)];

console.log(scoreTarget);
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);
// POTENTIAL PROBLEM - CRYSTALS COULD BE SET AT THE SAME POINT VALUE - Nothing against this in directions but assume they should all be different.

$("#target-score").html("Target Score: " + scoreTarget);
$("#user-score").html ("Current Score: " + userScore);































});