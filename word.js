var letter = require("./letter.js");

function Word(wrd) {
  this.word = wrd,
  
  this.lets = [],
  
  this.found = false

  this.GetLets = function(){
    for( var i = 0; i < this.word.length; i++){
      var wordLetter = this.word[i];
      this.lets.push(wordLetter);
      console.log(this.lets);
    }
  },

  this.CheckIfLetterFound = function(){

  },

  this.DidWeFindTheWord = function(){

  },

  this.WordRender = function() {
    function WordRender () {                                                                                                                                         
//create a variable called str set it to "" empty string                                                                                                                  
var str = '';
//it will run a loop that iterate over each object in let array
//everytime the loop iterates, calling the letterRender on that object and then string //concatenate that to the varaible str

  for (var i= 0; i <this.lets.length; i++){
    str += Letter.letterRender(i);
    return str
  }

}
  }
}