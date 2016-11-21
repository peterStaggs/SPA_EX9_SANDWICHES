var SandwichMaker = (function(oldSandwichMaker) {

var breadPrice = {
	Rye: 2.00,
	Wheat: 2.00,
	White: 2.00
};

oldSandwichMaker.getBreadPrice = function (bread) {
	return breadPrice[bread]
};

return oldSandwichMaker;

})(SandwichMaker); 