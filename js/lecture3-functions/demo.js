// Recursive function example: Fibonacci
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test recursion
console.log("Fibonacci of 6:", fibonacci(6)); // 8
// functions

const name = "Ahmad";
console.log(`Hello${name}, welcome to JavaScript class!`);
console.log("Hello Lina, welcome to JavaScript class!");
console.log("Hello Omar, welcome to JavaScript class!");

// A function is a reusable block of code.
// We write it once, and use it many times.

//  function declaration

// function nameFuncation() {}

// function sayHello(name) {
//   console.log(`hello ${name} , welcome to js`);
// }

// sayHello("Arkan");
// sayHello("Ahmad");
// sayHello("Tamir");

// function intreduceStudent(name, age, course) {
//   console.log(
//     `this student with name ${name} , age:${age} in course :${course}`,
//   );
// }

// intreduceStudent(33, "tamir");

// function createUser(username, role = "student") {
//   console.log(`${username} with ${role}`);
// }
// createUser("Ahmad", "admin");
// createUser("kareem");

// vaalue // logic   return

// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }
// const test = addTwoNumbers(2, 3) + 3;
// console.log(test);

// function testReturn() {
//   console.log("Before return");

//   return "Finished";

//   console.log("After return");
// }

// const testResult = testReturn();

// console.log("Result:", testResult);

// function hasPassed(grade) {
//   if (grade >= 60) {
//     return "passed";
//   }
//   return "test";
// }
// console.log(hasPassed(80));

// FUNCTION EXPRESSION
// const multiply = function (a, b) {
//   a * b;
// };
// ARROW FUNCTIONS
// const sum = (a, b) =>

// FUNCTION DECLARATION HOISTING

// // Function declarations are hoisted.
// sayWelcome();
// function sayWelcome() {
//   console.log("Hello world ");
// }

// // FUNCTION EXPRESSION HOISTING
// console.log(divide(10, 2));

// const divide = function (a, b) {
//   return a / b;
// };

// const name = "makram";

// function sayHello() {
//   let name = "Dania";
//   console.log(`hello ${name}`);
// }
// sayHello();
// console.log(name);
// let x = 1;
// print();
// function print() {
//   x = undefined;
//   console.log(`try${x}`);
//   console.log(typeof undefined);
// }

// console.log(x);
// console.log(typeof x);
// VARIABLE SHADOWIN
// const language = "JavaScript";

// function showLanguage() {
//   const language = "Python";
//   console.log("Inside function:", language);
// }

// showLanguage();

// console.log("Outside function:", language);
//

// const student1 = {
//   name: "Ahmad",
//   grade: 90,
//   isActive: true,
// };

// function printStudentSummary(student) {
//   console.log("Student name:", student.name);
//   console.log("Student grade:", student.grade);
//   console.log("Student active:", student.isActive);
// }

// printStudentSummary(student1);

// function createStudent(name, grade) {
//   return {
//     name: name,
//     grade: grade,
//     isActive: true,
//   };
// }

// const newStudent = createStudent("Lina", 88);
// const newStudent2 = createStudent("moath", 88);
// const newStudent3 = createStudent("dania", 88);
// const newStudent4 = createStudent("Lina", 88);
// const newStudent5 = createStudent("Lina", 88);

// console.log(newStudent);
// console.log(newStudent2);
// console.log(newStudent3);
// console.log(newStudent4);
// console.log(newStudent5);

// const grades = [90, 80, 70, 100];

// function calculateAverage(numbers) {
//   const total = numbers[0] + numbers[1] + numbers[2] + numbers[3];
//   return total / numbers.length;
// }

// console.log("Average:", calculateAverage(grades));
function calculateAverageDynamic(numbers) {
  // If a string of digits is passed, convert to array of numbers
  if (typeof numbers === "string") {
    // Check if all characters are digits
    if (/^\d+$/.test(numbers)) {
      numbers = Array.from(numbers).map(Number);
    } else {
      return "Error: Input must be an array or a string of digits.";
    }
  }
  // Edge case 1: Check if input is an array
  if (!Array.isArray(numbers)) {
    return "Error: Input must be an array.";
  }
  // Edge case 2: Check if array is empty
  if (numbers.length === 0) {
    return "Error: Array is empty.";
  }
  // Edge case 3: Check if all elements are numbers
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number" || isNaN(numbers[i])) {
      return `Error: Element at index ${i} is not a valid number.`;
    }
  }
  // Calculate total
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  // Edge case 4: Division by zero (should not happen if array is not empty, but just in case)
  if (numbers.length === 0) {
    return "Error: Division by zero.";
  }
  return total / numbers.length;
}
// Test cases for edge scenarios
console.log("Average dynamic 1:", calculateAverageDynamic([90, 80, 70])); // Normal case
console.log("Average dynamic 2:", calculateAverageDynamic("sawsan")); // Not an array
console.log("Average dynamic 3:", calculateAverageDynamic([])); // Empty array
console.log("Average dynamic 4:", calculateAverageDynamic([90, "a", 70])); // Non-numeric element
console.log("Average dynamic 5:", calculateAverageDynamic([100])); // Single element

// esc methods = callback function

// const array = [1, 2, 4];
// console.log(typeof array);

// function runOperation(a, b, operation) {
//   return operation(a, b);
// }

// function add(a, b) {
//   return a + b;
// }

// function multiplyNumbers(a, b) {
//   return a * b;
// }

// console.log(runOperation(5, 3, add));
// console.log(runOperation(5, 3, multiplyNumbers));













