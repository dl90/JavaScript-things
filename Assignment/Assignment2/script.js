const fs = require ("fs");
const fileLocation = (__dirname + "/meals.csv");
const writeFileName = (__dirname + "/menuOutput.txt");
const writeHtmlFileName = (__dirname + "/index.html");


//reads file
const readFile = new Promise( (resolve, reject) => {
  fs.readFile(fileLocation, "utf-8", (err, data) => {
    if (err ) {
      reject(err.message);
    } else if (data.length < 0) {
      reject(new Error ("File is empty."))
    } else {
      resolve(data);
    }
  })
})
readFile
  .then(data => dataSplit(data))
  .catch(err => console.log(err))


//function for initial split
const dataSplit = (data) => {
  const dataArr = data.split('\n');
  const finalArr = [];
  for(ele of dataArr) {
    const arrByLine = ele.split(',');
    
    if(ele.length > 0) {
      finalArr.push(arrByLine);
    }
  }
  categorySplit(finalArr);
}


//function b will sort the array in to categories
const categorySplit = (arr) => {

  //categoryArr used to keep a list of different types of meals (lunch/dinner)
  const categoryArr = [];
  const categorySortedArr = [];

  for(ele of arr) {
    //nested function to add first element to categoryArr
    const categoryCreate = (category) => {
      if( categoryArr.includes(category) === false) {
        categoryArr.push(category);
      }
    }
    categoryCreate(ele[0]);
  }

  //goes through arr and groups them together by category
  for(let i = 0; i < categoryArr.length; i++) {
    for(ele of arr) {
      if(ele[0] === categoryArr[i]) {
        categorySortedArr.push(ele);
      }
    }
  }
  priceCalc(categorySortedArr, categoryArr)
}


//recalculates price value for meal
const priceCalc = (arr, categoryArr) => {

  for(ele of arr) {
    ele[3] = ("$"+(parseFloat(ele[ele.length - 1].substring(1)) * 1.8).toFixed(2));
  }
  stringGeneration(arr, categoryArr);
}


//generate string in proper format
const stringGeneration = (arr,categoryArr) => {
  let finalStringTOAppend = "";

  for(let i = 0; i < categoryArr.length; i++) {
    finalStringTOAppend += "\n* " + categoryArr[i].toUpperCase() + " ITEMS *\n";
    for(ele of arr) {
      if (ele[0] === categoryArr[i] && categoryArr[i] !== undefined ) {
        finalStringTOAppend += ele[3] + "\t" + ele[1] + ", " + ele[2] + "\n";
      }
    }
  }
writeFile(finalStringTOAppend)
  .then(console.log( writeFileName + " file sucessfully written."))
  .catch(err => console.log(err));
writeHtmlFile(finalStringTOAppend)
  .then(console.log( writeHtmlFileName + " file sucessfully written."))
  .catch(err => console.log(err));
}


//write formatted string to file
const writeFile = (str) => {
  return new Promise ( (resolve, reject ) => {
    fs.writeFile(writeFileName, str, "utf-8", (err) => {
      if (err) {
        reject (err.message);
      } else {
        resolve ();
      }
    })
  })
}


//write formatted string to html file
const writeHtmlFile = (str) => {
  return new Promise( (resolve, reject) => {
    let menuStringToAppend = "";
    const finalStringArr = str.split("\n")
    for(ele of finalStringArr) {
      menuStringToAppend += ( "    " + ele + "<br>\n" );
    }

    let htmlBoiler = 
     ( "\<!DOCTYPE html>\n"
    + "<html lang=\"en\">\n"
    + "<head>\n"
    + "  <meta charset=\"UTF-8\">\n"
    + "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n"
    + "  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n"
    + "  <title>Menu</title>\n"
    + "</head>\n"
    + "<body id=\"body\">\n"
    + "  <p id=\"menu\">\n" );
    
    htmlBoiler += ( menuStringToAppend
    + "  </p>\n"
    + "</body>\n" 
    + "</html>\n" );

    fs.writeFile(writeHtmlFileName, htmlBoiler, 'utf-8', (err) => {
      if(err) {
        reject (err.message);
      } else {
        resolve (str)
      }
    })
  })
}



// const stringToArr = (str) => {

//   let iterator = str[Symbol.iterator]();
//   let theChar = iterator.next();
//   const strArr = []

//   //iterator through string and add to strArr
//   while(!theChar.done && theChar.value !== '') {
//       strArr.push(theChar.value);
//       theChar = iterator.next();
//   }
//   return strArr;
// }
// let test = stringToArr("abcdefgh   ");
// console.log(test);
