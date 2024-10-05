// callback = a function that is passed as an argument
//            to another function

//            used to handle asynchronous operations:
//            1. Reading a file
//            2. Network requests
//            3. Interacting with databases

//             "Hey, when you are done, call this next."


/* if we wanted to put timer on first function that says, hello! it would be kinda stupid, because function goodbye would be faster and firstly it would write goodbye and then hello, thats why here comes callback!  */

hello1()
goodbye1()


function hello1() {
    setTimeout(function timer() {
        console.log(`hello!`);
    }, 3000);

}

function goodbye1() {
    console.log(`goodbye!`)
}


/* here even if u used the timer, the goodbye function would be fired, only when hello function is finished */

hello(goodbye);

function hello(callback) {
    console.log(`hello!`);
    callback();
}

function goodbye() {
    console.log("goodbye!")
}





sum(displayConsole, 1, 2);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result)
}