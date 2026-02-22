/*
==========================================
JAVASCRIPT COMPUTATIONAL THINKING
LEVEL 3 – TRUTHY & FALSY MIND TRAP
==========================================

Objective:
Train your understanding of:
- Truthy & Falsy values
- Logical operators (&&, ||, !)
- Implicit type conversion
- Conditional evaluation
- Comparison behavior

------------------------------------------
CASE STUDY

You are building a simple system to determine
whether a user can access a premium feature.

User Data:

username       = "TearsAchly"
subscription   = ""          <-- empty string
loginAttempts  = 0
isVerified     = "false"     <-- STRING!
balance        = null

------------------------------------------
TASKS

Predict First (DO NOT RUN YET)

Before writing any logic,
predict the result of these expressions.
Write your predictions as comments:

"" == false
0 == false
"false" == false
null == false
undefined == null
"5" > 3
"5" === 5

------------------------------------------

Access Logic

Create a variable:

canAccessPremium

Rules:
A user can access premium if:

- username exists (not empty)
- subscription is truthy
- loginAttempts is less than 3
- isVerified is TRUE (real boolean)
- balance is NOT null

Be careful:
Several values above are tricky.
Some are truthy even if they look false.

------------------------------------------

Fix the Data Properly

Convert the necessary variables
so the logic behaves correctly.

Do NOT hardcode true/false.
Fix the actual data type problem.

------------------------------------------

Output

Display:

Username:
Subscription:
Login Attempts:
Verified:
Balance:
Can Access Premium:

------------------------------------------

BONUS THINKING QUESTION

Why is "false" considered truthy in JavaScript?

Explain in comments.

==========================================
Start coding below
==========================================
*/

let username = "TearsAchly";
let subscription = "";
let loginAttempts = 3;
let isVerified = "false"; // string, not boolean
let balance = null;

/* Fix the data properly */
subscription = true;
loginAttempts = 2;
isVerified = "true";
balance = 1000;

/* Premium access logic */
let canAccessPremium =
  username !== "" &&
  subscription &&
  loginAttempts < 3 &&
  isVerified === "true" &&
  balance !== null;

console.log(`Username: ${username}
Subscription: ${subscription}
Login Attempts: ${loginAttempts}
Verified: ${isVerified}
Balance: ${balance}
Can Access Premium: ${canAccessPremium}`);
