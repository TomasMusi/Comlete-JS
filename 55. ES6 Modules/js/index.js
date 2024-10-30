// ES6 Module = An external fiel that contains reusable code
//              that can be imported into other Javascript Files.
//              Can contain variables, classes, functions ... and more
//              Introduced as part of ECMAScript 2015 update.

/* To use another javascript files into one, we must edit HTML*/

import { PI, getCircumference, getArea, getVolume } from `../js/mathUtil.js`;

console.log(PI); /* it wokrs! */


const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)} cm`);
console.log(`${area.toFixed(2)} cm2`);
console.log(`${volume.toFixed(2)} cm3`);
