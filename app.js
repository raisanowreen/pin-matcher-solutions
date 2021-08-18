function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    console.log(pinString);
    if (pinString.length == 4) {
        return pin;

    }
    else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calc = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calc.value = '';
        }
    }
    else {
        const calc = document.getElementById('typed-numbers');
        const calcInput = calc.value;
        const newCalc = calcInput + number;
        calc.value = newCalc;
    }
})

function verifyPin() {

    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const successInput = document.getElementById('notify-succeed');
    const failedInput = document.getElementById('notify-failed');



    if (pin == typedNumbers) {
        successInput.style.display = 'block';
        failedInput.style.display = 'none';
    }
    else {
        successInput.style.display = 'none';
        failedInput.style.display = 'block';
    }


}