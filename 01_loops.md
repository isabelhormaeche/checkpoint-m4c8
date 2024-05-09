<sub>[<<Back to README](README.md)</sub>

# 1. What type of loops are there in JS?
- [1. What type of loops are there in JS?](#1-what-type-of-loops-are-there-in-js)
  - [1.1. Looping through collections of data](#11-looping-through-collections-of-data)
    - [1.1.1. Tradicional loop or for loop](#111-tradicional-loop-or-for-loop)
    - [1.1.2. The for...in loop.](#112-the-forin-loop)
    - [1.1.3. For Each loop.](#113-for-each-loop)
  - [How to Loop Through a collection that is an Object](#how-to-loop-through-a-collection-that-is-an-object)
  - [While and Do/While Loops in JavaScript](#while-and-dowhile-loops-in-javascript)



## 1.1. Looping through collections of data

One of the most common ways to use loops in javascript development is when you are **looping through COLLECTIONS OF DATA.** 

Let´s see an example where we create a player's array (an array of strings).

var players = [
  'Altuve',
  'Bregman',
  'Correa',
  'Springer'
];

We're going to loop over it - **two different ways**. We're going to use two different **types** of what are called **"for loops".**

### 1.1.1. Tradicional loop or for loop

**Syntax**

`for` and then inside parens (), we have to put an entire **expression**. We have to declare three things:

- first, we have to declare a **variable** that is going to be used throughout the loop,
  for (var i = 0; )
  
- then we have to declare a **condition** which means we want you to keep looping until this condition is not met and then:
for (var i = 0; i < players.length);

- the last one is some type of **incrementor**.
  for (var i = 0; i < players.length; i++)

```JS
var players = [
  'Altuve',
  'Bregman',
  'Correa',
  'Springer'
];


for (var i = 0; i < players.length; i++) {
  console.log(players[i]);
}
```

```JS
var members = ["A", "B", "C", "D", "E"];

for (var i = 0; i < members.length; i++) {
    console.log(members[i]);
}

//Output:
// "A"
// "B"
// "C"
// "D"
// "E"
```


### 1.1.2. The for...in loop.

A little bit  kind of for loop, and that is called the for-in loop.

**Syntax**

for + (**iterable variable)**. The common convention is to use whatever your array has a plural name (like players) and the common convention is to make your iterator variable to be singular(player).

NOTE:
 One important thing to note, player doesn't actually represent the value. Player **represents the index**. 

<br>

````JS
var players = [
  'Altuve',
  'Bregman',
  'Correa',
  'Springer'
];

for (  player in players) {
console.log(player); // player represents the index
console.log(players[player]);
}


// Outputs:
// "0"
// "Altuve"
// "1"
// "Bregman"
// "2"
// "Correa"
// "3"
// "Springer"

````
**NOTE:  IMPORTANT !!!**

We better **add (var)**, like this:
```JS
for ( var player in players) {
console.log(player); // player represents the index
console.log(players[player]);
}
```

Here are some considerations:

-**Scoping:**
  
  * **Without var:** The player variable is implicitly global. If you accidentally use the same variable name elsewhere in your code, it could lead to unexpected behavior.

  * **With var:** The player variable is scoped to the loop, which is generally **safer**. It won’t interfere with other variables outside the loop.

-**Best Practices:**

  * **Without var** : Some developers consider it a best practice to avoid using for...in loops for arrays due to potential issues with non-numeric properties and order of iteration.

  * **With var:** Explicitly using var makes your intention clear and aligns with the typical usage of for...in loops for objects (where keys are not necessarily numeric).

  -**Consistency**:
  * **Without var:** If you consistently use for...in loops without var, it’s fine. Just be aware of the potential scoping issues.
  * **With var:** Adding var ensures consistency across your codebase, especially if you also use for...in loops for objects.


In summary, while both versions work, **using (var) in the for...in loop is a good practice for maintaining consistent scoping and adhering to best practices.** However, some developers prefer to avoid for...in loops altogether for arrays and use other constructs like *for loops* or *forEach* methods. 

### 1.1.3. For Each loop.

The **more functional** version of for loops are the For Each loop.

```JS
players.forEach(function(element) {
  console.log(element);
});
```


It gives us the ability to place this inside of an object or placing this inside of another function we want to be able to iterate through.

As you get into working with a framework such as angular or react you're going to see this type of design pattern quite a bit.

## How to Loop Through a collection that is an Object

```Js
var student = {
  name: 'Kristine',
  age: 12,
  city: 'Scottsdale'
};

// Other way is: 
//student.name;  --> "kristine"

for (var key in student) {
  console.log(key + " => " + student[key]);
}

// output:
// name => Kristine
// age => 12
// city => Scottsdale
```

## While and Do/While Loops in JavaScript
Not so popular as *for loops*.


```JS
var players = [
  'Altuve',
  'Bregman',
  'Correa',
  'Springer'
];

// while loop:  ( if condition is initially false, the loop won't execute at all)
// initializes the loop control variable outside the loop.
var i = 0;
while (i < players.length  //condition) {
   // Code to execute
  // Loop control variable update
  console.log(players[i]);
  i++;
}


// do while loop:  (Always Executes at Least Once )
// Code to execute
  // Loop control variable initialization/update 
var i = 21;
do {
  console.log(players[i]);
  i++;
} while (i < players.length)

```

Pros and cons of **while** and **do-while** loops in JavaScript:

1. **While Loops**:
   - **Pros**:
     - **Flexible Condition**: While loops allow you to execute a block of code repeatedly as long as a specified condition remains true. This flexibility is useful **when you don't know the exact number of iterations in advance**.
     - **Pre-Tested Condition**: The condition is checked **before each iteration**, so **if the condition is initially false, the loop won't execute at all.**
     - **Common Usage**: While loops are commonly used for scenarios where you need to repeat an action until a certain condition is met (e.g., reading data from a stream, waiting for user input).
   - **Cons**:
     - **Potential Infinite Loop**: If the condition never becomes false, you risk creating an infinite loop that can crash your program or freeze the browser.
     - **Initialization Outside the Loop**: You need to initialize the loop control **variable outside the loop**, which can lead to code duplication.

2. **Do-While Loops**:
   - **Pros**:
     - **Always Executes at Least Once**: Unlike while loops, do-while loops guarantee that the block of code executes at least once, **even if the condition is initially false.**
     - **Post-Tested Condition**: The condition is checked after each iteration, so the loop executes first and then evaluates the condition.
     - **Useful for Menu Systems**: Do-while loops are commonly used for menu systems where you want to display a menu and prompt the user for input. ALso for games.
   - **Cons**:
     - **Less Commonly Used**: Do-while loops are less common than while loops because many scenarios don't require the "always execute once" behavior.
     - **Initialization Inside the Loop**: The loop control variable is initialized within the loop, which can be confusing for some developers.

In summary, choose between while and do-while loops based on your specific use case. While loops are more flexible but require careful condition management to avoid infinite loops. Do-while loops are useful when you need to ensure at least one execution and are commonly used for menu-driven applications.

You can find some more information  about Loops in JavaScript here, at [DevCamp website.](https://devcamp.com/trails/introduction-javascript-programming/campsites/javascript-while-for-loops/guides/guide-for-loops-javascript)


<br>

[ <span style="color: #f2f2f2; font-size: 30px;">![alt](/images/Top-Icon1.webp)](#top)</span>

<sub>[<<Back to README](README.md)</sub>