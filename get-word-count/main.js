function getWordCount(string) {
  var stringVar = string;
  var word = string.split(" ");

  return word.length;
}



console.log('getWordCount("This is a sample sentence")', getWordCount("This is a sample sentence"));
console.log('getWordCount("Han shot first")', getWordCount("Han shot first"));
console.log('getWordCount("I will not fear, fear is the mind killer")', getWordCount("I will not fear, fear is the mind killer"));
