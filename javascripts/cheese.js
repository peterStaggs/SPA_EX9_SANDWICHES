// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldSandwichMaker) {

  // Private variable to store the different meat prices
  var cheesePrice = {
  	Bleu: 1.50, 
  	Cheddar: 1.25, 
  	Jack: 1.75
  }; 

  oldSandwichMaker.getCheesePrice = function(cheese) {
      return cheesePrice[cheese]; 
  };
  return oldSandwichMaker;

})(SandwichMaker);