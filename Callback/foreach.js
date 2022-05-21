const arraySparse = [1, 3,null, 7,NaN];
let numCallbackRuns = 0;
// The forEach() method executes a provided function once for each array element.


arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});


console.log({ numCallbackRuns });

/////////////////


const logArrayElements = (element, index, array) => {
    console.log('a[' + index + '] = ' + element);
  };
  
  // Notice that index 2 is skipped, since there is no item at
  // that position in the array...
  [2, 5,, 9].forEach(logArrayElements);



  function Counter() {
    this.sum = 0
    this.count = 0
  }
  
  Counter.prototype.add = function(array) {
    array.forEach(function countEntry(entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  };
  
  const obj = new Counter();
  obj.add([2, 5, 9]);
  console.log(obj.count); // 3
  console.log(obj.sum); // 16