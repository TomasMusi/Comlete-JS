// forEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element

//             array.forEach(callback)
//             element, index, array are provided

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);

numbers.forEach(double);

function display(element) {
    console.log(element)
}


function double(element, index, array) {
    array[index] = element * 2;
}



let fruits = ["apple", "orange", "banana", "coconut"];

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();

}

fruits.forEach(upperCase);


/* uppercasing first letter of every word */

function firstword(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}