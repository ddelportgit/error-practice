// syntax error

let name = "John";

console.log(name);

// reference error

let age = 25;

console.log(age);

// type error

let string = "";

string = string + "word";

console.log(string);

// try..catch

try {
  console.log(username);
} catch (error) {
  console.log("An error occurred!");
  console.log(error.name);
  console.log(error.message);
}

console.log("Program finished.");
