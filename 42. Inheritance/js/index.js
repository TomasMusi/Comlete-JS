// inheritance = allows a new class to inherit properties and methods
//               from an existing class (parent -> child)
//               helps with code reusability


/* thanks to this we don`t have to write functions inside of every single animal, such as Fish, Hawk, Rabbit */

class Animal {
    alive = true;
    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    name = `Rabbit`;

    run() {
        console.log(`This ${this.name} is running`);
    }
}

class fish extends Animal {
    name = `Fish`;

    swim() {
        console.log(`This ${this.name} is swimming`)
    }
}

class Hawk extends Animal {
    name = `Hawk`;

    fly() {
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new fish();
const hawk = new Hawk();

rabbit.alive = false; /* he is no longer alive */

console.log(rabbit.alive);


rabbit.eat();
rabbit.sleep();

fish.swim()