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

// throw

function checkPassword(password) {
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters.");
  }

  return "Password accepted!";
}

try {
  console.log(checkPassword("hello"));
} catch (error) {
  console.log(error.message);
}

try {
  console.log(checkPassword("javascript123"));
} catch (error) {
  console.log(error.message);
}

// console.log debug

function calculateTotal(price, quantity) {
  const total = price * quantity;
  console.log("Price:", price);
  console.log("Quantity:", quantity);
  console.log("Total:", total);
  return total;
}

calculateTotal(100, 3);
