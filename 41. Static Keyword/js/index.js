// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created
//          from that class (class owns anything static, not the objects)

class MathUtil {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getcircumference(radius) {
        return 2 * this.PI * radius;
    }
}

console.log(MathUtil.PI)

console.log(MathUtil.getDiameter(10));

console.log(MathUtil.getcircumference(10));



class User {

    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users online`)
    }

    sayHello() {
        console.log(`Hello, my username is ${this.username}`)
    }
}


const user1 = new User("Spongebob");
const user2 = new User("Patrick");

console.log(user1.username);
console.log(user2.username);
console.log(user1.userCount);


user1.sayHello();
user2.sayHello();
user1.getUserCount();