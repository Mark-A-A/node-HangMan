debugger

function Letter(let) {              // Start by creating a constructor function named Letter
                                    // it should take an argument let
  this.charac = let;                // create a property called charac and store the argument let
  
  this.appear = false;              // create a property called appear  - set it to false
  
  this.letterRender = function(){   // create a function inside of the Letter constructor called letterRender
    if (this.appear === false) {        // when the function letterRender is called
                                    // it will check the value of charac
      return ("_");                 // if false return a string "_", 
    } else if (this.appear === true) {        //  else it will return the value charac
      return this.charac
    }
  }
}

module.exports = Letter;       // export the Letter constuctor function with module.exports = Letter;