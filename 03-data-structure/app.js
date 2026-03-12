// ===============================
// Object Literal
// ===============================
// An object literal is the simplest way to create an object in JavaScript.
// An object stores data as key–value pairs.

const user = {
  name: "tears",
  "last name": "achly",
  age: 10,
};

console.log(user);

// ===============================
// Accessing Object Properties
// ===============================
// Object properties can be accessed in two ways:
//
// 1. Dot notation → used for standard property names
// 2. Bracket notation → used when the property name contains spaces
//    or special characters

console.log(user.name); // dot notation
console.log(user["last name"]); // bracket notation

// ===============================
// Object Destructuring
// ===============================
// Destructuring allows us to extract properties from an object
// and assign them directly to variables.

const { age } = user;
console.log(age);

// ===============================
// Another Object Example
// ===============================

const member = {
  id: 24,
  email: "dimasanjaymabar@gmail.com",
  name: "dimasanjaymabar",
  nickname: "dimasanjaymabarnickname",
  username: "dimasanjaymabarusername",
  password: "dimasanjaymabarpassword",
};

console.log(member);

// ===============================
// Deleting Object Properties
// ===============================
// Properties inside an object can be removed using the `delete` keyword.

delete member.email;
delete member["id"];

// If we try to access properties that were deleted,
// the result will be undefined.

const { id, email } = member;
console.log(id, email);

// ===============================
// Updating Object Properties
// ===============================
// Object properties can be updated by assigning a new value.

const account = {
  balance: 1000,
  debt: 10,
};

console.log(account);

// Updating a property value
account.balance = 2000;

console.log(account);
