//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
//  != inequality operator (Gives you true if 2 values are not equal)
// !== strict inequality operator





const PI = 3.14;



/* This would work perfectly because it compares the numbers */
//  == comparison operator (compare if values are equal)
if(PI == "3.14") {
    console.log("That is Pi");
}
else {
    console.log("That is NOT PI")
}


/* But this would work differently, because it compares number to string */
// === strict equality operator (compare if values & datatype are equal)
if(PI === "3.14") {
    console.log("That is Pi"); // This would not work! 
}
else {
    console.log("That is NOT PI")
}

/* This would work! */
if(PI === 3.14) {
    console.log("That is Pi"); // This would not work! 
}
else {
    console.log("That is NOT PI")
}


//  != inequality operator (Gives you true if 2 values are not equal)

/* because PI doesnt match with 3.14 it will be true therefore it will write "That is NOT Pi" */
if(PI != "3.14") {
    console.log("That is NOT Pi");
}
else {
    console.log("That is Pi");
}


