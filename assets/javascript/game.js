	//This code is used for javascript to only load once html has completly loaded 
	// document.ready() {

	//This is the Array for computerChoices goes 
	var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	// console.log(computerChoices); 

	//Here are variables
	var wins = 0;
	// console.log(wins); 

	var losses = 0;
	// console.log(losses); 

	var guessLeft = 9;
	// console.log(guessLeft);

	var yourGuessesSoFar = []; //users choices would be pushed here 
	// console.log(yourGuessesSoFar); 


// This function occurs whenever the guess pushes and releases a key  
document.onkeyup = function(event){

	//This will take in the users guesses
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();  
	
	//Here the computer will generate a random letter 
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.
		length)]; 

	//This will push the users guess along with guesses so far
	yourGuessesSoFar.push(userGuess); 

	//Here is the logic that will determine whether the game is won, number of guesses are decreased...
	
	if (userGuess === computerGuess){
		wins++; 
		alert('YOU WIN!'); 
		guessLeft = 9; //This will reset the number of guesses left
		yourGuessesSoFar.length = 0;  

	}
	else if (guessLeft === 0){
		losses++;
		alert('YOU LOST! Womp Womp Womp'); 
		guessLeft = 9; 
		yourGuessesSoFar = []; 
	}
	else if (userGuess !== computerGuess){
		guessLeft--; //this will decrease the value of guessLeft by 1 each time user selects wrong 
	}
	// Taking the tallies and displaying them in HTML    
        var html = "<h1>Psychic Game</h1>" + 
        "<h2>Guess what letter I'm thinking of</h2>" +
        "<p>Wins: " + 
        wins + 
        "</p>" +
        "<p>Losses: " + 
        losses + 
        "</p>" +
        "<p>Guesses Left: " + 
        guessLeft + 
        "</p>" +
        "<p>Your Guesses So Far: " +
        yourGuessesSoFar +
        " </p>"
        ;
        // Placing the html into the game ID
        document.querySelector('#game').innerHTML = html;
}

// }
