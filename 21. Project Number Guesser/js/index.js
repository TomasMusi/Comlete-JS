// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum) + minNum)


let guess;
let attempts = 0;
let running = true;

guess = Number(guess);

while(running == true) {
    guess = window.prompt(`Try to guess the number between ${minNum} - ${maxNum}`)
    // when we to stop the program we will do running = false; because it runs, because of the boolean above is set true;

    if(isNaN(guess)){ /* isNan  checks if your input is number */
        window.alert(`please enter a valid number`)
    }
    else if( guess < minNum || guess > maxNum) {
        window.alert(`please enter number between minimum number and maximum number`)
    }
    else {
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! Try again")
        }
        else if(guess > answer){
            window.alert("TOO HIGH! Try again!")
        }
        else {
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`)
            running = false;
        }
    }
}