/*
==========================================
JAVASCRIPT COMPUTATIONAL THINKING
LEVEL 6 – FINAL INTEGRATION CHALLENGE
==========================================

Objective:
Integrate all previously learned concepts:

- Variables
- Type conversion
- Strict comparison
- Truthy & falsy
- Operator precedence
- Short-circuit evaluation
- NaN handling
- Boolean logic
- Edge case awareness

------------------------------------------
CASE STUDY – SMART CHECKOUT SYSTEM

You are building a checkout validation system.

User Input:

username       = "TearsAchly"
priceInput     = "250.50"
quantityInput  = "2"
discountCode   = ""
isMember       = "true"
isBlacklisted  = false

------------------------------------------
RULES

Checkout is successful if:

1) Username is not empty
2) Price and quantity are valid numbers
3) Inputs are not empty strings
4) User is not blacklisted
5) If isMember === "true" → apply 10% discount
6) If discountCode is truthy → apply extra 5% discount

------------------------------------------
BONUS THINKING

Why are these dangerous?

Number("")
Number(null)
Number(" ")

==========================================
Start coding below
==========================================
*/

let username = "TearsAchly";
let priceInput = "250.50";
let quantityInput = "122";
let discountCode = "";
let isMember = "true";
let isBlacklisted = false;

/* ------------------------------
   STRING VALIDATION LAYER
--------------------------------- */

let trimPrice = priceInput.trim();
let trimQuantity = quantityInput.trim();

let isValidString = trimPrice !== "" && trimQuantity !== "";

/* ------------------------------
   NUMBER CONVERSION LAYER
--------------------------------- */

let numericPrice = Number(trimPrice);
let numericQuantity = Number(trimQuantity);

let isValidNumber =
  !Number.isNaN(numericPrice) &&
  !Number.isNaN(numericQuantity);

/* ------------------------------
   BUSINESS LOGIC LAYER
--------------------------------- */

let memberStatus = isMember === "true";

let discountMember = memberStatus ? 10 : 0;
let discountCodeValue = discountCode ? 5 : 0;

let safePrice = isValidNumber ? numericPrice : 0;
let safeQuantity = isValidNumber ? numericQuantity : 0;

let totalPrice = isValidNumber
  ? safePrice * safeQuantity
  : 0;

let totalDiscount =
  ((discountMember + discountCodeValue) / 100) *
  totalPrice;

let finalTotal = totalPrice - totalDiscount;

/* ------------------------------
   CHECKOUT VALIDATION
--------------------------------- */

let checkout =
  username !== "" &&
  isValidString &&
  isValidNumber &&
  !isBlacklisted
    ? "successfully"
    : "failed";

/* ------------------------------
   OUTPUT
--------------------------------- */

console.log(`Username: ${username}
Price: ${safePrice}
Quantity: ${safeQuantity}
Blacklisted: ${isBlacklisted}
Final Total: ${finalTotal}
Checkout Status: ${checkout}`);
