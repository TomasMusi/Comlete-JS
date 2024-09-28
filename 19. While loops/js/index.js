// while loop = repeat some code WHILE some condition is true



/* before while loop */
let username = "";

if(username === "") {
    console.log("You didnt enter your name");
}
else {
    console.log(`hello ${username}`)
}


while(username === "") {
    console.log("You didnt enter your name"); /* This is very bad way to do while loop because it would crash our computer because IT IS INFINITIVE LOOP */
}

while(username === "") {
    username = window.prompt("Enter Your Name"); /* this would be much better, but if wanted to click cancel it would write: `Hello null` , null means no value */
}


while(username === "" || username === null) {
    username = window.prompt("Enter Your Name"); /* Now you cant click cancel and must write your name */
}
console.log(`Hello ${username}`)







/* Also exist for loop called: DO */

let UserNamEE;

do{
    UserNamEE = window.prompt("Enter your name"); // the benefit here is that we dont have to indentify role UserNamEE like before
}while(UserNamEE === "" || UserNamEE === null)


/* See you cant do this in normal if loop */


if(UserNamEE === "" || UserNamEE === null ){
    window.prompt("Enter Your Name")
}

console.log(`Welcome ${UserNamEE}`)



/* Practical excercise */

let loggedIn = false;
let name;
let password;

while(!loggedIn){
    name = window.prompt("Enter your name");
    password = window.prompt("Enter your password");

    if(name === "Myusername" && password === "Mypassword" ){
        loggedIn = true; /* it will stop the loop, because loggedIn will be true*/
        console.log("You are logged in!")
    }
    else {
        console.log("Invalid")
    }

}