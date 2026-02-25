/*
==========================================
JAVASCRIPT COMPUTATIONAL THINKING
LEVEL 1 – DIGITAL STORE
==========================================

Objective:
Practice understanding of:
- Expressions & Statements
- Comments
- Variables
- Data Types
- Type Conversion
- Operators

------------------------------------------
CASE STUDY

Customer Data:

Item Name     : "JavaScript Book"
Price         : "50000"   <-- NOTICE! This is a STRING
Quantity      : 3
Member        : true

------------------------------------------
TASKS

Identify Data Types
Determine the data type of:
- Item name
- Price
- Quantity
- Member

(Write your answers as comments below the variable declarations)

------------------------------------------

Type Conversion

Convert the price from STRING to NUMBER
so it can be used in mathematical calculations.

------------------------------------------

Calculate Total Purchase

Calculate:
- Total before discount
- If member === true → apply 10% discount
- Total after discount

------------------------------------------

Use Operators

Make sure your program uses:

- Arithmetic operators (+ - * / %)
- Comparison operators (>, <, ===, !==)
- Logical operators (&&, ||, !)

------------------------------------------

Program Output

Display the result in this format:

Item Name:
Price:
Quantity:
Member Status:
Total Before Discount:
Total After Discount:

------------------------------------------

BONUS THINKING QUESTION

If the price is not converted from string to number,
what will happen when it is multiplied by the quantity?

Explain your answer in a comment.

==========================================
Start coding below
==========================================
*/


let item = "JavaScript Book";
// string

let price = "50000";
// string

let qty = 3;
// number

let isMember = true;
// boolean

let priceNumber = Number(price);
// number

let subtotal = priceNumber * qty;

let disc = isMember ? (10 / 100 * subtotal) : 0;

let Total = subtotal - disc;

console.log(
`Item Name: ${item}
Price: ${priceNumber}
Qtr: ${qty}
Member: ${isMember}
Subtotal: ${subtotal}
Total: ${Total}`);
