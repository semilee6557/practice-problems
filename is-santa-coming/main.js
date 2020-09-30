
function isSantaComing(dateObject){
  var christmas = {
    month : 11,
    date : 24
  }

  return dateObject.getMonth() ===christmas.month && dateObject.getDate()===christmas.date;

}







console.log('isSantaComing(new Date(2001, 11, 24))', isSantaComing(new Date(2001, 11, 24)));
console.log('isSantaComing(new Date(2018, 7, 4))', isSantaComing(new Date(2018, 7, 4)));
console.log('isSantaComing(new Date(1995, 11, 23, 23, 59, 59))', isSantaComing(new Date(1995, 11, 23, 23, 59, 59)));
