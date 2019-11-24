function Queue() {

    var items = [];

    this.enqueue = function (element) {
      if(element !== null && element !== undefined) {
        items.push(element);
      }
      return items;
    };
  
    this.dequeue = function () {
      let deq = null;
      if(items.length > 0) {
        deq = items.shift();
        return deq;
      } else {
        return undefined;
      }
    };
    
    this.front = function () {
      if(items.length > 0) {
        return items[0];
      } else {
        return undefined;
      }
    };

    this.isEmpty = function () {
      let state = true;
      if(items.length > 0) {
        state = false;
      }
      return state;
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
  
  module.exports = Queue;