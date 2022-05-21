/* Array.prototype.every()
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. */
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
Array.prototype.every2=function(callback){

    for(let i=0;i<this.length;i++){
        if(!callback(this[i])){
            return false;
        }
    }
    return true;

}
console.log(array1.every2(isBelowThreshold));