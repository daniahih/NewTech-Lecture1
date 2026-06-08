// const mainTitle = document.getElementById("main-title");
// console.log(mainTitle.textContent);
// mainTitle.textContent = "hello from js ";
// console.dir(mainTitle);
// // mainTitle.style.backgroundColor = "red";
// // mainTitle.style.padding = "30px";
// // mainTitle.style.border = "2px solid black";
// mainTitle.classList.add("test");
// mainTitle.classList.remove("large-text");

// const desc = document.querySelector(".description");
// // console.log(desc);
// // console.log(desc.textContent);
// // console.log(desc.innerText);
// // console.log(desc.innerHTML);
// // const image = document.querySelector(".image");
// // // image.src = "https://via.placeholder.com/300";
// // image.alt = "hi";

// const body = document.querySelector("body");
// const newPragraph = document.createElement("p");
// newPragraph.textContent = "I was Created from js ";
// body.appendChild(newPragraph);
// newPragraph.class = "created-pa";

// console.log(document);

const students = ["Ahmad", "Lina", "Omar", "Sara"];
const unorderList = document.querySelector(".unorderList");

students.forEach(function (student) {
  const listItem = document.createElement("li");

  listItem.textContent = student;

  unorderList.appendChild(listItem);
});
