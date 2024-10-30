// Date objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted

const date = new Date();
console.log(date); /* shows exact Date */


/* If you want to have your custom show date heres how */

//Date (year, month, day, hour, minute, second, ms)


const datum = new Date(2024, 10, 25, 15, 4, 30, 5);
console.log(datum);


/* Datum */

const datu = new Date();

const year = datu.getFullYear(2023);
const month = datu.getMonth(11);
const day = datu.getDate(17);
const DayOfWeek = date.getDay(4)

console.log(year);
console.log(month);
console.log(day);
console.log(DayOfWeek);