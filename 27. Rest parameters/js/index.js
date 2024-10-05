// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by building them into an array

//                   spread = expands an array into seperate elements
//                   rest = bundles seperate elements into an array

/* imagine you are opening a fridge thats why we use the 3 dots and naming it foods */
function openFridge(...foods) {
    console.log(foods);
    console.log(...foods); /* we can also do this, and it will display the text normaly as i would do console.log(hamburger) */
}

function getFood(...foode) {
    return foode;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);

const foode = getFood(food1, food2, food3, food4, food5)





function shopcard(...numbers) {
    let card = 0;
    for (let number of numbers) {
        card += number;
    }
    return card;
}

const total = shopcard(1, 1)

console.log(`Your Total is $${total}`)
/* ------------------------------------ */
function Averageshopcard(...numbers) {
    let card = 0;
    for (let number of numbers) {
        card += number;
    }
    return card / numbers.length;
}

const totalka = Averageshopcard(70, 100, 92, 50);

console.log(`average is ${totalka}`);

/* ---------------------- */


function combineStrings(...strings) {
    return strings(names).join(" ");
}

const names = combineStrings("spongebob", "Skibidi", "toilet", "III")

console.log(names);