//Current word is randomly chosen from an array. this was called computerChoices in last
var cuteAnimals =["rabbits", "deer", "bears", "ducks"]

// or??? below to define the cuteAnimals? 

//by making it an object??
var cuteAnimals = {
	01: "rabbits",
	02: "deer",
	03: "bears",
	04: "ducks"
};

//The varriable for the users unsucceful guesses
var previousGuess = [];

// Variable for wins
var wins = 0;
// Variable for losses
var losses = 0;
// Variable for how many guesses are left 
var guessLeft = 10;
 
//============== Function to Start the Game ================//

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed by the user
  var userGuess = event.key;

  //Disables the same key from being clicked twice!!!!!
  if(previousGuess.includes(userGuess)) {
  return;
}

  //Previous guess is uploaded 
  previousGuess.push(userGuess);

  // //Attempt to cancel out repeat keystrokes
  // var repeat = event.repeat;
  // var KeyboardEvent.repeat(false)


  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  if () {


    if (userGuess === computerGuess) {
      //If the user matches computer then they gain point
      wins++;
      previousGuess = [];
      guessLeft = 9;

    }
    if (userGuess !== computerGuess) {
      //Subtract a guess when you pick a letter that does not match the computers choice
      guessLeft--;
    }

    if (guessLeft === 0) {
      //Add a point to losses if you run out of points before guessing the right letter
      losses++;
      //Guesses will return to 9 when you run out of guesses
      guessLeft = 9;
      previousGuess = [];
    }


  }





//Word is displayed to the screen with missing characters represented by "_"

//Measure the length of the word to determine ammount the "_"'s

//Press any key to get started with guessing 

//Variable Wins

// Variable for current word trying to guess

//Variable for number of remaining guesses

//Variable for Letters already guessed

//If user guesses correct letter
  //Letter is pushed to fill one of the "_"'s in the current word
  //Remaining guesses goes down by one

//If user guesses incorrect letter
  //Letter is pushed to the already guessed letters
  //Create a func to prevent usage of the same letters being pressed if they are not correct
  //Remaining guesses goes down by one 

//If user runs out of guesses before completing the word
  //Word is randomized 
  //Guesses go back to the original number





  // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
  var html =
    "<h1>Hangman</h1>" +
    "<p>Press any key to get started!<p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>Current Word: " + //whatever the func is to call random letter// + "</p>" +
    "<p>Guesses Left: " + guessLeft + "</p>" +
    "<p>Your Guesses so far: " + previousGuess.join(", ") + "</p>"


  // Set the inner HTML contents of the #game div to our html string. Updating the page itself
  document.querySelector("#game").innerHTML = html;
}