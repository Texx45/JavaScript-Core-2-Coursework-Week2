//! ****** DOM MANIPULATION PART 1 ******

const blueButton = document.querySelector("#blueBtn");
const orangeButton = document.querySelector("#orangeBtn");
const greenButton = document.querySelector("#greenBtn");
const donateABikeButton = document.querySelector("a.btn-primary.btn-lrg");
const jumbotronEl = document.querySelector(".jumbotron");
const volunteerButton = document.querySelector(".btn-secondary");

// *** BLUE BUTTON EXERCISE ***

blueButton.addEventListener("click", function () {
  jumbotronEl.style.backgroundColor = "#588fbd";
  donateABikeButton.style.backgroundColor = "#ffa500";
  volunteerButton.style.backgroundColor = "black";
  volunteerButton.style.color = "white";
});

// *** ORANGE BUTTON EXERCISE ***

orangeButton.addEventListener("click", function () {
  jumbotronEl.style.backgroundColor = "#f0ad4e";
  donateABikeButton.style.backgroundColor = "#5751fd";
  volunteerButton.style.backgroundColor = "#31b0d5";
  volunteerButton.style.color = "white";
});

// *** GREEN BUTTON EXERCISE ***

greenButton.addEventListener("click", function () {
  jumbotronEl.style.backgroundColor = "#87ca8a";
  donateABikeButton.style.backgroundColor = "black";
  volunteerButton.style.backgroundColor = "#8c9c08";
});

//! ***** PART 2 *****

const submitButton = document.querySelector("button:last-child"); // grab button
const email = document.getElementById("exampleInputEmail1"); // grab email
const name = document.getElementById("example-text-input"); // grab name
const describe = document.getElementById("exampleTextarea"); // grab description

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(typeof email.value);
  // email validation
  if (email.value === "" || !email.value.includes("@")) {
    email.style.backgroundColor = "red";
  }
  // name validation
  if (name.value === "") {
    name.style.backgroundColor = "red";
  }
  // describe validation
  if (describe.value === "") {
    describe.style.backgroundColor = "red";
  } else {
    alert("Thank you for completing the form");
    email.value = "";
    name.value = "";
    describe.value = "";
  }
});
