/*
Lab 3
Don 

Create a second file called main.js which 
(a) requires your lab-three.js file, 
(b) invokes the makeCalendar() function, resulting in a listing of all the dates and days of the week for 2019 as above
(c) has another method called “getDayOfTheWeekForUserDate() 
    which prints the day of the week for the month, day, and year inputted by the user;
    
use readline-sync and its .question method to get a date from the user via the keyboard.
*/


let getDayOfTheWeek = require("./lab-three").getDayOfTheWeek;
//let isLeapYear = require("./lab-three").isLeapYear;
let makeCalender = require("./lab-three").makeCalender;
let readlineSync = require("readline-sync");

let inputDate = readlineSync.question("Please enter start date of Calender (MMDDYYYY): ");
console.log("Input " + inputDate);

    let mm = 1;
    let dd = 1;
    let yyyy = 2019;
    let input = parseInt(inputDate);

    getDayOfTheWeekForUserDate(inputDate);

function getDayOfTheWeekForUserDate (inputDate) {
    //console.log("enters");
    
    //&& (typeof(inputDate) == "number")
    if ( (inputDate.toString().length == 8) ){
        mm = Math.trunc(input / 1000000);
        //remove MM from MMDDYYYY
        input = input - parseInt(mm.toString() + "000000");

        dd = Math.trunc((input) / 10000);
        //remove DD from DDYYYY
        input = input - parseInt(dd.toString() + "0000");

        yyyy = input;

        makeCalender(yyyy,mm,dd);
        getDayOfTheWeek(yyyy,mm.dd);
    } else {
        console.log("You did not enter date in 8 digit format.");
    }

    //console.log(yyyy);
    //console.log(mm);
    //console.log(dd);

    return getDayOfTheWeekForUserDate;
}