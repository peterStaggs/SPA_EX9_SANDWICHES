var SandwichMaker = (function(oldSandwichMaker) {

var condimentPrice = {
	Katsup: 0.30,
	Mayo: 0.30,
	Wasabi: 0.75
};

oldSandwichMaker.getCondimentPrice = function(condiment) {
	return condimentPrice[condiment]; 
};

return oldSandwichMaker;

})(SandwichMaker); 