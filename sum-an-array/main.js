function sumArray(array) {
  var sum=null;
  for(var i =0; i<array.length; i++){
    sum += array[i];
  }
  return sum;
}

console.log("sumArray([10,5,3,7,2])", sumArray([10,5,3,7,2]));
console.log("sumArray([1,2,3,4,5])", sumArray([1,2,3,4,5]));
console.log("sumArray([5,3,7,4])", sumArray([5,3,7,4]));
