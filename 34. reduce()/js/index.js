// .reduce() = reduce the elements of an array
//             to a single value


const prices = [5, 10, 15, 30, 60, 100, 25];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`)



/* you probably dont understand it now but, look */
function sum(acculumator, element) {
    return acculumator + element;
}



const ceny = [100, 200, 250, 600, 700, 1000]

const maxim = ceny.reduce(price);
console.log(maxim)

function price(acculumator, element) {
    return Math.max(acculumator, element);
}


const lower = ceny.reduce(low);
function low(acculumator, element) {
    return Math.min(acculumator, element)
}

console.log(lower)
/* 


its the previous element + the next element 


function sum(previous, next) {
    return previous + next;
} 

in the example above its exactly this
    

*/

/* 

function sum(0, 5){
    return 0 + 5
} 

function sum(5, 10){
    return 5 + 10
} 
    
function sum(15, 15){
    return 15 + 15
} 

and this goes all the way to the last array

*/