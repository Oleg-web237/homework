// задача 1
const person = {
  name: "Олег",
  age: 90,
  city: "Москва"
}

console.log("Имя:", person.name)
console.log("Возраст:", person.age)
console.log("Город:", person.city)

// ____________________________________
// задача 3
function isEmpty(obj) {
  for (let key in obj) {
    return false
  }
  return true
}
console.log(isEmpty({}))
console.log(isEmpty({ name: "Алексей" }))
// _______________________________________
// задача 3

const task = {
  title: "Учить JavaScript",
  description: "Изучить основы языка",
  isCompleted: false
}
function cloneAndModify(object, modifications) {
  return { ...object, ...modifications }
}
const newTask = cloneAndModify(task, {
  title: "Практиковаться на задачах",
  isCompleted: true
})
for (let key in newTask) {
  console.log(`${key}: ${newTask[key]}`)
}
// __________________________________________
// задача 4
function callAllMethods(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'function') {
      obj[key]()
    }
  }
}

const myObject = {
  method1() {
    console.log('Метод 1 вызван')
  },
  method2() {
    console.log('Метод 2 вызван')
  },
  property: 'Это не метод'
}
callAllMethods(myObject)


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
