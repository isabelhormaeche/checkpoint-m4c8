<sub>[<<Back to README](README.md)</sub>

# 6. What is object-oriented programming?

- [6. What is object-oriented programming?](#6-what-is-object-oriented-programming)
- [Introduction to Object Oriented Programming in JavaScript](#introduction-to-object-oriented-programming-in-javascript)
- [OOP Instance Methods in JavaScript](#oop-instance-methods-in-javascript)
- [OOP Static Methods in JavaScript](#oop-static-methods-in-javascript)
- [What is the difference between static and instance methods?](#what-is-the-difference-between-static-and-instance-methods)
- [Summary](#summary)
- [References](#references)


# Introduction to Object Oriented Programming in JavaScript

The concept of Object Oriented Programming (OOP)in JavaScript was introduced in ECMAScript 2015 (ES6). Before JavaScript did not support the OOPs and it was a completely functional-based programming language everything was done with the help of functions. 

JavaScript is often described as a [prototype-based](https://www.freecodecamp.org/news/how-javascript-implements-oop/) language, and the concept of classes is different from what you might find in languages like Java or C#. However, starting with ES6, JS introduced the **class syntax** to provide a more familiar way of defining objects with shared behavior. 

```Note
NOTE:

JS doesn’t have traditional classes like some other languages, the class syntax provides a convenient way to define constructor functions and methods. Even though we use the word “class,” it’s important to understand that it’s not exactly the same as classes in class-based languages.
```


We can **implement the OOPs by creating classes and their object instances**. As we mentioned before, after the introduction of ES6, JavaScript become an OOP language as it supports all four basic pillars of OOPs which are: [inheritance, encapsulation, abstraction, and polymorphism.](https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/)

Let´s explain the concepts of object and class:

**Object**
<br>

![JS object visual image inpired by JavaScript objects explaine the visual way by 3dCodeWorld](/images/JS%20object%20visual%20image%20inpired%20by%20JavaScript%20objects%20explaine%20the%20visual%20way%20by%203dCodeWorld.jpg)
JS object  visual image - modified from original one by *JavaScript objects explaine the visual* way by [3dCodeWorld](https://www.youtube.com/@3dCodeWorld)

<br>


An Object is a unique entity that contains **properties and methods.**

For example “a car” is a real-life Object, which has some characteristics like color, type, model, and horsepower and performs certain actions like driving. The characteristics of an Object are called Properties in OOP and the actions are called methods. 

**An Object is an instance of a class**. 

Objects are everywhere in JavaScript, almost every element is an Object whether it is a function, array, or string. 

Note: A **Method** in javascript **is a property of an object** whose value is a function. 


The most popular model of OOP is class-based.

<br>

**Class**

Classes are **blueprints** of an Object. A class can have many Objects because the class is a template while Objects are instances of the class or the concrete implementation. 

For example,  a floor plan (with detailed building instructions) is a blueprint for building a house.

A class is simply a **list of definitions** that say exactly **how** the class should **behave**. It will list out **attributes** so it can describe what the class is **supposed to do** and the **behavior** it's going to have.

**Example:**

Let's imagine a **User class**, every time that a new user comes to the site and registers, the program is going to look at your *User class* and it's going to see the **blueprint**, to see **how that user should behave** and then we're taking that blueprint and we're **creating a real-world object** with it.

**The program is going to look at the blueprint and then it's going to  create and instantiate an object** with it. It's no longer a blueprint. It is now something that your system can use.



We create a class and then we're going to,  what's called, instantiate that class.

For example we're going to build an instructor class.

So imagine a situation where you are building an application similar to i.e.: an online learning management system and you need to have the ability to have instructors in there. We can use an instructor class.

**Classes** are made up of all kinds of different things and it's a reason object-oriented programming gives a really nice interface for building programs because they can **contain attributes**, they **can contain multiple types of functions**, and then you **can call them** in a very similar way that you would call objects or call functions.

Since in **JS everything is an object** you can call those types of items in a very similar manner. 

The object can be created in two ways in JavaScript: Object Literal or Object Constructor.

**Example: Using an Object Literal:**
<br>

```JS
// Defining object
let person = {
    first_name: 'Rafael',
    last_name: 'Nadal',
 
    //method
    getFunction: function () {
        return (`The name of the person is 
          ${person.first_name} ${person.last_name}`)
    },
    //object within object
    phone_number: {
        mobile: '12345',
        landline: '6789'
    }
}
console.log(person.getFunction());
console.log(person.phone_number.landline);

//Output:
// the name of the person is Rafael Nadal
6789
```
**Example: Using an Object Constructor:**
<br>

```JS
// Using a constructor
function person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}
// Creating new instances of person object
let person1 = new person('Rafael', 'Nadal');
let person2 = new person('Roger', 'Federer');
 
console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);

// Output:
// Rafael
// Roger Federer
```
<br>


The role of a **constructor function** is to run all the processes you want. **Every time that a new instructor is created. Everything inside of this constructor function is going to get run.**

We **pass in a name as an object**, so anytime that we want **to create a new instructor** we simply are going to pass in all the attributes in as an object.

Constructor is a reserved keyword inside of classes.

It's pretty rare that you will create a class and not want to immediately do something with it (whether it's setting values, calling certain other builder functions inside of it, etc)


What the **`constructor function`** does is it **performs all of those basic tasks that you want to be done,** **for every time a new class is instantiated.** 


Now let´s come back to our instructor example. If you build a new instructor. Then  every time you do that, everything inside of the constructor function is going to get run.

In this case for our basic example, what we want just pass in a name.

<br>


```JS
class Instructor {
  constructor({ name }) {
    this.name = name; //assigns the value of the `name` property to the `name` instance variable.
  }
}
```
<br>

When we say **(this.name)** what that is referencing is, **the instance of instructor.**

So when we create an instructor, we **create a new instance** and then, for this specific instance, we want to **store whatever name** got passed in, with this object.


`We're adding an attribute into this.name item.`

![class instructor](/images/class%20instructor%20codepen%20screenshot.png)


Now with all that in place let's create a new instructor. Remember that in object-oriented programming, **a class by itself is nothing more than a blueprint.** It **simply gives us a set of rules and guidelines for building objects**. So now we need to iniciate the process called **instantiation**.

Remember we're passing an object so whatever you have in your constructor function in your list of arguments (name) whenever you instantiate a new version of instructor then you need to pass in that object(name).

This *Jon* is considered an **instance of the instructor class.** So Jon is an **object**.

EXPLANATION


1. **Class Definition**:
   - The `class Instructor` is defined using the `class` keyword.
   - It has a single constructor method that takes an object with a `name` property as its parameter.
   - The constructor initializes an instance variable `this.name` with the value of the `name` property passed(as an argument) to it.

2. **Constructor**:
   - The constructor is a special method that gets **executed when an object of the class is created.**
   - In this case, it accepts an object with a `name` property.
   - The `this.name = name;` line assigns the value of the `name` property to the `name` instance variable.

3. **Usage**:
   - To create an new instance of the `Instructor` class, you would do something like this:  
    <br>
    
     ```javascript
     const myInstructor = new Instructor({ name: 'John Doe' });
     console.log(myInstructor.name); // Outputs: 'John Doe'
     ```
    So you can **access the value** of the `name` instance variable using `myInstructor.name`.

In summary, this class allows you to create `Instructor` objects with a specified `name`. 

In other words, the `name` instance variable holds the name of a specific instructor object created from the `Instructor` class.


**Code exercise example**

Create a class, named Account, that has properties for a username and password. Then instantiate a new object called user and set the username and password to whatever strings you like.

<br>


```js
class Account {
    constructor({username}, {password}){
        this.username = username;
        this.password = password;
    }
}

const user = new Account({username:"Isabel"}, {password:"mypin"});
console.log(user); // object
console.log(user.username); //"Isabel"
console.log(user.password); //"mypin"

// Output:

// [object Object] 
// {
//   "username": "Isabel",
//   "password": "mypin"
// }
```

<br>


#  OOP Instance Methods in JavaScript

<br>

![JS object properties visual image](/images/JS%20object%20properties%20visual%20image.png)
Example - Instance method - *.doSomething( )* - visual image by *"JavaScript objects explaine the visual way"* by [3dCodeWorld.](https://www.youtube.com/@3dCodeWorld)

Instance methods are a way of adding behavior. They are just traditional functions.

Instance method is **a function inside of a class**. And **whenever you create a new instance of that class you can then call the instance methods on it**.

We're going to **add a role** to our previous *instructor* example, and **set a default value** of *assistant* so whenever we create a new instructor they're automatically going to have a role of assistant.

But we have the ability to override that ( look at this section that shows you how to [add default values](04_variable_deconstruction.md) ).


```JS
class Instructor {
  constructor({name, role = "assistant"}) {
    this.name = name;
    this.role = role;
  }

  renderDetails(){
    console.log(`${this.name}:${this.role}`);
  }
}   
 const jon = new Instructor({name: "Jon Snow"});
 const brayden = new Instructor({name: "Brayden", role:"teacher"});
jon.renderDetails(); // call the instance method
brayden.renderDetails(); // call the instance method

```
<br>


In review, an **instance method** is a method that **can be called on a specific instance** just like we were able to call *renderDetails()* on the *Jon* instance and the *Brayden* instance in this example.


**Coding Exercise Example**

You're in the market for a new car but want it to be electric. Create an instance of the Car class called model3. The year must be a number (so don't wrap it in quotation marks). Set the brand to "Tesla" and change the poweredBy to "electricity".

```Js
class Car {
	constructor({ year, brand, poweredBy = 'gas' }) {
		this.year = year;
		this.brand = brand;
		this.poweredBy = poweredBy;
	}

	carSpecs() {
		return(`The ${this.year} ${this.brand} runs on ${this.poweredBy}`)
	}
}

//Write your code here
const model3 = new Car({year:2020, brand: "Tesla", poweredBy : "electricity"});
console.log(model3.carSpecs()); // "The 2020 Tesla runs on electricity"

```
<br>


# OOP Static Methods in JavaScript

Static methods are used for the functionality that **belongs to the class “as a whole”**. It doesn’t relate to a concrete class instance.

They are labeled by the word **static** in class declaration.

Static properties are used when we’d like to store class-level data, also not bound to an instance.

**Syntax:**

```javascript
class MyClass {
  constructor(arg1, arg2, ...) {
    // Initialize instance properties
  }

// Instance method
  myInstanceMethod(arg1, arg2, ...) {
    // Implementation here
  }

// Static method
  static myStaticMethod(arg1, arg2, ...) {
    // Implementation here
  }
}
```
**Example**

Now we add to the our earlier *instructor* example two static methods: *static helloWorld()* and *static canTeach()*:

<br>


```JS
class Instructor {
  constructor({ name, role = "assistant" }) {
    this.role = role;
    this.name = name;
  }

  // Instance method
  renderDetails() {
    console.log(`${this.name} - ${this.role}`);
  }

  // Base case static method
  static helloWorld() {
    console.log('Hi there');
  }

  // Static method
  static canTeach(instructor) {
    return (instructor.role === 'classroom');
  }
}

let juniorInstructor = new Instructor({ 'name' : 'Brian' });
let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });

juniorInstructor.renderDetails(); // "Brian - assistant"
seniorInstructor.renderDetails(); // "Alice - classroom"

Instructor.helloWorld(); // "Hi there"


console.log(
  `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
);  // "Brian can teach: false"


console.log(
  `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
);   // "Alice can teach: true"
```
<br>

**Code explanation:**

We've **created an instructor** we've leveraged the **constructor method** which initializes all of these data values such as *name* and *role*. 

Then down below, we created the **method canTeach()** which allows us to **simply pass in an instructor** and we can call that directly. 

So notice at the bottom how we called `alice.name` and `jon.name`? What that allows us to do is **simply call the attributes** and work with setters and getters to pull out the data.


With the canTeach() method, we're not actually communicating at all with the instance of the Jon class or the Alice class. What we're doing is we're **calling our helper method of canTeach** and then we're just **passing in the object**. So this object was already created. We're not calling on the object itself. We're just passing this **into our helper method of canTeach**.

<br>

**Coding Exercise Example**

Now you're in the market for a new home and need to compare some things first. Instantiate an object called choice1 and set the type to "house". It must return true. Instantiate another object called choice2 and the type must be set to "apartment" and that must return false.

```JS
class Home {
	constructor({ type, payment = "renting" }) {
		this.type = type;
		this.payment = payment;
	}

// Instance method
  renderDetails() {
    console.log(`${this.type} - ${this.payment}`);
  }

// Static method
	static homeImprovement(yourHome) {
		return (yourHome.payment === 'mortgage')
	}
}

// Create an instance of Home
let choice1 = new Home ({"type": "house", "payment":"mortgage"});

// Call the static method
console.log(
  `A ${choice1.type} can have improvements: ${Home.homeImprovement(choice1)}`   //"A house can have improvements: true"
);

let choice2 = new Home ({"type": "apartment"});
console.log(
  `A ${choice2.type} can have improvements: ${Home.homeImprovement(choice2)}` //"A apartment can have improvements: false"
);

// Call the instance method
choice1.renderDetails(); //"house - mortgage"
choice2.renderDetails();// "apartment - renting"

 
//   "house is: true"
// "apartment is: false"
  ```

```Note:
NOTE:
The term **yourHome** is just a **placeholder** name for the object representing a home. It doesn’t have any special significance beyond being a descriptive variable name. You could use any other valid variable name in its place. In this case, it’s used to emphasize that the method operates on a home object passed as an argument.
```

<br>


# What is the difference between static and instance methods?

**Static methods** are like global utility functions associated with the class.

**Instance methods** are specific to individual instances and work with their unique data.


Let´s see the **difference between instance methods and static methods** in JavaScript:

1. **Instance Methods**:
   - **Definition**: Instance methods are methods that require an object (instance) of a class to be created before they can be called.
   - **Usage**: You call instance methods on specific instances of the class (i.e., objects that you create).
   - **Purpose**: Instance methods operate on the specific instance and return a result based on the content of that particular object.
   - **Example in our Code example before**:
     - The `renderDetails()` method in our `Home` class is an instance method.
     - It logs the type and payment of the specific home instance (e.g., house or apartment) to the console.
     - When we create an instance of `Home` (like `choice1` or `choice2`), you can call this method on that instance.

2. **Static Methods**:
   - **Definition**: Static methods are associated with the **class** itself, not with any specific instance of the class.
   - **Usage**: You call static methods directly on the constructor function (class), rather than on individual instances.
   - **Purpose**: Static methods are used for functionality that belongs to the class "as a whole." They don't relate to a specific instance.
   - **Examples in our Code**:
     - The `homeImprovement(yourHome)` method is a static method in our `Home` class.
     - It checks whether the payment type of the provided `yourHome` object is `'mortgage'`.
     - Static methods **are often utility functions**, such as creating or transforming data related to the class itself.

In summary:

- **Instance methods** are called on specific instances and operate on the content of those instances.
- **Static methods** are called on the class itself and are used for broader functionality related to the class.

<br>

# Summary 

**Code Syntax Example**

<br>

```JS
class MyClass {
  constructor(arg1, arg2, ...) {
    // Initialize instance properties
  }

// Instance method
  myInstanceMethod(arg1, arg2, ...) {
    // Implementation here
  }

// Static method
  static myStaticMethod(arg1, arg2, ...) {
    // Implementation here
  }
}
```
<br>


1. **Class Declaration:**
   - The `class` keyword is used to declare a new class called `MyClass`.
   - Inside the class, you can define instance methods, static methods, and a constructor.

2. **Constructor:**
   - The `constructor` method is a special method that gets called when you create an instance of the class (using the `new` keyword).
   - It initializes instance properties based on the arguments passed to it.
   - In your example, `arg1` and `arg2` are placeholders for actual arguments you would provide when creating an instance of `MyClass`.

3. **Instance Methods:**
   - The `myInstanceMethod` is an instance method.
   - You can call it on instances of `MyClass`.
   - It operates on specific instance data (properties) and can be customized for each instance.

4. **Static Methods:**
   - The `myStaticMethod` is a static method.
   - Unlike instance methods, static methods are called on the class itself (not on instances).
   - They don't have access to instance-specific data and are often used for utility functions related to the class.

5. **Usage:**
   - To **create an instance** of `MyClass`, you'd do something like this:
     ```javascript
     const myInstance = new MyClass(arg1Value, arg2Value);
     ```
   - You can then **call instance methods** on `myInstance`:
     ```javascript
     myInstance.myInstanceMethod();
     ```
   - And **call static methods** directly on the class:
     ```javascript
     MyClass.myStaticMethod();
     ```

<br>



# References
* [DevCamp: Object Oriented Programming in JavaScript Section Introduction](https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/section-introduction-9aac9ed1-c496-4244-958e-312f2ef5b9a3)
  
* [Geeksforgeeks: Introduction to Object Oriented Programming in JavaScript](https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/)

* [Object Oriented Programming in JavaScript – Explained with Examples](https://www.freecodecamp.org/news/how-javascript-implements-oop/)
* [The JavaScript language: Static properties and methods](https://javascript.info/static-properties-methods)
  
* [What is the difference between static and instance methods?](https://www.30secondsofcode.org/js/s/static-instance-methods/)
  
* [3dCodeWorld: JavaScript for visual learners course](https://www.youtube.com/@3dCodeWorld)

<br>


[ <span style="color: #f2f2f2; font-size: 30px;">![alt](/images/Top-Icon1.webp)](#top)</span>
<br>

<sub>[<<Back to README](README.md)</sub>