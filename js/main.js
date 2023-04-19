const inputNumber1 = document.querySelector("#number1");
const inputNumber2 = document.querySelector("#number2");

const resultBox = document.querySelector("#result-box");

const bntPlus = document.querySelector("#btn-plus");
const bntTimes = document.querySelector("#btn-times");
const bntClear = document.querySelector("#btn-clear");

clearForm();

bntPlus.addEventListener("click", handleBntPlusClick);
bntTimes.addEventListener("click", handleBntTimesClick);
bntClear.addEventListener("click", handleBntClearClick);

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function validateNumbers() {
    const n1 = inputNumber1.value;
    const n2 = inputNumber2.value;

    if (isNumber(n1)) {
        inputNumber1.classList.remove("input-error");
    } else {
        inputNumber1.classList.add("input-error");
    }

    if (isNumber(n2)) {
        inputNumber2.classList.remove("input-error");
    } else {
        inputNumber2.classList.add("input-error");
    }

    return isNumber(n1) && isNumber(n2);
}

function handleBntPlusClick(event) {
    if (validateNumbers()) {
        const n1 = Number(inputNumber1.value);
        const n2 = Number(inputNumber2.value);
        resultBox.innerHTML = n1 + n2;
    }
}

function handleBntTimesClick(event) {
    if (validateNumbers()) {
        const n1 = Number(inputNumber1.value);
        const n2 = Number(inputNumber2.value);
        resultBox.innerHTML = n1 * n2;
    }
}

function handleBntClearClick(event) {
    clearForm();
}

function clearForm() {
    inputNumber1.value = "";
    inputNumber2.value = "";
    inputNumber1.classList.remove("input-error");
    inputNumber2.classList.remove("input-error");
    resultBox.innerHTML = "0";
    number1.focus();
}