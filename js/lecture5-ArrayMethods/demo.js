const students = [
  {
    id: 1,
    name: "Lina",
    course: "Frontend",
    grade: 92,
    isActive: true,
    skills: ["HTML", "CSS", "JavaScript"],
  },

  {
    id: 2,
    name: "Omar",
    course: "Backend",
    grade: 68,
    isActive: false,
    skills: ["Node.js", "MongoDB"],
  },

  {
    id: 3,
    name: "Maya",
    course: "Frontend",
    grade: 75,
    isActive: true,
    skills: ["HTML", "CSS", "React"],
  },

  {
    id: 4,
    name: "Ahmad",
    course: "Full Stack",
    grade: 88,
    isActive: true,
    skills: ["JavaScript", "React", "Node.js"],
  },

  {
    id: 5,
    name: "Sara",
    course: "Backend",
    grade: 55,
    isActive: false,
    skills: ["Express", "MongoDB"],
  },
];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].name);
// }
// console.log(StudntsNames);
//imparitive programming way

// es6 + // declatrive way
// foreach // return //log //dom //side effects

//log // names //foreach

// students.forEach((student) => console.log(student.name));

// let numbers = [1, 2, 3];
// numbers = numbers.map((num) => {
//   return num * 2;
// });
// console.log(numbers);

// const numbers = [10, 25, 8, 40];

// const bigNumbers = numbers.filter((num) => {
//   return num > 20;
// });

// console.log(bigNumbers);

// const numbers = [10, "tamir", 8, 40];

// const found = numbers.find((num) => {
//   return num > 20;
// });

// console.log(found);

// const array = ["T", "D", "A", "S"];
// const newArray = array.sort();
// console.log(newArray);

// const numbers = [3, 1, 10, 2];

// numbers.sort();

// console.log(numbers);

// reduce

// const array = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 1;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);

const totalGrades = students.reduce((total, student) => {
  return total + student.grade;
}, 0);

console.log(totalGrades);

const average =
  students.reduce((sum, student) => {
    return sum + student.grade;
  }, 0) / students.length;

console.log(average);

const activeCount = students.reduce((count, student) => {
  return student.isActive ? count + 1 : count;
}, 0);
console.log(activeCount);

[15, 16, 17, 18, 19].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10,
);

const array = [15, 16, 17, 18, 19];
