const message = document.getElementById("myMessage"); 
const paypal = document.getElementById("paypalMethod");
const visa = document.getElementById("visaMethod");
const crypto = document.getElementById("cryptoMethod");
const master = document.getElementById("masterMethod");


document.getElementById("mySubmit").onclick = function() {
    if(paypal.checked) {
        message.textContent = `Paypal je selectnuty!`;
    }

    else if(visa.checked) {
        message.textContent = `Vybral jsi Visa`;
    }

    else if(crypto.checked) {
        message.textContent = `Vybral jsi Crypto`;
    }

    else if(master.checked) {
        message.textContent = `Vybral jsi Master Card`;
    }

    else {
        message.textContent=`Nic jsi nevybral`;
    }
}

/* You Must write it like this because if you wanted to write it like this it would not work! there must be else if */


/* 

document.getElementById("mySubmit").onclick = function() {
    if(paypal.checked) {
        message.textContent = `Paypal je selectnuty!`;
    }

    if(visa.checked) {
        message.textContent = `Vybral jsi Visa`;
    }

    if(crypto.checked) {
        message.textContent = `Vybral jsi Crypto`;
    }

    if(master.checked) {
        message.textContent = `Vybral jsi Master Card`;
    }

    else {
        message.textContent=`Nic jsi nevybral`;
    }
} 
    
*/