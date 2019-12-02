function Set() {
    this.items = {};
  
    //------------------------------------------------------------//
    this.has = function (value) {
      if(value !== null && value !== undefined) {
        if(this.items[value.toString()] === undefined) {
          return false;
        } else {
          return true;
        }
      }
    };
  
    //------------------------------------------------------------//
    this.add = function (value) {
      if(value !== null && value !== undefined) {
        const setArr = Object.keys(this.items)
    
        if (setArr.includes(value.toString())) {
          return false;
        } else if (this.items.value === undefined) {
          this.items[value] = true;
        } 
      }
      return true;
    };

    //------------------------------------------------------------//
    this.remove = function (value) {
      if(value !== null && value !== undefined) {
        if(this.items[value]) {
          delete this.items[value];
        } else {
          return false;
        }
      }
      return this.items;
    };

    //------------------------------------------------------------//
    this.clear = function () {
      return items = {};
    };

    //------------------------------------------------------------//
    this.size = function () {
      let counter = 0;
      if (this.items !== null && this.items !== undefined) {
        const keyArr = Object.keys(this.items);
        for(ele of keyArr) {
          counter += 1;
        }
      }
      return counter;
    };

    //------------------------------------------------------------//
    this.values = function () {
      if (this.items !== null && this.items !== undefined) {
        const keyArr = Object.keys(this.items);
        return keyArr;
      }
    };

    //------------------------------------------------------------//
    this.union = function (otherSet) {
      let otherSetArr = null;
      
      if( otherSet !== null && otherSet !== undefined) {
        otherSetArr = Object.keys(otherSet);
      } else {
        return new Error ("Incorrect argument");
      }

      const has = (value) => {
        if(this.items[value.toString()] === undefined) {
          return false;
        } else {
          return true;
        }
      }

      const add = (value) => {
        if(value !== null && value !== undefined) {
          const setArr = Object.keys(this.items)
      
          if (setArr.includes(value.toString())) {
            return false;
          } else if (this.items.value === undefined) {
            this.items[value] = true;
          } 
        }
        return true;
      };

      for (ele of otherSetArr) {
        if(has(ele)) {
          continue;
        } else {
          add(ele);
        }
      }
      return this.items;
    };

    //------------------------------------------------------------//
    this.intersection = function (set) {
      const allArr = [];
      let set1Arr = null; //objA aka items
      let set2Arr = null; //objB aka set
      const finalSet = {};
    
      if(this.items !== null && this.items !== undefined) {
        set1Arr = Object.keys(this.items);
      }
    
      if(set !== null && set !== undefined) {
        set2Arr = Object.keys(set);
      }
    
      //to set the length
      const set1ArrLength = set1Arr.length; //objA
      const set2ArrLength = set2Arr.length; //objB
      let length = null;
    
      //set the length according to the smaller array
      //using < only comapares the second one
      if(set1ArrLength <= set2ArrLength) {
        length = set1ArrLength;
      } else {
        length = set2ArrLength;
      }
    
      if(set1Arr.length === length) {
        for(ele of set1Arr) {
          if(set2Arr.includes(ele)) {
            allArr.push(ele);
          }
        }
      } else {
        for(ele of set2Arr) {
          if(set1Arr.includes(ele)) {
            allArr.push(ele);
          }
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
  
    //------------------------------------------------------------//
    this.difference = function (set) {
      let set1Arr = null; //items
      let set2Arr = null; //set
      const allArr = [];
    
      if(items !== null && items !== undefined) {
        set1Arr = Object.keys(items);
      }

      if(set !== null && set !== undefined) {
        set2Arr = Object.keys(set);
      }

      for(ele of set1Arr) {
        if(!set2Arr.includes(ele)) {
          allArr.push(ele);
        }
      }

      for(ele of set2Arr) {
        if(!set1Arr.includes(ele)) {
          allArr.push(ele);
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

    //
    this.subset = function (otherSet) {
      let set1Arr = null; //items
      let set2Arr = null; //otherSet
      const checkArr = [];

      if(originalSet !== null && originalSet !== undefined) {
        set1Arr = Object.keys(originalSet);
      }

      if(otherSet !== null && otherSet !== undefined) {
        set2Arr = Object.keys(otherSet);
      }

      for(ele of set2Arr) {
        if(set1Arr.includes(ele)) {
          checkArr.push(ele);
        }
      }

      if(checkArr.length === set2Arr.length) {
        return true;
      } else {
        return false;
      }
    } 
  }

  module.exports = Set;