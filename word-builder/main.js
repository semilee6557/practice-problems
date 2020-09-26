function wordBuilder(wordToSpell) {
  var spell = [];
  var word = '';
  for (var i = 0; i < wordToSpell.length; i++) {
    word += wordToSpell[i]
    spell.push(word);
  }
  return spell;
}






console.log('wordBuilder("Stars")', wordBuilder("Stars"))
console.log('wordBuilder("Moon")', wordBuilder("Moon"))
console.log('wordBuilder("Stars")', wordBuilder("Stars"))
