function isWithinRange(number, rangeObject) {
  return number>=rangeObject.min&& number<=rangeObject.max;
}






console.log('isWithinRange(5, { min: 1, max: 9 }) ', isWithinRange(5, { min: 1, max: 9 }) );
console.log('isWithinRange(12, { min: 15, max: 29 }) ', isWithinRange(12, { min: 15, max: 29 }) );
console.log('isWithinRange(9, { min: 0, max: 9 })', isWithinRange(9, { min: 0, max: 9 }));
