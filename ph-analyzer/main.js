function phAnalyzer(pH) {
  if (pH < 7) {
    return 'acidic';
  } else if (pH == 7) {
    return 'neutral';
  } else if (7 < pH && pH<=14) {
    return 'alkaline';
  } else {
    return 'invalid pH value';
  }

}

console.log(phAnalyzer(4));
console.log(phAnalyzer(7));
console.log(phAnalyzer(12));
console.log(phAnalyzer(25));
