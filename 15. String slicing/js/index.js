// string slicing = creating a substring
//                  from a portion of another string

//                  string.slice(start, end)

const FULLName = "Tomáš Musil";

let firstName = FULLName.slice(0, 5)
let lastname = FULLName.slice(5, 10)


// You would normaly do something like this, but the ending index is actually exclusive which is why this would only print Tomá
// let firstName = FULLName.slice(0, 4) 


console.log(firstName);
console.log(lastname);


/* What if i wanted the first character in Fullname? */

let firstChar = FULLName.slice(0,1);



/* But we want it to be more interactive, because if we change the class FULLName above it will not work */



const namee = "Tombak Musil";

let fname = namee.slice(0, namee.indexOf(" ")) /* it will calculate till the space */
let lname = namee.slice(namee.indexOf(" "))


/* Practical exercise  Make email adress cutout */

const emailadress = "Tombak@musil.com";

let femail = emailadress.slice(0, emailadress.indexOf("@"))
let lemail = emailadress.slice(emailadress.indexOf("@"))

console.log(femail)
console.log(lemail)

