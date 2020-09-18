function createRepeatingLetters(string, number){
   var result = [];
   var final = '';
  for(var i = 0; i<string.length; i++) {
    for(var n = 0; n<number; n++){
      result.push(string[i]);
    }
  }
  for (var a = 0; a < result.length; a++) {
  final += result[a];
  }
  return final;
}


console.log('createRepeatingLetters("John", 3)', createRepeatingLetters("John", 3) )
console.log('createRepeatingLetters("car", 4)', createRepeatingLetters("car", 4))
console.log('createRepeatingLetters("howdy", 1)', createRepeatingLetters("howdy", 1))
