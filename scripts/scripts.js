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
    } else if (daysDiv[i].className !== "displayNone" && daysDiv[i].className !== "prev-date displayNone" && daysDiv[i].className !== "next-date displayNone") {
        daysDiv[i].className += " unhidden"
        // alert(daysDiv[i].innerHTML + " " + daysDiv[i].className);
    }
}

// We need to align the first day of the month to the right column
// we already assigned all of the elements that were showing from above the class name unhidden
// we first target these elements, then we can loop through them to see if the on thats unhidden and not a prev-date or future-date
let daysUnhiddenElem = document.getElementsByClassName(" unhidden");
for (let i = 0; i < daysUnhiddenElem.length; i++) {
    if (daysUnhiddenElem[i].innerHTML === "1") {
        let tempDayWeek = new Date(currentYear, monthNumb, 1).getDay() - 1; //gets the day of the week for the first of the month
        let pointer = i;
        if (tempDayWeek === -1) {
            tempDayWeek = 6; // if its -1 then it should be sunday, which in our calendar is the 6th item
        }
        if (pointer < tempDayWeek) { // if the index is less than actual day of the week then we need to add items
            while (pointer !== tempDayWeek) {
                let unhidePrev = document.getElementsByClassName("prev-date displayNone");
                unhidePrev[unhidePrev.length - 1].className = "prev-date unhidden"
                pointer++;
            }
        } else if (pointer > tempDayWeek) { // if the index is greater than the actual day of the week, then we need to delete items
            while (pointer !== tempDayWeek) {
                let hidePrev = document.getElementsByClassName("prev-date unhidden");
                hidePrev[0].className = "prev-date displayNone";
                pointer--;
            }
        }
        break;
    }
}

daysUnhiddenElem = document.getElementsByClassName(" unhidden");

// if we don't have 42 days on the calendar, then we loop through the elements just with the class name next-date and displayNone
// We have some in there that are allready hidden from initiation, so we can begin unhiding them to get the 42 days.
// only loops while there are less than 42 days
let newPointer;
while (daysUnhiddenElem.length > 42) {
    daysUnhiddenElem[daysUnhiddenElem.length - 1].className = "next-date displayNone"
}

daysUnhiddenElem = document.getElementsByClassName(" unhidden");

// gets the index of the last day of the month in the calendar
for (let i = 0; i < daysUnhiddenElem.length; i++) {
    if (daysUnhiddenElem[i].innerHTML === currentMonthDays.toString() && daysUnhiddenElem[i].className 
    !== "prev-date unhidden") {
        newPointer = i;
        break;
    }
}

// if the index is less than 35 then we get rid of all the values on the bottom row
// it also adds a new class to the calendar div which corresponds to a small change in height
// since we no longer need that space for the bottom row (which was just deleted)
// ----------------------------------------------------------------------------------------------
// if it is greater than or equal to 35, then we add more until the length of the unhidden is 42
if (newPointer < 35) {
    while (daysUnhiddenElem.length > 35) {
        daysUnhiddenElem[daysUnhiddenElem.length - 1].className = "next-date displayNone"
    }
    document.getElementsByClassName("calendar")[0].className += " newCalHeight";
} else if (newPointer >= 35) {
    while (daysUnhiddenElem.length < 42) {
        let getTo42 = document.getElementsByClassName("next-date displayNone");
        getTo42[0].className = "prev-date unhidden";
    }
}
