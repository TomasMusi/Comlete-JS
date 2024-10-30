

const Fruits = [{ name: `Apple`, color: `red`, calories: 95 },
{ name: `Orange`, color: `Orange`, calories: 45 },
{ name: `Banana`, color: `Yellow`, calories: 105 },
{ name: `Coconut`, color: `white`, calories: 159 },
{ name: `pineapple`, color: `yellow`, calories: 37 }]


console.log(Fruits[0].name) // Apple
console.log(Fruits[0].calories) // 95


Fruits.push({ name: `grapes`, color: `purple`, calories: 62 })



// ---------- ForEach() ----------


Fruits.forEach(Fruit => console.log(Fruit.name)) // writes all names in the list of fruits



// ---------- map() ----------
// Returns new array with new stuff
const fruitnames = Fruits.map(Fruit => Fruit.name)
console.log(fruitnames);


// ---------- filter() ----------
// filter will return new array after using each element and checking a condition



//                                 Parmeter  if the fruits strictly equals to yellow                       
const yellowfruits = fruits.filter(fruits => fruits.color === `yellow`);
console.log(yellowfruits);


const lowcalories = fruits.filter(fruits => fruits.calories <= 100);
console.log(lowcalories);




// ---------- reduce() ----------
// returns single value

//                                               are the calories greater than our current record holders?       
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

console.log(maxFruit);

const minFruit = fruits.reduduce((min, fruit) => fruit.calories < min.calories ? fruits : min);