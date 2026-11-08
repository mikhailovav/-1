const result =
    document.getElementById("result");


let currentNumber = "0";

let firstNumber = null;

let operation = null;

let shouldResetScreen = false;


// Максимальное количество цифр

const MAX_DIGITS = 11;


// ====================
// ВЫВОД НА ЭКРАН
// ====================

function updateScreen() {

    result.textContent =
        currentNumber;
}


// ====================
// ОШИБКА
// ====================

function showError() {

    currentNumber = "Ошибка";

    firstNumber = null;

    operation = null;

    shouldResetScreen = true;

    updateScreen();
}


// ====================
// ПОДСЧЁТ ЦИФР
// ====================

function getDigitsCount(value) {

    return value
        .replace("-", "")
        .replace(".", "")
        .length;
}


// ====================
// ПРОВЕРКА ДЛИНЫ
// ====================

function isNumberTooLong(value) {

    return (
        getDigitsCount(value) >
        MAX_DIGITS
    );
}


// ====================
// ВВОД ЦИФРЫ
// ====================

function inputDigit(digit) {

    // Если была ошибка,
    // начинаем новый ввод

    if (
        currentNumber === "Ошибка"
    ) {

        currentNumber = "0";

        firstNumber = null;

        operation = null;

        shouldResetScreen = false;
    }


    // Если нужно начать
    // ввод второго числа

    if (
        currentNumber === "0" ||
        shouldResetScreen
    ) {

        currentNumber = digit;

        shouldResetScreen = false;

    } else {

        // Проверяем,
        // не станет ли число
        // слишком длинным

        const newNumber =
            currentNumber + digit;

        if (
            isNumberTooLong(newNumber)
        ) {

            showError();

            return;
        }

        currentNumber =
            newNumber;
    }


    // Дополнительная проверка

    if (
        isNumberTooLong(currentNumber)
    ) {

        showError();

        return;
    }


    updateScreen();
}


// ====================
// ВВОД ТОЧКИ
// ====================

function inputDot() {

    if (
        currentNumber === "Ошибка"
    ) {

        currentNumber = "0";

        firstNumber = null;

        operation = null;

        shouldResetScreen = false;
    }


    if (shouldResetScreen) {

        currentNumber = "0";

        shouldResetScreen = false;
    }


    // Точка добавляется
    // только один раз

    if (
        !currentNumber.includes(".")
    ) {

        currentNumber += ".";
    }


    updateScreen();
}


// ====================
// ВЫБОР ОПЕРАЦИИ
// ====================

function chooseOperation(
    selectedOperation
) {

    if (
        currentNumber === "Ошибка"
    ) {

        return;
    }


    if (
        firstNumber !== null &&
        operation !== null
    ) {

        calculate();
    }


    if (
        currentNumber === "Ошибка"
    ) {

        return;
    }


    firstNumber =
        Number(currentNumber);


    operation =
        selectedOperation;


    shouldResetScreen =
        true;
}


// ====================
// ВЫЧИСЛЕНИЕ
// ====================

function calculate() {

    if (
        firstNumber === null ||
        operation === null
    ) {

        return;
    }


    if (
        currentNumber === "Ошибка"
    ) {

        return;
    }


    const secondNumber =
        Number(currentNumber);


    let answer;


    switch (operation) {


        case "+":

            answer =
                firstNumber +
                secondNumber;

            break;


        case "-":

            answer =
                firstNumber -
                secondNumber;

            break;


        case "*":

            answer =
                firstNumber *
                secondNumber;

            break;


        case "/":


            // Деление на ноль

            if (
                secondNumber === 0
            ) {

                showError();

                return;
            }


            answer =
                firstNumber /
                secondNumber;

            break;
    }


    // Проверка результата

    if (
        !Number.isFinite(answer)
    ) {

        showError();

        return;
    }


    const formattedAnswer =
        String(
            Number(
                answer.toFixed(8)
            )
        );


    // Если результат
    // слишком длинный

    if (
        isNumberTooLong(
            formattedAnswer
        )
    ) {

        showError();

        return;
    }


    currentNumber =
        formattedAnswer;


    firstNumber = null;

    operation = null;

    shouldResetScreen = true;


    updateScreen();
}


// ====================
// ИНДИВИДУАЛЬНАЯ
// ОПЕРАЦИЯ
// СКИДКА 12%
// ====================

function applyStoreezDiscount() {

    if (
        currentNumber === "Ошибка"
    ) {

        return;
    }


    const price =
        Number(currentNumber);


    if (
        !Number.isFinite(price)
    ) {

        showError();

        return;
    }


    // После скидки 12%
    // остаётся 88%

    const discountedPrice =
        price * 0.88;


    const formattedPrice =
        String(
            Number(
                discountedPrice
                    .toFixed(8)
            )
        );


    if (
        isNumberTooLong(
            formattedPrice
        )
    ) {

        showError();

        return;
    }


    currentNumber =
        formattedPrice;


    firstNumber = null;

    operation = null;

    shouldResetScreen = true;


    updateScreen();
}


// ====================
// ОЧИСТКА
// ====================

function clearCalculator() {

    currentNumber = "0";

    firstNumber = null;

    operation = null;

    shouldResetScreen = false;

    updateScreen();
}


// Кнопка C

document
    .getElementById(
        "btn_op_clear"
    )
    .addEventListener(
        "click",
        clearCalculator
    );


// ====================
// ПЛЮС / МИНУС
// ====================

document
    .getElementById(
        "btn_op_sign"
    )
    .addEventListener(
        "click",
        function () {

            if (
                currentNumber ===
                "Ошибка"
            ) {

                return;
            }


            if (
                currentNumber !== "0"
            ) {

                currentNumber =
                    String(
                        Number(
                            currentNumber
                        ) * -1
                    );
            }


            updateScreen();
        }
    );


// ====================
// ПРОЦЕНТЫ
// ====================

document
    .getElementById(
        "btn_op_percent"
    )
    .addEventListener(
        "click",
        function () {

            if (
                currentNumber ===
                "Ошибка"
            ) {

                return;
            }


            const percent =
                Number(
                    currentNumber
                ) / 100;


            const formattedPercent =
                String(
                    Number(
                        percent
                            .toFixed(8)
                    )
                );


            if (
                isNumberTooLong(
                    formattedPercent
                )
            ) {

                showError();

                return;
            }


            currentNumber =
                formattedPercent;


            updateScreen();
        }
    );


// ====================
// ЦИФРЫ
// ====================

document
    .getElementById(
        "btn_digit_0"
    )
    .addEventListener(
        "click",
        () => inputDigit("0")
    );


document
    .getElementById(
        "btn_digit_1"
    )
    .addEventListener(
        "click",
        () => inputDigit("1")
    );


document
    .getElementById(
        "btn_digit_2"
    )
    .addEventListener(
        "click",
        () => inputDigit("2")
    );


document
    .getElementById(
        "btn_digit_3"
    )
    .addEventListener(
        "click",
        () => inputDigit("3")
    );


document
    .getElementById(
        "btn_digit_4"
    )
    .addEventListener(
        "click",
        () => inputDigit("4")
    );


document
    .getElementById(
        "btn_digit_5"
    )
    .addEventListener(
        "click",
        () => inputDigit("5")
    );


document
    .getElementById(
        "btn_digit_6"
    )
    .addEventListener(
        "click",
        () => inputDigit("6")
    );


document
    .getElementById(
        "btn_digit_7"
    )
    .addEventListener(
        "click",
        () => inputDigit("7")
    );


document
    .getElementById(
        "btn_digit_8"
    )
    .addEventListener(
        "click",
        () => inputDigit("8")
    );


document
    .getElementById(
        "btn_digit_9"
    )
    .addEventListener(
        "click",
        () => inputDigit("9")
    );


// ====================
// ТОЧКА
// ====================

document
    .getElementById(
        "btn_digit_dot"
    )
    .addEventListener(
        "click",
        inputDot
    );


// ====================
// ОПЕРАЦИИ
// ====================

document
    .getElementById(
        "btn_op_plus"
    )
    .addEventListener(
        "click",
        () =>
            chooseOperation("+")
    );


document
    .getElementById(
        "btn_op_minus"
    )
    .addEventListener(
        "click",
        () =>
            chooseOperation("-")
    );


document
    .getElementById(
        "btn_op_mult"
    )
    .addEventListener(
        "click",
        () =>
            chooseOperation("*")
    );


document
    .getElementById(
        "btn_op_div"
    )
    .addEventListener(
        "click",
        () =>
            chooseOperation("/")
    );


// ====================
// РАВНО
// ====================

document
    .getElementById(
        "btn_op_equal"
    )
    .addEventListener(
        "click",
        calculate
    );


// ====================
// СКИДКА 12%
// ====================

document
    .getElementById(
        "btn_op_discount"
    )
    .addEventListener(
        "click",
        applyStoreezDiscount
    );


// ====================
// СМЕНА ТЕМЫ
// ====================

document
    .getElementById(
        "themeButton"
    )
    .addEventListener(
        "click",
        function () {

            document.body
                .classList
                .toggle("dark");


            document.body
                .classList
                .remove("beige");
        }
    );


// ====================
// ВЫПАДАЮЩИЙ СПИСОК
// ====================

document
    .getElementById(
        "style-select"
    )
    .addEventListener(
        "change",
        function () {

            document.body
                .classList
                .remove("dark");


            document.body
                .classList
                .remove("beige");


            if (
                this.value === "dark"
            ) {

                document.body
                    .classList
                    .add("dark");
            }


            if (
                this.value === "beige"
            ) {

                document.body
                    .classList
                    .add("beige");
            }
        }
    );


// ====================
// КЛАВИАТУРА
// ====================

document.addEventListener(
    "keydown",
    function (event) {


        // Цифры

        if (
            event.key >= "0" &&
            event.key <= "9"
        ) {

            inputDigit(
                event.key
            );
        }


        // Точка

        if (
            event.key === "."
        ) {

            inputDot();
        }


        // Плюс

        if (
            event.key === "+"
        ) {

            chooseOperation("+");
        }


        // Минус

        if (
            event.key === "-"
        ) {

            chooseOperation("-");
        }


        // Умножение

        if (
            event.key === "*"
        ) {

            chooseOperation("*");
        }


        // Деление

        if (
            event.key === "/"
        ) {

            event.preventDefault();

            chooseOperation("/");
        }


        // Равно / Enter

        if (
            event.key === "Enter" ||
            event.key === "="
        ) {

            calculate();
        }


        // Escape = очистка

        if (
            event.key === "Escape"
        ) {

            clearCalculator();
        }
    }
);


// ====================
// КЛАСС КНОПКИ-СЧЁТЧИКА
// ДЛЯ КОНТРОЛЬНОГО ВОПРОСА
// ====================

class CounterButton {

    constructor(button) {

        this.button = button;

        this.count = 0;


        this.button
            .addEventListener(
                "click",
                () => {

                    this.count++;


                    this.button
                        .textContent =
                        `Нажатий: ${this.count}`;
                }
            );
    }
}


// ====================
// ПОИСК МАКСИМАЛЬНОГО
// ЭЛЕМЕНТА МАССИВА
// ====================

function findMax(array) {

    let max = array[0];


    for (
        let i = 1;
        i < array.length;
        i++
    ) {

        if (
            array[i] > max
        ) {

            max = array[i];
        }
    }


    return max;
}


// Пример

const numbers = [
    4,
    15,
    2,
    27,
    8
];


console.log(
    "Максимальный элемент:",
    findMax(numbers)
);