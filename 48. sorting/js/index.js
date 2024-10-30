// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings


/* string */
let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();

console.log(fruits);



/* numbers */



let numbers = [1, 10, 8, 9, 7, 2, 3, 4, 5, 6]

numbers.sort(); // it does not work, because we sort the array lexicographicly not numerically

console.log(numbers)




// to make it work we must do this

let number = [1, 10, 8, 9, 7, 2, 3, 4, 5, 6]

number.sort((a, b) => a - b);

console.log(number)




const people = [{ name: `Spongebob`, age: 30, gpa: 3.0 },
{ name: `Patrick`, age: 37, gpa: 1.5 },
{ name: `Squidward`, age: 51, gpa: 2.5 },
{ name: `Sandy`, age: 27, gpa: 4.0 }]


people.sort((a, b) => a.age - b.age); /*  from youngest year to the oldest */

//but if we want to use it for string we must use this!

people.sort((a, b) => a.name.localeCompare(b.name)); // this method will examin two strnigs for lexicographic order
console.log(people);
