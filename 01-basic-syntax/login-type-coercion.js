/*
==========================================
JAVASCRIPT COMPUTATIONAL THINKING
LEVEL 2 – TYPE COERCION TRAP
==========================================

Objective:
Practice understanding of:
- Implicit vs Explicit Type Conversion
- Truthy & Falsy values
- Operator behavior (+, -, ==, ===)
- Logical operators
- Comparison operators

------------------------------------------
CASE STUDY

You are building a simple login system.

User data:

username       = "admin"
password       = "1234"
inputUsername  = "admin"
inputPassword  = 1234        <-- NOTICE! This is a NUMBER
isActive       = "true"      <-- NOTICE! This is a STRING

------------------------------------------
TASKS

Login Validation

Create a variable called `isLoginSuccess`.

Login is successful if:
- username equals inputUsername
- password equals inputPassword

Be careful with type comparison.
Avoid unintended type coercion.

------------------------------------------

Account Status Check

Create a variable called `accountStatus`.

If isActive is true → display "Account Active"
Otherwise → display "Account Inactive"

isActive is currently a STRING, not a boolean.

------------------------------------------

Type Coercion Experiment

Before running the code,
predict the results of the following expressions.
Write your predictions as comments:

"10" + 5
"10" - 5
true + 1
false + 1
"true" == true

------------------------------------------

Program Output

Display:

Login Success:
Account Status:

------------------------------------------

 BONUS CHALLENGE

Convert isActive from STRING to BOOLEAN properly.

Do not use a lazy or unsafe conversion method.

==========================================
Start coding below 
==========================================
*/

let username = "admin";
let password = "1234";
let inputUsername = "admin";
let inputPassword = 1234;
let isActive = true;

// Convert password from string to number
let passwordNumber = Number(password);

// Login validation using strict comparison
let isLoginSuccess =
  passwordNumber === inputPassword && inputUsername === username
    ? "Login Successful"
    : "Login Failed";

// Account status check
let accountStatus =
  isActive === true ? "Account Active" : "Account Inactive";

// Final output
console.log(`Login Success: ${isLoginSuccess}
Account Status: ${accountStatus}`);
