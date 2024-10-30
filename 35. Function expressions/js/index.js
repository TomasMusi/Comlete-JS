// function declaration = define a reusable block of code
//                        that performs a specific task


function hello() {
    console.log(`Hello`);
}


// function expressions = a way to define functions as
//                        values or variables

/* 
const hello = function () {
    console.log(`Hello!`);
}

hello(); 
*/

setTimeout(hello, 3000); // writes in 3 seconds function hello

setTimeout(function () {
    console.log("Hello!");
}, 3000);



const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function (element) {
    return Math.pow(element, 2);
})

console.log(squares);



const evenNum = numbers.filter(function (element) {
    return element % 2 === 0;
})


const oddNum = numbers.filter(function (element) {
    return element % 2 !== 0;
})

const secist = numbers.reduce(function (element, callback) {
    return element + callback;
})
