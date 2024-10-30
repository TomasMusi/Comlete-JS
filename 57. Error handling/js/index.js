// Error = An object that is created to represent a problem that occurs
//         Occur often with user input or establishing a connection

//errors when they are uncaught, destroy the program flow, because of 1 error


/* This code will execute correctly */
console.log(`Hello`);

console.log(`You have reached the end!`);


/* but if we missspeled log with lag*/

console.lag(`Hello`);

console.log(x) // x is undefined

console.log(`You have reached the end!`);





// try {} = Encloses the code that might potentially cause an error
// catch {} = Catch and handle any thrown errors from try {}
// finally {} = (optinal) Always executes. Used mostly for clean up ex. close files, close connections, release resources


try {
    console.log(x) // x is undefined

    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}
catch (error) {
    console.log(error);
    console.error(error); /* <-- great for debugging */
}
finally {
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log(`This always executes`);
}

// this code executes right now , because we handled the errors and they did not stop the program flow
console.log(`You have reached the end!`);


try {
    const dividend = Number(window.prompt(`Enter a dividend`));
    const divisor = Number(window.prompt(`Enter a divisor`));

    if (divisor == 0) {
        throw new Error(`You cant dived by zero!`);
    }
    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error(`values must be a number!`);
    }


    const result = dividend / divisor;

    console.log(result);
}
catch (error) {
    console.error(error)
}

console.log(`You have reached that end!`)