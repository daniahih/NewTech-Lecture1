//scope

const globalMessage = "I am global";

function showMessage() {
  const localMessage = "I am local";

  console.log(globalMessage);
  console.log(localMessage);
}
showMessage();
// console.log(localMessage);

// PART 2 — Function Inside Function
function outerFunction() {
  const outerVariable = "I belong to the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }
  innerFunction();
}

outerFunction();

// First Closure Example
function createGreeting() {
  const name = "Dania";

  return function greet() {
    console.log(`Hello, ${name}`);
  };
}

console.log("create Greeing ", createGreeting());

// const miskfunction = function (a, b) {
//   return a + b;
// };
// miskfunction();

const greetingFunction = createGreeting();
console.log(typeof greetingFunction);

console.log(greetingFunction);
greetingFunction();

//  EXAMPLE 2
function createGreeting() {
  const name = "Dania";

  function greet() {
    return "hi ";
  }

  return greet();
}

const greetingFunction = createGreeting();
console.log(greetingFunction);

greetingFunction();

console.log("\n========== PART 4: CLOSURE WITH PARAMETERS ==========");

function createUserGreeting(username) {
  function greetUser() {
    console.log(`Welcome, ${username}`);
  }

  return greetUser;
}

const greetSara = createUserGreeting("Sara");
const greetOmar = createUserGreeting("Omar");

greetSara();
greetOmar();

console.log("\n========== PART 5: PRIVATE DATA ==========");

function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count is: ${count}`);
  }

  return increment;
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1();
counter2();
counter1();
// console.log(count);

console.log("\n========== PART 6: TWO COUNTERS ==========");

function createCounterWithName(name) {
  let count = 0;

  return function () {
    let count = +2;
    console.log(`${name} counter: ${count}`);
  };
}

const likesCounter = createCounterWithName("Likes");
const viewsCounter = createCounterWithName("Views");

likesCounter();
likesCounter();

viewsCounter();
viewsCounter();
viewsCounter();

likesCounter();

function sum(a, b) {
  a + b;
}
const sum = function (a, b) {
  a + b;
};
const sum = (a, b) => a + b;
