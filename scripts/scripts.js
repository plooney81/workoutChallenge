// creates a new Date object
let rightNow = new Date();

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
let monthOfYear = monthNames[rightNow.getMonth()];

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
for (let i = 14; i < 55; i++) {
    let cName = document.getElementsByTagName("DIV")[i].className;
    if ((document.getElementsByTagName("DIV")[i].innerHTML === dayOfMonth) && (cName !== "prev-date" && cName !== "next-date")) {  
        document.getElementsByTagName("DIV")[i].className = "today";
    }
} 

// find out how many divs are inside the class named days
// let howManyDivs = document.getElementsById("d").getElementsByTagName("DIV").length;
// alert(howManyDivs);

// Automatically changes the month of the year
let changeMonthDate = document.getElementsByClassName("date")[0].getElementsByTagName("h2")[0];
changeMonthDate.innerHTML = monthOfYear.toUpperCase();

// Automatically changes the day of the week, then gives the month again, then the 
// number date of the month, and finally the year.
let changeActualDate = document.getElementsByClassName("date")[0].getElementsByTagName("p")[0];
changeActualDate.innerHTML = dayOfWeek + " " + monthOfYear + " " + dayOfMonth + ", " +  currentYear;