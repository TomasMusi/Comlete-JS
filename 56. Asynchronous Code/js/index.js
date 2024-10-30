// synchronous = Executes line by line consecutively in a sequential manner
//               Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently without waiting
//                Doesn`t block the execution flow and allows the progrma to continue
//                (I/0 operations, network requests, fetching data)
//                Handled with: Callback, Promises, Async/Await.

/* This code is synchronous */
// we execute this code line by line, we can`t move to Task 2, until we complete Task 1
console.log(`Task 1`);
console.log(`Task 2`);
console.log(`Task 3`);


/* This code is asynchronous */

setTimeout(() => console.log(`Task 1`), 3000);

console.log(`Task 2`);
console.log(`Task 3`);
console.log(`Task 4`);

// task 1 will be last, because setTimeOut() is one of the asynchronous functions
// it doesnt care about, that its first, it cares when it should be executed


function fun1(callback) {
    setTimeout(() => {
        console.log(`Task 1`);
        callback()
    }, 3000);
}

function func2() {
    console.log(`Task 2`);
    console.log(`Task 3`);
    console.log(`Task 4`);
}

fun1(func2); // function 2 will be only executed after function 1 is!