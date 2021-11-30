"use strict"
// console.log("123");
const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');

const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

const toDoData = [

]

const render = function () {
  todoList.innerHTML = ''
  todoCompleted.innerHTML = ''
  // console.log(toDoData);
  toDoData.forEach(function (currentItem, index, array) {
    // console.log(currentItem);
    let li = document.createElement('li')

    li.classList.add('todo-item')

    if (currentItem.text == '') {
      console.log(' не заполнена  форма ');
      return;
    } else {
      li.innerHTML = '<span class="text-todo">' + currentItem.text + '</span>' +
        '<div class="todo-buttons">' +
        '<button class="todo-remove"></button>' +
        '<button class="todo-complete"></button>' +
        '</div>';
    }

    if (li.innerHTML == '') {
      console.log(' не   добавлять в массив ничего ');
      return;
    } else if (currentItem.completed) {
      todoCompleted.append(li)
    } else {
      todoList.append(li)
    }




    li.querySelector('.todo-complete').addEventListener('click', function () {
      currentItem.completed = !currentItem.completed
      render()
    })

    li.querySelector('.todo-remove').addEventListener('click', function (event) {
      array.splice(index, 1)
      render()
    })
  });
  console.log(toDoData);
}

todoControl.addEventListener('submit', function (e) {
  e.preventDefault();

  const newToDo = {
    text: headerInput.value,
    completed: false
  }

  toDoData.push(newToDo)
  headerInput.value = '';

  render()

  // console.log('e.preventDefault-=ON')
});

// console.log(todoControl);

