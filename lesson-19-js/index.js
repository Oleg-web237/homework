// Задача 1.
// Создайте переменные с корректными именами, чтобы сохранить следующую информацию:
// 1. firstName – имя (строка)
// 2. lastName – фамилия (строка)
// 3. isStudent – является ли учеником курса (булево значение)

// Задача 2.
// 1. Объявите переменную age с числовым значением возраста студента.
// 2. Объявите переменную currentYear и присвойте ей значение текущего года (например, 2025).
// 3. Используя age и currentYear вычислите год рождения студента, запишите результат в переменную birthYear.

// Задача 3.
// Выведите в консоли сообщение в таком формате:
// Меня зовут [firstName] [lastName], мне [age] лет. Я ученик/ученица курса: [isStudent].

// Задача 4.
// Какое значение будет у переменной result?
// let a = '123';
// let b = +'456';
// let c = Number('789');
// let d = Boolean(0);
// let e = Boolean(' ');
// let result = a + b + c + d + e;
const firstName = "Олег"
const lastName = " user "
const isStudent = true
result = firstName + lastName + isStudent
console.log(result)

const age = 75
const currentYear = 2026
const birthYear = currentYear - age
console.log(birthYear)

const firstName1 = "Олег"
const lastName1 = "мене "
const age1 = 28
const wr = "лет"
const isStudent1 = "я ученик "
const curs = "курса "
console.log(`меня зовут ${firstName1} ${lastName1} ${age1} ${wr} ${isStudent1} ${curs}`)

let a = ' 123';
let b = +' 456';
let c = Number('789 ');
let d = Boolean(0);
let e = Boolean('  ');
result = a + b + c + d + e
console.log(result)
// 123456789falsetrues