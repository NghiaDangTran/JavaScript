/* Array.prototype.filter()
The filter() method creates 
a new array with all elements that pass the
 test implemented by the provided function. */

var course = [
    {
        name: "javascript",
        price: 100,
    },
    {
        name: "html",
        price: 200,
    },
    {
        name: "css",
        price: 300,
    }
]

Array.prototype.fill2 = function (value) {
    let result = [];
    for (var i = 0; i < this.length; i++) {
        if (value(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}

console.log(course.fill2(function (item) {
    return item.price > 150;
}))

console.log(course.filter((data) => { return data.price > 150 }))