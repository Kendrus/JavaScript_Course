const todoList =[];

function addtodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name = inputElement.values;

    todoList.push(name);
    console.log(todoList);


    inputElement.values='';
}