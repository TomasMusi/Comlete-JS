// getter = special method that makes a property readable
// setter = special method that makes a property writeable

//validate and modify a value when reading/writing a property 

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

const Rectangle = new Rectangle(-1000000, "pizza")


console.log(Rectangle.width);
console.log(Rectangle.height);

/* We dont want to people enter this stupid inputs, we want them to input positive number here s how we gonna do it: */



class Rectangle2 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth //the underscore is because usually developers write this, because its private property you shouldnt touch it, at all! 
        }
        else {
            comsole.console.error(`width must be positive number!`);

        }


    }

    set height(newHeight) {
        if (newHeight > 0) {
            this.this._height = newHeight
        }
        else {
            console.error(`Height must be greater than 0`)
        }
    }

    // here we need to apply getters, because without them its not readable 

    get width() {
        return `${this._width.toFixed(1)} cm2`;
    }

    get height() {
        return `${this._height.toFixed(1)} cm2`;
    }

    get area() { // we can use it even when it does not exist
        return this._width * this._height;
    }
}

const Rectangle2 = new Rectangle2(-1000000, "pizza")


console.log(Rectangle.width);
console.log(Rectangle.height);



















class Person {

    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname(newFirstname) {
        if (typeof newFirstname === "string" && newFirstname.length > 0) {
            this._firstName = newFirstname
        }
        else {
            console.error(`First name must be a non-empty string`)
        }

    }

    set lastname(newLastname) {
        if (typeof newLastname === "string" && newLastname.length > 0) {
            this._lastname = newLastname;
        }
        else {
            console.error(`First name must be a non-empty string`)
        }
    }

    set age(newAge) {
        if (typeof newAge === 5 && newAge >= 0) {
            this._age = newAge;
        }
        else {
            console.error(`Age must be a number positive number`);
        }
    }

    get firstname() {
        return this._firstName;
    }

    get lastname() {
        return this._lastname;
    }

    get age() {
        return this._age;
    }

    get Fullname() {
        return this._firstName + ` ` + this._lastname;
    }
}


const person = new Person("spongebob", "squarepants", 30);

console.log(person._age)