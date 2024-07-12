// TODO LIST:

// TASK1) INPUTDAN FOYDALANIB FOYDALANUVCHI KIRITGAN ISHNI NOMINI OLISH
// TASK2) TODONI OBJECT SIFATIDA YARATISH OBJECT ICHIDA TODO NOMI, YARATILGAN VAQTI BO’LISHI KERAK SOAT, MINUT VA SEKUND
// TASK3)TODOLAR ARRAYGA JOYLASHINGIZ LOZIM
// TASK4) ARRAYGA JOYLANGAN TODOLARNI HTMLGA CHIQARING APPEND VA CREATE ELEMENT BILAN

 
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');
const clearTodoBtn = document.getElementById('clearTodoBtn');
const todoInput = document.getElementById('todoInput');

   const todos = [];
function getTodoName() {
    const todoName = document.getElementById('todoInput').value;
    return todoName;
}

function createTodo() {
    const todo = {
        name: getTodoName(),
        createdAt: new Date()

    };
    return todo;
}

addTodoBtn.addEventListener('click', () => {
    const todo = createTodo();
    todos.push(todo);
    todoInput.value = '';

    const todoItem = document.createElement('li');
    todoItem.classList.add('bg-gray-200', 'shadow', 'p-4', 'm-2');
    todoItem.innerText = `${todo.name} - ${todo.createdAt.getHours()}:${todo.createdAt.getMinutes()}:${todo.createdAt.getSeconds()}`;
    todoList.appendChild(todoItem);
 todoList.style.display = 'block';

});

clearTodoBtn.addEventListener('click', () => {
    todos.length = 0;
    todoList.innerHTML = '';
    todoList.style.display = 'none';
});