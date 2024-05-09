<sub>[<<Back to README](README.md)</sub>

# 3. What is an arrow function?

An **arrow function** in JavaScript **is a concise way to define a function** using the (**`=>`**) syntax. It omits the `function` keyword and allows for shorter function expressions, especially when the function body consists of a single expression. 

Unlike regular functions, arrow functions **do not create their own `this`** binding and **do not have an `arguments` object**.

Let´s see the main **differences between arrow functions and regular functions** in JavaScript:

1. **Syntax:**
   - Regular functions are defined using the `function` keyword, followed by a function name, parameters, and a function body enclosed in curly braces.
   - Arrow functions have a shorter syntax. They are defined using the `=>` (fat arrow) syntax and omit the `function` keyword and curly braces if the function body consists of a single expression.

2. **Arguments Object:**
   - Regular functions have an `arguments` object that contains the arguments passed to the function when called. You can access individual arguments using indices (e.g., `arguments[0]`).
   - Arrow functions do not have their own `arguments` object. Attempting to use `arguments` within an arrow function will result in a reference error.

3. **`this` Binding:**
   - Regular functions create their own `this` binding, which refers to the object that calls the function.
   - Arrow functions do not create their own `this` binding. Instead, they lexically inherit `this` from the surrounding code (the enclosing function or global context).

4. **One-Liner Functions:**
   - Arrow functions allow for concise one-liner functions. If the function body consists of a single expression, you can omit the curly braces and the `return` keyword.

Here's an example to illustrate the differences:

```javascript
// Regular function
function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

// Equivalent arrow function
const multiplyArrow = (num1, num2) => num1 * num2;

// Accessing arguments (only works in regular functions)
function print() {
  console.log(arguments);
}

// Using an arrow function (results in a reference error)
const printArrow = () => {
  console.log(arguments);
}

// `this` binding in regular functions
const obj = {
  name: 'deeecode',
  print: function() {
    console.log(this);
  }
};

// `this` binding in arrow functions (inherits from surrounding context)
const objArrow = {
  name: 'deeecode',
  print: () => {
    console.log(this); // Logs the global window object
  }
};
```

# How Arrow Functions Work with ‘this’

```JS
function Invoice(subTotal) {
  this.taxRate = 0.06;
  this.subTotal = subTotal;
  
  this.total = setInterval(() => {
    console.log((this.taxRate * this.subTotal) + this.subTotal);
    //console.log(this);
  }, 2000);
}

const inv = new Invoice(200);  // 0.06
//console.log(inv.taxRate); //attribute insed the object

/*
// [object Object] 
{
  "taxRate": 0.06,
  "subTotal": 200,
  "total": 1
}
//212
```
**Explanation:**

- The Invoice constructor function takes: 
  * a **subTotal** argument and sets it as an attribute (**this.subTotal**) on the newly created object.
  * The **this.taxRate** attribute is also set to 0.06.
- The **this.total** property is assigned a reference to a **setInterval function** that calculates the total every 2 seconds using the corrected formula.
  
- When you create an instance of Invoice with **const inv = new Invoice(200)**; it  initializes the subTotal and calculates the total.

**Other way:**

```JS
function Invoice(subTotal) {
  this.taxRate = 0.06;
  this.subTotal = subTotal;

  // Calculate the total and store it in a variable
  const calculateTotal = () => {
    const total = (this.taxRate * this.subTotal)+ this.subtotal;
    console.log(`Total: ${total}`);
  };

  // Set up the interval to call the calculateTotal function every 2 seconds
  this.total = setInterval(calculateTotal, 2000);
}

const inv = new Invoice(200); // Creates an instance with a subtotal of 200
```

**Coding Exercise Example**

This code snippet represents an unfinished savings calculator. Your goal is to calculate 30 percent of this month's paycheck, totaled at $2000. Pass the paycheck amount in the correct spot and instantiate the object in order to return the correct deposit amount.

```JS
function SavingCalc(paycheck) {
  this.percent = 0.30;
  this.paycheck = paycheck;

  this.deposit = function() {
    return (this.percent * this.paycheck)
    
  }
}

const piggyBank = new SavingCalc(2000); // we pass the paycheck amount
console.log(piggyBank);
// [object Object] 
// {
//   "percent": 0.3,
//   "paycheck": 2000,
//   "deposit": function () {\n    return this.percent * this.paycheck;\n\n  }
// }

// We can console.log:
console.log(piggyBank.deposit()); // DON´T forget () because "deposit" has a function


// other prints:
console.log(piggyBank.percent); //0.3
console.log(piggyBank.percent.toFixed(2));
console.log(piggyBank.paycheck); // 2000

// or we can keep it in a const and cosole log that:
const depositAmount = piggyBank.deposit();
console.log(`Your deposit amount is $${depositAmount.toFixed(2)}`);  //"Your deposit amount is $600.00"

```

# References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

* https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/


[<span style="color: #f2f2f2; font-size: 30px;">![alt](/images/Top-Icon1.webp)](#top)</span>

<br>


<sub>[<<Back to README](README.md)</sub>
