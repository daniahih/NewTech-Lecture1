console.log("hello");
//varible
// let
// const
// var
const name = "dania";

console.log("hello", name); //string concatination
console.log(`hello ${name}`);

//  conditions
const age = 18;
// if(true){
//     // do something
// }

if (age >= 18) {
  console.log("allowed to enter");
} else if (age >= 15) {
  console.log(" i will think about it  ");
} else {
  console.log("not allowed");
}
//  loop

// for(initial value ; condition ;itrerator condition){
//     do something
// }

// for(let i =1;i<=10;i++){
//     console.log(i);

// }

// let grades = [94, 67, [36, 45, 34, [94, 34, 12]], 79, 92, 100];
// console.log(grades.length);
// console.log(grades[6]);
// grades[3] = "dania";
// console.log(grades);
// console.log(grades[2][3][2]);

// let numbers = [1, 2, 3, 4];
// console.log(numbers.length);

// // arrayname.methodName()
// //  push // added to the last element in the array

// numbers.push(6);
// console.log(numbers);
// console.log(numbers.length);
// numbers.pop();

// console.log(numbers);

// numbers.unshift(50);
// console.log(numbers);

// numbers.shift();
// console.log(numbers);

// let fruits = ["apple", "banana", "orange"];
// console.log(fruits.includes("Orange"));
// console.log(fruits.indexOf("Orange"));

// let letters = ["a", "b", "c", "d", "e"];
// // "splice(startIndex, deleteCount)"

// letters.splice(2, 0, "arakan", "dania");
// console.log(letters);
// // "slice(start, end) copies part of the array without changing it.";
// let foods = ["pizza", "burger", "pasta", "salad", "soup"];
// let newArray = foods.slice(1, 4);
// console.log(newArray);

// let a = [1, 2];
// let b = [3, 4];

// let combained = a.concat(b);
// console.log(combained);

// console.log(typeof ["Hello", "world", "arkan", "kefk"].join(" -"));

// console.log([1, 2, 3, 4, 5, 6, 7].reverse());

// const char = ["g", "h", "a", "r", "l"];
// console.log(char.sort());

// const numbers = [15, 7, 9];
// console.log(numbers.sort()); // ec7

// let scores = [90, 85, 72, 88, 95];
// let sum = 0;
// for (let i = 0; i < scores.length; i++) {
//   console.log((sum += scores[i]));
// }

// let grades =[gradeTAMIT:90,82,38,78]

// OBJECT
let objKaram = {
  name: "Karam",
  age: 25,
  address: "Taibah",
  grades: [34, 56, 90, 79],
  obj: { address: "jerusalem", scores: [79, 90, 89] },
};
// console.log(typeof objKaram);

// console.log(objKaram["obj"].address);

objKaram.phone = "0524377";
// console.log(objKaram);

const numbers = [12, 32, 46, 34];
let sum;
for (let i = 0; i < numbers.length; i++) {
  sum = 0;
  console.log((sum += numbers[i]));
}

console.log(sum);

console.log(NaN === NaN);
