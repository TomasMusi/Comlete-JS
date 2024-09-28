// for loop = repeat some code a LIMITED amout of times

/* i equals zero; will continue till i is equal or lower than 2; during each iteration we will increase i by 1 */
for(let i = 0; i <=2; i++){
    console.log("Hello"); /* writes hello 3 times */
    console.log(i); /* writes 0,1,2 */
}

console.log("this will write after the loop ends");



/* how to skip a number? */


for(let i = 1; i <= 20; i++){

    if(i == 13){
        continue; // if there was break; it will exit it entirely
    }
    else {
        console.log(i)
    }
}