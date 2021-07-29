function highlightWords(paragraph, colours) {
  const renderContent = document.querySelector("#content"); // find element to put list in
  const createParagraph = document.createElement("p"); // create 'paragraph'
  const createSelect = document.createElement("select"); // create 'select'
  // *** APPEND ELEMENTS ***
  // - Create a `<p>` element.
  // - Create a `<select>` element.
  renderContent.appendChild(createParagraph);
  renderContent.appendChild(createSelect);
  // - Iterate over the options array and create an `<option>` element in the `<select>` for each element.
  colours.forEach((colour) => {
    const createOption = document.createElement("option");
    createOption.innerText = colour;
    createOption.value = colour;
    createSelect.appendChild(createOption);
  });
  // - You'll need to turn the paragraph into an array to iterate over it. You can use the `.split(" ")` method here.
  const paragraphToArray = paragraph.split(" ");
  // - Iterate over the array of words.
  paragraphToArray.forEach((word) => {
    // - For each word, create a `<span>` element and set the innerText to the word, plus a space - " ". Add this to the `<p>`.
    const createSpan = document.createElement("span");
    createSpan.innerText = word + " ";
    createParagraph.appendChild(createSpan);
    // - Each `<span>` should have an eventListener that will listen for clicks.
    createSpan.addEventListener("click", function () {
      // - When clicked, we need to check the value of the `<select>` element using the `.value` property.
      // console.log(createSelect.value);
      // - We can then update the `background-color` property of the `<span>` with the value of the select - remember that the value "none" is a special case and we need to be handled differently.
      if (createSelect.value === "none") {
        createSpan.style.backgroundColor = "white";
      } else {
        createSpan.style.backgroundColor = createSelect.value;
      }
    });
  });
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
