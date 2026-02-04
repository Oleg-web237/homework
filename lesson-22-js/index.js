function calculateFinalPrice(basePrice, discountPercent, taxRate) {
  const discountAmount = (basePrice * discountPercent) / 100
  const discountedPrice = basePrice - discountAmount
  const taxAmount = (discountedPrice * taxRate) / 100
  const finalPrice = discountedPrice + taxAmount
  return finalPrice
}
const price = calculateFinalPrice(1000, 10, 15)
console.log(`Итоговая цена: ${price}`)


// задача 2
function checkAccess(username, password) {
  if (username === "admin" && password === "123456") {
    return "Доступ разрешен"
  } else {
    return "Доступ запрещен"
  }
}
console.log(checkAccess("admin", "123456"))
console.log(checkAccess("user", "password"))

// задача 3
function getTimeOfDay(hour) {
  if (hour >= 0 && hour <= 5) {
    return "Ночь"
  } else if (hour >= 6 && hour <= 11) {
    return "Утро"
  } else if (hour >= 12 && hour <= 17) {
    return "День"
  } else if (hour >= 18 && hour <= 23) {
    return "Вечер"
  } else {
    return "Некорректное время"
  }
}
console.log(getTimeOfDay(10))
console.log(getTimeOfDay(14))
console.log(getTimeOfDay(20))
console.log(getTimeOfDay(25))

// задача 4
function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return "Чётных чисел нет"
}
console.log(findFirstEven(3, 10));
console.log(findFirstEven(5, 7));
console.log(findFirstEven(1, 1));




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
