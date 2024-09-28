// switch = can be an efficient replacement to many else if statements




/* BEFORE USING FUNCITON SWITCH */
let day = 1;

if(day ==1) {
    console.log("It is Monday");
}
else if(day ==2) {
    console.log("It is Tuesday");
}
else if(day ==3) {
    console.log("It is Wednesday");
}
else if(day ==4) {
    console.log("It is Thursday");
}
else if(day ==5) {
    console.log("It is Friday");
}
else if(day ==6) {
    console.log("It is Saturday");
}
else if(day ==7) {
    console.log("It is Sunday");
}

else {
    console.log(`${day} is not a day`)
}





/* FUNCTION SWITCH */


let dayy = 1;

switch(day) {
    case 1:
        console.log("Its Monday")
        break;
    case 2:
        console.log("Its Tuesday")
        break;
    case 3:
        console.log("Its Wednesday")
        break;
    case 4:
        console.log("Its Thursday")
        break;
    case 5:
        console.log("Its Friday")
        break;
    case 6:
        console.log("Its Saturday")
        break;
    case 7:
        console.log("Its Sunday")
        break;
    default: /* This will print if user input doesnt match the cases */
        console.log(`${dayy} is not a day!`)
}

/* We must use the break; ,because without it it would print all of these days, because of the switch */




let Score = 92;
let grade;

switch(true){
    case Score >= 90:
        grade = "A";
        break;
}

console.log(grade)