// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name


const person1 = {
    name: `Spongebob`,
    favFood: `Hamburgers`,
    sayHello: () => { console.log(`Hi! i am ${this.name}`) } // we must use this. , because otherwise it wouldnt work they way we want to.
};

