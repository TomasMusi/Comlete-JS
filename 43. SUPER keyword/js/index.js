// super = keyword is used in classes to call the constructor or
//         acces the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    move(speed) {
        console.log(`This ${this.name} moves at of ${speed}`)
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log(`This ${this.name} can fly`);
        super.move(this.swimSpeedSpeed);
    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        console.log(`This ${this.name} can fly`)
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 21);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 15);



/* without super() function it would not work */