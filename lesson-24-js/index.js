// Задание 1.
const users = [
  { name: 'Alex', age: 24, isAdmin: false },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
]

users.push(
  { name: 'Ann', age: 19, isAdmin: false },
  { name: 'Jack', age: 43, isAdmin: true }
)
console.log(users)
// Задание 2.
function getUserAverageAge(users) {
  if (users.length === 0) return 0

  const totalAge = users.reduce((sum, user) => sum + user.age, 0)
  return totalAge / users.length
}

console.log(getUserAverageAge(users))
// Задание 3. 
function getAllAdmins(users) {
  return users.filter(user => user.isAdmin);
}
console.log(getAllAdmins(users));
// Задание 4.
function first(arr, n) {
  if (n === 0) {
    return []
  }
  if (n === undefined) {
    return arr.slice(0, 1)
  }
  return arr.slice(0, n)
}

const array = [1, 2, 3, 4, 5]
console.log(first(array, 3))
console.log(first(array, 0))
console.log(first(array))


// true правда/ false лож.
// 1) string-строка
// 2) number-номер
// 3) boolean-логический
// 4) undefined-не определено
// 5) null-нулевой
// ---------------ОПЕРАТОРЫ СРАВНЕНИЯ-------------
// >, <, >=, <= -БОЛЬШЕ,МЕНЬШЕ, БОЛЬШЕ ЛИБО РАВНО,МЕНЬШЕ ЛИБО РАВНО
// == - НЕСТРОГОЕ СРАВНЕНИЕ
// === - СТРОГОЕ СРАВНЕНИЕ
// != - НЕСТРОГОЕ НЕРАВЕНСТВО
// !== - СТРОГОЕ НЕ РАВЕНСТВО
// ----------------------------------------
// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
// && -ЛОГИЧЕСКОЕ И
// || - ЛОГИЧЕСКОЕ ИЛИ
// !true - логическое не
