<sub>[<<Back to README](README.md)</sub>

# 4. What is variable deconstruction?
- [4. What is variable deconstruction?](#4-what-is-variable-deconstruction)
- [How to Swap Variable Values in JavaScript with Variable Deconstruction](#how-to-swap-variable-values-in-javascript-with-variable-deconstruction)
- [How to Implement Array Destructuring in JavaScript](#how-to-implement-array-destructuring-in-javascript)
- [How to Pass JavaScript Objects as Function Arguments by Leveraging Deconstruction](#how-to-pass-javascript-objects-as-function-arguments-by-leveraging-deconstruction)
- [Adding Default Object Values to JavaScript Function Arguments](#adding-default-object-values-to-javascript-function-arguments)
- [References](#references)



Why is this necessary?

Imagine we want extract data from an array. Previously, how would this be done?

```JS
let introduction = ["Hello", "I" , "am", "Sarah"];
let greeting = introduction[0];
let name = introduction[3];

console.log(greeting);//"Hello"
console.log(name);//"Sarah"
```

We can see that when we want to extract data from an array, we have to do the same thing over and over again.

Now with destructuring, JS makes it easier to extract this data.

Destructuring in JavaScript is a powerful feature. It allows you to unpack values from arrays or properties from objects into distinct variables. 

# How to Swap Variable Values in JavaScript with Variable Deconstruction

You  have the ability, using **variable deconstruction**, to **swap the variable values.**

**Syntax**: 

Remember to wrap it in brackets ( ).  

```JS
let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

[playerOne, playerTwo] = [playerTwo, playerOne]

console.log(playerTwo); // "Tiffany"
console.log(`
Player One: ${playerOne} 

Player Two: ${playerTwo}
`);

// Output:
// "
// Player One: Kristine 

// Player Two: Tiffany

// "
```

**Uses**

This is very helpful in a number of different situations. One of the top ones is **when you're implementing algorithms**. One of the most common processes that you come into **when you're implementing a merge or quick sort** or any of these more advanced algorithms. 


**Coding Exercise Example**

Inside the below function, **swap the values** of right lane and left lane.
<br>

```js
function roadRage() {
    let rightLane = "Chevy";
    let leftLane = "Honda";
    
    //Write your code here to make the cars switch lanes
  [rightLane, leftLane] = [leftLane, rightLane]
    
    return (`That ${rightLane} and ${leftLane} won't pick a lane`)
    //console.log(`That ${rightLane} and ${leftLane} won't pick a lane`);
}

console.log(roadRage());
```
# How to Implement Array Destructuring in JavaScript

We can use destructuring and actually perform the same type of actions with **objects** and even with objects **within arguments** and be able to connect those into functions.

How we can leverage destructuring with arrays?

This is going to be something that you'll be using quite a bit, possibly even on a daily basis because it is such **an efficient way of grabbing elements from an array and assigning them to variables.**

```JS
const apiList = [
  'https://api.dailysmarty.com/posts',
  'https://api.github.com/users/jordanhudgens/repos',
  'https://api.github.com/users/jordanhudgens'
]

const [posts, repos, profile] = apiList;

console.log(posts);
console.log(repos);
console.log(profile);
```

In the above example we see how we can leverage **array destructuring** for being able to:

* **access each** one of the elements in an array and
*  then **assign it to a variable**.

// CODING EXERCISE
//Assign Kiwi, Iced Coffee, and Roses to their respective titles. 

```JS
//Create and name your array list here 
const groceryList = ["Iced Coffee","Roses", "Kiwi" ]

const [beverage, plant, fruit] = groceryList;//insert your variable name here;

console.log(beverage);
console.log(plant);
console.log(fruit);

// output:
// "Iced Coffee"
// "Roses"
// "Kiwi"
```

# How to Pass JavaScript Objects as Function Arguments by Leveraging Deconstruction

How we can perform deconstruction in using functions in javascript and more specifically how we **can combine objects and functions**, and have **deconstruction connect those two for us**.

**Syntax**

 A function argument with a list, wrapped inside of {} curly braces.
 What it's looking for is  an object(instead of a variable being passed) . 
 
 And  you can simply pass in an object that has these **matching keys** and  from there you can access these, directly right side of the function body itself.

````JS
const user = {
  name: 'Kristine',
  email: 'kristine@devcamp.com'
}
//pass in an object that has these matching keys {}
const renderUser = ({ name, email }) => {
  console.log(`${name}: ${email}`);
}

renderUser(user);

//Output:
// Kristine: kristine@devcamp.com

````
CODE EXPLANATION:

1. An object named `user` is defined with two properties:
   - `name` with the value `'Kristine'`
   - `email` with the value `'kristine@devcamp.com'`

2. A function called `renderUser` is declared. It takes an **object as its parameter**, which is **destructured to extract the `name` and `email` properties**.

3. Inside the `renderUser` function, a `console.log` statement is used to print a message to the console. The message includes the `name` and `email` properties from the input object, formatted as `${name}: ${email}`.

4. The `renderUser` function is called with the **`user` object as an argument**, resulting in the following output in the console: //Output //  Kristine: kristine @ devcamp.com

In summary, this code defines an object representing a user and a function to display their name and email address. When `renderUser(user)` is called, it logs the user's information to the console.

Other example:

```JS
const bank = {
  accountNum: 454812259,
  name: 'John Doe',
  balance: 1257
}

const bankInfo = ({accountNum, name, balance}) => {
  return (`Hi ${name}! Your current balance is $${balance}. Account#: ${accountNum}.`)
}


console.log(bankInfo(bank));

//Output:
// "Hi John Doe! Your current balance is $1257. Account#: 454812259."
```

# Adding Default Object Values to JavaScript Function Arguments

How you **can set default values** for specific keys and [**objects**](06_OOP.md) when you pass them into functions in javascript.

In a production application you need to be able to take all of those kinds of things into account and if you didn't have a type of default setting like this you'd have to set up all kinds of nested conditionals,  etc...

Note: Using older versions of Javascript you would not be able to use this type of syntax. 


This is something that is very **helpful whenever you're working with data where you may not be confident about every single key being in there** because you do know that we needed to have each one of these elements.

**Uses:**

**OpenGraphMetaData**

Let's say if you're building an application and you want links to be able to be shared on sites like Facebook or Twitter. If you want those sites to pull in the title description and image, openGraph is a way you can do that. 

```JS
const blog = {
  title: 'My great post',
  summary: 'Summary of my post'
}

const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => {
  console.log(`
    og-title=${title}
    og-description=${summary}
  `);
}

openGraphMetadata(blog);
```



**Coding Exercise Example**

Write an object called **user** with an **attribute** for **username and status**. You may set the username to whatever string you'd like but the status must be set to "away". 

Then, write a function called **loginEvent** that **changes the users status to "active"**. (Instead of a console.log use return). It must return "your_username is active"

```JS

const user = {
    username: 'Isa',
    status: 'away'
};


const loginEvent = ({username, status = 'active'}) =>{

    // Here you must place your variable with the status property and assign it the value "active"
    user.status = "active";

    return `${username} is ${user.status}`;
};
```
<br>

# References

* [How to Use Array and Object Destructuring in JavaScript](https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/)
* [DevCamp: Deconstruction](https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/how-to-swap-variable-values-javascript-variable-deconstruction)

<br>

[ <span style="color: #f2f2f2; font-size: 30px;">![alt](/images/Top-Icon1.webp)](#top)</span>

<br>

<sub>[<<Back to README](README.md)</sub>