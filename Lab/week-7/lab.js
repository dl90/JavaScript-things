/*
Don Li
*/

const fs = require("fs");
const performance = require("perf_hooks");
const start = performance.performance.now();
const arrOfTips = [ "1. Work in teams",
                    "2. Get enough sleep",
                    "3. Be on time",
                    "4. Do the work",
                    "5. Review material often",
                    "6. Keep practicing",
                    "7. Read more articles on coding",
                    "8. Ask for help",
                    "9. Update Github",
                    "10. Eat well",
                    "11. Exercise",
                    "12. Plan ahead",
                    "13. Don't stress out",
                    "14. Don't do things last minute",
                    "15. Don't procrastinate",
                    "16. Stay curious",
                    "17. Go above and beyond",
                    "18. Backup your work",
                    "19. Trust your self",
                    "20. Don't be an idiot" ]

//creates new empty file
//will not run callback function of we use writeFileSync
//all Syncs don't use callback functions
fs.writeFile( __dirname + "/tips.txt", "" , appendArrToFile);
//console.log(__dirname + "/tips.txt");

function appendArrToFile () {
    let date = new Date();
    let dateOptions = { //timeZone: "America/New_York",
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour12: false,
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        //timeZoneName: "short"
                         };
    
    //console.log(date.toLocaleString("en-US"));

    /* not in order
    for(const element of arrOfTips) {

        //append to file
        fs.appendFile("./tips.txt", element + "\n", "utf8" ,function () {
        console.log("append");
        })
    }
    */

    for(let i = 0; i < arrOfTips.length; i++) {
        fs.appendFileSync( __dirname + "/tips.txt", arrOfTips[i] + "\n");
    }
    fs.appendFileSync( __dirname + "/tips.txt", date.toLocaleString("en-US", dateOptions) + "\n");

    //console.log(date.toLocaleString("en-US", dateOptions));
    readFile();
}


//read the file
// let a  = fs.readFileSync( __dirname + "/tips.txt", "utf8");
// console.log(a);
function readFile () {

    fs.readFile( __dirname + "/tips.txt", (err, data) => {
        if (err) throw err;
        console.log(data.toString("utf8"));
    });
}

//program runtime
let end = performance.performance.now();
console.log("Runtime: " + (end - start) + " ms");

/*
What problem will you face if you try and loop through the tips array, 
WITHOUT using the "sync" versions of the fs methods. 
(as in using something like fs.appendFile instead of fs.appendFileSync, etc).

The file is not read/written/appended in order.
*/