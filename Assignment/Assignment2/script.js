const performance = require("perf_hooks");
const start = performance.performance.now();
const fs = require ("fs");
const fileLocation = (__dirname + "/meals.csv");
const writeFileName = (__dirname + "/menuOutput.txt");
const writeHtmlFileName = (__dirname + "/index.html");
const mealWeightObj = {
  breakfast: 1,
  brunch: 2,
  lunch: 3,
  dinner: 4
};



//reads file

const readFile = (fileLocation) => {
  return new Promise( (resolve, reject) => {
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
}
readFile(fileLocation)
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
  const categorySortedDataArr = [];
  const sortedCategoryArr = [];

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
  //redundent thanks to bubbleSort
  for(let i = 0; i < categoryArr.length; i++) {
    for(ele of arr) {
      if(ele[0] === categoryArr[i]) {
        categorySortedDataArr.push(ele);
      }
    }
  }

  // adds mealWeight to categoryArr elements
  const sortValues = [];
  for(let i = 0; i < categoryArr.length; i++) {
    if(Object.keys(mealWeightObj).includes(categoryArr[i])) {
      sortValues.push(mealWeightObj[categoryArr[i]] + categoryArr[i]) 
    }
  }

  //sorts categoryArr
  for(let i = 0; i < sortValues.length -1; i++) {
    if( sortValues[i] > sortValues[i+1]) {
      let temp = sortValues[i];
      sortValues[i] = sortValues[i+1];
      sortValues[i+1] = temp;
    }
  }


  //removes mealWeight from elements
  for(ele of sortValues){
    let str = ele.substring(1);
    sortedCategoryArr.push(str);
  }

  bubbleSort(categorySortedDataArr,sortedCategoryArr);
}


//sorts elements alphabetically based on sortedCategoryArr
const bubbleSort = (arr,categoryArr) => {

  for(let i = 0; i < categoryArr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for(let k = 0; k < (arr.length - j - 1); k++) {
        if (arr[k][0] === categoryArr[i]) {
          if(arr[k][1] > arr[k+1][1]) {
            let temp = arr[k];
            arr[k] = arr[k+1];
            arr[k+1] = temp;
          }
        }
      }
    }
  }
  priceCalc(arr, categoryArr);
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
  .then(console.log( writeFileName + " - sucessfully written."))
  .catch(err => console.log(err));
writeHtmlFile(finalStringTOAppend)
  .then(console.log( writeHtmlFileName + " - sucessfully written."))
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


module.exports = { readFile }

//program runtime
let end = performance.performance.now();
console.info( ("Runtime: " + (end - start) + " ms") );
