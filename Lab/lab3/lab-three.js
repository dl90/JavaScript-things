
module.exports = { getDayOfTheWeek, isLeapYear, makeCalender };

function getDayOfTheWeek (year, month, day) {
    let inputYear = year;
    let inputMonth = month;
    let inputDay = day;

    //1s digit of year
    let inputYearFirstDigit = Math.floor((inputYear) / 1 % 10).toString();
    //10s digit of year
    let inputYearSecondDigit = Math.floor((inputYear) / 10 % 10).toString();
    //add 10s and 1s digits together, stored as int
    let inputYearLastTwoDigits = parseInt(inputYearSecondDigit + inputYearFirstDigit);

    //100s digit of year
    let inputYearThirdDigit = Math.floor((inputYear) / 100 % 10).toString();
    //1000s digit of year
    let inputYearFourthDigit = Math.floor((inputYear) / 1000 % 10).toString();
    //adds 1000s and 100s digits together, stored as int
    let inputYearFirstTwoDigits = parseInt(inputYearFourthDigit + inputYearThirdDigit);

    //array of year in strings [1,9,9,9] = 1999
    let inputYearArray = [inputYearFourthDigit, inputYearThirdDigit, inputYearSecondDigit, inputYearFirstDigit];
    //console.log(inputYearFourthDigit + inputYearThirdDigit + inputYearSecondDigit + inputYearFirstDigit);

    //firstStep     eg 89 / 12 = 7.4166...    89 % 12 = 5      5/12 = .41666...   therefore result is 7
    let firstStep = (inputYearLastTwoDigits / 12) - ((inputYearLastTwoDigits % 12) / 12);

    //secondStep    remainder of / 12
    let secondStep = (inputYearLastTwoDigits % 12);

    //thirdStep     concept similar to first step but with 4 instead of 12
    let thirdStep = (secondStep / 4) - ((secondStep % 4) / 4);

    //fourthStep    day of the month
    let fourthStep = inputDay;

    //fifthStep     Array represents value to add in Jan to Dec sequence
    const fifthStepArray = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];

    //if not leap year, use default calc
    if (isLeapYear(inputYear) === false) {
        fifthStep = fifthStepArray[(inputMonth - 1)];
        //console.log("default calc, leap year false");

        //if is leap year
    } else {
        //console.log("modified calc, leap year true");
        //and inputMonth is January or Feburary (1/2), use modified calc
        if ((inputMonth === 1) || (inputMonth === 2)) {
            fifthStep = (fifthStepArray[inputMonth - 1] - 1);
            //console.log("modified calc, Jan or Feb true");
            //else use default calc
        }
    }

    //unique centuries digits in centuries
    const uniqueCenturies = [16, 17, 18, 20, 21];
    //unique centuries values matching with unique centuries
    const uniqueCenturiesValues = [6, 4, 2, 6, 4];

    let uniqueCenturiesCalc = null;
    //if first 2 digits are a member of unique centuries array
    if (uniqueCenturies.indexOf(inputYearFirstTwoDigits) > -1) {
        //uniqueCenturiesCalc = unique centires value of matching unique century
        uniqueCenturiesCalc = uniqueCenturiesValues[uniqueCenturies.indexOf(inputYearFirstTwoDigits)];
    } else {
        //console.log("not unique century");
    }

    //if it is a unique century (uniqueCenturiesCalc not null)
    if (uniqueCenturiesCalc !== null) {
        //fifthStep is modified with approprate value (uniqueCenturiesValue)
        fifthStep = fifthStep + uniqueCenturiesCalc;
    } else {
        //console.log("not unique century");
    }


    //sixthStep     add all numbers from previous steps
    let sixthStep = (firstStep + secondStep + thirdStep + fourthStep + fifthStep) % 7;
    const daysOfTheWeekArray = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    //resultDay = day of the week in String        notice it did not need to have -1 because array starts at 0
    var resultDay = daysOfTheWeekArray[sixthStep];

    //console.log("first step = " + firstStep);
    //console.log("second step = " + secondStep);
    //console.log("thrid step = " + thirdStep);
    //console.log("fourth step = " + fourthStep);
    //console.log("fifth step = " + fifthStep);
    //console.log("sixth step = " + sixthStep);

    return resultDay;
};


//console.log(getDayOfTheWeek(1989,8,16));
//console.log(isLeapYear(1989));
//console.log(getDayOfTheWeek(1950,3,20));
//console.log(isLeapYear(1950));

function isLeapYear (year, month, day) {
    /*
    1.	If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
    2.	If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
    3.	If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
    4.	The year is a leap year (it has 366 days).
    5.	The year is not a leap year (it has 365 days).
    */

    let step1 = null;
    let step2 = null;
    let isLeapYearResult = null;

    if (year % 4 === 0) {
        step1 = true;
        //console.log("%4 true");
        if ((step1 === true) && (year % 100 === 0)) {
            step2 = true;
            //console.log("%100 true");
            if ((step2 === true) && (year % 400 === 0)) {
                isLeapYearResult = true;
                //console.log("%400 true");
            } else {
                isLeapYearResult = false;
                //console.log("%400 false");
            }
        } else {
            isLeapYearResult = true;
            //console.log("%100 false");
        }
    } else {
        isLeapYearResult = false;
        //console.log("% 4 false");
    }

    return isLeapYearResult;
};

function makeCalender (year, month, day) {

    const arrayOfWeekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    //sequence of array: January, Febuaray (28  29 in leap year), March, April, May, June, July, August, September, October, November, December.
    let numberOfDaysPerMonth = null;

    if (isLeapYear(year)) {
        numberOfDaysPerMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    } else {
        numberOfDaysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }

    //calls previous function to calculate initial day of the week
    let startingDay = getDayOfTheWeek(year, month, day);
    //startingDayIndex is index of initial day
    let startingDayIndex = arrayOfWeekDays.indexOf(startingDay);
    //calenderDate is the string day of week
    let calenderDate = null;

    //loops through each month of the year                                          month
    for (let i = month - 1; i < numberOfDaysPerMonth.length; i++) {

        //daysOfTheMonth dynamically changes based on month and leapyear
        let daysOfTheMonth = numberOfDaysPerMonth[i];

        //loops through each day of the month   depends on what month               day
        for (let l = day; l <= daysOfTheMonth; l++) {

            //console.log(l);
            //resets day back to 1st the following month
            day = 1;

            //if startingDayIndex is 0 to 6 (7 days)                                day of the week
            if (startingDayIndex >= 0 && startingDayIndex <= 6) {

                //console.log(day);
                //calenderDate is reassigned
                calenderDate = arrayOfWeekDays[startingDayIndex];
                console.log((i + 1) + "-" + (l) + "-" + year + " is a " + calenderDate);
                //startingDayIndex increase by 1                                    where the problem lies
                if (startingDayIndex == 6) {
                    startingDayIndex = 0;
                } else {
                    startingDayIndex = (startingDayIndex + 1);
                }

            } else {

                //resets week back to monday
                startingDayIndex = 0;
                /*
                month loop starts at input month (1-12)
                calenderDay set as getDayOfWeek result
                    day loop starts at input day (varies depeding on month)
                    startingDayIndex keeps track of position in arrayOfWeekDays
                    if the position is between 0 and 6 (7 days)
                    calenderDate reassigned to current day of week
                    prints
                    startingDayIndex +1
                    loops next day

                    index set back to 0 if postion out of bounds
                    not sure how it works witout skiping 1 loop but seems to work
                */
            }
        }
    }
    return makeCalender;
};

//makeCalender(2019,9,22);