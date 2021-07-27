const renderContent = document.querySelector("#content"); // find element to put list in
const addUl = document.createElement("ul"); // create a Ul
renderContent.appendChild(addUl); // attach Ul to renderContent element
const addLi = document.createElement("li");
addUl.appendChild(addLi);

function todoList(todos) {
  for (const todo in todos) {
    const markup = `
    <ul>
      <li>
        ${todos[todo].todo}
      </li>
    </ul>
    `;
    renderContent.innerHTML += markup;
  }
  const items = document.querySelectorAll("li");

  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.style.textDecoration === "none") {
        e.target.style.textDecoration = "line-through";
      } else {
        e.target.style.textDecoration = "none";
      }
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
