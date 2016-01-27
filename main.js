debugger
var prompt = require('prompt');
var Word = require("./word.js");
 


// Start the prompt  
prompt.start();

var game = {
  wordBank: ["audi", "text messages", "apple iphone", "i do not like snow", "nissan altima", "rutgers university"],
  
  guessesRemaining: 10,
  
  currentWord: null,
  
  startGame: function(wrd){
    debugger
    var wordArrayIndex = Math.floor( (Math.random() * this.wordBank.length) ); //Choose a number between 0 and wordBank.length-1
    // console.log(wordArrayIndex);
    // console.log(this.wordBank[0]);
    var wordToGuess = this.wordBank[wordArrayIndex];
    // console.log(wordToGuess);
    var wordToUse = new Word(wordToGuess);  //Need to Refactor
    // console.log(wordToUse);
    this.currentWord = wordToUse;
    // console.log(this.currentWord);
    
    this.currentWord.getLets();
    //console.log(this.currentWord.lets); //What are the letters of the word they have to guess?

    this.keepPromptingUser(); 

  },
  
  keepPromptingUser: function(){
    debugger
    var self = this;
    //console.log(self);

    // 
    // Get from the user: Their Guess
    // 
    prompt.get(['guessLetter'], function (err, result) {
      debugger
      //console.log(result);
      console.log("The Letter or space you guessed is " + result.guessLetter);
      
      // Create a variable named findHowManyOfUserGuess, 
      //set it to currentWrd.checkIfLetterFound(result.guessLetter)
      var findHowManyOfUserGuess = self.currentWord.checkIfLetterFound(result.guessLetter);
      console.log("findHowManyOfUserGuess: " + findHowManyOfUserGuess);

      if (findHowManyOfUserGuess === 0){
        console.log( "You guessed Wrong!");
        self.guessesRemaining --;
      } else {
        console.log("You guessed Right!");
        if ( self.currentWord.didWeFindTheWord() === true ){
          console.log("You won!!!!");
          return 1;
        }
      };

      console.log("Guesses remaining: " +  self.guessesRemaining);

      //console log( call the wordRender() method on currentWrd )

      //console.log(self.currentWord.wordRender());
      var currentWordRender = self.currentWord.wordRender();
      console.log(currentWordRender);

      if(self.guessesRemaining > 0 && self.currentWord.found === false ){
        self.keepPromptingUser();
      } else if (self.guessesRemaining === 0) {
        console.log("Game Over Bro. The answer was " + self.currentWord);
      } else {
        //console.log(this.currentWord)
        console.log(this.currentWord.wordRender() );  
      };

    }); //End of if statement for guesses and GameOver

  } //End of keepPromptingUser
}

game.startGame();