// setTimeout() = Function in javascript that sllows you to schedule
//                the execution of a function after and amount of time (miliseconds)
//                Times are approximate (varies based on the workload of the Javascript runtime env.)

//                setTimeout(callback, delay);


function sayHello() {
    window.alert("Hello");
}

setTimeout(sayHello, 3000); /* After 3 seconds */


// setTimeout(callback, delay);
// clearTimeout(timeoutid) = can Cancel a timeout before it triggers;                 

const timeoutId = setTimeout(() => {
    window.alert(`Hello`)
}, 3000);


clearTimeout(timeoutId); // nothing happends


/* Creating button in html */

function startTimer() {
    time = setTimeout(() => {
        window.alert("Hello")
    }, 3000);
}

function clearTimer() {
    clearTimeout(time);
}