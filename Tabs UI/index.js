


// function range(...data) {
//     let begin = Math.min(data[0], data[1])
//     let end = Math.max(data[0], data[1])
//     // map((element) => { /* ... */ })
//     // map((element, index) => { /* ... */ })
//     // map((element, index, array) => { /* ... */ })
//     let result = Array(end - begin)
//     if (data[3] === -1) {
//         result = result.fill().map(() => begin++)
//     }
//     else result = result.fill().map(() => end--)
//     console.log(result)



// }
// function sum(...data) {
//     let result = 0
//     // data.forEach((a)=>result+=a)
//     data.map((a) => result += a)

//     return result

// }

// let reverseArrayInPlace = function (data) {
//     data.reverse()

// }
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);



let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)
// console.log()
const tabActive = $(".tab-item.active")

$(".line").style.left = tabActive.offsetLeft + "px"
$(".line").style.width = tabActive.offsetWidth + "px"







let curr = 0


const interval = setInterval(function () {

    $$(".tab-item").forEach((element, index) => {


        if (element.classList.contains("active")) {
            curr = (index + 1) % 4

        }

    });

    // method to be executed;
    $(".tab-item.active").classList.remove('active')
    $(".tab-pane.active").classList.remove('active')
    $$(".tab-item")[curr].classList.add('active')
    $$(".tab-pane")[curr].classList.add('active')
    $(".line").style.left = $(".tab-item.active").offsetLeft + "px"
    $(".line").style.width = $(".tab-item.active").offsetWidth + "px"

}, 2000);
$$(".tab-item").forEach((element, index) => {
    element.onclick = function () {
        $(".tab-item.active").classList.remove('active')
        element.classList.add('active')

        $(".line").style.left = element.offsetLeft + "px"
        $(".line").style.width = element.offsetWidth + "px"


        $(".tab-pane.active").classList.remove('active')
        $$(".tab-pane")[index].classList.add('active')
        clearInterval(interval)
        var myInterval = setInterval(function(){console.log("mmk")}, 2000);
        myInterval
        interval
    }

});

interval;
