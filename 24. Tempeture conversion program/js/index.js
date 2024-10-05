// Temperature conversion program

const textBox = document.getElementById("textBox");
const toFahrenreit = document.getElementById("ToFahrenheit");
const toCelsius = document.getElementById("ToCelius");
const result = document.getElementById("result");

let temp;
const val = textBox.value;

function convert() { /* because we in html gave button function onclick, he register this function */

    if (toFahrenreit.checked) {
        temp = Number(val);
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(1)} °F`; /* to fixed is great function,  that we can use if we have numbers like 5.5135768 */
    }

    else if (toCelsius.checked) {
        temp = Number(val);
        temp = (temp - 32) * (5 / 9);
        result.textContent = `${temp.toFixed(1)} °C`;
    }

    else {
        result.textContent = `Select a unit`;
    }
}