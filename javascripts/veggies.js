var SandwichMaker = (function(oldSandwichMaker) {

var veggiePrice = {
	Lettuce: 0.30,
	Tomato: 0.30,
	Onion: 0.30
};

oldSandwichMaker.getVeggiePrice = function(veggies) {
	return veggiePrice[veggies]
};

return oldSandwichMaker;

})(SandwichMaker); 