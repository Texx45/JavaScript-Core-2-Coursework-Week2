const renderContent = document.querySelector("#content"); // find element to put list in
const createSelect = document.createElement("select"); // create 'select'
const createParagraph = document.createElement("p"); // create 'paragraph'

function listOfColours(colours) {
  content.appendChild(createSelect); // add 'select' to empty content div
  content.appendChild(createParagraph); // add 'paragraph' to empty content div

  colours.forEach((selectColor) => {
    let createOption = document.createElement("option"); // create 'option' element
    createSelect.appendChild(createOption); // append 'option' element to 'select' element
    createOption.innerText = selectColor; // pass in colours from array to 'option' element
    createSelect.addEventListener("click", (e) => {
      // add click event
      console.log(e.target.value); // check click event is working
      createParagraph.innerText = `You have selected ${e.target.value}`;
      createParagraph.style.backgroundColor = `${e.target.value}`; // change background color
    });
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
