// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldSandwichMaker) {

  // Private variable to store the different meat prices
  var meatPrice = {
  	Turkey: 1.50, 
  	Ham: 1.25, 
  	Chicken: 1.75
  }; 

  oldSandwichMaker.getMeatPrice = function(meat) {
  	console.log(meat);
  	return meatPrice[meat];
  };

return oldSandwichMaker;

})(SandwichMaker);

