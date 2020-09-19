
function decimalPlaceCounter(stringNumber) {
 var decimalPlace;
  for(var i = 0; i<stringNumber.length; i++){
    if(stringNumber[i]==='.'){
      decimalPlace = stringNumber.length-i-1;
      break;
    } else {
      decimalPlace = 0;
    }
  }
 return decimalPlace;
}


console.log('decimalPlaceCounter("127.245")', decimalPlaceCounter("127.245"));
console.log('decimalPlaceCounter("145")', decimalPlaceCounter("145"));
console.log('decimalPlaceCounter("23.00")', decimalPlaceCounter("23.00"));
