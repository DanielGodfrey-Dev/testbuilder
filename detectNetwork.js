// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
 
var firstNums = cardNumber.slice(0, 2); //first two nums of CC
var result; //CC network to be identified

//checking Diner's Club
if ((firstNums === '38' || firstNums === '39') && cardNumber.length == 14) {
  result = 'Diner\'s club';
} 

//checking American Express
else if ((firstNums === '34' || firstNums === '37') && cardNumber.length == 15) {
  result = 'American Express';
} 

//case = other network
else {
  result = 'unidentified network';
}
return result;
};
