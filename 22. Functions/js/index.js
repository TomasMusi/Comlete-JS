// funciton = A seciton of reusable code
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.


function HappyBirthday(){
    console.log("Happy birthday to you!")
    console.log("Happy birthday to you!")
    console.log("Happy birthday dear you!")
}

HappyBirthday();

function HappyBirthday1(username, age){
    console.log("Happy birthday to you!")
    console.log(`Happy birthday ${username}`)
    console.log(`You are ${age} years old`)
}

HappyBirthday1("Tomas", 17);



/* We can also use return */


function add(x,y){
    let result = x + y;
    return result /* we must use return here because otherwise it would not work */
}

console.log(add(2, 3));


function isEven(number) {
    
    if(number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function isvalidEmail(email) {
    if(email.includes("@")) {
        return true;

    }
    else{ 
        return false;
    }
}