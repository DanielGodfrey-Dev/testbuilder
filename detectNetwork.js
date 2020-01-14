/*Note: `cardNumber` will always be a string

The Diner's Club network always starts with a 38 or 39 and is 14 digits long

The American Express network always starts with a 34 or 37 and is 15 digits long

Visa always has a prefix of 4 and a length of 13, 16, or 19.

MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.

Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.*/

var detectNetwork = function(cardNumber) {

var prefix = cardNumber.slice(0, 2); //first two nums of CC
var threePrefix = cardNumber.slice(0, 3); //first three nums of CC
var fourPrefix = cardNumber.slice(0, 4); //first four nums of CC
var result; //CC network to be identified

//for checking Maestro CC# length
function lengthCheck() {
	for (let i = 12; i <= 19; i++) {
		if (cardNumber.length = i) {
			return true;
		    }
      }
  }

//checking Diner's Club
if ((prefix === '38' || prefix === '39') && cardNumber.length == 14) {
  result = 'Diner\'s Club';
} 

//checking American Express
else if ((prefix === '34' || prefix === '37') && cardNumber.length == 15) {
  result = 'American Express';
} 

//checking Visa
else if (prefix[0] === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
  result = 'Visa';
}

//checking MasterCard
else if ((prefix === '51' || prefix === '52' || prefix === '53' || prefix === '54' || prefix === '55') && cardNumber.length === 16) {
  result = 'MasterCard';
}

//checking Discover
else if ((fourPrefix === '6011' || threePrefix === '644' || threePrefix === '645' || threePrefix === '646' || threePrefix === '647' 
	|| threePrefix === '648' || threePrefix === '649' || prefix === '65') && (cardNumber.length === 16 || cardNumber.length === 19)) {
	result = 'Discover';
}

//checking Maestro
else if ((fourPrefix === '5018' || fourPrefix === '5020' || fourPrefix === '5038' || fourPrefix === '6304') && (lengthCheck() === true)) {
	result = 'Maestro';
}

//case = other network
else {
  result = 'unidentified network';
}

return result;
};


