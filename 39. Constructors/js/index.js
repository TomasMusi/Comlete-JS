// constructor = special method for defining the
//               properties and methods of objects




/* Instead of writing it like this we can use shortcut! */

const car1 = {
    make: `Ford`,
    model: `Mustang`,
    year: 2024,
    color: `red`,
    drive: () => { console.log(`You drive ${this.model}`) }
}
const car2 = {
    make: `Chevrolet`,
    model: `Camaro`,
    year: 2025,
    color: `blue`,
    drive: () => { console.log(`You drive ${this.model}`) }
}
const car3 = {
    make: `Dodge`,
    model: `Charger`,
    year: 2026,
    color: `silver`,
    drive: () => { console.log(`You drive ${this.model}`) }
}


/* the shortcut */

function Car(make, model, year, color) {
    this.make = make,
        this.model = model,
        this.year = year,
        this.color = color
}

const car_1 = new Car(`Ford`, `Mustang`, 2024, `red`);

console.log(car_1);

const car_2 = new Car(`Chevrolet`, `Camaro`, 2025, `blue`); 