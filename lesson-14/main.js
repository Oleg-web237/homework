// let — позволяет переприсваивать значение переменной
let x = 10;
x = 20; //допустимо
// const — запрещает любое переназначение после инициализации
const y = 10;
// y = 20; // ошибка!

const fullName = "Анна Иванова";
const age = 30;
const isDeveloper = true;

const contactInfo = {
    email: "xxx@xxxxxxx.com",
    phone: "+7 (999) 999-99-99"
}
console.log("Имя:", fullName);
console.log("Возраст:", age);
console.log("Разработчик:", isDeveloper);

console.log("Контакты:", contactInfo);
// ---------------------------------------------------------------------------
function greet(name) {
    return `Hello "${name}"`
}
console.log(greet("Алексей"))
    // --------------------------------------------------------------------------
const numbers = [5, 12, 3, 18, 7, 10, 25] // Пример массива чисел

function printNumbersGreaterThanTen(arr) {
    arr.forEach(number => {
        if (number > 10) {
            console.log(number)
        }
    })
}
printNumbersGreaterThanTen(numbers)
    // ---------------------------------------------------------------------------
function calculator(num1, num2, operator) {
    switch (operator) {
        case 'plus':
            return num1 + num2 // Сложение
        case 'minus':
            return num1 - num2 // Вычитание
        case 'multiply':
            return num1 * num2 // Умножение
        case 'divide':
            if (num2 !== 0) {
                return num1 / num2 // Деление
            } else {
                return 'Ошибка: деление на ноль' // Обработка деления на ноль
            }
        default:
            return 'Ошибка: неизвестный оператор' // Обработка неизвестного оператора
    }
}


let result1 = calculator(2, 3, 'minus')
console.log(result1); // Выведет -1

let result2 = calculator(5, 10, 'plus')
console.log(result2); // Выведет 15

let result3 = calculator(4, 2, 'multiply')
console.log(result3); // Выведет 8

let result4 = calculator(10, 2, 'divide')
console.log(result4); // Выведет 5
// -------------------------------------------------------------------------
const myProfile = {
    имя: "Алексей",
    возраст: 35,
    профессия: "инженер",
    город: "Москва"
}
console.log(myProfile)
    // -------------------------------------------------------------------------
const greeter = {

    sayHello: function(name) {
        return `Hello "${name}"`
    }
}
console.log(greeter.sayHello("Алексей"))
    // ----------------------------------------------------------------------
const users = [
    { имя: "Иван", роль: "пользователь" },
    { имя: "Мария", роль: "админ" },
    { имя: "Петр", роль: "пользователь" },
    { имя: "Анна", роль: "модератор" },
    { имя: "Светлана", роль: "пользователь" }
]
let simpleUsersCount = 0
for (let i = 0; i < users.length; i++) {

    if (users[i].роль !== "админ") {
        simpleUsersCount++
    }
}
console.log("Количество простых пользователей:", simpleUsersCount)