console.log("========== 1. The Problem Before OOP ==========");

const student1Name = "Sara";
const student1Age = 22;
const student1Grade = 95;

const student2Name = "Omar";
const student2Age = 24;
const student2Grade = 88;

const student3Name = "Lina";
const student3Age = 21;
const student3Grade = 91;

console.log(student1Name, student1Age, student1Grade);
console.log(student2Name, student2Age, student2Grade);
console.log(student3Name, student3Age, student3Grade);

console.log("\n========== 2. Group Data Using Objects ==========");

const student1 = {
  name: "Sara",
  age: 22,
  grade: 95,
};

const student2 = {
  name: "Omar",
  age: 24,
  grade: 88,
};

console.log(student1.name);
console.log(student2.name);

console.log("\n========== 3. Objects Can Have Behavior ==========");

const studentWithMethod = {
  name: "Sara",
  age: 22,
  grade: 95,

  introduce() {
    console.log("Hello, my name is " + this.name);
  },

  passed() {
    return this.grade >= 60;
  },
};

studentWithMethod.introduce();
console.log(studentWithMethod.passed());
console.log("\n========== 4. The New Problem ==========");

const s1 = {
  name: "Sara",
  age: 22,
  grade: 95,

  introduce() {
    console.log("Hello, my name is " + this.name);
  },
};

const s2 = {
  name: "Omar",
  age: 24,
  grade: 88,

  introduce() {
    console.log("Hello, my name is " + this.name);
  },
};

s1.introduce();
s2.introduce();
console.log("\n========== 5. Class ==========");

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  introduce() {
    console.log("Hello, my name is " + this.name);
  }

  passed() {
    return this.grade >= 60;
  }
}

const studentA = new Student("Sara", 22, 95);
const studentB = new Student("Omar", 24, 88);

studentA.introduce();
studentB.introduce();

console.log(studentA.passed());
console.log(studentB.passed());
console.log("\n========== 6. Constructor ==========");

class Course {
  constructor(title, hours) {
    this.title = title;
    this.hours = hours;
  }

  showInfo() {
    console.log(this.title + " course has " + this.hours + " hours");
  }
}

const jsCourse = new Course("JavaScript", 40);
const reactCourse = new Course("React", 50);

jsCourse.showInfo();
reactCourse.showInfo();
console.log("\n========== 7. this Inside Class ==========");

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.isLoggedIn = false;
  }

  login() {
    this.isLoggedIn = true;
    console.log(this.username + " logged in");
  }

  logout() {
    this.isLoggedIn = false;
    console.log(this.username + " logged out");
  }

  showStatus() {
    console.log(this.username + " login status: " + this.isLoggedIn);
  }
}

const user1 = new User("dania", "dania@example.com");
const user2 = new User("omar", "omar@example.com");

user1.login();
user1.showStatus();

user2.showStatus();
// =======================================================
// ENCAPSULATION
// =======================================================

console.log("\n========== 8. Encapsulation ==========");

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be positive");
      return;
    }

    this.balance += amount;
    console.log(this.owner + " deposited " + amount);
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdraw amount must be positive");
      return;
    }

    if (amount > this.balance) {
      console.log("Not enough balance");
      return;
    }

    this.balance -= amount;
    console.log(this.owner + " withdrew " + amount);
  }

  showBalance() {
    console.log(this.owner + "'s balance is " + this.balance);
  }
}

const account = new BankAccount("Sara", 1000);

account.showBalance();
account.deposit(500);
account.withdraw(300);
account.showBalance();
// =======================================================
//  BETTER ENCAPSULATION WITH PRIVATE FIELDS
// =======================================================

console.log("\n========== 9. Private Fields ==========");

class SecureBankAccount {
  #balance;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be positive");
      return;
    }

    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Not enough balance");
      return;
    }

    this.#balance -= amount;
  }

  showBalance() {
    console.log(this.owner + "'s balance is " + this.#balance);
  }
}

const secureAccount = new SecureBankAccount("Lina", 2000);

secureAccount.deposit(500);
secureAccount.withdraw(700);
secureAccount.showBalance();

// =======================================================
//  PRINCIPLE 2: ABSTRACTION
// =======================================================

console.log("\n========== 10. Abstraction ==========");

class CoffeeMachine {
  #heatWater() {
    console.log("Heating water...");
  }

  #grindCoffee() {
    console.log("Grinding coffee beans...");
  }

  #pourCoffee() {
    console.log("Pouring coffee...");
  }

  makeCoffee() {
    this.#heatWater();
    this.#grindCoffee();
    this.#pourCoffee();

    console.log("Coffee is ready!");
  }
}

const machine = new CoffeeMachine();

machine.makeCoffee();

// =======================================================
// PRINCIPLE 3: INHERITANCE
// =======================================================

console.log("\n========== 11. Inheritance ==========");

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(this.name + " is eating");
  }

  sleep() {
    console.log(this.name + " is sleeping");
  }
}

class Dog extends Animal {
  bark() {
    console.log(this.name + " is barking");
  }
}

class Cat extends Animal {
  meow() {
    console.log(this.name + " is meowing");
  }
}

const dog = new Dog("Rex");
const cat = new Cat("Mimi");

dog.eat();
dog.sleep();
dog.bark();

cat.eat();
cat.sleep();
cat.meow();
// =======================================================
//  INHERITANCE WITH super()
// =======================================================

console.log("\n========== 12. Inheritance With super() ==========");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log("Hi, I am " + this.name);
  }
}

class Instructor extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  teach() {
    console.log(this.name + " teaches " + this.subject);
  }
}

const instructor = new Instructor("Dania", 28, "JavaScript");

instructor.introduce();
instructor.teach();
