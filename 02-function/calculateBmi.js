/*
==========================================
JAVASCRIPT COMPUTATIONAL THINKING
LEVEL 7 – FITNESS TRAINER SYSTEM
==========================================

Objective:
Practice understanding of:
- Function declaration
- Parameters & arguments
- Return values
- Function composition
- Clean execution flow
- Pure function thinking

------------------------------------------
CASE STUDY

You are building a simple Fitness Trainer system.

User Data:

Name            : "TearsAchly"
Weight (kg)     : 70
Height (meter)  : 1.75
Workout Days    : 4

------------------------------------------
TASKS

Create a Function – calculateBMI

- Accept 2 parameters: weight and height
- Return BMI value
- Formula:
  BMI = weight / (height * height)
- Do NOT print inside the function

------------------------------------------

Create a Function – bmiCategory

- Accept 1 parameter: bmi
- Return category based on:

  BMI < 18.5       → "Underweight"
  BMI 18.5 – 24.9  → "Normal"
  BMI 25 – 29.9    → "Overweight"
  BMI >= 30        → "Obese"

------------------------------------------

Create a Function – isActiveUser

- Accept 1 parameter: workoutDays
- Return true if workoutDays >= 3
- Otherwise
*/

const name = "TearsAchly";
const weight = 100;
const height = 1.75;
const workoutDays = 4;

const calculateBMI = function (weight, height) {
  let result = weight / (height * height);
  return result;
};

let calcBmi = calculateBMI(weight, height);
console.log(calcBmi);

const bmiCategory = function (valueCalcBmi) {
  let result =
    valueCalcBmi <= 18.5
      ? "Underweight"
      : valueCalcBmi <= 24.9
        ? "Normal"
        : valueCalcBmi <= 29.9
          ? "Overweight"
          : valueCalcBmi >= 30
            ? "Obese"
            : "invalid input";
  return result;
};

let calcBmiCate = bmiCategory(calcBmi);
console.log(calcBmiCate);

let isActiveUser = function (workoutDays) {
  let result = workoutDays >= 3;
  return result;
};

let isUser = isActiveUser(workoutDays);
console.log(isUser);
