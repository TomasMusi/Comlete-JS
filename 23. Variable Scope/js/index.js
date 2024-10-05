// variable scope = where a variable is recognized
//                  and accessible (local vs global)



/* 
This will not work, because you have the same value equals something different
let x = 1;
let x = 2; 

*/

/* this will, because its local scope, the above is global and also functions cannot see into another functions */
function funciton1(){
    let x = 1;
    console.log(x)
}


function funciton2(){
    let x = 2;
    console.log(x)
}


/* this will work, because everything outside of functions is global */

z = 5;

function function3() {
    console.log(z)
}


/* local version is superior to global: see here */


y = 4;

function function4() {
    y = 2;
    console.log(y)
}