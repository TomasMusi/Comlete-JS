
//RANDOM PASSWORD GENERATOR

function GeneratePassword(lenght, IncludeLowerCase, IncludeUpperCase, IncludeNumbers, IncludeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChar = "$!->,.()[]+=";

    let allowedChars = "";
    let password = "";

    /* if includelowercase is true or false, if its false it will give `` */
    allowedChars += IncludeLowerCase ? lowercaseChars : "";
    allowedChars += IncludeUpperCase ? uppercaseChars : "";
    allowedChars += IncludeNumbers ? numberChars : "";
    allowedChars += IncludeSymbols ? symbolsChar : "";

    console.log(allowedChars);

    if (lenght <= 0) {
        return `password lenght must be at least 1`;
    }
    /*              MUST BE STRICT!  */
    if (allowedChars.length === 0) {
        return `at least one set of characters needs to be selected!`;
    }

    for (let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}



const passwordLenght = 12;
const IncludeLowerCase = true;
const IncludeUpperCase = true;
const IncludeNumbers = true;
const IncludeSymbols = true;



const password = GeneratePassword(
    passwordLenght,
    IncludeLowerCase,
    IncludeUpperCase,
    IncludeNumbers,
    IncludeSymbols)

console.log(`Generated password: ${password}`)