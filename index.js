// write your code below!
function happyHolidays() {
  return "Happy holidays!" ;
}
happyHolidays()

function happyHolidaysTo(name){
 return "Happy holidays, " + 'you!';
 }
 happyHolidaysTo()

 function happyHolidayTo(holiday,name){
   return `Happy ${holiday}, ${name}!`;
 }
 happyHolidayTo('Independence Day', 'you!');

 function holidayCountdown(holiday,days){
  return `It's ${days} days until ${holiday}!`;
}
holidayCountdown(20, 'Mother\'s Day');
