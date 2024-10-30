// nested objects = Objects inside of other Objects.
//                  Allows you to represent more complex data structures
//                  Child object is enclosed by a Parent object

//                  person{Adress{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}


const person = {
    Fullname: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    adress: {
        street: "124 Conch St.",
        city: `Bikini Bottom`,
        country: `Int. Water`
    }
}


console.log(person.Fullname);
console.log(person.age)
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);

console.log(person.adress.city) // <- this is what we are talking about 


for (const property in person.adress) {
    console.log(person.adress[property])
}











class Guy {

    constructor(name, age, ...Address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address); // this will send it: street, city, coutry
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Guy(`Spongebob`, 30, `124 Conch Street`,
    `Bikini Bottom`,
    `Int. Waters`)



const person2 = new Guy(`Spongebob`, 30, `124 Conch Street`,
    `Bikini Bottom`,
    `Int. Waters`)


const person3 = new Guy(`Spongebob`, 30, `124 Conch Street`,
    `Bikini Bottom`,
    `Int. Waters`)


console.log(person1.address.country);