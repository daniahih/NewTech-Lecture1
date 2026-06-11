const mainButton = document.getElementById("main-button");
const mainMessage = document.getElementById("main-message");
const eventButton = document.querySelector("#event-button");
const eventInformation = document.querySelector("#event-information");
// const firstSection = document.getElementById("firstSection");
console.log(mainButton);

// firstSection.addEventListener("click", (event) => {
//   console.log(event);

//   console.log("clicked on first section ");
// });

// const targetButton = document.querySelector("#target-button");
// const targetOutput = document.querySelector("#target-output");

// function handelClick(event) {
//   console.log("target:", event.target);
//   console.log("currentTarget:", event.currentTarget);

//   targetOutput.innerHTML = `
//     target: ${event.target.tagName}
//     <br>
//     currentTarget: ${event.currentTarget.tagName}
//   `;
// }
// // targetButton.addEventListener("click", handelClick);
// mainButton.addEventListener("click", function () {
//   console.log("First additional listener.");
// });

// mainButton.addEventListener("click", function () {
//   console.log("Second additional listener.");
// });

// const mouseBox = document.querySelector("#mouse-box");

// // mouseBox.addEventListener("click", function (event) {
// //   console.log("The box was clicked.");
// //   console.log(event);
// // });
// mouseBox.addEventListener("dblclick", function () {
//   mouseBox.textContent = "The box was double-clicked";
// });

// mouseBox.addEventListener("mouseenter", function () {
//   mouseBox.style.backgroundColor = "lightgreen";
//   mouseBox.textContent = "The mouse entered";
// });

// mouseBox.addEventListener("mouseleave", function () {
//   mouseBox.style.backgroundColor = "lightblue";
//   mouseBox.textContent = "The mouse left";
// });

// mouseBox.addEventListener("mousemove", function (event) {
//   mouseBox.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
// });

const keyboardInput = document.querySelector("#keyboard-input");

const keyboardOutput = document.querySelector("#keyboard-output");

// keyboardInput.addEventListener("keydown", function (event) {
//   console.log(event);

//   keyboardOutput.textContent = `You pressed: ${event.key}`;

//   console.log("key:", event.key);
//   console.log("code:", event.code);
//   console.log("Shift:", event.shiftKey);
//   console.log("Ctrl:", event.ctrlKey);
//   console.log("Alt:", event.altKey);
// });

// keyboardInput.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     console.dir(event.target);
//     console.log(event.target);

//     console.log("The user pressed Enter:", event.target.value);
//   }

//   if (event.key === "Escape") {
//     event.target.value = "";

//     keyboardOutput.textContent = "The input was cleared.";
//   }
// });

// const liveInput = document.querySelector("#live-input");
// const liveOutput = document.querySelector("#live-output");

// liveInput.addEventListener("input", function (event) {
//   const currentValue = event.target.value;

//   console.log(currentValue);

//   if (currentValue === "") {
//     liveOutput.textContent = "Start typing...";
//   } else {
//     liveOutput.textContent = currentValue;
//   }
// });
// const courseSelect = document.querySelector("#course-select");

// const courseOutput = document.querySelector("#course-output");

// courseSelect.addEventListener("change", function (event) {
//   console.dir(event.target);

//   const selectedCourse = event.target.value;

//   if (selectedCourse === "") {
//     courseOutput.textContent = "Please select a course.";

//     return;
//   }

//   courseOutput.textContent = `You selected ${selectedCourse}.`;
// });
// console.log("\n========== 14. Form Submit Event ==========");

// const registrationForm = document.querySelector("#registration-form");

// const nameInput = document.querySelector("#name-input");
// const emailInput = document.querySelector("#email-input");
// const formOutput = document.querySelector("#form-output");

// registrationForm.addEventListener("submit", function (event) {
//   console.log(event);

//   // By default, submitting a form reloads the page.
//   //
//   // We stop that behavior.

//   event.preventDefault();

//   const name = nameInput.value.trim();
//   const email = emailInput.value.trim();

//   if (name === "" || email === "") {
//     formOutput.textContent = "Please fill in all fields.";

//     formOutput.classList.add("error");
//     formOutput.classList.remove("success");

//     return;
//   }

//   formOutput.textContent = `Welcome ${name}. Your email is ${email}.`;

//   formOutput.classList.add("success");
//   formOutput.classList.remove("error");

//   const user = {
//     firstname: name,
//     email,
//   };

//   console.log("Submitted user:", user);

//   registrationForm.reset();
// });
// const outerBox = document.querySelector("#outer-box");
// const innerBox = document.querySelector("#inner-box");
// const bubbleButton = document.querySelector("#bubble-button");

// outerBox.addEventListener("click", function (event) {
//   console.log("Outer listener");

//   console.log("Target:", event.target);
//   console.log("Current target:", event.currentTarget);
// });

// innerBox.addEventListener("click", function () {
//   console.log("Inner listener");
// });

// bubbleButton.addEventListener("click", function () {
//   console.log("Button listener");
// });
const studentList = document.querySelector("#student-list");
const studentOutput = document.querySelector("#student-output");

const addStudentButton = document.querySelector("#add-student-button");

studentList.addEventListener("click", function (event) {
  console.log("The UL detected the click.");
  console.log("Real clicked element:", event.target);

  if (event.target.matches(".student-item")) {
    event.target.classList.toggle("selected");

    studentOutput.textContent = `You selected ${event.target.textContent}.`;
  }
});
let studentNumber = 4;

addStudentButton.addEventListener("click", function () {
  const newStudent = document.createElement("li");

  newStudent.classList.add("student-item");

  newStudent.textContent = `Student ${studentNumber}`;

  studentList.append(newStudent);

  studentNumber++;
});
