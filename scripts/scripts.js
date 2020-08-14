// creates a new Date object
let rightNow = new Date(2020, 2, 20);

// getDate() returns the day of the month from 1-31
let dayOfMonth = rightNow.getDate().toString();

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
let monthNumb = rightNow.getMonth();
let monthOfYear = monthNames[monthNumb];

/*
getFullYear() returns the current year
*/
let currentYear = rightNow.getFullYear().toString();

/*
calculates the amount of days left in the challenge.
will eventually be a user input for the challenge end date
for now it is just hard entered.
*/
let challengeEndDate = new Date("August 31, 2020 23:59:59");
let challengeDayDiff = Math.floor((challengeEndDate.getTime() - rightNow.getTime()) / (1000 * 60 * 60 * 24));


// divs 15 (so index 14) - div 55 (so index 54)
// first finds the div with the class name days
// then finds how many different divs are in it so we can loop through all of them
let daysDiv = document.getElementsByClassName("days")[0].getElementsByTagName("DIV");
let actualNumb = daysDiv.length;

for (let i = 0; i < daysDiv.length; i++) {
    let cName = daysDiv[i].className;
    if ((daysDiv[i].innerHTML === dayOfMonth) && (cName !== "prev-date" && cName !== "next-date")) {  
        daysDiv[i].className += " today";
    }
} 

// Automatically changes the month of the year
let changeMonthDate = document.getElementsByClassName("date")[0].getElementsByTagName("h2")[0];
changeMonthDate.innerHTML = monthOfYear.toUpperCase();

// Automatically changes the day of the week, then gives the month again, then the 
// number date of the month, and finally the year.
let changeActualDate = document.getElementsByClassName("date")[0].getElementsByTagName("p")[0];
changeActualDate.innerHTML = dayOfWeek + " " + monthOfYear + " " + dayOfMonth + ", " +  currentYear;

// Function that finds out how many days are in a month
// Day Zero is the last day in the previous month (why we add 1 to the month number)
function getDaysInMonth(month, year) {
    return new Date(year, month+1, 0).getDate();
}

// finds the number of days in the previous month and the current month
let previousMonthDays = getDaysInMonth(monthNumb - 1, currentYear);
let currentMonthDays = getDaysInMonth(monthNumb, currentYear);

// again we loop through all of the elements in the div days
// if the element has a class of prev-date and 
// if the inner html is greater than the previous months number of days, then
// they are assigned the class of displayNone which essentially deletes them (because they shouldn't exist)
// then we look at the elements for the current month if the innerHTML of these elements are greater than 
// currentMonthDays, then they will be assigned the same class of displayNone as well.
let numberDaysHidden = 0;
for (let i = 0; i < daysDiv.length; i++) {
    if (daysDiv[i].className === "prev-date" && daysDiv[i].innerHTML > previousMonthDays) {
        daysDiv[i].className += " displayNone";
        numberDaysHidden += 1;
    } else if (daysDiv[i].className !== "prev-date" && daysDiv[i].className !== "next-date" && daysDiv[i].innerHTML > currentMonthDays) {
        daysDiv[i].className += " displayNone";
        numberDaysHidden += 1;
    } else if (daysDiv[i].className === "next-date displayNone") {
        numberDaysHidden += 1;
    }
}

// if we don't have 42 days on the calendar, then we loop through the elements just with the class name next-date and displayNone
// We have some in there that are allready hidden from initiation, so we can begin unhiding them to get the 42 days.
// only loops while there are less than 42 days
let i = 0;
while ((daysDiv.length - numberDaysHidden) < 42) {
    let nextDaysEl = document.getElementsByClassName("next-date displayNone");
    nextDaysEl[i].className = "next-date"; // gets rid of the displayNone class
    i++;
}