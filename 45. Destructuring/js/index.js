// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring
//                 5 examples



// ---------- EXAMPLE 1 ----------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // output 2 
console.log(b); // output 1



// ---------- EXAMPLE 2 ----------
// SWAP 2 ELEMENTS IN AN ARRAY

/* I want to swap position of first and last element */
const colors = ["purple", "red", "black", "golden", "green"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);



// ---------- EXAMPLE 3 ----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const color = ["red", "green", "blue", "black", "white"];

const [firstcolor, secondcolor, thirdcolor, ...extracolors] = color;

console.log(firstcolor); // red
console.log(secondcolor); //green
console.log(thirdcolor); //blue
console.log(extracolors); // black and white



// ---------- EXAMPLE 4 ----------
// EXTRACT VALUES FROM OBJECTS


const person1 = {
    firstname: "spongebob",
    lastname: "squarepants",
    age: 30,
    job: "Fry cook",
}

const person2 = {
    firstname: "Patrick",
    lastname: "Star",
    age: 34,
}

const { firstname, lastname, age, job } = person1;

console.log(firstname); // spongebob
console.log(lastname); //squarepants
console.log(age); // 30
console.log(job); // Fry Cook


// const er = { firstname, lastname, age, job = "Unemployed" } = person2;
//
//
//
// console.log(firstname); // patrick
// console.log(lastname); //star
// console.log(age); // 34
// console.log(job); // Unemployed ... because of we told if its undefined it will write Unemployed





// ---------- EXAMPLE 5 ----------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({ firstname, lastname, age, job = "Unemployed" }) {
    console.log(`name: ${firstname} ${lastname}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const perso1 = {
    firstname: "Spongebob",
    lastname: "SquarePants",
    age: 30,
    job: "Fire cook",
}


const perso2 = {
    firstname: "Patrick",
    lastname: "Star",
    age: 34,
}

displayPerson(perso1)