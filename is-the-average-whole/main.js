function isTheAverageWhole(numbersArray){
 var average=0;
 var total=0;
  for(var i=0; i<numbersArray.length; i++){
    total += numbersArray[i];
  }
  average = total/numbersArray.length;
  return parseInt(average) === parseFloat(average);
}

console.log('isTheAverageWhole([1, 3, 4, 4])', isTheAverageWhole([1, 3, 4, 4]));
console.log('isTheAverageWhole([3, 4])', isTheAverageWhole([3, 4]));
console.log('isTheAverageWhole([5, 5, 5])', isTheAverageWhole([5, 5, 5]));
