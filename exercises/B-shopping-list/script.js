function shoppingList(shoppingList) {
  let content = document.querySelector("#content"); // grab element
  let createParagraph = document.createElement("p"); // create p tag

  shoppingList.forEach((item) => {
    // iterate through array
    createParagraph.innerText += `\n${item}`; // create list of item for each iteration
    content.appendChild(createParagraph); // render to screen
  });
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);

// * You should use an unordered list: `<ul>`.
// * Each item from the array should be in a `<li>` tag.
// * All of your HTML should go inside the `<div>` with the id **"content"**.
