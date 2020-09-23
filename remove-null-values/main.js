function removeNullValues(array) {
  var result = [];
  for(var i = 0; i<array.length; i++){
    if (array[i] !== null) {
      result.push(array[i]);
    }
  }
  return result;
}



console.log(removeNullValues([3, 5, null, null, 87, "hello", "goodbye"]));
console.log(removeNullValues([true, null, false, {}, null, 43, "node"]));
console.log(removeNullValues([null, null, null, 7, null, "eight"]));
