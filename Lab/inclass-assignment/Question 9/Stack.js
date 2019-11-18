function Stack() {
    
    var items = [];
    
    this.push = function (element) {
      items.push(element);
      return items;
    };
    
    this.pop = function () {
      const topStack = (items.length -1);
      if(topStack > -1) {
        items.pop();
        return items;
      } else {
        return undefined;
      }
    };
    
    this.peek = function () {
      if(items.length > 0) {
        return items[items.length];
      } else {
        return undefined;
      }
    };
    
    this.isEmpty = function () {
      let state = false;
      if(items.length === 0) {
        state = true;
      }
      return state;
    };
    
    this.clear = function () {
      items = [];
      return items;
    };
    
    this.size = function () {
      return items.length;
    };
    
    this.toString = function () {
      if(items.length > 0) {
        return items.join();
      } else {
        return undefined;
      }
    };
  }
  
  module.exports = Stack;