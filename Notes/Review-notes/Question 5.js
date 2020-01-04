let dishes = [
  { "dishName": "vegetable curry", "cookTime": "15 minutes", "veganFriendly": "yes" },
  { "dishName": "steak", "cookTime": "9 minutes", "veganFriendly": "no" },
  { "dishName": "tofu soup", "cookTime": "12 minutes", "veganFriendly": "yes" }
]


const search = (key, array) => {
  arr = []

  for (obj of array) {
    cookingInfo.msg.push(obj.dishName)
    if (obj.veganFriendly === key) {
      arr.push(obj.dishName)
    }
  }
  return arr
}


//cooking info is an object
const turnOnStove = (food, callback) => {
  const cookingInfo = {};

  //there could be more than 3 dishes
  cookingInfo.msg = `All ${food.length} of your dishes are being cooked`;

  //the value of secondsToCook is a function   *** note dishes[0] is hard coded
  cookingInfo.secondsToCook = () => `${dishes[0].dishName} will take ${parseInt(dishes[0].cookTime) * 60} seconds.`;

  //*** no hard code value
  cookingInfo.secondsToCook = () => `${vegeObj.dishName} will take ${parseInt(vegeObj.cookTime) * 60} seconds.}`

  //returns an array of objects that are vegan frendly
  cookingInfo.veganFriendlyDishes = dishes.filter(dish => dish.veganFriendly === "yes");


  const vegeObj = search("vegetable curry", dishes);

  //***  call the callback to pass it cooking info object  ***
  callback(cookingInfo);
}

  // const cookingInfo = (dishes) => {
  //   const cookingInfo = {};
  //   cookingInfo.msg = []
  //   cookingInfo.veganFriendlyDishes = []

  //   function secondsToCook (dishName) {
  //     for(obj of dishes) {
  //       if (obj.dishName === dishName) {
  //         return obj.cookTime;
  //       } else {
  //         console.log("dish does not exist")
  //       }
  //     }
  //   }

  //   for(obj of dishes) {
  //     cookingInfo.msg.push(obj.dishName)
  //     if(obj.veganFriendly == "yes") {
  //       cookingInfo.veganFriendlyDishes.push(obj.dishName)
  //     }
  //   }
  //   return cookingInfo;
  // }

  // console.log(cookingInfo(dishes).msg);
  // console.log(cookingInfo(dishes).veganFriendlyDishes);
  // console.log(cookingInfo(dishes).secondsToCook("vegetable curry"));

// turnOnStove(dishes, function(cookingInfo){
//   console.log(cookingInfo.msg); // prints: All 3 of your dishes are being cooked
//   console.log(cookingInfo.secondsToCook()); // vegetable curry will take 900 seconds
//   console.log(cookingInfo.veganFriendlyDishes) // [veg curry, tofu soup]
// });