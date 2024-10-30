const display = document.getElementById("display");
let timer = null;
let startime = 0;
let elapsedTime = 0;
let isRunnig = false;

function Start() {

    if (!isRunnig) {
        startime = Date.now() - elapsedTime;
        timer = setInterval(Update, 10);
        isRunnig = true;
    }
}

function Stop() {

    if (isRunnig) {
        clearInterval(timer);
        elapsedTime = Date.now() - startime;
        isRunnig = false;
    }
}

function Reset() {
    clearInterval(timer);
    startime = 0;
    elapsedTime = 0;
    isRunnig = false;
    display.textContent = `00:00:00:00`;
}

function Update() {

    const currentTime = Date.now();
    elapsedTime = currentTime - startime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);


    hours = String(hours).padStart(2, `0`);
    minutes = String(minutes).padStart(2, `0`);
    seconds = String(seconds).padStart(2, `0`);
    miliseconds = String(miliseconds).padStart(2, `0`);

    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}