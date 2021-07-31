// let todoLi;
let list = document.getElementById("todo-list"); // grabs the todo-list element and saves to a variable

function populateTodoList(todos) {
  todos.forEach((todo, index) => {
    let todoLi = document.createElement("li"); // create the li element
    todoLi.innerText = todo.task; // set the inner text to that of todo.task
    if (todo.completed) {
      todoLi.style.textDecoration = "line-through"; // adds line-through if item completed = true
    }

    const buttonSpan = document.createElement("span"); // creates a button span tag
    buttonSpan.className = "badge bg-primary rounded-pill"; // sets the button span class
    todoLi.appendChild(buttonSpan); // adds the button span element to the todo li

    const tickIcon = document.createElement("i"); // creates an i element
    // tickIcon.addEventListener
    tickIcon.className = "fa fa-check"; // gives the tick icon type (bootstrap)
    buttonSpan.appendChild(tickIcon); // adds the tick icon to the button span tag

    const trashIcon = document.createElement("i"); // creates an i element
    trashIcon.className = "fa fa-trash"; // gives the trash icon type (bootstrap)
    buttonSpan.appendChild(trashIcon); // adds the tick icon to the button span tag

    todoLi.className =
      "list-group-item d-flex justify-content-between align-items-center";
    list.appendChild(todoLi); // adds the bootstrap class to the list item

    // **** Steve I had an issue with functionality as explained on slack ****

    tickIcon.addEventListener("click", () => {
      // click event for tickIcon
      if (todoLi.style.textDecoration === "line-through") {
        // add remove line-through
        todoLi.style.textDecoration = "none";
      } else {
        todoLi.style.textDecoration = "line-through";
      }
    });
    trashIcon.addEventListener("click", () => {
      todoLi.remove();
      // remove icon when clicked
    });
  });

  // buttons

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let todoInput = document.getElementById("todoInput");
  todos.push({ task: `${todoInput.value}`, completed: false });
  list.innerHTML = "";
  populateTodoList(todos);
  console.log(todos);
  todoInput.value = "";
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
