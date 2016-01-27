debugger
var letter = require("./letter.js");

function Word(wrd) {
  debugger
  this.word = wrd,
  
  this.lets = [],
  
  this.found = false,

  this.getLets = function(){
    debugger                       //Function to build Letter objects of word to guess
    for( var i = 0; i < this.word.length; i++){     //Letters are put into "lets" array
      var wordLetter = this.word[i];
      //console.log(wordLetter);
      var wordLetterObject = new letter(wordLetter);
      //console.log(wordLetterObject);
      this.lets.push(wordLetterObject);
      
    }
    console.log("Arrary of Letters: "+this.lets); // Print array of word letters
    return this.lets;
  },

  this.checkIfLetterFound = function(guessLetter){
    debugger

    var whatToReturn = 0;                                 //counter for letters 
    
    for (var i = 0; i < this.lets.length; i++){
      //console.log( this.lets[i] );                        //checking letter object
      //console.log( this.lets[i].charac );             //What is the letter to compare to?
      
      if( (this.lets[i].charac) === guessLetter) {    //If guessed letter = word letter
        this.lets[i].appear = true;                   //Set the appear object to true
        whatToReturn += 1;                            //Increase the count of whatToReturn
      }
      
      //console.log("whatToReturn: " + whatToReturn);
      
    }
    return whatToReturn;
  },

  this.didWeFindTheWord = function(){
    debugger
    this.lets.every = function(curLet) { //curLet = current letter
      //console.log(curLet);
      if(curLet.appear === true){
       this.found = true; 
      }
    }
    return this.found;
  },

  this.wordRender = function WordRender() {   
    debugger                                                                                                                                      
      //create a variable called str set it to "" empty string                                                                                                                  
    var str = '';
    console.log(str);
    //it will run a loop that iterate over each object in let array
    //everytime the loop iterates, calling the letterRender on that object and then string 
    //concatenate that to the varaible str

    for (var i= 0; i <this.lets.length; i++){
      debugger
      //console.log(this.lets[i]);
      var letter2Render = this.lets[i];
      //console.log(letter2Render);
      //console.log( this.lets[i].letterRender( letter2Render ));
      str += this.lets[i].letterRender(this.lets[i]) + " ";
      //console.log(str);
    }
    return str
    
  }
}; //End of Word object

module.exports = Word;

// var newWord = new Word("apple");  //This works
// console.log(newWord);

// var wordLetters = newWord.getLets();
// console.log(wordLetters);

// var letterCheckIfFound = newWord.checkIfLetterFound("v");
// console.log(letterCheckIfFound);

// var newLetterRender = newWord.wordRender();
// console.log(newLetterRender);
