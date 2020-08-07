// creates a new Date object
let rightNow = new Date();

// getDate() returns the day of the month from 1-31
let currentDayOfMonth = rightNow.getDate();

// getDay() returns the current day of the week from 0-6
// 0 being Sunday and 6 being Saturday.
// This is used as an index # for the elements in the 
// dayNames array. 
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"];
let dayOfWeek = dayNames[rightNow.getDay()];
