/*
==========================================
JAVASCRIPT COMPUTATIONAL THINKING
LEVEL 4 – OPERATOR PRECEDENCE TRAP
==========================================

Objective:
Strengthen your understanding of:
- Operator precedence
- Evaluation order
- Logical short-circuit behavior
- Comparison chaining mistakes
- Implicit boolean conversion

------------------------------------------
PART 1 – Predict Before Running

Predict the results of the following expressions.
Write your predictions as comments before executing.

1)  2 + 3 * 4 = 14
2)  (2 + 3) * 4 = 20
3)  true || false && false = true
4)  (true || false) && false = false
5)  !true === false = true
6)  5 > 3 > 1 = false
7)  5 > 3 && 3 > 1 = true
8)  "10" + 5 * 2 = 1010
9)  ("10" + 5) * 2 = 210
10) null || "hello" && 0 = 0

------------------------------------------
PART 2 – Access Logic Trap

You are building a security rule.

A user can enter if:

- age > 18
- hasTicket is true
- isBlacklisted is false

Given Data:

age = 20
hasTicket = true
isBlacklisted = false

Create a variable called:

canEnter

BUT:

First, write the logic WITHOUT parentheses.
Then rewrite it WITH parentheses to make the logic clearer and more readable.

------------------------------------------
PART 3 – Short Circuit Mind Test

Predict the result of:

false && console.log("Hello")
true || console.log("World")

Explain WHY they behave that way.

Hint:
Remember that console.log() returns undefined.
Also consider short-circuit evaluation rules.

------------------------------------------
BONUS THINKING QUESTION

Why is this expression wrong?

5 > 3 > 1

Many people think:
5 > 3 = true
true > 1 = false

Explain what actually happens step by step,
including type conversion.

==========================================
Start coding below
==========================================
*/

let age = 20;
let hasTicket = true;
let isBlacklisted = false;

/* First version (without parentheses) */

// let canEnter = age > 18 && hasTicket && !isBlacklisted;

/* Improved version (clear grouping) */

let canEnter = (age > 18) && hasTicket && (!isBlacklisted);

/* Output */

console.log(canEnter);
