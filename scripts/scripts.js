// creates a new Date object
let rightNow = new Date();

// getDate() returns the day of the month from 1-31
let dayOfMonth = rightNow.getDate();

/*
getDay() returns the current day of the week from 0-6
0 being Sunday and 6 being Saturday.
This is used as an index # for the elements in the 
dayNames array. 
*/
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"];
let dayOfWeek = dayNames[rightNow.getDay()];

/*
getMonth() returns the current month from 0-11
0 being January and 11 being December
*/
let monthNames = ["January", "February", "March", "April", "May", 
"June", "July", "August", "September", "October", "November", "December"];
let monthOfYear = monthNames[rightNow.getMonth()];

/*
calculates the amount of days left in the challenge.
will eventually be a user input for the challenge end date
for now it is just hard entered.
*/
let challengeEndDate = new Date("August 31, 2020 23:59:59");
let challengeDayDiff = Math.floor((challengeEndDate.getTime() - rightNow.getTime()) / (1000 * 60 * 60 * 24));

