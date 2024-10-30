// Calculator Program

const display = document.getElementById(`display`);

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try { display.valiue = eval(display.value) }
    catch (error) {
        display.value = `Error`;
    }

}

function clearDisplay() {
    display.value = "";
}