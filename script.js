const result = document.getElementById("result");

let currentNumber = "0";
let firstNumber = null;
let operation = null;
let shouldResetScreen = false;


// Вывод числа на экран
function updateScreen() {
    result.textContent = currentNumber;
}


// Ввод цифры
function inputDigit(digit) {

    if (currentNumber === "0" || shouldResetScreen) {
        currentNumber = digit;
        shouldResetScreen = false;
    } else {
        currentNumber += digit;
    }

    updateScreen();
}


// Ввод точки
function inputDot() {

    if (shouldResetScreen) {
        currentNumber = "0";
        shouldResetScreen = false;
    }

    if (!currentNumber.includes(".")) {
        currentNumber += ".";
    }

    updateScreen();
}


// Выбор операции
function chooseOperation(selectedOperation) {

    if (firstNumber !== null && operation !== null) {
        calculate();
    }

    firstNumber = Number(currentNumber);

    operation = selectedOperation;

    shouldResetScreen = true;
}


// Выполнение вычисления
function calculate() {

    if (firstNumber === null || operation === null) {
        return;
    }

    const secondNumber = Number(currentNumber);

    let answer;


    switch (operation) {

        case "+":
            answer = firstNumber + secondNumber;
            break;

        case "-":
            answer = firstNumber - secondNumber;
            break;

        case "*":
            answer = firstNumber * secondNumber;
            break;

        case "/":

            if (secondNumber === 0) {
                currentNumber = "Ошибка";
                firstNumber = null;
                operation = null;

                updateScreen();

                return;
            }

            answer = firstNumber / secondNumber;
            break;
    }


    currentNumber = String(
        Number(answer.toFixed(8))
    );

    firstNumber = null;
    operation = null;

    shouldResetScreen = true;

    updateScreen();
}


// Очистка
document
    .getElementById("btn_op_clear")
    .addEventListener("click", function () {

        currentNumber = "0";
        firstNumber = null;
        operation = null;
        shouldResetScreen = false;

        updateScreen();
    });


// Плюс / минус
document
    .getElementById("btn_op_sign")
    .addEventListener("click", function () {

        if (currentNumber !== "0") {
            currentNumber = String(
                Number(currentNumber) * -1
            );
        }

        updateScreen();
    });


// Проценты
document
    .getElementById("btn_op_percent")
    .addEventListener("click", function () {

        currentNumber = String(
            Number(currentNumber) / 100
        );

        updateScreen();
    });


// Цифры
document
    .getElementById("btn_digit_0")
    .addEventListener("click", () => inputDigit("0"));

document
    .getElementById("btn_digit_1")
    .addEventListener("click", () => inputDigit("1"));

document
    .getElementById("btn_digit_2")
    .addEventListener("click", () => inputDigit("2"));

document
    .getElementById("btn_digit_3")
    .addEventListener("click", () => inputDigit("3"));

document
    .getElementById("btn_digit_4")
    .addEventListener("click", () => inputDigit("4"));

document
    .getElementById("btn_digit_5")
    .addEventListener("click", () => inputDigit("5"));

document
    .getElementById("btn_digit_6")
    .addEventListener("click", () => inputDigit("6"));

document
    .getElementById("btn_digit_7")
    .addEventListener("click", () => inputDigit("7"));

document
    .getElementById("btn_digit_8")
    .addEventListener("click", () => inputDigit("8"));

document
    .getElementById("btn_digit_9")
    .addEventListener("click", () => inputDigit("9"));


// Точка
document
    .getElementById("btn_digit_dot")
    .addEventListener("click", inputDot);


// Операции
document
    .getElementById("btn_op_plus")
    .addEventListener("click", () => chooseOperation("+"));

document
    .getElementById("btn_op_minus")
    .addEventListener("click", () => chooseOperation("-"));

document
    .getElementById("btn_op_mult")
    .addEventListener("click", () => chooseOperation("*"));

document
    .getElementById("btn_op_div")
    .addEventListener("click", () => chooseOperation("/"));


document
    .getElementById("btn_op_equal")
    .addEventListener("click", calculate);


// Смена темы
document
    .getElementById("themeButton")
    .addEventListener("click", function () {

        document.body.classList.toggle("dark");

    });


// Выпадающий список
document
    .getElementById("style-select")
    .addEventListener("change", function () {

        document.body.classList.remove("dark");
        document.body.classList.remove("beige");

        if (this.value === "dark") {
            document.body.classList.add("dark");
        }

        if (this.value === "beige") {
            document.body.classList.add("beige");
        }
    });


// Клавиатура
document.addEventListener("keydown", function (event) {

    if (event.key >= "0" && event.key <= "9") {
        inputDigit(event.key);
    }


    if (event.key === ".") {
        inputDot();
    }


    if (event.key === "+") {
        chooseOperation("+");
    }


    if (event.key === "-") {
        chooseOperation("-");
    }


    if (event.key === "*") {
        chooseOperation("*");
    }


    if (event.key === "/") {
        chooseOperation("/");
    }


    if (event.key === "Enter" || event.key === "=") {
        calculate();
    }


    if (event.key === "Escape") {

        currentNumber = "0";
        firstNumber = null;
        operation = null;

        updateScreen();
    }

});