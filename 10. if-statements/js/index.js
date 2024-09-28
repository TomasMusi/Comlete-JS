const myText = document.getElementById("myText");
const MySumbit = document.getElementById("mySumbit");
const resultElement = document.getElementById("resultElement");
let age;

MySumbit.onclick = function() {
    age = myText.value; //.value means you get the value from the variable
    age = Number(age);
    if(age >=100) {
        resultElement.textContent = `You are TOO OLD to enter this site`;
    }
    else if(age ==0) {
        resultElement.textContent = `You cant enter. You were just born.`;
    }
    else if(age >= 18) {
        resultElement.textContent = `You are NOT old enough to enter this site`;
    }
    else if(age < 0) {
        resultElement.textContent = `Your age cant be below 0`;
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site`;
    }

}

