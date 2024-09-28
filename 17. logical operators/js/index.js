// logical operators =  used to combine or manipulate Boolean values 
//                                    (true or false)

//          AND = &&  MUST BE TRUE TRUE or FALSE FALSE
//          OR  = || ATLEAST ONE STATEMENT MUST BE TRUE 
//          NOT = ! IT MAKES FROM TRUTHFULL STATEMENT FALSE STATEMENT



const temp = 20;

/* This programw will not work the way we want to, because if we put into the temp numbers like 2000 -100 it will still write the weather is good */

if(temp > 0) {
    console.log("The weather is GOOD");
}
else if(temp <= 30) {
    console.log("The weather is GOOD")
}
else {
    console.log("The weather is BAD.")
}


/* Great way */

if(temp > 0 && temp <= 30) {
    console.log("The weather is GOOD");
}
else {
    console.log("The weather is BAD.")
}

/* using ! */

const isSunny = false;

if(!isSunny) {
    console.log("It is SUNNY") /* the ! makes it: IT IS NOT SUNY */
}
else{
    console.log("IT is CLOUDY")
}