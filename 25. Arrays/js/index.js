// array = a variable like strucuture that can hold
//         more than 1 value

let fruit = "apple"; /* this is example of something that hold only 1 value*/

let fruits = ["apple", "banana", "orange"];

console.log(fruits); /* it will write all fruits */
console.log(fruits[0]); /* only writes apple */

/* but we can also do this */

fruits[0] = "coconut";

console.log(fruits[0]);

fruits.push("coconut"); /* adds and also pushes "coconut" to the bottom of the list */
fruits.pop(); /* removes last element */
fruits.unshift("mango"); /* adds and also pushes "mango" to the first position of the list*/
fruits.shift(); /* removes first element */
fruits.sort(); /* sorts by alphabetical order */
fruits.sort().reverse(); /* as you can probably guess, its opposite of the alphabetical order */


/* lenght of the array */
let numOfFruits = fruits.length;
let index = fruits.indexOf("apple"); /* if it gives number -1 that means the element that we are searching for does not exist */

console.log(numOfFruits);
console.log(index)

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}