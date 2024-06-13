// game pattern 
var gamePattern = []

// An Arrays of color
var buttonColors = ["red", "blue", "green", "yellow"]


// function for the next sequence
function nextSquence(params) {

    //generating random number between the range of 0-3
    randomNumber = Math.floor(Math.random() * 3) + 1;
    
    // random choosen color
    var randomChosenColour = buttonColors[randomNumber];

    //adding the radom coosen color to the empty game pattern array
    gamePattern.push(randomChosenColour);

    // using jquery to select the id as the random chosen color
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // adding the music sound using
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();



}   
