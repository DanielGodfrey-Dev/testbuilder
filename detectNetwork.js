/*

Note: `cardNumber` will always be a string

The Diner's Club network always starts with a 38 or 39 and is 14 digits long

The American Express network always starts with a 34 or 37 and is 15 digits long

Visa always has a prefix of 4 and a length of 13, 16, or 19.

MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.

Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.

Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.

*/


var detectNetwork = function(cardNumber) {

var prefix = cardNumber.slice(0, 2); //first two nums of CC
var threePrefix = cardNumber.slice(0, 3); //first three nums of CC
var fourPrefix = cardNumber.slice(0, 4); //first four nums of CC
var sixPrefix = cardNumber.slice(0, 6); //first six nums of CC
var result; //CC network to be identified

//for checking Maestro CC# length
function lengthCheckMaestro() {
	for (let i = 12; i <= 19; i++) {
		if (cardNumber.length = i) {
			return true;
		    }
      }
  }

//for checking China UnionPay CC# length
function lengthCheckChinaUP() {
	for (let i = 16; i <= 19; i++) {
		if (cardNumber.length = i) {
			return true;
		    }
      }
  }

//for checking China UnionPay CC# first six nums
function prefixCheckChinaUP() {
  for (let i = 622126; i <= 622925; i++) {
    var string = i.toString();
    if (sixPrefix === string) {
      return true;
    }
  }

  for (let j = 624; j <= 626; j++) {
    var string = j.toString();
    if (threePrefix === string) {
      return true;
    }
  }

  for (let k = 6282; k <= 6288; k++) {
    var string = k.toString();
    if (fourPrefix === string) {
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
else if ((fourPrefix === '5018' || fourPrefix === '5020' || fourPrefix === '5038' || fourPrefix === '6304') && (lengthCheckMaestro() === true)) {
	result = 'Maestro';
}

//checking China UnionPay
else if (lengthCheckChinaUP() === true && prefixCheckChinaUP() === true) {
  result = 'China UnionPay';
}

//checking Switch
else if ((fourPrefix === '4903' || fourPrefix === '4905' || fourPrefix === '4911' || fourPrefix === '4936' || fourPrefix === '6333' || fourPrefix === '6759' || sixPrefix === '564182' || sixPrefix === '633110') && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
  result = 'Switch';
}

//case = other network
else {
  result = 'unidentified network';
}

return result;
}


