import ToDoList from './todo.js';
//on load grab the array and insert it into the page
const newToDo = new ToDoList();
const button = document.getElementById('addBtn');
button.addEventListener('click', () => {
    newToDo.getToDo();
    newToDo.addCheck();

});
newToDo.closeButton();
newToDo.hideClosedItem();


