function payscaleAnalyzer(payList) {
  var lowest=payList[0];
  var hightest = payList[0];

  for(var i = 0; i<payList.length; i++){
    if (payList[i]<lowest){
      lowest=payList[i];
    }else if(payList[i]>hightest){
      hightest=payList[i];
    }
  }
  return hightest-lowest;
}


console.log('payscaleAnalyzer([28, 34, 21, 39])', payscaleAnalyzer([28, 34, 21, 39]))
console.log('payscaleAnalyzer([18, 22, 19, 26])', payscaleAnalyzer([18, 22, 19, 26]))
console.log('payscaleAnalyzer([41.50, 27.25, 32.50, 29.60])', payscaleAnalyzer([41.50, 27.25, 32.50, 29.60]))
