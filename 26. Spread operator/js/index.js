// spread operator = ... allows iterable such as an
//                   array or string to be expanded
//                   into seperate elements
//                  (unpacks the element)


/* You probably think that this should work but not */
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(numbers);

console.log(maximum)

/* heres how we can fix that */

let number = [1, 2, 3, 4, 5];
let maximu = Math.max(...number); /* imagine that with the dots, you open the box, this is literally it. */
/* with the dots you opem up the element and then we can use stuff in it */
let minimu = Math.min(...number);

console.log(maximum)
console.log(minimu)
