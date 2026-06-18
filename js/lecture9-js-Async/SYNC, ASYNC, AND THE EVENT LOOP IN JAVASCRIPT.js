// ===========================================================
// PART 1: SYNCHRONOUS JAVASCRIPT
// ===========================================================
console.log("Example 1: Synchronous JavaScript");

console.log("1. Start");

function prepareCoffee() {
  console.log("2. Preparing coffee");
}

prepareCoffee();

console.log("3. End");

// ===========================================================
// PART 2: THE CALL STACK
// ===========================================================
console.log("Example 2: Call Stack");

function firstFunction() {
  console.log("Inside firstFunction");

  secondFunction();
}

function secondFunction() {
  console.log("Inside secondFunction");
}

console.log("Before calling firstFunction");

firstFunction();

console.log("After calling firstFunction");
// ===========================================================
// PART 3: BLOCKING SYNCHRONOUS CODE
// ===========================================================
// console.log("Example 3: Blocking code");

// console.log("Start");

// const startTime = Date.now();

// while (Date.now() - startTime < 3000) {
//   // This loop blocks JavaScript for approximately 3 seconds.
// }

// console.log("The long task finished");

// console.log("End");
