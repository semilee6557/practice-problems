function zipCodeValidator(zipCodeValidate) {
  for (var i = 0; i < zipCodeValidate.length; i++) {
    if (!zipCodeValidate[i]) {
      return false;
    }
  }

  return zipCodeValidate.length === 5;

}










console.log('zipCodeValidator("21594")', zipCodeValidator("21594"));
console.log('zipCodeValidator("3Eds32")', zipCodeValidator("3Eds32"));
console.log('zipCodeValidator("9123465")', zipCodeValidator("9123465"));
