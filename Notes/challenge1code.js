function checkTime () {

    let currentDate = new Date();
    let hour = currentDate.getHours();

    //console.log(hour);

    if((hour >= 6) && (hour <= 12)){
        console.log("Good morning!");
    } else if((hour > 12) && (hour <= 18)) {
        console.log("Good evening!");
    } else if((hour >= 0) && (hour < 6)) {
        console.log("Good night!");
    }
}

checkTime();