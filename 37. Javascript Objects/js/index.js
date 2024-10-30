// Object = A collectoin of related properties and/or methods
//          Can represent real world objects (people, products, places)
//          Object = {key:value,
//                    function()}


const person1 = {
    firstname: `Spongebob`,
    lastname: `Squarepants`,
    age: 30,
    isEmplyed: true,
    sayHello: function () {
        console.log(`Hi! my name is ${this.firstname} ${this.lastname}`)
    },
    sayBye: function () { console.log(`Goodbye!`) }
};

const person2 = {
    firstname: `Patrick`,
    lastname: `Star`,
    age: 42,
    isEmplyed: false,
    sayHello: function () {
        console.log(`Hi! my name is ${this.firstname} ${this.lastname}`)
    },
    sayBye: function () { console.log(`Goodbye!`) }
};

const person3 = {
    firstname: `Sandy`,
    lastname: `Cheeks`,
    age: 34,
    isEmplyed: true,
    sayHello: () => { console.log(`Hi! my name is ${this.firstname} ${this.lastname}`) },
    sayBye: function () { console.log(`Goodbye!`) }
};



console.log(person1.age);

person3.sayHello();
person2.sayBye();