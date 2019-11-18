function Set() {
    var items = {};
  
    //
    this.has = function (value) {
      if(value !== null && value !== undefined) {
        if(items.value === undefined) {
          return false;
        } else {
          return true;
        }
      }
    };
  
    //
    this.add = function (value) {
      if(value !== null && value !== undefined) {
        if(items.value === undefined) {
          items[value] = true;
        }
      }
      return items;
    };

    //
    this.remove = function (value) {
      if(value !== null && value !== undefined) {
        if(items[value]) {
          delete items[value];
        }
      }
      return items;
    };

    //
    this.clear = function () {
      return items = {};
    };

    //
    this.size = function () {
      let counter = 0;
      if (items !== null && items !== undefined) {
        const keyArr = Object.keys(items);
        for(ele of keyArr) {
          counter += 1;
        }
      }
      return counter;
    };

    //
    this.values = function () {
      if (items !== null && items !== undefined) {
        const keyArr = Object.keys(items);
        return keyArr;
      }
    };

    //
    this.union = function (otherSet) {
      let otherSetArr = null;
      if( otherSet !== null && otherSet !== undefined) {
        otherSetArr = Object.keys(otherSet);
      } else {
        return new Error ("Incorrect argument");
      }

      for (ele of otherSetArr) {
        if(has(ele)) {
          continue;
        } else {
          add(ele);
        }
      }
      return items;
    };
  
    //does not work need to compare in a way similar to bubble sort
    this.intersection = function (set) {
      const allArr = [];
      let set1Arr = null;
      let set2Arr = null;
      const finalSet = {};

      if(set !== null && set !== undefined) {
        set2Arr = Object.keys(set);
      }
      set1Arr = Object.keys(items);

      const set1ArrLength = set1Arr.length;
      const set2ArrLength = set2Arr.length;
      let length = null;

      if(set1ArrLength >= set2ArrLength) {
        length = set1ArrLength;
      } else {
        length = set2ArrLength;
      }

      //this only works if things are in sequence
      for (let i = 0; i < length; i++) {
        let comparatorA = null;
        let comparatorB = null;

        if(set1Arr[i] !== null && set1Arr[i] !== undefined) {
          comparatorA = set1Arr[i];
        }

        if(set2Arr[i] !== null && set2Arr[i] !== undefined) {
          comparatorB = set2Arr[i];
        }

        if( comparatorA === comparatorB) {
          allArr.push(comparatorA);
        }
      }

      for(ele of allArr) {
        if(ele !== null && ele !== undefined) {
          if(finalSet.value === undefined) {
            finalSet[ele] = true;
          }
        }
      }

      return finalSet;
    };
  
    //does not work need to compare in a way similar to bubble sort
    this.difference = function (set) {
      let set1Arr = null;
      let set2Arr = null;
      const allArr = [];
    
      if(set !== null && set !== undefined) {
        set2Arr = Object.keys(set);
      }
      set1Arr = Object.keys(items);

      set1Arr.sort;
      set2Arr.sort;
    
      const set1ArrLength = set1Arr.length;
      const set2ArrLength = set2Arr.length;
      let length = null;
    
      if(set1ArrLength >= set2ArrLength) {
        length = set1ArrLength;
      } else {
        length = set2ArrLength;
      }
    
      for (let i = 0; i < length; i++) {
        let comparatorA = null;
        let comparatorB = null;
    
        if(set1Arr[i] !== null && set1Arr[i] !== undefined) {
          comparatorA = set1Arr[i];
        }
    
        if(set2Arr[i] !== null && set2Arr[i] !== undefined) {
          comparatorB = set2Arr[i];
        }
    
        //doest work
        if( comparatorA !== null && comparatorB !== null) {
          if( comparatorA !== comparatorB ) {
            allArr.push(comparatorA);
          }
        } else if (comparatorA === null || comparatorB === null ) {
          if(comparatorA === null) {
            allArr.push(comparatorB);
          } else if ( comparatorB === null) {
            allArr.push(comparatorA);
          }
        }
      }
      console.log(allArr);
    
    };
  
    //
    this.subset = function (otherSet) {
    } 
  }
  
  module.exports = Set;