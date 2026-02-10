const todokeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
}

let todos = []

const getNewTodoid = todos =>
  todos.reduce((maxid, todo) => Math.max(maxid, todo[todokeys.id]), 0) + 1;
const createTodo = (todos, text) => {
  const newTodo = {
    [todokeys.id]: getNewTodoid(todos),
    [todokeys.text]: text,
    [todokeys.is_completed]: false
  }
  todos.push(newTodo);
  return newTodo;
}

const completeTodoByid = (todos, todoid) => {
  const todo = todos.find(todo => todo[todokeys, id] === todoid);
  if (todo === undefined) {
    console.error(`todo with id ${todoid} not found`);
    return null;
  }

  todo[todokeys.is_completed] = !todo[todokeys.is_completed];
  return todo;
}


const deleteTodoByid = (todos, todoid) => {
  const todoIndex = todos.findIndex(todo => todo[todokeys.id] === todoid);
  if (todoIndex === -1) {
    console.error(`todo with id ${todoid} not found`);
    return todos;
  }
  todos.splice(todoIndex, 1)
  return todos;
}










// const name = "oleg "
// let age = 29
// const user = " admin"
// age = "100"
// console.log(Number(age));
// Приведение типов


// const str = "это тип данных строка "
// console.log(str);
// ______________________
// const sum = 10 + 10 тип чисел
// console.log(sum);
// ______________________
// 1) string-строка
// 2) number-номер
// 3) boolean-логический true правда/ false лож.
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
