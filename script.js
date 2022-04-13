let form = document.querySelector(".todoForm")
let input = document.querySelector(".todoInput")
let todoContainer = document.querySelector(".todoContainer")
let deleteButtons;
let checkboxes;
let editButtons;






const addHtml = (todo) => {

    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")

    const todoLeft = document.createElement("div")
    todoLeft.classList.add("todoLeft")

    const todoCbox = document.createElement("input")
    todoCbox.classList.add("todoCbox")
    todoCbox.type = "checkbox"
    todoCbox.checked = todo.isCompleted;

    const todoSpan = document.createElement("span")
    todoSpan.classList.add("todoSpan")
    todoSpan.textContent = todo.text;

    const todoRight = document.createElement("div")
    todoRight.classList.add("todoRight")

    const todoEdit = document.createElement("input")
    todoEdit.classList.add("todoEdit")
    todoEdit.type = "button"
    todoEdit.value = "Edit"

    const todoDelete = document.createElement("input")
    todoDelete.classList.add("todoDelete")
    todoDelete.type = "button"
    todoDelete.value = "Delete"

    todoLeft.appendChild(todoCbox)
    todoLeft.appendChild(todoSpan)

    todoRight.appendChild(todoEdit)
    todoRight.appendChild(todoDelete)

    todoDiv.appendChild(todoLeft)
    todoDiv.appendChild(todoRight)

    todoContainer.appendChild(todoDiv)




}
const startConfig = () => {
    //baslangic ayarları
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (!todos) {
        localStorage.setItem("todos", JSON.stringify([]))


    } else {
        todos.forEach(td => {
            addHtml(td)
        });
        deleteButtons = document.querySelectorAll(".todoDelete")
        checkboxes = document.querySelectorAll(".todoCbox")
        editButtons = document.querySelectorAll(".todoEdit")


    }



}



startConfig()


const addTodo = (e) => {
   // e.preventDefault();
    //console.log("çalıştı")

    const todoText = input.value
    const todo = {
        text: todoText,
        isCompleted: false,
    }


    let todos = JSON.parse(localStorage.getItem("todos"));

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));



    addHtml(todo);
    form.reset()






}

const deleter = (e) => {

    const todo = e.target.parentElement.parentElement;
    let text = todo.firstChild.children[1].textContent;
  
    let todos = JSON.parse(localStorage.getItem("todos"));

    todos = todos.filter(td => td.text != text)
    localStorage.setItem("todos", JSON.stringify(todos))




    todo.remove()

}

const CompleteTodo = (e) => {

    const todo = e.target.parentElement.parentElement;
    let text = todo.firstChild.children[1].textContent;
  
    let todos = JSON.parse(localStorage.getItem("todos"));

    todos.forEach(td =>{
        
    if(td.text === text){

        td.isCompleted= !td.isCompleted;
    }
    
    
    })


    localStorage.setItem("todos", JSON.stringify(todos))


}
const editor = (e)=>{

    const todo = e.target.parentElement.parentElement;
    let text = todo.firstChild.children[1].textContent;
  
    let todos = JSON.parse(localStorage.getItem("todos"));

    todos = todos.filter(td => td.text != text)
    localStorage.setItem("todos", JSON.stringify(todos))




    todo.remove()

    input.value = text;



}

form.addEventListener("submit", addTodo)
deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener("click", deleter)

});
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", CompleteTodo)
});


editButtons.forEach(edit => {
    edit.addEventListener("click", editor)
    
});




