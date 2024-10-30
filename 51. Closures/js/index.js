// closures = A function defined inside of another function,
//            the inner function has access to the variables
//            and scope of the outer function.
//            Allow for private variables and state maintenance
//            User frequently in JS frameworks: React, Vue, Angular

/* Example */

function outer() {

    let message = `Hello`;

    function inner() { // this inner function has access to everything that is inside of function outer()
        console.log(message);
    }
}


// but when we call the outer function nothing happens

outer();


// but if we call the inner() function it will appear

function outer() {

    let message = `Hello`;

    function inner() { // this inner function has access to everything that is inside of function outer()
        console.log(message);
    }

    inner() // <-----------------------------
}


function increment() {
    let count = 0;
    count++;
    console.log(`Count increased to ${count}`);
}

increment()
increment()
increment()
increment() // i can call it how many times as i want, but every single time i call this function it will = 1; because everytime the function resets




function CreateCounter() {

    let count = 0;

    function increment() {
        count++
        console.log(`Number has increased ${count}`);
    }

    function getCount() {
        return count;
    }

    return { increment, getCount }
}

const counter = CreateCounter();

counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3
counter.increment(); // 4
counter.increment(); // 5
counter.increment(); // 6
counter.increment(); // 7
counter.increment(); // 8
counter.increment(); // 9
counter.increment(); // 10


console.log(`The current count is ${counter.getCount()}`)


// the problem here is if i did something like this
// it would change everything


let skore = 0;

skore = 1000000000000;

// We need to use closer!

function increaseScore(points) {
    skore += points;
    console.log(`+${points} points`);
}

function decreaseScore(points) {
    skore -= points;
    console.log(`-${points} points`);
}

function getScore() {
    return skore;
}

increaseScore(5);
increaseScore(5);
decreaseScore(5);

console.log(`The final score is ${getScore()} points`)





/* Closer Method */


function Closer() {
    let skore = 0;

    function increaseScore(points) {
        skore += points;
        console.log(`+${points} points`);
    }

    function decreaseScore(points) {
        skore -= points;
        console.log(`-${points} points`);
    }

    function getScore() {
        return skore;
    }

    return {increaseScore, decreaseScore, getScore}
}

const game = Closer();

game.increaseScore();
game.decreaseScore();
