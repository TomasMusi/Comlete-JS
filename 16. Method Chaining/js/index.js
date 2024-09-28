// Method Chaining = Calling one method after another
//                     in one continuos line of code.



/* Task is to make user input in username (First username letter must be uppercase and all other characters be lowercase and delete white space) */


// -------- NO METHOD CHAINING --------

let username = window.prompt("Enter Your username");

username = username.trim();
let letter = username.charAt(0)
letter = letter.toUpperCase()

let extraChars = username.slice(1); /* For example if my name was Tom, this would only take om  */
extraChars = extraChars.toLowerCase()
username = letter + extraChars

console.log(username);

// -------- METHOD CHAINING --------


username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username)

