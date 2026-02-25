/*
==========================================
JAVASCRIPT COMPUTATIONAL THINKING
LEVEL 5 – NaN & COERCION EDGE CASES
==========================================

Objective:
Deep dive into:
- NaN behavior
- typeof traps
- Implicit vs explicit coercion
- Equality algorithm differences
- Boolean conversion pitfalls

------------------------------------------
PART 1 – Predict Before Running

Predict the result of these expressions.
Write your predictions as comments BEFORE running.

1)  typeof NaN               // "number"
2)  NaN === NaN              // false
3)  NaN == NaN               // false
4)  typeof null              // "object"
5)  null === undefined       // false
6)  null == undefined        // true
7)  "5" - 2                  // 3
8)  "5" + 2                  // "52"
9)  Number("hello")          // NaN
10) Boolean("false")         // true
11) Boolean("")              // false
12) !!"0"                    // true

------------------------------------------
PART 2 – Price Calculator Trap

You are building a simple pricing system.

User input:

priceInput = "100px"
quantity   = "2"

Tasks:

1. Extract the numeric value safely.
2. Convert quantity properly.
3. Prevent NaN from breaking the system.
4. If price is invalid → totalPrice should be 0.

Create:

isValidPrice
totalPrice

------------------------------------------
PART 3 – NaN Mind Trap

Explain in comments:

Why does this return false?

NaN === NaN

------------------------------------------
BONUS – Deep Equality Trap

Explain step by step why this returns true:

[] == false

Hint:
Think about how JavaScript converts arrays to primitives.

------------------------------------------
Start coding below
==========================================
*/

let price = "100asd";
let qty = "12";

/* Your logic here */

let isValidStr = price.trim() !== "" && qty.trim() !== "";

let nPrice = Number(price);
let nQty = Number(qty);

let isValidNum = isValidStr && !Number.isNaN(nPrice) && !Number.isNaN(nQty);

let totalPrice = nPrice * nQty;
let isValidPrice = isValidNum ? totalPrice : 0 ;

/* Output your results here */

console.log(`Total price: ${isValidPrice}`);
